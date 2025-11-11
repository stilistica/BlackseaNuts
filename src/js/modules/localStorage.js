export function getBasket() {
  return JSON.parse(localStorage.getItem("basket")) || [];
}

export function setBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

export function updateBasketCounter() {
  const basketCounter = document.querySelectorAll(".basket-calculator");
  const basket = getBasket();

  const totalCount = basket.reduce((sum, product) => {
    return sum + (product.quantity || 1);
  }, 0);
  basketCounter.forEach((el) => (el.textContent = totalCount));
}

updateBasketCounter();
