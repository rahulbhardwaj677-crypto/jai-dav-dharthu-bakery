/* ============================================
   JAI DAV DHARTHU BAKERY — APP.JS
   🎂 Complete Bakery Application Logic
   ============================================ */

'use strict';

// ===== PRODUCT IMAGES (Unsplash) =====
const IMAGES = {
    // Category showcase images (high quality, landscape)
    cat_all: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=250&fit=crop',
    cat_cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=250&fit=crop',
    cat_bread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop',
    cat_pastry: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=250&fit=crop',
    cat_cupcake: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=250&fit=crop',
    cat_cookie: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=250&fit=crop',
    cat_muffin: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=250&fit=crop',
    cat_pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop',
    cat_burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop',
    cat_shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=250&fit=crop',

    // Cakes — different flavors
    butterscotch_cake: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop',
    vanilla_cake: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop',
    chocolate_cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
    blueberry_cake: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop',
    strawberry_cake: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
    red_velvet_cake: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&h=400&fit=crop',
    pineapple_cake: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop',
    black_forest_cake: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=400&fit=crop',

    // Breads
    sourdough: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600&h=400&fit=crop',
    multigrain: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
    focaccia: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&h=400&fit=crop',
    baguette: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=600&h=400&fit=crop',
    ciabatta: 'https://images.unsplash.com/photo-1586444248871-36f9035170f8?w=600&h=400&fit=crop',

    // Pastries
    croissant: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop',
    pain_chocolat: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop&q=80',
    danish: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=600&h=400&fit=crop',
    eclair: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&h=400&fit=crop',
    puff_pastry: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=400&fit=crop',

    // Cupcakes
    vanilla_cupcake: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop',
    salted_caramel_cupcake: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&h=400&fit=crop',
    blueberry_cupcake: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop',
    choco_cupcake: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&h=400&fit=crop',
    red_velvet_cupcake: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop',

    // Cookies
    choco_cookie: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop',
    biscotti: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop',
    oatmeal_cookie: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop',
    macaron: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=400&fit=crop',
    shortbread: 'https://images.unsplash.com/photo-1558303926-80e3270ee3fd?w=600&h=400&fit=crop',

    // Muffins
    blueberry_muffin: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&h=400&fit=crop',
    chocolate_muffin: 'https://images.unsplash.com/photo-1604882737321-e13d7ead0e42?w=600&h=400&fit=crop',
    banana_muffin: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&h=400&fit=crop&q=80',
    cranberry_muffin: 'https://images.unsplash.com/photo-1558401391-7899bfff5a6e?w=600&h=400&fit=crop',

    // Pizza
    margherita_pizza: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
    pepperoni_pizza: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop',
    veggie_pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    paneer_pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',

    // Burgers
    classic_burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
    cheese_burger: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop',
    veggie_burger: 'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?w=600&h=400&fit=crop',
    paneer_burger: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop',

    // Shakes
    chocolate_shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop',
    strawberry_shake: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop',
    mango_shake: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop',
    oreo_shake: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&h=400&fit=crop',
    vanilla_shake: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&h=400&fit=crop',
};

// ===== MENU DATA (with flavor sub-categories) =====
const MENU_ITEMS = [
    // CAKES (₹350 - ₹800 per pound, price varies by flavor)
    { id: 'c1', name: 'Butterscotch Cake', image: IMAGES.butterscotch_cake, category: 'cake', flavor: 'Butterscotch', price: 450, badge: 'popular', desc: 'Rich butterscotch layers with caramel drizzle and crunchy praline topping. (1 lb)' },
    { id: 'c2', name: 'Vanilla Dream', image: IMAGES.vanilla_cake, category: 'cake', flavor: 'Vanilla', price: 350, badge: '', desc: 'Light and fluffy vanilla sponge with whipped cream and fresh berries. (1 lb)' },
    { id: 'c3', name: 'Chocolate Truffle', image: IMAGES.chocolate_cake, category: 'cake', flavor: 'Chocolate', price: 500, badge: 'bestseller', desc: 'Decadent triple chocolate layers with Belgian chocolate ganache. (1 lb)' },
    { id: 'c4', name: 'Blueberry Bliss', image: IMAGES.blueberry_cake, category: 'cake', flavor: 'Blueberry', price: 550, badge: '', desc: 'Moist blueberry cake with cream cheese frosting and fresh berries. (1 lb)' },
    { id: 'c5', name: 'Strawberry Rose', image: IMAGES.strawberry_cake, category: 'cake', flavor: 'Strawberry', price: 500, badge: 'new', desc: 'Delicate strawberry sponge with rose-infused cream and strawberry compote. (1 lb)' },
    { id: 'c6', name: 'Red Velvet', image: IMAGES.red_velvet_cake, category: 'cake', flavor: 'Red Velvet', price: 600, badge: 'popular', desc: 'Classic red velvet with tangy cream cheese frosting and cocoa dusting. (1 lb)' },
    { id: 'c7', name: 'Pineapple Paradise', image: IMAGES.pineapple_cake, category: 'cake', flavor: 'Pineapple', price: 400, badge: '', desc: 'Tropical pineapple cake with caramelized pineapple rings and whipped cream. (1 lb)' },
    { id: 'c8', name: 'Black Forest', image: IMAGES.black_forest_cake, category: 'cake', flavor: 'Black Forest', price: 550, badge: 'bestseller', desc: 'Layers of chocolate sponge, cherry filling, and clouds of whipped cream. (1 lb)' },

    // BREADS
    { id: 'b1', name: 'Classic Sourdough', image: IMAGES.sourdough, category: 'bread', flavor: 'Sourdough', price: 80, badge: 'popular', desc: '24-hour fermented crust with a tangy, open-crumb interior.' },
    { id: 'b2', name: 'Multigrain Harvest', image: IMAGES.multigrain, category: 'bread', flavor: 'Multigrain', price: 60, badge: '', desc: 'Wholesome blend of seven grains with honey and seeds.' },
    { id: 'b3', name: 'Rosemary Focaccia', image: IMAGES.focaccia, category: 'bread', flavor: 'Focaccia', price: 90, badge: 'new', desc: 'Italian herb bread dimpled and drizzled with extra virgin olive oil.' },
    { id: 'b4', name: 'French Baguette', image: IMAGES.baguette, category: 'bread', flavor: 'Baguette', price: 50, badge: '', desc: 'Crispy golden crust with a soft, airy interior. Perfect with butter.' },
    { id: 'b5', name: 'Rustic Ciabatta', image: IMAGES.ciabatta, category: 'bread', flavor: 'Ciabatta', price: 70, badge: '', desc: 'Chewy Italian bread with large air pockets, great for sandwiches.' },

    // PASTRIES (₹30 - ₹150, price varies by flavor)
    { id: 'p1', name: 'Butter Croissant', image: IMAGES.croissant, category: 'pastry', flavor: 'Croissant', price: 50, badge: 'bestseller', desc: 'Flaky, buttery layers that shatter into golden perfection.' },
    { id: 'p2', name: 'Pain au Chocolat', image: IMAGES.pain_chocolat, category: 'pastry', flavor: 'Chocolate', price: 80, badge: 'popular', desc: 'Chocolate-filled pastry with dark Belgian chocolate batons.' },
    { id: 'p3', name: 'Danish Pastry', image: IMAGES.danish, category: 'pastry', flavor: 'Danish', price: 60, badge: '', desc: 'Swirled pastry with vanilla custard and seasonal fruit glaze.' },
    { id: 'p4', name: 'Chocolate Éclair', image: IMAGES.eclair, category: 'pastry', flavor: 'Éclair', price: 70, badge: 'new', desc: 'Choux pastry filled with vanilla cream and topped with chocolate glaze.' },
    { id: 'p5', name: 'Puff Pastry Roll', image: IMAGES.puff_pastry, category: 'pastry', flavor: 'Puff', price: 30, badge: '', desc: 'Light puff pastry with a savory filling and golden crust.' },

    // CUPCAKES
    { id: 'cu1', name: 'Vanilla Cloud', image: IMAGES.vanilla_cupcake, category: 'cupcake', flavor: 'Vanilla', price: 40, badge: 'popular', desc: 'Light vanilla cupcake with mountain of vanilla buttercream.' },
    { id: 'cu2', name: 'Salted Caramel', image: IMAGES.salted_caramel_cupcake, category: 'cupcake', flavor: 'Caramel', price: 50, badge: 'bestseller', desc: 'Rich caramel cupcake drizzled with salted caramel and sea salt.' },
    { id: 'cu3', name: 'Blueberry Swirl', image: IMAGES.blueberry_cupcake, category: 'cupcake', flavor: 'Blueberry', price: 45, badge: '', desc: 'Blueberry cupcake with swirled blueberry cream cheese frosting.' },
    { id: 'cu4', name: 'Chocolate Fudge', image: IMAGES.choco_cupcake, category: 'cupcake', flavor: 'Chocolate', price: 50, badge: 'new', desc: 'Intense chocolate cupcake with thick fudge frosting.' },
    { id: 'cu5', name: 'Red Velvet', image: IMAGES.red_velvet_cupcake, category: 'cupcake', flavor: 'Red Velvet', price: 55, badge: '', desc: 'Classic red velvet cupcake with smooth cream cheese swirl.' },

    // COOKIES
    { id: 'co1', name: 'Choco Chip Cookie', image: IMAGES.choco_cookie, category: 'cookie', flavor: 'Chocolate Chip', price: 20, badge: 'bestseller', desc: 'Chunky chocolate chip cookies with a chewy center.' },
    { id: 'co2', name: 'Almond Biscotti', image: IMAGES.biscotti, category: 'cookie', flavor: 'Biscotti', price: 30, badge: '', desc: 'Twice-baked Italian cookies with toasted almonds.' },
    { id: 'co3', name: 'Oatmeal Raisin', image: IMAGES.oatmeal_cookie, category: 'cookie', flavor: 'Oatmeal', price: 20, badge: '', desc: 'Hearty oatmeal cookies with plump raisins and cinnamon.' },
    { id: 'co4', name: 'French Macaron', image: IMAGES.macaron, category: 'cookie', flavor: 'Macaron', price: 40, badge: 'popular', desc: 'Delicate almond meringue shells with flavored ganache filling.' },
    { id: 'co5', name: 'Butter Shortbread', image: IMAGES.shortbread, category: 'cookie', flavor: 'Shortbread', price: 25, badge: 'new', desc: 'Classic Scottish butter shortbread — melt-in-your-mouth tender.' },

    // MUFFINS
    { id: 'm1', name: 'Blueberry Muffin', image: IMAGES.blueberry_muffin, category: 'muffin', flavor: 'Blueberry', price: 40, badge: 'popular', desc: 'Fluffy muffin bursting with fresh blueberries and a crumble topping.' },
    { id: 'm2', name: 'Double Chocolate Muffin', image: IMAGES.chocolate_muffin, category: 'muffin', flavor: 'Chocolate', price: 45, badge: 'bestseller', desc: 'Rich chocolate muffin loaded with chocolate chips. Pure indulgence.' },
    { id: 'm3', name: 'Banana Walnut Muffin', image: IMAGES.cranberry_muffin, category: 'muffin', flavor: 'Banana', price: 40, badge: '', desc: 'Moist banana muffin with crunchy walnuts and a hint of cinnamon.' },
    { id: 'm4', name: 'Cranberry Orange Muffin', image: IMAGES.cranberry_muffin, category: 'muffin', flavor: 'Cranberry', price: 45, badge: 'new', desc: 'Tart cranberry muffin with bright orange zest and sugar glaze.' },

    // PIZZA
    { id: 'pz1', name: 'Classic Margherita', image: IMAGES.margherita_pizza, category: 'pizza', flavor: 'Margherita', price: 149, badge: 'popular', desc: 'San Marzano tomato sauce, fresh mozzarella, and fragrant basil leaves.' },
    { id: 'pz2', name: 'Peppy Paneer Pizza', image: IMAGES.paneer_pizza, category: 'pizza', flavor: 'Paneer', price: 199, badge: 'bestseller', desc: 'Loaded with spiced paneer, capsicum, onion rings, and mozzarella.' },
    { id: 'pz3', name: 'Farm Fresh Veggie', image: IMAGES.veggie_pizza, category: 'pizza', flavor: 'Veggie', price: 179, badge: '', desc: 'Garden-fresh bell peppers, mushrooms, olives, corn, and jalapeños.' },
    { id: 'pz4', name: 'Cheese Burst Pizza', image: IMAGES.pepperoni_pizza, category: 'pizza', flavor: 'Cheese', price: 229, badge: 'new', desc: 'Extra-thick cheese crust that oozes mozzarella with every bite.' },

    // BURGERS
    { id: 'bg1', name: 'Classic Veg Burger', image: IMAGES.classic_burger, category: 'burger', flavor: 'Classic', price: 69, badge: 'popular', desc: 'Crispy veg patty with lettuce, tomato, onion, and house sauce.' },
    { id: 'bg2', name: 'Cheese Blast Burger', image: IMAGES.cheese_burger, category: 'burger', flavor: 'Cheese', price: 99, badge: 'bestseller', desc: 'Double cheese patty with melted cheddar, pickles, and smoky mayo.' },
    { id: 'bg3', name: 'Garden Veggie Burger', image: IMAGES.veggie_burger, category: 'burger', flavor: 'Veggie', price: 79, badge: '', desc: 'Fresh garden vegetables in a herb-seasoned patty with avocado spread.' },
    { id: 'bg4', name: 'Paneer Tikka Burger', image: IMAGES.paneer_burger, category: 'burger', flavor: 'Paneer', price: 109, badge: 'new', desc: 'Spicy tandoori paneer patty with mint chutney and crispy onion rings.' },

    // SHAKES
    { id: 'sh1', name: 'Chocolate Shake', image: IMAGES.chocolate_shake, category: 'shake', flavor: 'Chocolate', price: 80, badge: 'bestseller', desc: 'Rich and creamy Belgian chocolate milkshake topped with whipped cream.' },
    { id: 'sh2', name: 'Strawberry Shake', image: IMAGES.strawberry_shake, category: 'shake', flavor: 'Strawberry', price: 70, badge: 'popular', desc: 'Fresh strawberry milkshake made with real berries and vanilla ice cream.' },
    { id: 'sh3', name: 'Mango Shake', image: IMAGES.mango_shake, category: 'shake', flavor: 'Mango', price: 70, badge: 'new', desc: 'Tropical Alphonso mango shake — thick, creamy, and naturally sweet.' },
    { id: 'sh4', name: 'Oreo Shake', image: IMAGES.oreo_shake, category: 'shake', flavor: 'Oreo', price: 90, badge: '', desc: 'Crushed Oreo cookies blended with vanilla ice cream and chocolate drizzle.' },
    { id: 'sh5', name: 'Vanilla Shake', image: IMAGES.vanilla_shake, category: 'shake', flavor: 'Vanilla', price: 60, badge: '', desc: 'Classic vanilla bean milkshake — smooth, creamy, and timeless.' },
];

// ===== CATEGORY DATA (with real images) =====
const CATEGORIES = [
    { id: 'all', name: 'All Items', image: IMAGES.cat_all, count: MENU_ITEMS.length },
    { id: 'cake', name: 'Cakes', image: IMAGES.cat_cake, count: MENU_ITEMS.filter(i => i.category === 'cake').length },
    { id: 'bread', name: 'Breads', image: IMAGES.cat_bread, count: MENU_ITEMS.filter(i => i.category === 'bread').length },
    { id: 'pastry', name: 'Pastries', image: IMAGES.cat_pastry, count: MENU_ITEMS.filter(i => i.category === 'pastry').length },
    { id: 'cupcake', name: 'Cupcakes', image: IMAGES.cat_cupcake, count: MENU_ITEMS.filter(i => i.category === 'cupcake').length },
    { id: 'cookie', name: 'Cookies', image: IMAGES.cat_cookie, count: MENU_ITEMS.filter(i => i.category === 'cookie').length },
    { id: 'muffin', name: 'Muffins', image: IMAGES.cat_muffin, count: MENU_ITEMS.filter(i => i.category === 'muffin').length },
    { id: 'pizza', name: 'Pizza', image: IMAGES.cat_pizza, count: MENU_ITEMS.filter(i => i.category === 'pizza').length },
    { id: 'burger', name: 'Burgers', image: IMAGES.cat_burger, count: MENU_ITEMS.filter(i => i.category === 'burger').length },
    { id: 'shake', name: 'Shakes', image: IMAGES.cat_shake, count: MENU_ITEMS.filter(i => i.category === 'shake').length },
];

// ===== SPECIALS =====
const SPECIALS = [
    { id: 's1', name: 'Birthday Cake Special', image: IMAGES.chocolate_cake, price: 999, originalPrice: 1200, desc: 'Customizable 2-tier birthday cake with your name! (2 lb)', tag: '🔥 20% OFF' },
    { id: 's2', name: 'Croissant Box (6)', image: IMAGES.croissant, price: 250, originalPrice: 300, desc: 'Box of 6 assorted butter croissants — perfect for family breakfast.', tag: '💎 Value Pack' },
    { id: 's3', name: 'Cupcake Dozen', image: IMAGES.vanilla_cupcake, price: 450, originalPrice: 600, desc: '12 assorted cupcakes in a beautiful gift box.', tag: '🎁 Gift Box' },
    { id: 's4', name: 'Cookie Jar Collection', image: IMAGES.choco_cookie, price: 150, originalPrice: 200, desc: 'Mixed cookie jar with 10 assorted premium cookies.', tag: '⭐ Best Value' },
];

// ===== STATE =====
let cart = [];
let activeCategory = 'all';
let activeFlavor = 'all';
let sortMode = 'default';
let searchQuery = '';

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('preloader')?.classList.add('hidden');
    }, 1500);

    initNavigation();
    initSearch();
    renderCategoryShowcase();
    initFilterSort();
    renderMenu();
    renderSpecials();
    initCakeBuilder();
    initCart();
    initScrollReveal();
    initCounters();
    initContactForm();
    initCelebrationBackground();
});

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    mobileBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navLinks.classList.remove('open');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < bottom) {
                links.forEach(l => l.classList.remove('active'));
                document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
            }
        });
    });
}

// ===== SEARCH =====
function initSearch() {
    const toggle = document.getElementById('searchToggle');
    const box = document.getElementById('searchBox');
    const input = document.getElementById('searchInput');
    const clear = document.getElementById('searchClear');

    // Create results dropdown
    const results = document.createElement('div');
    results.className = 'search-results';
    results.id = 'searchResults';
    document.body.appendChild(results);

    toggle?.addEventListener('click', () => {
        box.classList.toggle('open');
        if (box.classList.contains('open')) {
            input.focus();
        } else {
            input.value = '';
            searchQuery = '';
            clear.classList.remove('show');
            results.classList.remove('open');
        }
    });

    input?.addEventListener('input', () => {
        searchQuery = input.value.trim().toLowerCase();
        clear.classList.toggle('show', searchQuery.length > 0);

        if (searchQuery.length >= 2) {
            const matches = MENU_ITEMS.filter(item =>
                item.name.toLowerCase().includes(searchQuery) ||
                item.desc.toLowerCase().includes(searchQuery) ||
                item.category.toLowerCase().includes(searchQuery) ||
                item.flavor.toLowerCase().includes(searchQuery)
            );
            showSearchResults(matches);
        } else {
            results.classList.remove('open');
        }
    });

    clear?.addEventListener('click', () => {
        input.value = '';
        searchQuery = '';
        clear.classList.remove('show');
        results.classList.remove('open');
        input.focus();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-search') && !e.target.closest('.search-results')) {
            box?.classList.remove('open');
            results.classList.remove('open');
        }
    });
}

function showSearchResults(matches) {
    const results = document.getElementById('searchResults');
    if (matches.length === 0) {
        results.innerHTML = '<div class="search-no-result">😔 No items found. Try something else!</div>';
    } else {
        results.innerHTML = matches.slice(0, 8).map(item => `
            <div class="search-result-item" onclick="scrollToItem('${item.id}', '${item.category}')">
                <img src="${item.image}" alt="${item.name}" class="search-result-img">
                <div>
                    <div class="search-result-name">${highlightMatch(item.name, searchQuery)}</div>
                    <div class="search-result-meta">${item.category} · ${item.flavor} · ₹${item.price}</div>
                </div>
            </div>
        `).join('');
    }
    results.classList.add('open');
}

function highlightMatch(text, query) {
    if (!query) return text;
    const re = new RegExp(`(${query})`, 'gi');
    return text.replace(re, '<strong style="color:var(--primary)">$1</strong>');
}

function scrollToItem(itemId, category) {
    // Close search
    document.getElementById('searchResults').classList.remove('open');
    document.getElementById('searchBox').classList.remove('open');
    document.getElementById('searchInput').value = '';

    // Navigate to menu, select category
    selectCategory(category);
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== CATEGORY SHOWCASE (Real Images) =====
function renderCategoryShowcase() {
    const showcase = document.getElementById('categoriesShowcase');
    if (!showcase) return;

    showcase.innerHTML = CATEGORIES.map(cat => `
        <div class="category-card ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}" onclick="selectCategory('${cat.id}')">
            <div class="cat-card-img-wrap">
                <img src="${cat.image}" alt="${cat.name}" class="cat-card-img" loading="lazy">
                <div class="cat-card-overlay"></div>
            </div>
            <div class="cat-card-info">
                <div class="cat-card-name">${cat.name}</div>
                <div class="cat-card-count">${cat.count} items</div>
            </div>
        </div>
    `).join('');
}

function selectCategory(categoryId) {
    activeCategory = categoryId;
    activeFlavor = 'all'; // reset flavor when switching category

    // Update showcase cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.toggle('active', card.dataset.category === categoryId);
    });

    // Update filter bar info
    const cat = CATEGORIES.find(c => c.id === categoryId);
    const items = getFilteredItems();
    document.getElementById('filterCount').textContent = `${items.length} items`;
    document.getElementById('filterCatName').textContent = cat ? cat.name : 'All Items';

    renderFlavorTabs();
    renderMenu();
}

// ===== FILTER & SORT =====
function initFilterSort() {
    const sortSelect = document.getElementById('filterSort');
    sortSelect?.addEventListener('change', () => {
        sortMode = sortSelect.value;
        renderMenu();
    });
}

function getFilteredItems() {
    let items = activeCategory === 'all'
        ? [...MENU_ITEMS]
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    if (activeFlavor !== 'all') {
        items = items.filter(item => item.flavor === activeFlavor);
    }

    // Sort
    switch (sortMode) {
        case 'price-low': items.sort((a, b) => a.price - b.price); break;
        case 'price-high': items.sort((a, b) => b.price - a.price); break;
        case 'name': items.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    return items;
}

// ===== FLAVOR / SUBCATEGORY TABS =====
function renderFlavorTabs() {
    const tabs = document.getElementById('flavorTabs');
    if (!tabs) return;

    if (activeCategory === 'all') {
        tabs.innerHTML = '';
        return;
    }

    // Get unique flavors for selected category
    const categoryItems = MENU_ITEMS.filter(i => i.category === activeCategory);
    const flavors = [...new Set(categoryItems.map(i => i.flavor))];

    const flavorIcons = {
        // Cakes
        'Butterscotch': '🍯', 'Vanilla': '🍦', 'Chocolate': '🍫', 'Blueberry': '🫐',
        'Strawberry': '🍓', 'Red Velvet': '❤️', 'Pineapple': '🍍', 'Black Forest': '🍒',
        // Breads
        'Sourdough': '🥖', 'Multigrain': '🌾', 'Focaccia': '🌿', 'Baguette': '🥖', 'Ciabatta': '🍞',
        // Pastries
        'Croissant': '🥐', 'Danish': '🥮', 'Éclair': '🍩', 'Puff': '🥧',
        // Cupcakes
        'Caramel': '🍮',
        // Cookies
        'Chocolate Chip': '🍪', 'Biscotti': '🥜', 'Oatmeal': '🥣', 'Macaron': '🟣', 'Shortbread': '🧈',
        // Muffins
        'Banana': '🍌', 'Cranberry': '🔴',
        // Pizza
        'Margherita': '🍕', 'Paneer': '🧀', 'Veggie': '🥬', 'Cheese': '🧀',
        // Burgers
        'Classic': '🍔',
        // Shakes
        'Mango': '🥭', 'Oreo': '🍪',
    };

    tabs.innerHTML = `
        <button class="flavor-tab ${activeFlavor === 'all' ? 'active' : ''}" onclick="selectFlavor('all')">
            <span class="flavor-tab-icon">✨</span> All ${CATEGORIES.find(c => c.id === activeCategory)?.name || ''}
        </button>
        ${flavors.map(f => `
            <button class="flavor-tab ${activeFlavor === f ? 'active' : ''}" onclick="selectFlavor('${f}')">
                <span class="flavor-tab-icon">${flavorIcons[f] || '🍰'}</span> ${f}
            </button>
        `).join('')}
    `;
}

function selectFlavor(flavor) {
    activeFlavor = flavor;

    // Update tabs
    document.querySelectorAll('.flavor-tab').forEach(tab => {
        const tabFlavor = tab.textContent.trim().split(' ').slice(1).join(' ').trim();
        // Simple check using the active class toggle
    });

    renderFlavorTabs(); // re-render to update active state
    renderMenu();

    // Update count
    const items = getFilteredItems();
    document.getElementById('filterCount').textContent = `${items.length} items`;
}

// ===== RENDER MENU =====
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const items = getFilteredItems();

    // Update filter count
    document.getElementById('filterCount').textContent = `${items.length} items`;

    if (activeCategory !== 'all' && activeFlavor === 'all') {
        // Group by flavor sub-sections
        const grouped = {};
        items.forEach(item => {
            if (!grouped[item.flavor]) grouped[item.flavor] = [];
            grouped[item.flavor].push(item);
        });

        const flavorIcons = {
            'Butterscotch': '🍯', 'Vanilla': '🍦', 'Chocolate': '🍫', 'Blueberry': '🫐',
            'Strawberry': '🍓', 'Red Velvet': '❤️', 'Pineapple': '🍍', 'Black Forest': '🍒',
            'Sourdough': '🥖', 'Multigrain': '🌾', 'Focaccia': '🌿', 'Baguette': '🥖', 'Ciabatta': '🍞',
            'Croissant': '🥐', 'Danish': '🥮', 'Éclair': '🍩', 'Puff': '🥧',
            'Caramel': '🍮',
            'Chocolate Chip': '🍪', 'Biscotti': '🥜', 'Oatmeal': '🥣', 'Macaron': '🟣', 'Shortbread': '🧈',
        };

        let html = '';
        Object.keys(grouped).forEach(flavor => {
            html += `
                <div class="flavor-section-header">
                    <span class="flavor-icon">${flavorIcons[flavor] || '🍰'}</span>
                    <h3>${flavor}</h3>
                    <div class="flavor-line"></div>
                </div>
            `;
            html += grouped[flavor].map((item, i) => menuCardHTML(item, i)).join('');
        });
        grid.innerHTML = html;
    } else {
        grid.innerHTML = items.map((item, i) => menuCardHTML(item, i)).join('');
    }

    // Trigger reveal
    setTimeout(() => {
        document.querySelectorAll('.menu-card.reveal').forEach(el => el.classList.add('visible'));
    }, 100);
}

function menuCardHTML(item, i) {
    return `
        <div class="menu-card reveal" style="transition-delay: ${Math.min(i, 6) * 60}ms" data-id="${item.id}">
            <div class="menu-card-img-wrap">
                <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
                ${item.badge ? `<span class="menu-card-badge badge-${item.badge}">${item.badge}</span>` : ''}
                <span class="eggless-badge">🥚 Eggless</span>
            </div>
            <div class="menu-card-body">
                <h3 class="menu-card-name">${item.name}</h3>
                <p class="menu-card-desc">${item.desc}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">₹${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// ===== RENDER SPECIALS =====
function renderSpecials() {
    const grid = document.getElementById('specialsGrid');
    grid.innerHTML = SPECIALS.map(item => `
        <div class="special-card reveal">
            <img src="${item.image}" alt="${item.name}" class="special-card-img" loading="lazy">
            <div class="special-card-body">
                <h3 class="special-card-name">${item.name}</h3>
                <p class="special-card-desc">${item.desc}</p>
                <div class="special-card-meta">
                    <span class="special-card-price">₹${item.price}</span>
                    <span class="special-card-tag">${item.tag}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== CART =====
function initCart() {
    const toggle = document.getElementById('cartToggle');
    const close = document.getElementById('cartClose');
    const overlay = document.getElementById('cartOverlay');
    const browse = document.getElementById('cartBrowse');
    toggle?.addEventListener('click', openCart);
    close?.addEventListener('click', closeCart);
    overlay?.addEventListener('click', closeCart);
    browse?.addEventListener('click', closeCart);
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function addToCart(itemId) {
    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    const existing = cart.find(c => c.id === itemId);
    if (existing) { existing.qty++; }
    else { cart.push({ ...item, qty: 1 }); }
    updateCartUI();
    showToast(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    updateCartUI();
}

function updateQty(itemId, delta) {
    const item = cart.find(c => c.id === itemId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(itemId);
    else updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const items = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const empty = document.getElementById('cartEmpty');
    const totalEl = document.getElementById('cartTotal');
    const count = cart.reduce((sum, c) => sum + c.qty, 0);

    badge.textContent = count;
    badge.classList.toggle('show', count > 0);

    if (cart.length === 0) {
        empty.style.display = 'block';
        footer.style.display = 'none';
        items.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    empty.style.display = 'none';
    footer.style.display = 'block';
    items.querySelectorAll('.cart-item').forEach(el => el.remove());

    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price * item.qty}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            </div>
        `;
        items.appendChild(el);
    });

    const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    totalEl.textContent = `₹${total}`;
}

// ===== CAKE BUILDER =====
function initCakeBuilder() {
    let tiers = 1, flavor = 'vanilla', frosting = 'cream', topper = '🎂';
    const basePrice = 350;

    const tierBtns = document.querySelectorAll('.tier-btn');
    const flavorBtns = document.querySelectorAll('[data-flavor]');
    const frostingBtns = document.querySelectorAll('[data-frosting]');
    const topperBtns = document.querySelectorAll('[data-topper]');
    const messageInput = document.getElementById('cakeMessageInput');
    const addBtn = document.getElementById('addCakeToCart');

    function updateCake() {
        const visual = document.getElementById('cakeVisual');
        const topperEl = document.getElementById('cakeTopper');
        const priceEl = document.getElementById('cakePrice');
        const msgEl = document.getElementById('cakeMessage');

        const activeFlavorBtn = document.querySelector('[data-flavor].active');
        const color = activeFlavorBtn?.dataset.color || '#FFF3CD';

        const tierSizes = [
            { w: 160, h: 60 },
            { w: 130, h: 50 },
            { w: 100, h: 45 },
        ];

        let tiersHTML = '';
        for (let i = 0; i < tiers; i++) {
            const size = tierSizes[i];
            tiersHTML += `<div class="cake-tier" style="width:${size.w}px;height:${size.h}px;background:${color};animation-delay:${i * 0.15}s"></div>`;
        }

        visual.innerHTML = tiersHTML;
        visual.insertBefore(topperEl, visual.firstChild);
        topperEl.textContent = topper;

        const price = basePrice + (tiers - 1) * 800 +
            (frosting === 'fondant' ? 300 : frosting === 'ganache' ? 200 : frosting === 'buttercream' ? 150 : 0);
        priceEl.textContent = `₹${price}`;
        msgEl.textContent = messageInput?.value || 'Your message here...';
    }

    tierBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tierBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tiers = parseInt(btn.dataset.tiers);
            updateCake();
        });
    });

    flavorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            flavorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            flavor = btn.dataset.flavor;
            updateCake();
        });
    });

    frostingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            frostingBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            frosting = btn.dataset.frosting;
            updateCake();
        });
    });

    topperBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            topperBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            topper = btn.dataset.topper;
            updateCake();
        });
    });

    messageInput?.addEventListener('input', updateCake);

    addBtn?.addEventListener('click', () => {
        const price = basePrice + (tiers - 1) * 800 +
            (frosting === 'fondant' ? 300 : frosting === 'ganache' ? 200 : frosting === 'buttercream' ? 150 : 0);
        const msg = messageInput?.value || '';
        cart.push({
            id: 'custom-cake-' + Date.now(),
            name: `Custom ${flavor.charAt(0).toUpperCase() + flavor.slice(1)} Cake (${tiers}T)` + (msg ? ` — "${msg}"` : ''),
            image: IMAGES.chocolate_cake,
            price,
            qty: 1
        });
        updateCartUI();
        showToast('Custom cake added to cart! 🎂');
        openCart();
    });

    updateCake();
}

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toastText');
    text.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .section-header, .about-feature, .info-card, .gallery-img, .special-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, parseInt(entry.target.dataset.target));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { clearInterval(timer); current = target; }
        el.textContent = Math.floor(current);
    }, 25);
}

// ===== CONTACT FORM =====
function initContactForm() {
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully! We\'ll get back to you soon ✉️');
        e.target.reset();
    });
}

// ===== 🎂 CELEBRATION BACKGROUND =====
function initCelebrationBackground() {
    const canvas = document.getElementById('celebration-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, time = 0;
    const COLORS = ['#E84393', '#FDCB6E', '#6C5CE7', '#00B894', '#FF6B6B', '#FD79A8', '#A29BFE', '#FFD700'];

    const balloons = [], confetti = [], sparkles = [];

    function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }

    class Balloon {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width; this.y = height + 60 + Math.random() * 300;
            this.size = 16 + Math.random() * 28; this.speed = 0.4 + Math.random() * 1.2;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.z = 0.4 + Math.random() * 0.6; this.phase = Math.random() * Math.PI * 2;
        }
        update() { this.y -= this.speed * this.z; this.x += Math.sin(time * 0.001 + this.phase) * 0.6; if (this.y < -80) this.reset(); }
        draw() {
            const s = this.size * this.z; const alpha = 0.15 + 0.15 * this.z;
            ctx.save(); ctx.globalAlpha = alpha; ctx.translate(this.x, this.y);
            ctx.beginPath(); ctx.moveTo(0, s); ctx.quadraticCurveTo(Math.sin(time * 0.002 + this.phase) * 8, s + 25, 0, s + 55);
            ctx.strokeStyle = `rgba(200,160,140,${alpha * 0.5})`; ctx.lineWidth = 0.8; ctx.stroke();
            const grad = ctx.createRadialGradient(-s * 0.25, -s * 0.3, s * 0.08, 0, 0, s);
            grad.addColorStop(0, '#fff'); grad.addColorStop(0.3, this.color); grad.addColorStop(1, 'rgba(0,0,0,0.1)');
            ctx.beginPath(); ctx.ellipse(0, 0, s * 0.7, s, 0, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
            ctx.beginPath(); ctx.ellipse(-s * 0.2, -s * 0.35, s * 0.18, s * 0.09, -0.4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fill();
            ctx.restore();
        }
    }

    class Confetti {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width; this.y = -10 - Math.random() * 80;
            this.w = 4 + Math.random() * 5; this.h = 2 + Math.random() * 3;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.speedY = 0.6 + Math.random() * 2; this.speedX = (Math.random() - 0.5) * 1.5;
            this.rotX = Math.random() * 6.28; this.rotY = Math.random() * 6.28;
            this.rsx = (Math.random() - 0.5) * 0.12; this.rsy = (Math.random() - 0.5) * 0.1;
        }
        update() { this.y += this.speedY; this.x += this.speedX; this.rotX += this.rsx; this.rotY += this.rsy; if (this.y > height + 15) this.reset(); }
        draw() {
            ctx.save(); ctx.translate(this.x, this.y); ctx.scale(Math.cos(this.rotY), Math.cos(this.rotX));
            ctx.fillStyle = this.color; ctx.globalAlpha = 0.5; ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h); ctx.restore();
        }
    }

    class Sparkle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width; this.y = Math.random() * height;
            this.size = 1 + Math.random() * 2; this.alpha = 0;
            this.maxAlpha = 0.2 + Math.random() * 0.4; this.speed = 0.008 + Math.random() * 0.02; this.growing = true;
        }
        update() {
            if (this.growing) { this.alpha += this.speed; if (this.alpha >= this.maxAlpha) this.growing = false; }
            else { this.alpha -= this.speed; if (this.alpha <= 0) this.reset(); }
        }
        draw() {
            ctx.save(); ctx.translate(this.x, this.y); ctx.globalAlpha = this.alpha; ctx.fillStyle = '#FFD700';
            const s = this.size;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                const a = (Math.PI / 2) * i + time * 0.0008;
                ctx.lineTo(Math.cos(a) * s * 2, Math.sin(a) * s * 2);
                ctx.lineTo(Math.cos(a + Math.PI / 4) * s * 0.6, Math.sin(a + Math.PI / 4) * s * 0.6);
            }
            ctx.closePath(); ctx.fill(); ctx.restore();
        }
    }

    for (let i = 0; i < 10; i++) balloons.push(new Balloon());
    for (let i = 0; i < 40; i++) confetti.push(new Confetti());
    for (let i = 0; i < 30; i++) sparkles.push(new Sparkle());

    function loop() {
        time = performance.now();
        ctx.clearRect(0, 0, width, height);
        sparkles.forEach(s => { s.update(); s.draw(); });
        confetti.forEach(c => { c.update(); c.draw(); });
        balloons.sort((a, b) => a.z - b.z);
        balloons.forEach(b => { b.update(); b.draw(); });
        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    resize();
    loop();
}

// ===== 💳 PAYMENT GATEWAY =====
let selectedPaymentMethod = null;
let paymentTotal = 0;

function openPaymentFromNav(e) {
    e.preventDefault();
    if (cart.length === 0) {
        showToast('Your cart is empty! Add items first 🛒');
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
        return;
    }
    closeCart();
    setTimeout(() => openPaymentGateway(), 300);
}

function openPaymentGateway() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add items first 🛒');
        return;
    }

    // Build order summary
    const itemsList = document.getElementById('orderItemsList');
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

    const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    const gst = Math.round(subtotal * 0.05);
    paymentTotal = subtotal + gst;

    document.getElementById('summarySubtotal').textContent = `₹${subtotal}`;
    document.getElementById('summaryGst').textContent = `₹${gst}`;
    document.getElementById('summaryTotal').textContent = `₹${paymentTotal}`;

    // Reset state
    selectedPaymentMethod = null;
    document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('proceedToPin').disabled = true;
    resetPinInputs();

    // Show step 1
    goToPayStep(1);

    // Open modal
    document.getElementById('paymentOverlay').classList.add('open');
    document.getElementById('paymentModal').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Close cart sidebar
    closeCart();
}

function closePayment() {
    document.getElementById('paymentOverlay').classList.remove('open');
    document.getElementById('paymentModal').classList.remove('open');
    document.body.style.overflow = '';
}

function goToPayStep(step) {
    document.querySelectorAll('.payment-step').forEach(s => s.classList.add('hidden'));
    document.getElementById(`payStep${step}`).classList.remove('hidden');

    if (step === 3) {
        // Update PIN screen
        const methodNames = { gpay: 'Google Pay', paytm: 'Paytm', phonepe: 'PhonePe', bhim: 'BHIM UPI' };
        const methodEmojis = { gpay: '💙', paytm: '💎', phonepe: '💜', bhim: '💚' };
        document.getElementById('selectedMethodDisplay').innerHTML = `
            <span>${methodEmojis[selectedPaymentMethod] || '💳'}</span>
            Paying via ${methodNames[selectedPaymentMethod] || 'UPI'}
        `;
        document.getElementById('pinAmount').textContent = `₹${paymentTotal}`;
        resetPinInputs();
        // Focus first pin input
        setTimeout(() => {
            document.querySelector('.pin-digit[data-index="0"]')?.focus();
        }, 400);
    }
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.method === method);
    });
    document.getElementById('proceedToPin').disabled = false;
}

// PIN Input Logic
function initPinInputs() {
    const pins = document.querySelectorAll('.pin-digit');
    pins.forEach((pin, i) => {
        pin.addEventListener('input', (e) => {
            const val = e.target.value.replace(/\D/g, '');
            e.target.value = val;
            if (val && i < 3) {
                pins[i + 1].focus();
            }
            e.target.classList.toggle('filled', val.length > 0);
            checkPinComplete();
        });

        pin.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && i > 0) {
                pins[i - 1].focus();
                pins[i - 1].value = '';
                pins[i - 1].classList.remove('filled');
                checkPinComplete();
            }
        });

        pin.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 4);
            pasted.split('').forEach((char, idx) => {
                if (pins[idx]) {
                    pins[idx].value = char;
                    pins[idx].classList.add('filled');
                }
            });
            if (pasted.length > 0) pins[Math.min(pasted.length, 3)].focus();
            checkPinComplete();
        });
    });
}

function resetPinInputs() {
    document.querySelectorAll('.pin-digit').forEach(pin => {
        pin.value = '';
        pin.classList.remove('filled');
    });
    document.getElementById('confirmPayBtn').disabled = true;
    document.getElementById('paySpinner').classList.add('hidden');
    document.querySelector('.pay-btn-text').classList.remove('hidden');
}

function checkPinComplete() {
    const pins = document.querySelectorAll('.pin-digit');
    const allFilled = [...pins].every(p => p.value.length === 1);
    document.getElementById('confirmPayBtn').disabled = !allFilled;
}

function processPayment() {
    const btn = document.getElementById('confirmPayBtn');
    btn.disabled = true;
    document.querySelector('.pay-btn-text').classList.add('hidden');
    document.getElementById('paySpinner').classList.remove('hidden');

    // Simulate payment processing
    setTimeout(() => {
        // Generate transaction details
        const txnId = 'TXN-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase();
        const methodNames = { gpay: 'Google Pay', paytm: 'Paytm', phonepe: 'PhonePe', bhim: 'BHIM UPI' };
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
            ' at ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

        document.getElementById('successAmount').textContent = `₹${paymentTotal}`;
        document.getElementById('txnId').textContent = txnId;
        document.getElementById('txnMethod').textContent = methodNames[selectedPaymentMethod] || 'UPI';
        document.getElementById('txnDate').textContent = dateStr;

        goToPayStep(4);
    }, 2500);
}

function closePaymentAndReset() {
    closePayment();
    // Clear cart
    cart = [];
    updateCartUI();
    showToast('Order placed successfully! Thank you 🎂');
}

// Initialize PIN inputs on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initPinInputs();
    // Close payment on overlay click
    document.getElementById('paymentOverlay')?.addEventListener('click', closePayment);

    // Call Button Feedback
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            showToast('Calling Jai Dav Dharthu Bakery... 📞');
        });
    });
});

// ===== 🔥 FIREBASE PHONE AUTH =====
let confirmationResult = null;
let recaptchaVerifier = null;

function setupRecaptcha() {
    if (!recaptchaVerifier) {
        recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved - will auto-proceed
            }
        });
    }
}

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    if (phoneNumber.length !== 10) {
        showToast('Please enter a valid 10-digit number 📱');
        return;
    }

    const fullPhoneNumber = '+91' + phoneNumber;
    document.getElementById('otpSpinner').classList.remove('hidden');
    document.getElementById('sendOtpBtn').disabled = true;

    setupRecaptcha();

    const appVerifier = recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(fullPhoneNumber, appVerifier)
        .then((result) => {
            confirmationResult = result;
            document.getElementById('otpSpinner').classList.add('hidden');
            document.getElementById('sendOtpBtn').disabled = false;
            document.getElementById('sentPhoneDisplay').textContent = fullPhoneNumber;
            goToPayStep(2); // Go to OTP screen
            showToast('OTP sent successfully! 📩');

            // Focus first OTP digit
            setTimeout(() => document.querySelector('.otp-digit').focus(), 500);
        }).catch((error) => {
            document.getElementById('otpSpinner').classList.add('hidden');
            document.getElementById('sendOtpBtn').disabled = false;
            console.error("SMS Error:", error);
            if (error.code === 'auth/operation-not-allowed') {
                showToast('⚠️ Phone Auth not enabled in Firebase Console!');
            } else {
                showToast('Error sending OTP. Try again.');
            }
            if (recaptchaVerifier) {
                recaptchaVerifier.clear();
                recaptchaVerifier = null;
            }
        });
}

function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-digit');
    let otp = '';
    otpInputs.forEach(input => otp += input.value);

    if (otp.length !== 6) {
        showToast('Please enter 6-digit OTP');
        return;
    }

    document.getElementById('verifySpinner').classList.remove('hidden');
    document.getElementById('verifyOtpBtn').disabled = true;

    confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        document.getElementById('verifySpinner').classList.add('hidden');
        showToast('Phone verified! ✅');
        goToPayStep(3); // Go to Payment Method
    }).catch((error) => {
        document.getElementById('verifySpinner').classList.add('hidden');
        document.getElementById('verifyOtpBtn').disabled = false;
        showToast('Invalid OTP. Please try again ❌');
        console.error(error);
    });
}

function initOtpInputs() {
    const inputs = document.querySelectorAll('.otp-digit');
    inputs.forEach((input, i) => {
        input.addEventListener('input', (e) => {
            const val = e.target.value.replace(/\D/g, '');
            e.target.value = val;
            if (val && i < 5) inputs[i + 1].focus();
            checkOtpComplete();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && i > 0) {
                inputs[i - 1].focus();
            }
        });

        // Allow paste
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
            pasted.split('').forEach((char, idx) => {
                if (inputs[idx]) {
                    inputs[idx].value = char;
                }
            });
            checkOtpComplete();
            if (pasted.length > 0) inputs[Math.min(pasted.length, 5)].focus();
        });
    });
}

function checkOtpComplete() {
    const inputs = document.querySelectorAll('.otp-digit');
    const allFilled = [...inputs].every(i => i.value.length === 1);
    document.getElementById('verifyOtpBtn').disabled = !allFilled;
}

// Init OTP listeners on load
document.addEventListener('DOMContentLoaded', () => {

    // ===== 💳 REAL PAYMENT LOGIC (UPI) =====
    window.goToPayStep = function (step) {
        document.querySelectorAll('.payment-step').forEach(s => s.classList.add('hidden'));
        document.getElementById(`payStep${step}`).classList.remove('hidden');

        if (step === 4) { // Real Payment Step (UPI)
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
            document.getElementById('pinAmount').textContent = `₹${paymentTotal}`;

            setupRealPayment();
        }
    };

    function setupRealPayment() {
        // UPI Configuration
        const upiId = '8988221818@upi';
        const name = 'Jai Dav Dharthu Bakery';
        const amount = paymentTotal;

        // Construct UPI Deep Link
        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

        // Generate QR Code URL
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
        const qrImg = document.getElementById('paymentQrCode');
        if (qrImg) qrImg.src = qrUrl;

        // Check Device Type (Mobile Check)
        const isMobile = window.innerWidth <= 768;

        const qrSection = document.getElementById('paymentQrSection');
        const appSection = document.getElementById('paymentAppSection');
        const payBtn = document.getElementById('payNowBtn');

        if (isMobile) {
            // Mobile: Show "Open App" button logic
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
            // Desktop: Show QR Code
            if (qrSection) qrSection.classList.remove('hidden');
            if (appSection) appSection.classList.add('hidden');

            // Hide primary button, rely on manual confirm link
            if (payBtn) payBtn.classList.add('hidden');
        }
    }

    window.confirmManualPayment = function () {
        // Simulate Success Transition
        const spinner = document.getElementById('paySpinner');
        if (spinner) spinner.classList.remove('hidden');

        setTimeout(() => {
            // Generate Details
            const txnId = 'TXN-' + Date.now().toString().slice(-8) + Math.round(Math.random() * 1000);
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
                ' at ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

            document.getElementById('successAmount').textContent = `₹${paymentTotal}`;
            document.getElementById('txnId').textContent = txnId;
            document.getElementById('txnMethod').textContent = (selectedPaymentMethod || 'UPI').toUpperCase();
            document.getElementById('txnDate').textContent = dateStr;

            // Show Success Screen (Step 5 now)
            document.querySelectorAll('.payment-step').forEach(s => s.classList.add('hidden'));
            document.getElementById('payStep5').classList.remove('hidden');

        }, 1500);
    };

    // Initiate from button
    window.initiateRealPayment = function () {
        // Just triggers the onclick logic again if needed, or handles desktop click
        // For mobile, onclick is already set. For desktop, button is hidden.
        // This is valid just in case element didn't hide.
        setupRealPayment();
    };

    initOtpInputs();
});
