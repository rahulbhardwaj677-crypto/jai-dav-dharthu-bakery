
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

// Override: Handle Send/Verify toggle
window.handleAuthAction = function () {
    const isOtpVisible = !document.getElementById('authOtpSection').classList.contains('hidden');
    if (isOtpVisible) {
        verifyOTP();
    } else {
        sendOTP();
    }
};

// Override: Send OTP Logic
window.sendOTP = function () {
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    if (phoneNumber.length !== 10) {
        showToast('Please enter a valid 10-digit number 📱');
        return;
    }
    const fullPhoneNumber = '+91' + phoneNumber;

    // UI Loading
    const btn = document.getElementById('authActionBtn'); // Updated ID
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

// Override: Verify OTP Logic
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
        window.location.reload(); // Simple error recovery
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

// Override: Check OTP Completion
window.checkOtpComplete = function () {
    const inputs = document.querySelectorAll('.otp-digit');
    const allFilled = [...inputs].every(i => i.value.length === 1);
    const btn = document.getElementById('authActionBtn'); // Updated ID
    if (btn) btn.disabled = !allFilled;
};


// Override: Select Payment Method (Fixing Button ID Issue)
window.selectPaymentMethod = function (method) {
    try {
        if (typeof selectedPaymentMethod !== 'undefined') {
            selectedPaymentMethod = method;
        } else {
            window.selectedPaymentMethod = method;
        }
    } catch (e) {
        window.selectedPaymentMethod = method;
    }

    document.querySelectorAll('.payment-method-card').forEach(card => {
        if (card.dataset.method === method) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    // Enable the correct button for Step 2
    const btn = document.getElementById('proceedToVerify');
    if (btn) btn.disabled = false;
};
