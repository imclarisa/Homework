

const pizzaToppings = ["Pepperoni", "Sausage", "Peppers", "Mushrooms"];
let message = "Welcome to Real Good Pizza, our toppings are: "
function greetCustomer() {
  for (let topping of pizzaToppings) {
    message += `${topping}, `;
  }
  console.log(message);
};

function pizzaOrder(size, crust, numOfToppings) {
  size: "Large",
  crust: "Thick Crust",
  numOfToppings: "3 Topping"

  console.log("size, " + "crust, " "numOfToppings " + "pizza coming up!");
};

const pizOrder = {
  size: "Large",
  crust: "Thick Crust",
  Tops: "Pepperoni, Sausage, Mushrooms";
};
function preparePizza(pizOrder) {
  console.log('${pizOrder}' + "...Coming Right Up!");
};

function servePizza() {
  console.log("The " + ${pizOrder} + " is ready! Enjoy!");
};

greetCustomer();
pizzaOrder();
preparePizza();
servePizza();
// I know my code is incorrect at the moment but I did my best with what I could understand.
// The second function is definitely throwing a wrench in the code. I tried :/

