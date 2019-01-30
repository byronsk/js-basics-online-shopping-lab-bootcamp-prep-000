var cart = [];

function getCart() {
 return cart;
}


function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item){
  var itemPrice = Math.floor((Math.random()) * 100);
  var obj = JSON.parse({ [itemName]: itemPrice});
  cart.push(obj);
  console.log(`${itemName}`+ "has been added to your cart.");
  return cart;
}



function viewCart() {
  var cartTotal 
}


function total() {
  var total = 0;
for (var i = 0; i < cart.length; i++) {
  console.log(cart[i].itemPrice + ".");
  total += cart[i].itemPrice;
}
}

function removeFromCart(item) {

}

function placeOrder() {
}
