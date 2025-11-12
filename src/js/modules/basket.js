import { getBasket, setBasket, updateBasketCounter } from "./localStorage";
import sprite from "../../img/sprite.svg";

const basketDivs = document.querySelectorAll(".basket-div");
if (basketDivs) {
  basketDivs.forEach((div) => {
    const btn = div.querySelector(".basket-btn");
    const popup = div.querySelector(".basket-popup");

    popup.innerHTML = `
	<div class="basket-popup__list"></div>
  <div class="basket-popup__inner">
    <p>
      Всего <span class="basket-popup__inner-total">0 <span>грн.</span></span>
    </p>
    <a href="basket.html" aria-label="basket page">
		Перейти в корзину
    </a>
  </div>
	`;

    const basketList = popup.querySelector(".basket-popup__list");
    const basketTotal = popup.querySelector(".basket-popup__inner-total");

    function renderBasketItems() {
      const basket = getBasket();
      basketList.innerHTML = "";

      let total = 0;
      basket.forEach((product, index) => {
        total += product.price * (product.quantity || 1);

        const item = document.createElement("div");
        item.classList.add("basket-popup__list-item");
        item.innerHTML = `
<p class="basket-popup__list-item-info">${product.name} ${product.weight}г.</p>
<div class="basket-popup__list-item-number">
  <svg class="basket-decrease" data-index="${index}">
    <use href="${sprite}#icon-decrease"></use>
  </svg>
  <p>${product.quantity || 1}</p>
  <svg class="basket-increase" data-index="${index}">
    <use href="${sprite}#icon-increase"></use>
  </svg>
</div>
<p class="basket-popup__list-item-price">${product.price} грн.</p>
<svg class="basket-popup__list-item-delete" data-index="${index}">
  <use href="${sprite}#icon-close"></use>
</svg>
				`;
        basketList.appendChild(item);
      });

      basketTotal.innerHTML = `${total} <span>грн.</span>`;
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      renderBasketItems();
      popup.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".basket-div")) {
        popup.classList.remove("active");
      }
    });

    popup.addEventListener("click", (e) => {
      e.stopPropagation();
      const basket = getBasket();

      const incBtn = e.target.closest(".basket-increase");
      const decBtn = e.target.closest(".basket-decrease");
      const delBtn = e.target.closest(".basket-popup__list-item-delete");

      if (incBtn) {
        const index = incBtn.dataset.index;
        basket[index].quantity++;
      }

      if (decBtn) {
        const index = decBtn.dataset.index;
        if (basket[index].quantity > 1) basket[index].quantity--;
      }

      if (delBtn) {
        const index = delBtn.dataset.index;
        basket.splice(index, 1);
      }

      setBasket(basket);
      updateBasketCounter();
      renderBasketItems();
    });
  });
}

const basketBody = document.querySelector(".basket-table-body");
if (basketBody) {
  function renderBasketTable() {
    const basket = getBasket();
    basketBody.innerHTML = "";

    basket.forEach((product, index) => {
      const quantity = product.quantity || 1;
      const itemTotal = product.price * quantity;

      const tr = document.createElement("div");
      tr.classList.add("basket-table-body-item");

      tr.innerHTML = ` 
    <h3 class="basket-table-body-item-name">
      ${product.name} ${product.weight}г.
    </h3>
    <div class="basket-table-body-item-number">
        <svg class="basket-decrease" data-index="${index}">
          <use href="${sprite}#icon-decrease"></use>
        </svg>
        <span>${quantity}</span>
        <svg class="basket-increase" data-index="${index}">
          <use href="${sprite}#icon-increase"></use>
        </svg>
    </div>
    <p class="basket-table-body-item-price">${product.price} грн.</p>
    <p class="basket-table-body-item-total">${itemTotal} грн.</p>
      `;

      basketBody.appendChild(tr);
    });
  }

  basketBody.addEventListener("click", (e) => {
    const basket = getBasket();
    const incBtn = e.target.closest(".basket-increase");
    const decBtn = e.target.closest(".basket-decrease");
    const delBtn = e.target.closest(".basket-delete");

    if (incBtn) {
      const index = incBtn.dataset.index;
      basket[index].quantity = (basket[index].quantity || 1) + 1;
    }

    if (decBtn) {
      const index = decBtn.dataset.index;
      if (basket[index].quantity > 1) basket[index].quantity--;
    }

    if (delBtn) {
      const index = delBtn.dataset.index;
      basket.splice(index, 1);
    }

    setBasket(basket);
    renderBasketTable();
  });

  renderBasketTable();
}

function getTotalPrice(container) {
  const basket = getBasket();

  const total = basket.reduce((sum, product) => {
    const quantity = product.quantity || 1;
    return sum + product.price * quantity;
  }, 0);

  container.innerHTML = `${total} <span>грн.</span>`;
}
const totalElementBasketPage = document.querySelector(
  ".basketpage__next-inner-total"
);

if (totalElementBasketPage) {
  getTotalPrice(totalElementBasketPage)
}
