const menu = document.getElementById("menu");
const cartItemsList = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const checkoutButton = document.getElementById("checkout");

let cart = [];

const menuItems = [
    {
        id: 1,
        name: "Pasta Carbonara",
        price: 12,
        image:"Pasta.jpeg"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        price: 10,
        image:"pizza.jpeg"
    },
    {
        id: 3,
        name: "Peppy Paneer Pizza",
        price: 15,
        image:"peppy.jpeg"
    },
    {
        id:4,
        name:"French fries",
        price:10,
        image:"french.jpeg"
    }
    // Add more menu items here
];

// Populate menu items
menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<img src="${item.image}"alt="${item.name}"><h3>${item.name}</h3><p>$${item.price}</p>`;
    menuItem.addEventListener("click", () => addToCart(item));
    menu.appendChild(menuItem);
});

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(cartItem);
        total += item.price;
    });

    totalElement.innerText = `$${total}`;
}

checkoutButton.addEventListener("click", () => {
    alert("Thank you for your order!");
    cart = [];
    updateCart();
});
