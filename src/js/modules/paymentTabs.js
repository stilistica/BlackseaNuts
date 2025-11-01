import { paymentTabsData } from "../arrs/paymentTabs.js";

const tabsPayment = document.querySelectorAll(".payment-tabs__list-item");
const containerPayment = document.querySelector(".payment-tabs__info");

if (tabsPayment && containerPayment) {
  const firstData = paymentTabsData[0];
  tabsPayment[0].classList.add("active");
  containerPayment.innerHTML = `
    <div class="payment-tabs__info-text">
      <h2 class="payment-tabs__info-text-title">${firstData.h}</h2>
      <ul class="payment-tabs__info-text-content">
        <li class="payment-tabs__info-text-content-item">
          <div class="payment-tabs__info-text-content-item-title">
            <svg>
              <use href="../img/sprite.svg#icon-payment-one"></use>
            </svg>
						<h3>${firstData.h1}</h3>
          </div>
					<p>${firstData.p1}</p>
        </li>
        <li class="payment-tabs__info-text-content-item">
          <div class="payment-tabs__info-text-content-item-title">
            <svg>
              <use href="../img/sprite.svg#icon-payment-two"></use>
            </svg>
						<h3>${firstData.h2}</h3>
          </div>
					<p>${firstData.p2}</p>
        </li>
        <li class="payment-tabs__info-text-content-item">
          <div class="payment-tabs__info-text-content-item-title">
            <svg>
              <use href="../img/sprite.svg#icon-payment-three"></use>
            </svg>
						<h3>${firstData.h3}</h3>
          </div>
					<p>${firstData.p3}</p>
        </li>
      </ul>
    </div>
    <div class="payment-tabs__info-img">
      <img src="${firstData.img}" alt="photo" />
    </div>
	`;
  tabsPayment.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabsPayment.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const data = paymentTabsData[index];
      containerPayment.innerHTML = `
			<div class="payment-tabs__info-text">
      <h2 class="payment-tabs__info-text-title">${data.h}</h2>
      <ul class="payment-tabs__info-text-content">
        <li class="payment-tabs__info-text-content-item">
          <div class="payment-tabs__info-text-content-item-title">
            <svg>
              <use href="../img/sprite.svg#icon-payment-one"></use>
            </svg>
						<h3>${data.h1}</h3>
          </div>
					<p>${data.p1}</p>
        </li>
        <li class="payment-tabs__info-text-content-item">
          <div class="payment-tabs__info-text-content-item-title">
            <svg>
              <use href="../img/sprite.svg#icon-payment-two"></use>
            </svg>
						<h3>${data.h2}</h3>
          </div>
					<p>${data.p2}</p>
        </li>
        <li class="payment-tabs__info-text-content-item">
          <div class="payment-tabs__info-text-content-item-title">
            <svg>
              <use href="../img/sprite.svg#icon-payment-three"></use>
            </svg>
						<h3>${data.h3}</h3>
          </div>
					<p>${data.p3}</p>
        </li>
      </ul>
    </div>
    <div class="payment-tabs__info-img">
      <img src="${data.img}" alt="photo" />
    </div>
			`;
    });
  });
}
