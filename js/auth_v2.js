
// ===== 🔐 AUTH FLOW OVERRIDES =====
// This file overrides broken functions in app.js to match the new index.html structure
// Load order: app.js → auth_v2.js (this file overrides app.js functions)

let authConfirmationResult = null;
let authRecaptchaVerifier = null;

function setupAuthRecaptcha() {
    if (!authRecaptchaVerifier) {
        authRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => { }
        });
    }
}

// ===== FIX: Override resetPinInputs (old one references missing IDs) =====
window.resetPinInputs = function () {
    document.querySelectorAll('.pin-digit').forEach(pin => {
        pin.value = '';
        pin.classList.remove('filled');
    });
    // Old code tried: confirmPayBtn, paySpinner, .pay-btn-text — these no longer exist
    // Safe no-ops for elements that may or may not exist:
    const confirmBtn = document.getElementById('confirmPayBtn');
    if (confirmBtn) confirmBtn.disabled = true;
    const spinner = document.getElementById('paySpinner');
    if (spinner) spinner.classList.add('hidden');
};

// ===== FIX: Override openPaymentGateway (crash-proof) =====
window.openPaymentGateway = function () {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add items first 🛒');
        return;
    }

    // Build order summary
    const itemsList = document.getElementById('orderItemsList');
    if (itemsList) {
        itemsList.innerHTML = cart.map(item => `
            <div class="order-item-row">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-qty">Qty: ${item.qty}</div>
                </div>
                <div class="item-price">₹${item.price * item.qty}</div>
            </div>
        `).join('');
    }

    const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    const gst = Math.round(subtotal * 0.05);
    paymentTotal = subtotal + gst;

    const subEl = document.getElementById('summarySubtotal');
    const gstEl = document.getElementById('summaryGst');
    const totEl = document.getElementById('summaryTotal');
    if (subEl) subEl.textContent = `₹${subtotal}`;
    if (gstEl) gstEl.textContent = `₹${gst}`;
    if (totEl) totEl.textContent = `₹${paymentTotal}`;

    // Reset state (safely)
    selectedPaymentMethod = null;
    document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));

    // Disable proceed buttons (safely)
    const proceedToVerify = document.getElementById('proceedToVerify');
    if (proceedToVerify) proceedToVerify.disabled = true;
    const proceedToPin = document.getElementById('proceedToPin');
    if (proceedToPin) proceedToPin.disabled = true;

    // Reset pin/OTP inputs safely
    resetPinInputs();

    // Reset auth step to phone input mode
    const phoneSection = document.getElementById('authPhoneSection');
    const otpSection = document.getElementById('authOtpSection');
    if (phoneSection) phoneSection.classList.remove('hidden');
    if (otpSection) otpSection.classList.add('hidden');
    const authBtn = document.getElementById('authActionBtn');
    if (authBtn) {
        const btnText = authBtn.querySelector('.pay-btn-text');
        if (btnText) btnText.textContent = 'Get OTP';
        authBtn.disabled = false;
    }

    // Show step 1
    goToPayStep(1);

    // Open modal
    document.getElementById('paymentOverlay').classList.add('open');
    document.getElementById('paymentModal').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Close cart sidebar
    if (typeof closeCart === 'function') closeCart();
};

// ===== FIX: Override goToPayStep (handles all 5 steps correctly) =====
window.goToPayStep = function (step) {
    // Hide all steps
    document.querySelectorAll('.payment-step').forEach(s => s.classList.add('hidden'));

    // Show target step
    const target = document.getElementById(`payStep${step}`);
    if (target) target.classList.remove('hidden');

    // Step 4: Real Payment (UPI QR / Deep Link)
    if (step === 4) {
        const methodNames = { gpay: 'Google Pay', paytm: 'Paytm', phonepe: 'PhonePe', bhim: 'BHIM UPI' };
        const methodEmojis = { gpay: '💙', paytm: '💎', phonepe: '💜', bhim: '💚' };
        const method = selectedPaymentMethod || 'gpay';

        const disp = document.getElementById('selectedMethodDisplay');
        if (disp) {
            disp.innerHTML = `
                <span>${methodEmojis[method] || '💳'}</span>
                Paying via ${methodNames[method] || 'UPI'}
            `;
        }
        const pinAmt = document.getElementById('pinAmount');
        if (pinAmt) pinAmt.textContent = `₹${paymentTotal}`;

        // Full inline setupRealPayment (original is trapped in DOMContentLoaded closure)
        const upiId = '8988221818@upi';
        const upiName = 'Jai Dav Dharthu Bakery';
        const amount = paymentTotal;
        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${amount}&cu=INR`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
        const qrImg = document.getElementById('paymentQrCode');
        if (qrImg) qrImg.src = qrUrl;

        // Mobile vs Desktop
        const isMobile = window.innerWidth <= 768;
        const qrSection = document.getElementById('paymentQrSection');
        const appSection = document.getElementById('paymentAppSection');
        const payBtn = document.getElementById('payNowBtn');

        if (isMobile) {
            if (qrSection) qrSection.classList.add('hidden');
            if (appSection) appSection.classList.remove('hidden');
            if (payBtn) {
                payBtn.classList.remove('hidden');
                payBtn.disabled = false;
                payBtn.onclick = function () {
                    window.location.href = upiLink;
                    setTimeout(() => {
                        showToast('Complete payment in app, then confirm here.');
                    }, 2000);
                };
            }
        } else {
            if (qrSection) qrSection.classList.remove('hidden');
            if (appSection) appSection.classList.add('hidden');
            if (payBtn) payBtn.classList.add('hidden');
        }
    }
};

// ===== Override: Handle Send/Verify toggle =====
window.handleAuthAction = function () {
    const otpSection = document.getElementById('authOtpSection');
    const isOtpVisible = otpSection && !otpSection.classList.contains('hidden');
    if (isOtpVisible) {
        verifyOTP();
    } else {
        sendOTP();
    }
};

// ===== Override: Send OTP Logic =====
window.sendOTP = function () {
    const phoneInput = document.getElementById('phoneNumberInput');
    if (!phoneInput) return;
    const phoneNumber = phoneInput.value;
    if (phoneNumber.length !== 10) {
        showToast('Please enter a valid 10-digit number 📱');
        return;
    }
    const fullPhoneNumber = '+91' + phoneNumber;

    const btn = document.getElementById('authActionBtn');
    const spinner = document.getElementById('authSpinner');
    if (btn) btn.disabled = true;
    if (spinner) spinner.classList.remove('hidden');

    setupAuthRecaptcha();
    const appVerifier = authRecaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier)
        .then((result) => {
            authConfirmationResult = result;
            if (spinner) spinner.classList.add('hidden');
            if (btn) btn.disabled = false;

            // Switch UI to OTP Mode
            const phoneSection = document.getElementById('authPhoneSection');
            const otpSection = document.getElementById('authOtpSection');
            if (phoneSection) phoneSection.classList.add('hidden');
            if (otpSection) otpSection.classList.remove('hidden');
            const displayEl = document.getElementById('sentPhoneDisplay');
            if (displayEl) displayEl.textContent = fullPhoneNumber;

            // Update Button text
            const btnText = btn.querySelector('.pay-btn-text');
            if (btnText) btnText.textContent = 'Verify & Proceed';
            btn.disabled = true; // Until OTP filled

            showToast('OTP sent successfully! 📩');
            setTimeout(() => {
                const firstDigit = document.querySelector('.otp-digit');
                if (firstDigit) firstDigit.focus();
            }, 500);

        }).catch((error) => {
            if (spinner) spinner.classList.add('hidden');
            if (btn) btn.disabled = false;
            console.error('SMS Error:', error);
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

// ===== Override: Verify OTP Logic =====
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
        goToPayStep(4);
    }).catch((error) => {
        if (spinner) spinner.classList.add('hidden');
        if (btn) btn.disabled = false;
        showToast('Invalid OTP. Please try again ❌');
        console.error(error);
    });
};

// ===== Override: Check OTP Completion =====
window.checkOtpComplete = function () {
    const inputs = document.querySelectorAll('.otp-digit');
    const allFilled = [...inputs].every(i => i.value.length === 1);
    const btn = document.getElementById('authActionBtn');
    if (btn) btn.disabled = !allFilled;
};

// ===== Override: Select Payment Method =====
window.selectPaymentMethod = function (method) {
    try {
        selectedPaymentMethod = method;
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


// ===== 🛒 CART PERSISTENCE =====

function saveCartToStorage() {
    if (typeof cart !== 'undefined') {
        localStorage.setItem('bakery-cart', JSON.stringify(cart));
    }
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('bakery-cart');
    if (saved && typeof cart !== 'undefined') {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                cart.length = 0;
                parsed.forEach(p => cart.push(p));
                if (typeof updateCartUI === 'function') updateCartUI();
            }
        } catch (e) { console.error('Cart load error', e); }
    }
}

// Hook into addToCart
if (typeof addToCart === 'function') {
    const originalAddToCart = addToCart;
    window.addToCart = function (id) {
        originalAddToCart(id);
        saveCartToStorage();
    };
}

// Hook into updateQty
if (typeof updateQty === 'function') {
    const originalUpdateQty = updateQty;
    window.updateQty = function (id, change) {
        originalUpdateQty(id, change);
        saveCartToStorage();
    };
}

// Load cart on startup
loadCartFromStorage();
