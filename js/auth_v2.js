
// ===== 🔐 AUTH FLOW OVERRIDES (Single Step UI) =====
// This file overrides the auth logic in app.js relative to the new index.html structure

let authConfirmationResult = null;
let authRecaptchaVerifier = null;

function setupAuthRecaptcha() {
    if (!authRecaptchaVerifier) {
        authRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved - will auto-proceed
            }
        });
    }
}

window.handleAuthAction = function () {
    const isOtpVisible = !document.getElementById('authOtpSection').classList.contains('hidden');
    if (isOtpVisible) {
        verifyOTP();
    } else {
        sendOTP();
    }
};

window.sendOTP = function () {
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    if (phoneNumber.length !== 10) {
        showToast('Please enter a valid 10-digit number 📱');
        return;
    }
    const fullPhoneNumber = '+91' + phoneNumber;

    // UI Loading
    const btn = document.getElementById('authActionBtn');
    const spinner = document.getElementById('authSpinner');
    if (btn) btn.disabled = true;
    if (spinner) spinner.classList.remove('hidden');

    setupAuthRecaptcha(); // Use local setup
    const appVerifier = authRecaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier)
        .then((result) => {
            authConfirmationResult = result; // Store locally
            if (spinner) spinner.classList.add('hidden');
            if (btn) btn.disabled = false;

            // Switch UI to OTP Mode
            document.getElementById('authPhoneSection').classList.add('hidden');
            document.getElementById('authOtpSection').classList.remove('hidden');
            document.getElementById('sentPhoneDisplay').textContent = fullPhoneNumber;

            // Update Button
            const btnText = btn.querySelector('.pay-btn-text');
            if (btnText) btnText.textContent = "Verify & Proceed";
            btn.disabled = true; // Disable until OTP filled

            showToast('OTP sent successfully! 📩');
            setTimeout(() => {
                const firstDigit = document.querySelector('.otp-digit');
                if (firstDigit) firstDigit.focus();
            }, 500);

        }).catch((error) => {
            if (spinner) spinner.classList.add('hidden');
            if (btn) btn.disabled = false;
            console.error("SMS Error:", error);
            if (error.code === 'auth/operation-not-allowed') {
                showToast('⚠️ Phone Auth not enabled in Firebase Console!');
            } else {
                showToast('Error sending OTP. Try again.');
            }
            if (authRecaptchaVerifier) {
                authRecaptchaVerifier.clear();
                authRecaptchaVerifier = null;
            }
        });
};

window.verifyOTP = function () {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let otp = '';
    otpInputs.forEach(input => otp += input.value);

    if (otp.length !== 6) {
        showToast('Please enter 6-digit OTP');
        return;
    }

    const btn = document.getElementById('authActionBtn');
    const spinner = document.getElementById('authSpinner');
    if (btn) btn.disabled = true;
    if (spinner) spinner.classList.remove('hidden');

    if (!authConfirmationResult) {
        showToast('Session expired. Please retry.');
        window.location.reload();
        return;
    }

    authConfirmationResult.confirm(otp).then((result) => {
        if (spinner) spinner.classList.add('hidden');
        showToast('Phone verified! ✅');
        goToPayStep(4); // Go to Payment QR (Step 4)
    }).catch((error) => {
        if (spinner) spinner.classList.add('hidden');
        if (btn) btn.disabled = false;
        showToast('Invalid OTP. Please try again ❌');
        console.error(error);
    });
};

window.checkOtpComplete = function () {
    const inputs = document.querySelectorAll('.otp-digit');
    const allFilled = [...inputs].every(i => i.value.length === 1);
    const btn = document.getElementById('authActionBtn'); // New Button ID
    if (btn) btn.disabled = !allFilled;
};

// Re-init inputs listener because IDs are same class 'otp-digit' so app.js initOtpInputs works,
// BUT we need to update the `checkOtpComplete` call inside them to use OUR new function.
// Since `checkOtpComplete` is global and we overwrote it on window, `initOtpInputs` in app.js calls `checkOtpComplete()`
// which should resolve to `window.checkOtpComplete` if called from global scope or if not shadowed.
// app.js defines `function checkOtpComplete()`.
// This creates a local or global function.
// If it's global, `window.checkOtpComplete = ...` overwrites it.
// If it's local inside a block... wait.
// `app.js` defined `function checkOtpComplete() { ... }` at top level (lines 1000+).
// So it IS global.
// So `window.checkOtpComplete = ...` should work nicely.
