var productos = [
  {
    "item": "Juan Jaramillo &reg Box",
    "price": 135000
  },
  {
    "item": "Siam &reg Bouquet",
    "price": 125000
  },
  {
    "item": "Rastacuando &reg Cake",
    "price": 155000
  },
  {
    "item": "Alberto Plaza &reg Box",
    "price": 155000
  },
  {
    "item": "Friends Bouquet",
    "price": 230000
  },
  {
    "item": "Calamares &reg Cake",
    "price": 350000
  },
  {
    "item": "M Box Chocolates",
    "price": 95000
  },
  {
    "item": "Golden Bouquet",
    "price": 200000
  },
  {
    "item": "Super Mario Cake",
    "price": 285000
  },
  {
    "item": "M Box variety",
    "price": 85000
  },
  {
  "item": "Sunflower Love",
  "price": 128000
  },
  {
  "item": "Graduation Cake",
  "price": 400000
  },
  {
  "item": "Love Box",
  "price": 75000
  },
  {
  "item": "Red Sun Bouquet",
  "price": 185000
  },
  {
  "item": "Florky Graduated Cake",
  "price": 58000
  },
  {
  "item": "Heart Box",
  "price": 64500
  },
  {
  "item": "Fruits Bouquet",
  "price": 165000
  },
  {
  "item": "Florky Birthday Cake",
  "price": 58000
  },
  {
  "item": "Giant HBD",
  "price": 12000
  },
  {
  "item": "Love Bouquet",
  "price": 225000
  },
  {
  "item": "Florky Aunty Cake",
  "price": 58000
  },
  {
  "item": "Metallized Baloon",
  "price": 67000
  },
  {
  "item": "Wine Bouquet",
  "price": 225000
  },
  {
  "item": "Grandma Cake",
  "price": 96000
  },
  {
  "item": "Burrito's Wooden Box",
  "price": 68000
  },
  {
  "item": "Star Bouquet",
  "price": 120000
  },
  {
  "item": "Florky Mom Cake",
  "price": 40000
  },
  {
  "item": "Chocolates Woman",
  "price": 47500
  },
  {
  "item": "Gradient Bouquet",
  "price": 155000
  },
  {
  "item": "Florky Mooring Cake",
  "price": 40000
  },
  {
  "item": "Mustache Chocolates",
  "price": 37000
  },
  {
  "item": "Pineapple Bouquet",
  "price": 135000
  },
  {
  "item": "Strawberry Cake",
  "price": 75000
  },
  {
  "item": "Waffles Box",
  "price": 35000
  },
  {
  "item": "Healthy Bouquet",
  "price": 165000
  },
  {
  "item": "Florky Cookie",
  "price": 8000
  },

];

//  Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // Reomve Items From Cart
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons);
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add To Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Buy Button Work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
// Buy Button

// Reomve Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
// Add To cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- Remove Cart -->
                        <i class='bx bxs-trash-alt cart-remove' ></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// Update Total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  var totalPriceElement = document.getElementsByClassName("total-price")[0];
  totalPriceElement.innerText = "$" + total.toLocaleString() + "000";
}

//Check Out
const checkoutButton = document.getElementById("checkoutButton");

  checkoutButton.addEventListener("click", function () {
    const deliveryOption = prompt("Do you want delivery or takeaway?"); // Ask for delivery or takeaway
    if (deliveryOption) {
      const name = prompt("Enter your name:"); // Ask for name
      if (name) {
        let address = "";
        let phoneNumber = "";

        if (deliveryOption.toLowerCase() === "delivery") {
          address = prompt("Enter your address:"); // Ask for address
          phoneNumber = prompt("Enter your phone number:"); // Ask for telephone number
        }

        const total = document.querySelector(".total-price").textContent; // Get the total price from the element

        alert(`Order Details:\nName: ${name}\nDelivery Option: ${deliveryOption}\nAddress: ${address}\nPhone Number: ${phoneNumber}\nTotal: ${total}`);
      }
    }
  });

