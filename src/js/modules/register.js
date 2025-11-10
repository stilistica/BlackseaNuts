const countryActiveRegister = document.querySelector(
  ".register-container__one-adress-forms-input-country-active"
);
const countryVariantRegister = document.querySelector(
  ".register-container__one-adress-forms-input-country-variant"
);
const regionActiveRegister = document.querySelector(
  ".register-container__one-adress-forms-input-region-active"
);
const regionVariantRegister = document.querySelector(
  ".register-container__one-adress-forms-input-region-variant"
);

function initCustomSelectRegister(activeSelector, listSelector, itemSelector) {
  const active = document.querySelector(activeSelector);
  const list = document.querySelector(listSelector);
  const items = document.querySelectorAll(itemSelector);

  if (!active || !list || !items.length) return;

  active.addEventListener("click", () => {
    list.classList.toggle("active");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const textEl = active.querySelector("p");
      if (textEl) textEl.textContent = item.textContent;

      list.classList.remove("active");
    });
  });
}

if (countryActiveRegister) {
  //   КРАЇНА
  initCustomSelectRegister(
    ".register-container__one-adress-forms-input-country-active",
    ".register-container__one-adress-forms-input-country-variant",
    ".register-container__one-adress-forms-input-country-variant li"
  );
}
if (regionActiveRegister) {
  //   ОБЛАСТЬ
  initCustomSelectRegister(
    ".register-container__one-adress-forms-input-region-active",
    ".register-container__one-adress-forms-input-region-variant",
    ".register-container__one-adress-forms-input-region-variant li"
  );
}

// TABS register

const tabsRegister = document.querySelectorAll(
  ".register-container__one-contact-tabs li"
);
const containerTabsRegister = document.querySelector(
  ".register-container__two-variant"
);
const containerVariantRegister = document.querySelector(
  ".register-container__two-other"
);

if (tabsRegister && tabsRegister) {
  tabsRegister[0].classList.add("active");
  containerTabsRegister.innerHTML = `
    <label class="register-container__two-variant-fiz">
      <input type="checkbox" name="fop" />
      Являюсь ФОП
    </label>
	`;
  containerVariantRegister.style.display = "none";

  tabsRegister.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabsRegister.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      if (tab === tabsRegister[0]) {
        tabsRegister[0].classList.add("active");
        containerTabsRegister.innerHTML = `
    <label class="register-container__two-variant-fiz">
      <input type="checkbox" name="fop" />
      Являюсь ФОП
    </label>
	`;
        containerVariantRegister.style.display = "none";
        containerVariantRegister.innerHTML = "";
      }

      if (tab === tabsRegister[1]) {
        tabsRegister[1].classList.add("active");
        containerTabsRegister.innerHTML = `
          <div class="register-container__two-variant-fop">
            <label>
              <input type="radio" name="personType" value="company" />
              Юр. лицо
            </label>

            <label>
              <input type="radio" name="personType" value="fop" />
              ФОП
            </label>
          </div>
	`;
        containerVariantRegister.style.display = "block";

        const companyInput = containerTabsRegister.querySelector(
          'input[value="company"]'
        );
        companyInput.checked = true;
        containerVariantRegister.innerHTML = `
        <div class="register-container__two-other-ur register-container__two-other-variant">
            <div class="register-container__two-other-ur-rec register-container__two-other-variant-rec">
              <h2>1. Реквизиты</h2>
              <input type="text" name="recRegister" placeholder="ОКПО" />
            </div>
            <div class="register-container__two-other-ur-adress register-container__two-other-variant-adress">
              <h2>2. Юридический адрес</h2>
              <div class="register-container__two-other-ur-adress-forms register-container__two-other-variant-adress-forms">
                <div
                  class="register-container__two-other-ur-adress-forms-country register-container__two-other-variant-adress-forms-country"
                >
                  <div
                    class="register-container__two-other-ur-adress-forms-country-active
                    register-container__two-other-variant-adress-forms-country-active"
                  >
                    <p>Страна</p>
                    <svg>
                      <use href="../img/sprite.svg#icon-arrow-b"></use>
                    </svg>
                  </div>
                  <ul
                    class="register-container__two-other-ur-adress-forms-country-variant
                    register-container__two-other-variant-adress-forms-country-variant"
                  >
                    <li>Украина</li>
                    <hr />
                    <li>Польша</li>
                    <hr />
                    <li>Молдова</li>
                  </ul>
                </div>
                <div
                  class="register-container__two-other-ur-adress-forms-region
                  register-container__two-other-variant-adress-forms-region"
                >
                  <div
                    class="register-container__two-other-ur-adress-forms-region-active
                    register-container__two-other-variant-adress-forms-region-active"
                  >
                    <p>Область</p>
                    <svg>
                      <use href="../img/sprite.svg#icon-arrow-b"></use>
                    </svg>
                  </div>
                  <ul
                    class="register-container__two-other-ur-adress-forms-region-variant
                    register-container__two-other-variant-adress-forms-region-variant"
                  >
                    <li>Киевская</li>
                    <hr />
                    <li>Одесская</li>
                  </ul>
                </div>
                <input
                  type="text"
                  name="cityRegister"
                  placeholder="Город*"
                  required
                />
                <input type="text" name="adressRegister" placeholder="Адрес" />
                <input type="text" name="indexRegister" placeholder="Индекс" />
              </div>
            </div>
          </div>
        `;

        const radioButtons = containerTabsRegister.querySelectorAll(
          'input[name="personType"]'
        );

        radioButtons.forEach((radio) => {
          radio.addEventListener("change", (e) => {
            if (e.target.value === "company") {
              containerVariantRegister.innerHTML = `
<div class="register-container__two-other-ur register-container__two-other-variant">
            <div class="register-container__two-other-ur-rec register-container__two-other-variant-rec">
              <h2>1. Реквизиты</h2>
              <input type="text" name="recRegister" placeholder="ОКПО" />
            </div>
            <div class="register-container__two-other-ur-adress register-container__two-other-variant-adress">
              <h2>2. Юридический адрес</h2>
              <div class="register-container__two-other-ur-adress-forms register-container__two-other-variant-adress-forms">
                <div
                  class="register-container__two-other-ur-adress-forms-country register-container__two-other-variant-adress-forms-country"
                >
                  <div
                    class="register-container__two-other-ur-adress-forms-country-active
                    register-container__two-other-variant-adress-forms-country-active"
                  >
                    <p>Страна</p>
                    <svg>
                      <use href="../img/sprite.svg#icon-arrow-b"></use>
                    </svg>
                  </div>
                  <ul
                    class="register-container__two-other-ur-adress-forms-country-variant
                    register-container__two-other-variant-adress-forms-country-variant"
                  >
                    <li>Украина</li>
                    <hr />
                    <li>Польша</li>
                    <hr />
                    <li>Молдова</li>
                  </ul>
                </div>
                <div
                  class="register-container__two-other-ur-adress-forms-region
                  register-container__two-other-variant-adress-forms-region"
                >
                  <div
                    class="register-container__two-other-ur-adress-forms-region-active
                    register-container__two-other-variant-adress-forms-region-active"
                  >
                    <p>Область</p>
                    <svg>
                      <use href="../img/sprite.svg#icon-arrow-b"></use>
                    </svg>
                  </div>
                  <ul
                    class="register-container__two-other-ur-adress-forms-region-variant
                    register-container__two-other-variant-adress-forms-region-variant"
                  >
                    <li>Киевская</li>
                    <hr />
                    <li>Одесская</li>
                  </ul>
                </div>
                <input
                  type="text"
                  name="cityRegister"
                  placeholder="Город*"
                  required
                />
                <input type="text" name="adressRegister" placeholder="Адрес" />
                <input type="text" name="indexRegister" placeholder="Индекс" />
              </div>
            </div>
          </div>
              `;
            } else if (e.target.value === "fop") {
              containerVariantRegister.innerHTML = `
                        <div class="register-container__two-other-fop register-container__two-other-variant">
            <div class="register-container__two-other-fop-rec register-container__two-other-variant-rec">
              <h2>1. Реквизиты</h2>
              <input type="text" name="recRegister" placeholder="ЕДРПО" />
            </div>
            <div class="register-container__two-other-fop-adress register-container__two-other-variant-adress">
              <h2>2. Адрес ФОП</h2>
              <div class="register-container__two-other-fop-adress-forms
              register-container__two-other-variant-adress-forms">
                <div
                  class="register-container__two-other-fop-adress-forms-country
                  register-container__two-other-variant-adress-forms-country"
                >
                  <div
                    class="register-container__two-other-fop-adress-forms-country-active
                    register-container__two-other-variant-adress-forms-country-active"
                  >
                    <p>Страна</p>
                    <svg>
                      <use href="../img/sprite.svg#icon-arrow-b"></use>
                    </svg>
                  </div>
                  <ul
                    class="register-container__two-other-fop-adress-forms-country-variant
                    register-container__two-other-variant-adress-forms-country-variant"
                  >
                    <li>Украина</li>
                    <hr />
                    <li>Польша</li>
                    <hr />
                    <li>Молдова</li>
                  </ul>
                </div>
                <div
                  class="register-container__two-other-fop-adress-forms-region
                  register-container__two-other-variant-adress-forms-region"
                >
                  <div
                    class="register-container__two-other-fop-adress-forms-region-active
                    register-container__two-other-variant-adress-forms-region-active"
                  >
                    <p>Область</p>
                    <svg>
                      <use href="../img/sprite.svg#icon-arrow-b"></use>
                    </svg>
                  </div>
                  <ul
                    class="register-container__two-other-fop-adress-forms-region-variant
                    register-container__two-other-variant-adress-forms-region-variant"
                  >
                    <li>Киевская</li>
                    <hr />
                    <li>Одесская</li>
                  </ul>
                </div>
                <input
                  type="text"
                  name="cityRegister"
                  placeholder="Город*"
                  required
                />
                <input type="text" name="adressRegister" placeholder="Адрес" />
              </div>
            </div>
          </div>`;
            }
          });
        });

        const countryActiveOne = document.querySelector(
          ".register-container__two-other-ur-adress-forms-country-active"
        );
        const regionActiveOne = document.querySelector(
          ".register-container__two-other-ur-adress-forms-region-active"
        );

        if (countryActiveOne) {
          initCustomSelectRegister(
            ".register-container__two-other-ur-adress-forms-country-active",
            ".register-container__two-other-ur-adress-forms-country-variant",
            ".register-container__two-other-ur-adress-forms-country-variant li"
          );
        }
        if (regionActiveOne) {
          initCustomSelectRegister(
            ".register-container__two-other-ur-adress-forms-region-active",
            ".register-container__two-other-ur-adress-forms-region-variant",
            ".register-container__two-other-ur-adress-forms-region-variant li"
          );
        }
      }
    });
  });
}
