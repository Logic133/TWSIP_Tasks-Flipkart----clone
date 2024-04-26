// JavaScript file for Flipkart Clone website

// Function to handle search functionality
function searchProducts() {
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', function() {
        const searchQuery = searchBox.value.trim();
        if (searchQuery !== '') {
            // Perform search operation (you can define your own logic here)
            console.log('Searching for:', searchQuery);
        } else {
            // If search query is empty, do nothing
            console.log('Please enter a search query.');
        }
    });
}

// Function to handle user login
function userLogin() {
    const loginBtn = document.querySelector('.login button');

    loginBtn.addEventListener('click', function() {
        // Redirect to login page or show login modal (you can define your own logic here)
        console.log('Redirecting to login page...');
    });
}

// Function to handle navigation to seller registration page
function becomeSeller() {
    const becomeSellerBtn = document.querySelector('.become-seller');

    becomeSellerBtn.addEventListener('click', function() {
        // Redirect to seller registration page (you can define your own logic here)
        console.log('Redirecting to seller registration page...');
    });
}

// Function to handle navigation to cart page
function goToCart() {
    const cartBtn = document.querySelector('.cart');

    cartBtn.addEventListener('click', function() {
        // Redirect to cart page (you can define your own logic here)
        console.log('Redirecting to cart page...');
    });
}

// Function to initialize event listeners
function init() {
    searchProducts();
    userLogin();
    becomeSeller();
    goToCart();
}

// Initialize the functionality when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
// JavaScript file for Flipkart Clone website

// Function to handle search functionality
function searchProducts() {
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', function() {
        const searchQuery = searchBox.value.trim();
        if (searchQuery !== '') {
            // Perform search operation (you can define your own logic here)
            console.log('Searching for:', searchQuery);
        } else {
            // If search query is empty, do nothing
            console.log('Please enter a search query.');
        }
    });
}

// Function to handle user login
function userLogin() {
    const loginBtn = document.querySelector('.login button');

    loginBtn.addEventListener('click', function() {
        // Redirect to login page or show login modal (you can define your own logic here)
        console.log('Redirecting to login page...');
    });
}

// Function to handle navigation to seller registration page
function becomeSeller() {
    const becomeSellerBtn = document.querySelector('.become-seller');

    becomeSellerBtn.addEventListener('click', function() {
        // Redirect to seller registration page (you can define your own logic here)
        console.log('Redirecting to seller registration page...');
    });
}

// Function to handle navigation to cart page
function goToCart() {
    const cartBtn = document.querySelector('.cart');

    cartBtn.addEventListener('click', function() {
        // Redirect to cart page (you can define your own logic here)
        console.log('Redirecting to cart page...');
    });
}

// Function to handle adding a product to the cart
function addToCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productTitle = button.dataset.title;
            const productPrice = button.dataset.price;

            // Perform logic to add product to cart (you can define your own logic here)
            console.log('Adding', productTitle, 'to cart. Price:', productPrice);
        });
    });
}

// Function to initialize event listeners
function init() {
    searchProducts();
    userLogin();
    becomeSeller();
    goToCart();
    addToCart();
}

// Initialize the functionality when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
