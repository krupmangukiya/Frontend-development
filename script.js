// Sample cart data
const cartItems = [{
        name: "Stylish Suit",
        price: 199.99,
        quantity: 1,
        image: "img/t1.avif",
    },
    {
        name: "Casual Shirt",
        price: 49.99,
        quantity: 2,
        image: "img/t2.avif",
    },
];

// Function to display cart items
function displayCart() {
    const cartContainer = document.querySelector(".cart");

    // Clear previous cart items
    cartContainer.innerHTML = "";

    // Iterate through cart items and display them
    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Create image element
        const img = document.createElement("img");
        img.src = item.image;

        // Create item info container
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("cart-item-info");

        // Create item name and price
        const name = document.createElement("h4");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = `$${item.price.toFixed(2)}`;

        infoContainer.appendChild(name);
        infoContainer.appendChild(price);

        // Create quantity input
        const quantity = document.createElement("input");
        quantity.type = "number";
        quantity.value = item.quantity;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.classList.add("cart-button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeItem(item));

        // Append elements to cart item
        cartItem.appendChild(img);
        cartItem.appendChild(infoContainer);
        cartItem.appendChild(quantity);
        cartItem.appendChild(removeButton);

        // Append cart item to the cart container
        cartContainer.appendChild(cartItem);
    });
}

// Function to remove an item from the cart
function removeItem(item) {
    const itemIndex = cartItems.indexOf(item);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        displayCart();
    }
}

// Initial cart display
displayCart();