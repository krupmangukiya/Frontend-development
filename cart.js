// cart.js

// Sample products (you can replace this with your actual product data)
const products = [
    { id: 1, name: 'Product 1', price: 49.99 },
    { id: 2, name: 'Product 2', price: 59.99 },
    // Add more products here
];

const cart = [];
let total = 0;

// Function to add an item to the cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        total += product.price;
        updateCart();
    }
}

// Function to update the cart in the HTML
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Add event listeners
document.getElementById('checkout-button').addEventListener('click', () => {
    // Implement the checkout process (e.g., sending order to a server)
    alert('Proceeding to checkout...');
});

// You can add more event listeners for adding items to the cart