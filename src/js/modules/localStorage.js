export function getBasket() {
  return JSON.parse(localStorage.getItem("basket")) || [];
}

export function setBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

export function updateBasketCounter() {
  const basketCounter = document.querySelectorAll(".basket-calculator");
  const basket = getBasket();

  basketCounter.forEach((el) => (el.textContent = basket.length));
}

updateBasketCounter();
