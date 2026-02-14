/* ============================================
   JAI DAV DHARTHU BAKERY — Application Logic
   Real Images, Smart Cart, Cake Builder, Menu
   ============================================ */

// ===== REAL IMAGE URLS (Unsplash high-quality food photography) =====
const IMAGES = {
    // ---- CAKES ----
    butterscotch_cake: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop',
    vanilla_cake: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop',
    chocolate_cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
    blueberry_cake: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop',
    strawberry_cake: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
    red_velvet_cake: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&h=400&fit=crop',
    pineapple_cake: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
    black_forest_cake: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop',

    // ---- BREADS ----
    sourdough: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600&h=400&fit=crop',
    multigrain: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    focaccia: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&h=400&fit=crop',
    baguette: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=600&h=400&fit=crop',
    ciabatta: 'https://images.unsplash.com/photo-1586444248902-2367d1a55bfa?w=600&h=400&fit=crop',

    // ---- PASTRIES ----
    croissant: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop',
    pain_chocolat: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop',
    danish: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop',
    eclair: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&h=400&fit=crop',
    puff_pastry: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=400&fit=crop',

    // ---- CUPCAKES ----
    vanilla_cupcake: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop',
    salted_caramel_cupcake: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&h=400&fit=crop',
    blueberry_cupcake: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop',
    choco_cupcake: 'https://images.unsplash.com/photo-1599785209796-786432b228bc?w=600&h=400&fit=crop',
    red_velvet_cupcake: 'https://images.unsplash.com/photo-1612809075925-230041838c56?w=600&h=400&fit=crop',

    // ---- COOKIES ----
    choco_cookie: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop',
    biscotti: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop',
    oatmeal_cookie: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop',
    macaron: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=400&fit=crop',
    shortbread: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&h=400&fit=crop',

    // ---- HEALTHY / GLUTEN FREE ----
    almond_muffin: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&h=400&fit=crop',
    quinoa_bread: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&h=400&fit=crop',
    coconut_macaroon: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=400&fit=crop',
    banana_bread: 'https://images.unsplash.com/photo-1605090930601-03d2e4e10048?w=600&h=400&fit=crop',

    // ---- SPECIALS ----
    raspberry_tart: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',

    // ---- HERO / ABOUT ----
    hero_bread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    about_sourdough: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600&h=400&fit=crop',
    about_cakes: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
    about_croissants: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop',
    about_cookies: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop',
};

// ===== MENU DATA (with sensory descriptions + real images) =====
const MENU_ITEMS = [
    // ===== ARTISAN BREADS =====
    {
        id: 'bread-1', name: 'Classic Sourdough', image: IMAGES.sourdough, emoji: '🍞', category: 'bread',
        price: 180, badge: 'popular',
        desc: 'A 24-hour fermented crust that crackles at the touch, revealing a tangy, open-crumb interior that breathes with warmth.',
        allergens: []
    },
    {
        id: 'bread-2', name: 'Multigrain Loaf', image: IMAGES.multigrain, emoji: '🌾', category: 'bread',
        price: 160, badge: null,
        desc: 'Seven ancient grains woven into a hearty, nutty loaf — each slice reveals sunflower seeds and oat flakes in soft wheat crumb.',
        allergens: ['Wheat', 'Seeds']
    },
    {
        id: 'bread-3', name: 'Garlic Focaccia', image: IMAGES.focaccia, emoji: '🧄', category: 'bread',
        price: 200, badge: 'new',
        desc: 'Pillowy Italian flatbread dimpled with pools of olive oil, studded with roasted garlic cloves and flaky sea salt crystals.',
        allergens: ['Wheat']
    },
    {
        id: 'bread-4', name: 'French Baguette', image: IMAGES.baguette, emoji: '🥖', category: 'bread',
        price: 120, badge: null,
        desc: 'Shatteringly crisp golden crust conceals a cloud-like interior with irregular honeycomb holes — true artisan craft.',
        allergens: ['Wheat']
    },
    {
        id: 'bread-5', name: 'Rustic Ciabatta', image: IMAGES.ciabatta, emoji: '🍞', category: 'bread',
        price: 140, badge: null,
        desc: 'Crisp, flour-dusted shell gives way to an airy, open crumb with pockets that capture olive oil and balsamic.',
        allergens: ['Wheat']
    },

    // ===== CAKES (Expanded with all flavors!) =====
    {
        id: 'cake-1', name: 'Butterscotch Cake', image: IMAGES.butterscotch_cake, emoji: '🍰', category: 'cake',
        price: 650, badge: 'popular',
        desc: 'Rich caramel sponge layered with silky butterscotch praline cream, crowned with golden caramel shards that snap at the bite.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-2', name: 'Vanilla Dream Cake', image: IMAGES.vanilla_cake, emoji: '🍦', category: 'cake',
        price: 550, badge: null,
        desc: 'Cloud-soft Madagascar vanilla sponge, frosted in velvety Swiss buttercream with delicate vanilla bean specks throughout.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-3', name: 'Chocolate Truffle Cake', image: IMAGES.chocolate_cake, emoji: '🍫', category: 'cake',
        price: 700, badge: 'popular',
        desc: 'Three layers of dark Belgian chocolate sponge sandwiched with molten ganache, enrobed in a mirror-smooth chocolate glaze.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-4', name: 'Blueberry Cheesecake', image: IMAGES.blueberry_cake, emoji: '🫐', category: 'cake',
        price: 750, badge: 'new',
        desc: 'Creamy New York-style cheesecake swirled with wild blueberry compote on a buttery graham cracker crust that shatters.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-5', name: 'Strawberry Cake', image: IMAGES.strawberry_cake, emoji: '🍓', category: 'cake',
        price: 680, badge: 'popular',
        desc: 'Rose-tinted strawberry sponge layered with fresh strawberry cream, crowned with glazed berries that glisten like jewels.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-6', name: 'Red Velvet Cake', image: IMAGES.red_velvet_cake, emoji: '❤️', category: 'cake',
        price: 720, badge: null,
        desc: 'Crimson cocoa sponge of impossible softness, frosted in tangy cream cheese that melts into each velvety bite.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-7', name: 'Pineapple Cake', image: IMAGES.pineapple_cake, emoji: '🍍', category: 'cake',
        price: 600, badge: null,
        desc: 'Tropical sunshine captured in sponge — moist vanilla layers kissed with pineapple crush and whipped cream swirls.',
        allergens: ['Dairy']
    },
    {
        id: 'cake-8', name: 'Black Forest Cake', image: IMAGES.black_forest_cake, emoji: '🎂', category: 'cake',
        price: 780, badge: 'popular',
        desc: 'Dark Belgian chocolate layers soaked in Kirsch syrup, pillowed with cherry compote and ivory whipped cream rosettes.',
        allergens: ['Dairy']
    },

    // ===== PASTRIES =====
    {
        id: 'pastry-1', name: 'Butter Croissant', image: IMAGES.croissant, emoji: '🥐', category: 'pastry',
        price: 120, badge: 'popular',
        desc: 'Layers upon layers of shatteringly crisp, golden pastry yielding to a pillowy, butter-soaked interior that exhales warmth.',
        allergens: ['Wheat', 'Dairy']
    },
    {
        id: 'pastry-2', name: 'Pain au Chocolat', image: IMAGES.pain_chocolat, emoji: '🍫', category: 'pastry',
        price: 140, badge: null,
        desc: 'Twin rivers of dark Valrhona chocolate encased in 81 delicate laminated layers — each fold capturing buttery steam.',
        allergens: ['Wheat', 'Dairy']
    },
    {
        id: 'pastry-3', name: 'Raspberry Danish', image: IMAGES.danish, emoji: '🍓', category: 'pastry',
        price: 150, badge: 'new',
        desc: 'Flaky, caramelized pastry cradling a swirl of vanilla custard topped with jewel-bright raspberries and a honey glaze.',
        allergens: ['Wheat', 'Dairy']
    },
    {
        id: 'pastry-4', name: 'Éclair au Café', image: IMAGES.eclair, emoji: '☕', category: 'pastry',
        price: 160, badge: null,
        desc: 'Crisp choux shell split by espresso-infused pastry cream, capped with a mirror-smooth coffee ganache that gleams.',
        allergens: ['Wheat', 'Dairy']
    },
    {
        id: 'pastry-5', name: 'Apple Puff Pastry', image: IMAGES.puff_pastry, emoji: '🍎', category: 'pastry',
        price: 130, badge: null,
        desc: 'Caramelized cinnamon apple slices folded into crackling golden puff pastry — served warm with vanilla dust.',
        allergens: ['Wheat', 'Dairy']
    },

    // ===== CUPCAKES =====
    {
        id: 'cupcake-1', name: 'Vanilla Dream Cupcake', image: IMAGES.vanilla_cupcake, emoji: '🧁', category: 'cupcake',
        price: 90, badge: null,
        desc: 'Fluffy Madagascar vanilla sponge crowned with a towering swirl of Swiss meringue buttercream and edible gold dust.',
        allergens: ['Dairy']
    },
    {
        id: 'cupcake-2', name: 'Salted Caramel Cupcake', image: IMAGES.salted_caramel_cupcake, emoji: '🧁', category: 'cupcake',
        price: 110, badge: 'popular',
        desc: 'Molten caramel core erupts through brown butter sponge, topped with sea-salt flake studded caramel frosting.',
        allergens: ['Dairy']
    },
    {
        id: 'cupcake-3', name: 'Blueberry Cupcake', image: IMAGES.blueberry_cupcake, emoji: '🫐', category: 'cupcake',
        price: 100, badge: 'new',
        desc: 'Wild blueberry compote swirled through lemon-zest batter, frosted with lavender cream cheese and fresh berries.',
        allergens: ['Dairy']
    },
    {
        id: 'cupcake-4', name: 'Chocolate Fudge Cupcake', image: IMAGES.choco_cupcake, emoji: '🍫', category: 'cupcake',
        price: 110, badge: 'popular',
        desc: 'Dense, decadent cocoa sponge with a molten fudge centre, piled high with whipped dark chocolate ganache.',
        allergens: ['Dairy']
    },
    {
        id: 'cupcake-5', name: 'Red Velvet Cupcake', image: IMAGES.red_velvet_cupcake, emoji: '❤️', category: 'cupcake',
        price: 120, badge: null,
        desc: 'Crimson velvet sponge swirled with tangy cream cheese frosting, finished with edible rose petals.',
        allergens: ['Dairy']
    },

    // ===== COOKIES =====
    {
        id: 'cookie-1', name: 'Choco Chunk Cookie', image: IMAGES.choco_cookie, emoji: '🍪', category: 'cookie',
        price: 60, badge: 'popular',
        desc: 'Crisp bronzed edges give way to a gooey, molten center studded with dark chocolate chunks and Maldon sea salt.',
        allergens: ['Wheat', 'Dairy']
    },
    {
        id: 'cookie-2', name: 'Almond Biscotti', image: IMAGES.biscotti, emoji: '🥜', category: 'cookie',
        price: 70, badge: null,
        desc: 'Twice-baked Tuscan perfection — crunchy, golden, and fragrant with toasted almonds and orange zest.',
        allergens: ['Wheat', 'Nuts']
    },
    {
        id: 'cookie-3', name: 'Oatmeal Raisin Cookie', image: IMAGES.oatmeal_cookie, emoji: '🍪', category: 'cookie',
        price: 55, badge: null,
        desc: 'Chewy oats embrace plump raisins and warm cinnamon — comfort food that wraps around you like a blanket.',
        allergens: ['Wheat']
    },
    {
        id: 'cookie-4', name: 'French Macarons (6pcs)', image: IMAGES.macaron, emoji: '🍬', category: 'cookie',
        price: 350, badge: 'popular',
        desc: 'Crisp meringue shells yield to chewy almond centers. Assorted: Rose, Pistachio, Lavender, Chocolate, Vanilla, Raspberry.',
        allergens: ['Nuts']
    },
    {
        id: 'cookie-5', name: 'Butter Shortbread', image: IMAGES.shortbread, emoji: '🍪', category: 'cookie',
        price: 65, badge: null,
        desc: 'Crumbly, melt-in-mouth Scottish shortbread with a deep golden hue — pure butter, sugar, flour perfection.',
        allergens: ['Wheat', 'Dairy']
    },

    // ===== GLUTEN-FREE / HEALTHY =====
    {
        id: 'healthy-1', name: 'Almond Flour Muffin', image: IMAGES.almond_muffin, emoji: '🧁', category: 'healthy',
        price: 150, badge: 'gf',
        desc: 'Moist almond crumb studded with wild blueberries, crowned with a delicate honey-oat crisp. Zero gluten, zero compromise.',
        allergens: ['Nuts']
    },
    {
        id: 'healthy-2', name: 'Quinoa Bread', image: IMAGES.quinoa_bread, emoji: '🍞', category: 'healthy',
        price: 220, badge: 'gf',
        desc: 'Ancient grain bread with a nutty depth — sprouted quinoa and chia seeds create a protein-rich, naturally gluten-free loaf.',
        allergens: ['Seeds']
    },
    {
        id: 'healthy-3', name: 'Coconut Macaroon', image: IMAGES.coconut_macaroon, emoji: '🥥', category: 'healthy',
        price: 80, badge: 'gf',
        desc: 'Toasted coconut shells with chewy, golden interiors — dipped in dark Belgian chocolate. Naturally gluten and dairy free.',
        allergens: ['Coconut']
    },
    {
        id: 'healthy-4', name: 'Banana Walnut Bread', image: IMAGES.banana_bread, emoji: '🍌', category: 'healthy',
        price: 180, badge: 'gf',
        desc: 'Dense, moist banana bread speckled with crunchy walnuts and warm cinnamon — made with almond flour and coconut sugar.',
        allergens: ['Nuts']
    }
];

// ===== CAKE BUILDER STATE =====
const CAKE_FLAVORS = {
    vanilla: { color: '#FFF8DC', label: '🍦', name: 'Vanilla' },
    chocolate: { color: '#5C3317', label: '🍫', name: 'Chocolate' },
    strawberry: { color: '#FFB6C1', label: '🍓', name: 'Strawberry' },
    butterscotch: { color: '#DAA520', label: '🍯', name: 'Butterscotch' },
    redvelvet: { color: '#C41E3A', label: '❤️', name: 'Red Velvet' },
    pineapple: { color: '#FFE135', label: '🍍', name: 'Pineapple' },
    blueberry: { color: '#6A5ACD', label: '🫐', name: 'Blueberry' },
    blackforest: { color: '#3B2F2F', label: '🍒', name: 'Black Forest' }
};

const CAKE_SIZES = { '6': 140, '8': 180, '10': 220, '12': 260 };
const CAKE_BASE_PRICES = { '6': 500, '8': 700, '10': 950, '12': 1200 };
const FILLING_PRICES = { cream: 0, ganache: 100, fruit: 80, caramel: 120 };
const DECORATION_PRICES = { classic: 0, floral: 200, drip: 150, minimalist: 50, sprinkles: 100 };

let cakeTiers = [
    { shape: 'round', size: '10', flavor: 'vanilla', filling: 'cream', decoration: 'classic' },
    { shape: 'round', size: '8', flavor: 'chocolate', filling: 'ganache', decoration: 'classic' },
    { shape: 'round', size: '6', flavor: 'strawberry', filling: 'cream', decoration: 'floral' }
];

let selectedTierIndex = 0;
let cakeMessage = '';

// ===== SMART CART =====
let cart = [];

function generateCartKey(item) {
    const modifiers = item.modifiers ? Object.entries(item.modifiers).sort().flat().join('|') : '';
    return `${item.id}::${modifiers}`;
}

function loadCart() {
    try {
        const saved = localStorage.getItem('jddb_cart');
        if (saved) cart = JSON.parse(saved);
    } catch (e) { cart = []; }
    renderCart();
}

function saveCart() {
    localStorage.setItem('jddb_cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(item) {
    const key = generateCartKey(item);
    const existing = cart.find(c => c.key === key);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            key, id: item.id, name: item.name,
            emoji: item.emoji, image: item.image || null,
            price: item.price, qty: 1,
            modifiers: item.modifiers || null,
            category: item.category
        });
    }

    saveCart();
    renderCart();
    showToast(`${item.emoji} ${item.name} added to cart!`);
    bumpCartCount();
}

function removeFromCart(key) {
    cart = cart.filter(c => c.key !== key);
    saveCart(); renderCart();
}

function updateQty(key, delta) {
    const item = cart.find(c => c.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(key); return; }
    saveCart(); renderCart();
}

function clearCart() {
    cart = []; saveCart(); renderCart();
    showToast('🧹 Cart cleared');
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
}

function bumpCartCount() {
    const el = document.getElementById('cartCount');
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🧺</span>
                <p>Your cart is empty</p>
                <span>Add some freshly baked goodies!</span>
            </div>`;
        footer.style.display = 'none';
        updateCartCount();
        return;
    }

    footer.style.display = 'block';
    let html = '';
    cart.forEach(item => {
        const modStr = item.modifiers
            ? Object.entries(item.modifiers).map(([k, v]) => `${k}: ${v}`).join(' • ')
            : '';
        const visual = item.image
            ? `<img src="${item.image}" alt="${item.name}" class="cart-item-img">`
            : `<span class="cart-item-emoji">${item.emoji}</span>`;

        html += `
        <div class="cart-item">
            ${visual}
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                ${modStr ? `<div class="cart-item-modifiers">${modStr}</div>` : ''}
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQty('${item.key}', -1)">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${item.key}', 1)">+</button>
                </div>
            </div>
            <div>
                <div class="cart-item-price">₹${item.price * item.qty}</div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">✕</button>
            </div>
        </div>`;
    });

    container.innerHTML = html;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal > 500 ? 0 : 40;
    const total = subtotal + delivery;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
    document.getElementById('cartDelivery').textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
    document.getElementById('cartTotal').textContent = `₹${total}`;
    updateCartCount();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
    document.body.style.overflow = document.getElementById('cartSidebar').classList.contains('open') ? 'hidden' : '';
}

function checkout() {
    if (cart.length === 0) {
        showToast('🛒 Your cart is empty!');
        return;
    }
    // Calculate total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const total = subtotal;

    // Update payment amount
    document.getElementById('paymentAmount').textContent = `₹${total.toLocaleString('en-IN')}`;

    // Generate QR code
    generateUPIQR(total);

    // Reset payment status
    const statusEl = document.getElementById('paymentStatus');
    statusEl.style.display = 'none';

    // Close cart and open payment
    toggleCart();
    setTimeout(() => {
        openPayment();
    }, 400);
}

function openPayment() {
    document.getElementById('paymentOverlay').classList.add('open');
    document.getElementById('paymentModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePayment() {
    document.getElementById('paymentOverlay').classList.remove('open');
    document.getElementById('paymentModal').classList.remove('open');
    document.body.style.overflow = '';
}

function generateUPIQR(amount) {
    const canvas = document.getElementById('qrCanvas');
    const ctx = canvas.getContext('2d');
    const size = 180;
    canvas.width = size;
    canvas.height = size;

    // Generate a UPI-style QR pattern
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);

    const moduleSize = 6;
    const modules = Math.floor(size / moduleSize);

    // Create a deterministic pattern based on amount
    const seed = amount * 7 + 42;

    // Draw UPI QR-like pattern
    ctx.fillStyle = '#1A1230';

    // Corner patterns (finder patterns)
    drawFinderPattern(ctx, 0, 0, moduleSize);
    drawFinderPattern(ctx, (modules - 7) * moduleSize, 0, moduleSize);
    drawFinderPattern(ctx, 0, (modules - 7) * moduleSize, moduleSize);

    // Data modules (pseudo-random based on amount)
    for (let y = 0; y < modules; y++) {
        for (let x = 0; x < modules; x++) {
            // Skip finder pattern areas
            if ((x < 8 && y < 8) || (x >= modules - 8 && y < 8) || (x < 8 && y >= modules - 8)) continue;

            // Generate pseudo-random module
            const val = ((x * 31 + y * 37 + seed) * 17) % 100;
            if (val < 40) {
                ctx.fillRect(x * moduleSize, y * moduleSize, moduleSize, moduleSize);
            }
        }
    }

    // Center logo area
    const centerX = (size - 36) / 2;
    const centerY = (size - 36) / 2;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(centerX - 4, centerY - 4, 44, 44);

    // UPI logo text
    ctx.fillStyle = '#5f259f';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('UPI', size / 2, size / 2);
}

function drawFinderPattern(ctx, x, y, moduleSize) {
    // Outer border
    ctx.fillStyle = '#1A1230';
    ctx.fillRect(x, y, 7 * moduleSize, 7 * moduleSize);
    // Inner white
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(x + moduleSize, y + moduleSize, 5 * moduleSize, 5 * moduleSize);
    // Center dark
    ctx.fillStyle = '#1A1230';
    ctx.fillRect(x + 2 * moduleSize, y + 2 * moduleSize, 3 * moduleSize, 3 * moduleSize);
}

function payWithUPI(app) {
    const appNames = {
        gpay: 'Google Pay',
        phonepe: 'PhonePe',
        paytm: 'Paytm',
        bhim: 'BHIM UPI'
    };

    simulatePayment(appNames[app]);
}

function payWithCustomUPI() {
    const upiId = document.getElementById('customerUpiId').value.trim();
    if (!upiId || !upiId.includes('@')) {
        showToast('⚠️ Please enter a valid UPI ID (e.g. yourname@upi)');
        return;
    }
    simulatePayment('UPI');
}

function simulatePayment(method) {
    const statusEl = document.getElementById('paymentStatus');
    const iconEl = document.getElementById('paymentStatusIcon');
    const textEl = document.getElementById('paymentStatusText');
    const progressBar = document.getElementById('paymentProgressBar');

    // Show processing state
    statusEl.style.display = 'block';
    iconEl.textContent = '⏳';
    textEl.textContent = `Processing via ${method}...`;
    progressBar.style.width = '0%';

    // Scroll to status
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Animate progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            // Success!
            setTimeout(() => {
                iconEl.textContent = '✅';
                textEl.textContent = 'Payment Successful!';
                textEl.style.color = '#34D399';
                progressBar.style.width = '100%';

                showToast(`🎉 Payment received via ${method}! We'll start baking!`);

                // Close and reset after delay
                setTimeout(() => {
                    closePayment();
                    clearCart();
                    textEl.style.color = '';
                    document.getElementById('customerUpiId').value = '';
                }, 2000);
            }, 400);
        }
        progressBar.style.width = progress + '%';
    }, 300);
}

function copyUpiId() {
    const upiId = document.getElementById('shopUpiId').textContent;
    navigator.clipboard.writeText(upiId).then(() => {
        showToast('📋 UPI ID copied!');
    }).catch(() => {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = upiId;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('📋 UPI ID copied!');
    });
}

// ===== QR SCANNER =====
let scannerStream = null;
let currentFacingMode = 'environment';

function openScanner() {
    const overlay = document.getElementById('scannerOverlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset status
    const status = document.getElementById('scannerStatus');
    status.classList.remove('found');
    status.querySelector('span').textContent = 'Searching for QR code...';

    // Try to open camera
    startCamera();
}

function closeScanner() {
    const overlay = document.getElementById('scannerOverlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    stopCamera();
}

async function startCamera() {
    const video = document.getElementById('scannerVideo');
    const noCam = document.getElementById('scannerNoCam');

    try {
        // Stop any existing stream
        stopCamera();

        const constraints = {
            video: {
                facingMode: currentFacingMode,
                width: { ideal: 640 },
                height: { ideal: 640 }
            }
        };

        scannerStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = scannerStream;
        video.style.display = 'block';
        noCam.style.display = 'none';

        showToast('📷 Camera ready! Point at a QR code');
    } catch (err) {
        console.log('Camera not available:', err);
        video.style.display = 'none';
        noCam.style.display = 'flex';
        showToast('📷 Camera not available — use Demo button to test');
    }
}

function stopCamera() {
    if (scannerStream) {
        scannerStream.getTracks().forEach(track => track.stop());
        scannerStream = null;
    }
    const video = document.getElementById('scannerVideo');
    if (video) video.srcObject = null;
}

function switchCamera() {
    currentFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
    startCamera();
    showToast(`🔄 Switched to ${currentFacingMode === 'environment' ? 'rear' : 'front'} camera`);
}

function toggleFlash() {
    const btn = document.getElementById('flashBtn');
    if (scannerStream) {
        const track = scannerStream.getVideoTracks()[0];
        const capabilities = track.getCapabilities();

        if (capabilities.torch) {
            const settings = track.getSettings();
            const torchOn = !settings.torch;
            track.applyConstraints({ advanced: [{ torch: torchOn }] });
            btn.classList.toggle('active', torchOn);
            showToast(torchOn ? '🔦 Flash on' : '🔦 Flash off');
        } else {
            showToast('🔦 Flash not supported on this device');
        }
    } else {
        showToast('🔦 Camera not active');
    }
}

function simulateScan() {
    const status = document.getElementById('scannerStatus');

    // Show scanning animation
    status.classList.remove('found');
    status.querySelector('span').textContent = 'Scanning...';

    showToast('✨ Simulating QR code detection...');

    // Simulate finding a QR code after 2 seconds
    setTimeout(() => {
        // Found!
        status.classList.add('found');
        status.querySelector('span').textContent = '✅ QR Code detected! Processing payment...';

        showToast('🎯 QR Code found! UPI: jaidavdharthu@upi');

        // Auto-process payment
        setTimeout(() => {
            closeScanner();
            simulatePayment('QR Scan');
        }, 1500);
    }, 2000);
}

// ===== MENU RENDERING WITH REAL IMAGES =====
let currentCategory = 'all';

function renderMenu(category = 'all') {
    const grid = document.getElementById('menuGrid');
    const items = category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === category);

    grid.innerHTML = items.map((item, idx) => `
        <div class="menu-card reveal" style="transition-delay: ${Math.min(idx * 50, 400)}ms">
            ${item.badge ? `<span class="menu-card-badge badge-${item.badge}">${item.badge === 'popular' ? '🔥 Popular' :
            item.badge === 'new' ? '✨ New' :
                item.badge === 'gf' ? '🌿 GF' : ''
            }</span>` : ''}
            <div class="menu-card-visual">
                <img src="${item.image}" alt="${item.name}" class="card-image" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="card-emoji-fallback" style="display:none;">${item.emoji}</span>
            </div>
            <div class="menu-card-body">
                <h3 class="menu-card-name">${item.name}</h3>
                <p class="menu-card-desc">${item.desc}</p>
                ${item.allergens.length ? `
                    <div class="menu-card-allergens">
                        ${item.allergens.map(a => `<span class="allergen-tag">${a}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="menu-card-footer">
                    <span class="menu-card-price">₹${item.price}</span>
                    <button class="menu-card-add" onclick="addToCart({id:'${item.id}',name:\`${item.name}\`,price:${item.price},emoji:'${item.emoji}',image:'${item.image}',category:'${item.category}'})" aria-label="Add ${item.name} to cart">+</button>
                </div>
            </div>
        </div>
    `).join('');

    setTimeout(() => triggerReveal(), 100);
}

function filterMenu(category) {
    currentCategory = category;
    document.querySelectorAll('.category-card').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderMenu(category);

    // Scroll to menu section smoothly
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== CAKE BUILDER LOGIC =====
function selectTier(index) {
    selectedTierIndex = index;
    document.querySelectorAll('.tier-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    const tier = cakeTiers[index];
    updatePillSelections(tier);
    renderCake();
}

function updatePillSelections(tier) {
    ['shape', 'size', 'flavor', 'filling', 'decoration'].forEach(prop => {
        const pillContainerId = {
            shape: 'shapeOptions', size: 'sizeOptions', flavor: 'flavorOptions',
            filling: 'fillingOptions', decoration: 'decorOptions'
        }[prop];
        document.querySelectorAll(`#${pillContainerId} .pill`).forEach(pill => {
            pill.classList.toggle('active', pill.dataset.value === tier[prop]);
        });
    });
}

function setCakeOption(prop, value, el) {
    cakeTiers[selectedTierIndex][prop] = value;

    if (prop === 'size') {
        for (let i = 1; i < cakeTiers.length; i++) {
            if (parseInt(cakeTiers[i].size) >= parseInt(cakeTiers[i - 1].size)) {
                cakeTiers[i].size = String(parseInt(cakeTiers[i - 1].size) - 2);
                if (parseInt(cakeTiers[i].size) < 6) cakeTiers[i].size = '6';
            }
        }
    }

    el.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    renderCake(); updateCakePrice();
}

function updateCakeMessage() {
    cakeMessage = document.getElementById('cakeMessage').value;
    renderCake();
}

function renderCake() {
    const visual = document.getElementById('cakeVisual');
    let html = '<div class="cake-topper">🎂</div>';

    for (let i = cakeTiers.length - 1; i >= 0; i--) {
        const tier = cakeTiers[i];
        const widthPx = CAKE_SIZES[tier.size] || 180;
        const heightPx = 60 + (parseInt(tier.size) * 2);
        const color = CAKE_FLAVORS[tier.flavor]?.color || '#FFF8DC';
        const isSelected = i === selectedTierIndex;

        let borderRadius = 'var(--radius-md)';
        if (tier.shape === 'heart') borderRadius = '50% 50% 50% 0';
        else if (tier.shape === 'square') borderRadius = '4px';

        const decoStyle = getDecorationStyle(tier.decoration, color);

        html += `
        <div class="cake-tier ${isSelected ? 'selected' : ''}"
             style="width: ${widthPx}px; height: ${heightPx}px; background: ${decoStyle}; border-radius: ${borderRadius};"
             onclick="selectTier(${i})">
            <span class="cake-tier-label">${CAKE_FLAVORS[tier.flavor]?.label || '🎂'}</span>
        </div>`;
    }

    if (cakeMessage) {
        html += `<div class="cake-message-display">"${cakeMessage}"</div>`;
    }
    visual.innerHTML = html;
    updateCakePrice();
}

function getDecorationStyle(deco, baseColor) {
    switch (deco) {
        case 'drip':
            return `linear-gradient(to bottom, #5C3317 0%, #5C3317 15%, ${baseColor} 16%, ${baseColor} 100%)`;
        case 'floral':
            return `linear-gradient(135deg, ${baseColor}, ${adjustColor(baseColor, 20)})`;
        case 'sprinkles':
            return `repeating-linear-gradient(45deg, ${baseColor}, ${baseColor} 5px, ${adjustColor(baseColor, -15)} 5px, ${adjustColor(baseColor, -15)} 7px)`;
        case 'minimalist':
            return baseColor;
        default:
            return `linear-gradient(to bottom, ${adjustColor(baseColor, 10)}, ${baseColor})`;
    }
}

function adjustColor(hex, amount) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = Math.min(255, Math.max(0, r + amount));
    g = Math.min(255, Math.max(0, g + amount));
    b = Math.min(255, Math.max(0, b + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function updateCakePrice() {
    let total = 0;
    cakeTiers.forEach(tier => {
        total += CAKE_BASE_PRICES[tier.size] || 500;
        total += FILLING_PRICES[tier.filling] || 0;
        total += DECORATION_PRICES[tier.decoration] || 0;
    });
    document.getElementById('cakeTotalPrice').textContent = `₹${total}`;
    return total;
}

function addCakeToCart() {
    const price = updateCakePrice();
    const tierSummary = cakeTiers.map((t, i) =>
        `${['Base', 'Mid', 'Top'][i]}: ${t.size}" ${CAKE_FLAVORS[t.flavor]?.name || t.flavor} ${t.shape}`
    ).join(', ');

    addToCart({
        id: `custom-cake-${Date.now()}`,
        name: 'Custom Cake' + (cakeMessage ? ` — "${cakeMessage}"` : ''),
        emoji: '🎂',
        image: IMAGES.chocolate_cake,
        price: price,
        category: 'cake',
        modifiers: {
            Tiers: tierSummary,
            ...(cakeMessage ? { Message: cakeMessage } : {})
        }
    });
}

// ===== NOTIFICATION BANNER =====
function updateNotificationBanner() {
    const hour = new Date().getHours();
    const banner = document.getElementById('notifBanner');
    const notifText = banner.querySelector('.notif-text');
    const notifIcon = banner.querySelector('.notif-icon');

    if (hour >= 6 && hour < 10) {
        notifIcon.textContent = '☀️';
        notifText.innerHTML = '<strong>Good Morning!</strong> Fresh sourdough loaves and croissants are out of the oven. All 100% Eggless! ☕';
    } else if (hour >= 10 && hour < 14) {
        notifIcon.textContent = '🍞';
        notifText.innerHTML = '<strong>Welcome!</strong> Browse our freshly baked collection. Try our new Blueberry Cheesecake! 🫐';
    } else if (hour >= 14 && hour < 16) {
        notifIcon.textContent = '🍰';
        notifText.innerHTML = '<strong>Afternoon Treat!</strong> Treat yourself to a cupcake or a slice of our signature cakes. Sugar makes everything better! 🧁';
    } else if (hour >= 19 && hour < 21) {
        notifIcon.textContent = '🔔';
        notifText.innerHTML = '<strong>Closing Soon!</strong> Grab our Rescue Bag — assorted goodies at 50% off! Save food, save money. 💚';
    } else {
        notifIcon.textContent = '🍞';
        notifText.innerHTML = '<strong>Welcome to Jai Dav Dharthu Bakery!</strong> 100% Eggless — browse our freshly baked collection. Order for delivery or pickup! 🛒';
    }
}

function closeBanner() {
    document.getElementById('notifBanner').classList.add('hidden');
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">✅</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 50);
    });

    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(section => observer.observe(section));

    document.getElementById('cartBtn').addEventListener('click', toggleCart);
}

// ===== SCROLL REVEAL =====
function triggerReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const step = Math.ceil(target / 60);
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(interval); }
                    el.textContent = current >= 1000 ? `${(current / 1000).toFixed(0)}K` : current;
                }, 25);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// ===== HERO PARTICLES =====
function createParticles() {
    const container = document.getElementById('heroParticles');
    const particleEmojis = ['✨', '⭐', '🌟', '💫'];
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute; font-size: ${8 + Math.random() * 16}px;
            top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
            opacity: ${0.15 + Math.random() * 0.25};
            animation: float ${4 + Math.random() * 6}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s; pointer-events: none;`;
        particle.textContent = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
        container.appendChild(particle);
    }
}

// ===== CONTACT FORM =====
function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    showToast(`Thank you ${name}! We'll get back to you soon! 🙏`);
    e.target.reset();
}

// ===== PRELOADER =====
function hidePreloader() {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
}

// ===== 3D PARALLAX MOUSE TRACKING (Hero) =====
function init3DParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    const floatItems = heroVisual.querySelectorAll('.float-item');
    const depths = [0.03, 0.05, 0.04, 0.035, 0.045, 0.05]; // different depth per item

    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (e.clientX - centerX) / centerX;
        const moveY = (e.clientY - centerY) / centerY;

        floatItems.forEach((item, i) => {
            const depth = depths[i] || 0.04;
            const x = moveX * 30 * depth * 10;
            const y = moveY * 20 * depth * 10;
            const rotY = moveX * 8 * (i % 2 === 0 ? 1 : -1);
            const rotX = moveY * 5 * (i % 2 === 0 ? -1 : 1);
            item.style.transform = `translate(${x}px, ${y}px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(${10 + i * 5}px)`;
        });
    });
}

// ===== 3D TILT EFFECT ON MENU CARDS =====
function init3DCardTilt() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.menu-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            const distX = e.clientX - cardCenterX;
            const distY = e.clientY - cardCenterY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            if (distance < 400) {
                const intensity = 1 - (distance / 400);
                const rotateY = (distX / rect.width) * 8 * intensity;
                const rotateX = -(distY / rect.height) * 6 * intensity;
                card.style.transform = `translateY(-${4 * intensity}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${1 + 0.02 * intensity})`;
            } else {
                card.style.transform = '';
            }
        });
    });
}

// ===== PARALLAX SCROLL DEPTH =====
function initParallaxScroll() {
    let ticking = false;
    const parallaxElements = [
        { selector: '.section-header', speed: 0.03 },
        { selector: '.hero-badge', speed: 0.05 },
    ];

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;
                parallaxElements.forEach(({ selector, speed }) => {
                    document.querySelectorAll(selector).forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            const offset = (rect.top - window.innerHeight / 2) * speed;
                            el.style.transform = `translateY(${offset}px)`;
                        }
                    });
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    hidePreloader();
    initNavigation();
    loadCart();
    renderMenu('all');
    renderCake();
    updateCakePrice();
    updateNotificationBanner();
    animateCounters();
    createParticles();
    triggerReveal();
    init3DParallax();
    init3DCardTilt();
    initParallaxScroll();
});
