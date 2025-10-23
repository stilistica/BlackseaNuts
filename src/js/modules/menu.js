import logo from "../../img/logo.svg";
import sprite from "../../img/sprite.svg";

const btnOpenMenu = document.querySelector(".header-mob__two-menu");
const headerMob = document.querySelector(".header-mob");

function openModal() {
  const modal = document.createElement("div");
  modal.classList.add("header-mob-burger");
  modal.innerHTML = `
	<div class="header-mob-burger__first">
      <a href="./" aria-label="home" class="header-mob-burger__first-logo">
        <img src="${logo}" alt="logo" />
      </a>
      <button class="header-mob-burger__first-close">
        <svg>
          <use href="${sprite}#icon-close"></use>
        </svg>
      </button>
    </div>
    <div class="header-mob-burger__two">
      <div class="header-mob-burger__two-acc">
        <p class="header-mob-burger__two-acc-exit">
          <svg>
            <use href="${sprite}#icon-entrance"></use>
          </svg>
          Вход
        </p>
        <p class="header-mob-burger__two-acc-reg">Регистрация</p>
      </div>
      <ul class="header-mob-burger__two-soc">
        <li>
          <a href="#" aria-label="facebook">
            <svg>
              <use href="${sprite}#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="instagram">
            <svg>
              <use href="${sprite}#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" aria-label="youtube">
            <svg>
              <use href="${sprite}#icon-youtube"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <ul class="header-mob-burger__three">
      <li><a href="./about.html" aria-label="link">Магазин</a></li>
      <li><a href="./about.html" aria-label="link">О производстве</a></li>
      <li><a href="./about.html" aria-label="link">Оплата и доставка</a></li>
      <li><a href="./about.html" aria-label="link">Оптовым и корпоративным клиентам</a></li>
      <li><a href="./about.html" aria-label="link">Новости и статьи</a></li>
      <li><a href="./about.html" aria-label="link">Контакты</a></li>
    </ul>`;
  // document.body.appendChild(modal);
  headerMob.appendChild(modal);

  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  const btnCloseMenu = modal.querySelector(".header-mob-burger__first-close");
  btnCloseMenu.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      modal.classList.remove("active");
    }
  });
}

if (btnOpenMenu) {
  btnOpenMenu.addEventListener("click", openModal);
}
