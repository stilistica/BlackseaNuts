import { initCustomSelectRegister } from "./register";

const checkoutRadios = document.querySelectorAll('input[name="deliveryType"]');

const novaDivCheckout = document.querySelector(
  ".checkout-details__delivery-list-nova"
);
const kurDivCheckout = document.querySelector(
  ".checkout-details__delivery-list-kur-div"
);

if (checkoutRadios) {
  checkoutRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      novaDivCheckout.innerHTML = "";
      kurDivCheckout.innerHTML = "";

      if (radio.value === "nova") {
        novaDivCheckout.innerHTML = `
		<div class="register-container__one-adress-forms-input-country
    checkout-details__delivery-list-nova-country">
              <div
                class="register-container__one-adress-forms-input-country-active"
              >
                <p>Страна</p>
                <svg>
                  <use href="../img/sprite.svg#icon-arrow-b"></use>
                </svg>
              </div>
              <ul
                class="register-container__one-adress-forms-input-country-variant"
              >
                <li>Украина</li>
                <hr />
                <li>Польша</li>
                <hr />
                <li>Молдова</li>
              </ul>
            </div>
            <div class="register-container__one-adress-forms-input-region">
              <div
                class="register-container__one-adress-forms-input-region-active"
              >
                <p>Область</p>
                <svg>
                  <use href="../img/sprite.svg#icon-arrow-b"></use>
                </svg>
              </div>
              <ul
                class="register-container__one-adress-forms-input-region-variant"
              >
                <li>Киевская</li>
                <hr />
                <li>Одесская</li>
              </ul>
            </div>`;
      }
      if (radio.value === "kur") {
        kurDivCheckout.innerHTML = `
<input type="text" name="adressCheckout" placeholder="Адрес*" />

		`;
      }

      const countryActiveOne = document.querySelector(
        ".register-container__one-adress-forms-input-country-active"
      );
      const regionActiveOne = document.querySelector(
        ".register-container__one-adress-forms-input-region-active"
      );

      if (countryActiveOne) {
        //   КРАЇНА
        initCustomSelectRegister(
          ".register-container__one-adress-forms-input-country-active",
          ".register-container__one-adress-forms-input-country-variant",
          ".register-container__one-adress-forms-input-country-variant li"
        );
      }
      if (regionActiveOne) {
        //   ОБЛАСТЬ
        initCustomSelectRegister(
          ".register-container__one-adress-forms-input-region-active",
          ".register-container__one-adress-forms-input-region-variant",
          ".register-container__one-adress-forms-input-region-variant li"
        );
      }
    });
  });
}
