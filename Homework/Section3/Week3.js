const { get } = require("http");

// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Pepperoni", "Sausage", "Peppers", "Mushrooms"];

// Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  let message = "Welcome to Real Good Pizza, our toppings are: "
  for (let topping of pizzaToppings) {
    message += `${topping}, `;
  }
  console.log(message);
};

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...numOfToppings) {
let message =`One ${size} ${crust} pizza with `
  for (let topping of numOfToppings) {
    message += `${topping}, `
  }
  console.log(`${message} ...coming up!`);
  return [size, crust, numOfToppings]
};

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings


function preparePizza(getPizzaOrder) {
  console.log("...cooking pizza");
  let order = {
  size: orderSize,
  crust: orderCrust,
  toppings: orderToppings
  }
  return order
  };

// Create a servePizza function that has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e.
// "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//  outputs the same pizza Object that was passed in

function servePizza(preparePizza) {
  let message = `Order up! Here's your ${order.size} ${order.crust} crust pizza with`
  for (let toppings of order.toppings) {
    message += `${toppings} `
  }
  console.log("... Enjoy!");
}

greetCustomer();
getPizzaOrder("Large", "Thick Crust", ["Pepperoni, Sausage, Peppers"]);
preparePizza(getPizzaOrder());
servePizza();
