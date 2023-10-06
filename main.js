let pizzaType = document.getElementById('pizza-type');
let pizzaTopping = document.getElementById('pizza-topping');
let totalDisplay = document.getElementById('total');
let pizzaImage = document.getElementById('pizza-image');

//preço pizza

let pizzaPrices = {
    margherita: 30.00,
    pepperoni: 22.00,
    veggie: 21.00
};

//preço recheio

let toppingPrices = {
    queijo: 20.50,
    tomate: 5.00,
    cebola: 5.00
};

//imagens pizzas

let pizzaImages = {
    margherita: './images/margherita.jpg',
    peperoni: './images/peperoni.webp',
    vegetariana: './images/vegetariana.jpg'
};

//preço total das pizzas

function updateTotal() {
    let pizzaPrice = pizzaPrices[pizzaType.value] || 0;
    let toppingPrice = toppingPrices[pizzaTopping.value] || 0;
    let total = pizzaPrice + toppingPrice;
    totalDisplay.textContent = total.toFixed(2);
    updatePizzaImage(pizzaType.value);
}

//troca de imagem

function updatePizzaImage(pizzaType) {
    let imageUrl = pizzaImages[pizzaType];
    pizzaImage.src = imageUrl;
}

pizzaType.addEventListener('change', updateTotal);
pizzaTopping.addEventListener('change', updateTotal);
