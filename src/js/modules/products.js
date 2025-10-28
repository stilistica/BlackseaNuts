// import productsData from "../data/products";
import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import sprite from "../../img/sprite.svg";
import img1 from "../../img/components/products/image-1.webp";
import img2 from "../../img/components/products/image-2.webp";
import img3 from "../../img/components/products/image-3.webp";
import img4 from "../../img/components/products/image-4.webp";
import img5 from "../../img/components/products/image-5.webp";
import img6 from "../../img/components/products/image-6.webp";

const productsData = [
  {
    id: "0091",
    name: "Грецкий орех",
    desc: "Орех сладкий, классический, очищенный",
    weight: 40,
    package: "вакуумная",
    price: 19,
    images: [img1, img1],
    promo: {
      type: "sale",
      oldPrice: "21 грн.",
    },
  },
  {
    id: "0092",
    name: "Орех грецкий очищенный",
    desc: "Ядра грецкого ореха премиум-качества.",
    weight: 60,
    package: "крафтовая",
    price: 28,
    images: [img2, img2],
    promo: {
      type: "new",
    },
  },
  {
    id: "0093",
    name: "Микс орехов",
    desc: "Сочетание фундука, миндаля и грецкого ореха.",
    weight: 30,
    package: "крафтовая",
    price: 18,
    images: [img3, img3],
  },
  {
    id: "0191",
    name: "Грецкий орех",
    desc: "Орех сладкий, классический, очищенный",
    weight: 80,
    package: "вакуумная",
    price: 42,
    images: [img4, img4],
  },
  {
    id: "0192",
    name: "Орех грецкий очищенный",
    desc: "Ядра грецкого ореха премиум-качества.",
    weight: 120,
    package: "крафтовая",
    price: 56,
    images: [img5, img5],
  },
  {
    id: "0193",
    name: "Микс орехов",
    desc: "Сочетание фундука, миндаля и грецкого ореха.",
    weight: 60,
    package: "крафтовая",
    price: 36,
    images: [img6, img6],
  },
];

const productContainer = document.querySelector(".products");

if (productContainer) {
  productsData.forEach((product, index) => {
    const item = document.createElement("div");
    item.classList.add("products__item");

    let flag = "";
    if (product.promo?.type === "sale") {
      flag = `
			<div class="products__item-flag products__item-flag-sale">
        <svg>
          <use href="${sprite}#icon-flag"></use>
        </svg>
	      <p>Акция</p>
      </div>
			`;
    } else if (product.promo?.type === "new") {
      flag = `
			<div class="products__item-flag products__item-flag-new">
        <svg>
          <use href="${sprite}#icon-flag"></use>
        </svg>
	      <p>Новинка</p>
      </div>
			`;
    }

    const slides = product.images.map(
      (img) => `
<div class="products__item-image swiper-slide">
  <img src="${img}" alt="${product.name}" />
  <svg class="products__item-image-zoom">
    <use href="../img/sprite.svg#icon-zoom"></use>
  </svg>
</div>
			`
    );

    let priceHtml = `
<div class="products__item-info-two-price">
	<p class="products__item-info-two-price-title">Цена: </p>
	<p class="products__item-info-two-price-number"><span>от </span>${product.price}<span> грн.</span></p>
</div>
		`;

    if (product.promo?.type === "sale") {
      priceHtml = `
<div class="products__item-info-two-price">
  <p class="products__item-info-two-price-title">Цена:</p>
  <div class="products__item-info-two-price-sale">
		<p class="products__item-info-two-price-sale-new">${product.price}<span> грн.</span></p>
		<p class="products__item-info-two-price-sale-old">${product.promo.oldPrice}</p>
	</div>
</div>
			`;
    }

    item.innerHTML = `
		${flag}
		<div class="swiper-products product-swiper-${index}">
		<div class="swiper-wrapper">
		  ${slides}
		</div>
		<div class="products__item-image-buttons">
    <button class="products__item-image-buttons-prev">
      <svg>
        <use href="../img/sprite.svg#icon-left-arrow"></use>
      </svg>
    </button>
    <button class="products__item-image-buttons-next">
      <svg>
        <use href="../img/sprite.svg#icon-right-arrow"></use>
      </svg>
    </button>
    </div>
		</div>

<div class="products__item-info">
  <div class="products__item-info-one">
    <h3 class="products__item-info-one-name">${product.name}</h3>
    <p class="products__item-info-one-id">Арт: ${product.id}</p>
    <p class="products__item-info-one-desc">${product.desc}</p>
    <div class="products__item-info-one-stat">
      <div class="products__item-info-one-stat-wight">
        <svg>
          <use href="../img/sprite.svg#icon-mass"></use>
        </svg>
        <div class="products__item-info-one-stat-wight-info">
          <span>Масса:</span>
          <p>${product.weight}г.</p>
        </div>
      </div>
      <div class="products__item-info-one-stat-package">
        <svg>
          <use href="../img/sprite.svg#icon-package"></use>
        </svg>
        <div class="products__item-info-one-stat-package-info">
          <span>Упаковка:</span>
          <p>${product.package}</p>
        </div>
      </div>
    </div>
  </div>
	<div class="products__item-info-two">
	  ${priceHtml}
		<button class="products__item-info-two-btn">
			Купить
		</button>
	</div>
</div>
		`;

    productContainer.appendChild(item);

    const swiperProducts = new Swiper(`.product-swiper-${index}`, {
      direction: "horizontal",
      keyboard: { enabled: true, onlyInViewport: true },
      modules: [Pagination, Keyboard],
      resizeObserver: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: `.product-swiper-${index} .products__item-image-buttons-next`,
        prevEl: `.product-swiper-${index} .products__item-image-buttons-prev`,
      },
      loop: true,
    });
    swiperProducts.update();
  });
}
