// Product data
const products = [
    {
        id: 1,
        name: 'Facial Cleanser',
        price: 2407.00,
        originalPrice: 3237.00,
        rating: 5,
        reviews: 5170,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03'
    },
    {
        id: 2,
        name: 'Bio-shroom Rejuvenating Serum',
        price: 2407.00,
        originalPrice: 3237.00,
        rating: 5,
        reviews: 5170,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Coffee Bean Caffeine Eye Cream',
        price: 2407.00,
        originalPrice: 3237.00,
        rating: 4,
        reviews: 4280,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd'
    },
    {
        id: 4,
        name: 'Hydrating Face Moisturizer',
        price: 1899.00,
        originalPrice: 2499.00,
        rating: 5,
        reviews: 3890,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        name: 'Vitamin C Brightening Serum',
        price: 2899.00,
        originalPrice: 3499.00,
        rating: 5,
        reviews: 4150,
        discount: 15,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        name: 'Retinol Night Cream',
        price: 3199.00,
        originalPrice: 3999.00,
        rating: 4,
        reviews: 3670,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050'
    },
    {
        id: 7,
        name: 'Hyaluronic Acid Serum',
        price: 1999.00,
        originalPrice: 2499.00,
        rating: 5,
        reviews: 4890,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 8,
        name: 'Green Tea Face Mask',
        price: 1499.00,
        originalPrice: 1999.00,
        rating: 4,
        reviews: 2980,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 9,
        name: 'Rose Water Toner',
        price: 999.00,
        originalPrice: 1299.00,
        rating: 5,
        reviews: 5240,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 10,
        name: 'Niacinamide Serum',
        price: 1799.00,
        originalPrice: 2299.00,
        rating: 5,
        reviews: 3760,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1626783416763-67a92e5e7266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 11,
        name: 'Aloe Vera Gel',
        price: 899.00,
        originalPrice: 1199.00,
        rating: 4,
        reviews: 2890,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1566958769312-82cef41d19ef?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 12,
        name: 'Charcoal Face Mask',
        price: 1299.00,
        originalPrice: 1599.00,
        rating: 4,
        reviews: 3150,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1584949514123-474cfa705dfe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1617897903246-719242758050'
    },
    {
        id: 13,
        name: 'Tea Tree Oil',
        price: 799.00,
        originalPrice: 999.00,
        rating: 5,
        reviews: 4120,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 14,
        name: 'Cucumber Face Mist',
        price: 699.00,
        originalPrice: 899.00,
        rating: 4,
        reviews: 2760,
        discount: 22,
        image: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 15,
        name: 'Anti-Aging Night Serum',
        price: 2999.00,
        originalPrice: 3599.00,
        rating: 5,
        reviews: 3980,
        discount: 17,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 13,
        name: 'Coconut Oil',
        price: 799.00,
        originalPrice: 999.00,
        rating: 5,
        reviews: 4120,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1609175214983-594001465d18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

// Shopping cart and wishlist state
let cartItems = [];
let wishlistItems = [];
let quickViewProduct = null;

// Render products with enhanced features
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; 
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-actions">
                        <button onclick="addToCart(${product.id})" class="action-button">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        <button onclick="addToWishlist(${product.id})" class="action-button">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button onclick="showQuickView(${product.id})" class="action-button">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="price-info">
                        <span class="current-price">₹${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <h3>${product.name}</h3>
                    <div class="rating">
                        ${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}
                        <span class="review-count">${product.reviews} reviews</span>
                    </div>
                </div>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', productCard);
    });
}

// Quick view functionality
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quickViewHtml = `
        <div class="quick-view-overlay" onclick="closeQuickView()">
            <div class="quick-view-modal" onclick="event.stopPropagation()">
                <button class="close-button" onclick="closeQuickView()">×</button>
                <div class="quick-view-content">
                    <div class="quick-view-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="quick-view-details">
                        <h2>${product.name}</h2>
                        <div class="price-info">
                            <span class="current-price">₹${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <div class="rating">
                            ${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}
                            <span class="review-count">${product.reviews} reviews</span>
                        </div>
                        <div class="product-description">
                            <h3>Product Description</h3>
                            <p>Experience the power of natural skincare with our ${product.name}. Made with premium ingredients to give you the best results.</p>
                        </div>
                        <div class="quantity-selector">
                            <label>Quantity:</label>
                            <div class="quantity-controls">
                                <button onclick="updateQuantity('decrease')">-</button>
                                <input type="number" value="1" min="1" id="quantity-input">
                                <button onclick="updateQuantity('increase')">+</button>
                            </div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCartFromQuickView(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', quickViewHtml);
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const overlay = document.querySelector('.quick-view-overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = '';
    }
}

function updateQuantity(action) {
    const input = document.querySelector('#quantity-input');
    let value = parseInt(input.value);
    
    if (action === 'increase') {
        input.value = value + 1;
    } else if (action === 'decrease' && value > 1) {
        input.value = value - 1;
    }
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cartItems.push(product);
        updateCart();
        showNotification('Product added to cart!');
    }
}

function addToCartFromQuickView(productId) {
    const quantity = parseInt(document.querySelector('#quantity-input').value);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        for (let i = 0; i < quantity; i++) {
            cartItems.push(product);
        }
        updateCart();
        closeQuickView();
        showNotification('Products added to cart!');
    }
}

function updateCart() {
    const cartBadge = document.querySelector('.cart-link .badge');
    const cartTotal = document.querySelector('.cart-total');
    
    cartBadge.textContent = cartItems.length;
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

// Wishlist functionality
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const exists = wishlistItems.some(item => item.id === productId);
        if (!exists) {
            wishlistItems.push(product);
            updateWishlist();
            showNotification('Product added to wishlist!');
        } else {
            showNotification('Product already in wishlist!');
        }
    }
}

function updateWishlist() {
    const wishlistBadge = document.querySelector('.wishlist-link .badge');
    wishlistBadge.textContent = wishlistItems.length;
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderFilteredProducts(filteredProducts);
    });
}

function renderFilteredProducts(filteredProducts) {
    const productGrid = document.querySelector('.product-grid');
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="no-results">No products found</div>';
        return;
    }
    renderProducts(filteredProducts);
}

// Newsletter subscription
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = document.querySelector('#newsletter-email');
    if (emailInput.value) {
        showNotification('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initSmoothScroll();
    initSearch();
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('#newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
});

// Smooth scroll functionality
function initSmoothScroll() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}