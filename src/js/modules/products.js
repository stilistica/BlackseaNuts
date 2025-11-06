// import productsData from "../data/products";
import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import sprite from "../../img/sprite.svg";
import { getBasket, setBasket, updateBasketCounter } from "./localStorage";
import { productsData } from "../arrs/products.js";

const tasteActiveCatalog = document.querySelector(
  ".catalog-filter__one-options-taste-active"
);
const tasteVariantCatalog = document.querySelector(
  ".catalog-filter__one-options-taste-variant"
);

const weightActiveCatalog = document.querySelector(
  ".catalog-filter__one-options-weight-active"
);
const weightVariantCatalog = document.querySelector(
  ".catalog-filter__one-options-weight-variant"
);

const priceDownCatalog = document.querySelector(
  ".catalog-filter__one-options-price-variant-down"
);
const priceUpCatalog = document.querySelector(
  ".catalog-filter__one-options-price-variant-up"
);

const applyBtnCatalog = document.querySelector(".catalog-filter__two-apply");
const resetBtnCatalog = document.querySelector(".catalog-filter__two-reset");
const productContainer = document.querySelector(".products");

function renderProducts(data, container) {
  if (!container) return;

  container.innerHTML = "";

  data.forEach((product, index) => {
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
  <img src="${img}" alt="${product.name}" class="products__img" />
  <svg class="products__item-image-zoom">
    <use href="${sprite}#icon-zoom"></use>
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
        <use href="${sprite}#icon-left-arrow"></use>
      </svg>
    </button>
    <button class="products__item-image-buttons-next">
      <svg>
        <use href="${sprite}#icon-right-arrow"></use>
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
          <use href="${sprite}#icon-mass"></use>
        </svg>
        <div class="products__item-info-one-stat-wight-info">
          <span>Масса:</span>
          <p>${product.weight}г.</p>
        </div>
      </div>
      <div class="products__item-info-one-stat-package">
        <svg>
          <use href="${sprite}#icon-package"></use>
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

    container.appendChild(item);

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

    const buyBtn = item.querySelector(".products__item-info-two-btn");
    buyBtn.addEventListener("click", () => {
      let basket = getBasket();

      const exists = basket.some((el) => el.id === product.id);
      if (exists) return;

      basket.push(product);
      setBasket(basket);
      updateBasketCounter();
    });

    class ImageZoom {
      constructor(container) {
        this.container = container;
        this.image = this.container.querySelector(".products__img");
        this.zoomEnabled = false;
        this.scale = 2;

        this.init();
      }
      init() {
        if (!this.container || !this.image) return;

        const zoomBtn = this.container.querySelector(
          ".products__item-image-zoom"
        );
        if (zoomBtn) {
          zoomBtn.addEventListener("click", () => {
            this.toggleZoom();
          });
        }
        this.container.addEventListener("mousemove", (e) => {
          if (!this.zoomEnabled) return;

          const rect = this.image.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          this.image.style.transformOrigin = `${x}% ${y}%`;

          const buffer = 25;
          const outside =
            e.clientX < rect.left - buffer ||
            e.clientX > rect.right + buffer ||
            e.clientY < rect.top - buffer ||
            e.clientY > rect.bottom + buffer;

          if (outside && this.zoomEnabled) {
            this.disableZoom();
          }
        });
      }

      toggleZoom() {
        this.zoomEnabled ? this.disableZoom() : this.enableZoom();
      }

      enableZoom() {
        this.zoomEnabled = true;
        this.image.style.transition = "transform 0.2s ease";
        this.image.style.transform = `scale(${this.scale})`;
        this.image.style.cursor = "zoom-out";
      }

      disableZoom() {
        this.zoomEnabled = false;
        this.image.style.transform = "scale(1)";
        this.image.style.cursor = "zoom-in";
      }
    }

    const zoomBlocks = item.querySelectorAll(".products__item-image");
    zoomBlocks.forEach((block) => new ImageZoom(block));
  });
}

if (productContainer) {
  renderProducts(productsData, productContainer);

  if (applyBtnCatalog) {
    //  фільтр СМАК (ВКУС)

    tasteActiveCatalog.addEventListener("click", () => {
      tasteVariantCatalog.classList.toggle("active");
    });

    let selectedTaste = null;
    const tasteItems = document.querySelectorAll(
      ".catalog-filter__one-options-taste-variant li"
    );

    tasteItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedTaste = item.dataset.value;
        tasteActiveCatalog.querySelector("p").textContent = item.textContent;
        tasteVariantCatalog.classList.remove("active");
      });
    });

    //  фільтр ВАГА (МАССА)

    weightActiveCatalog.addEventListener("click", () => {
      weightVariantCatalog.classList.toggle("active");
    });

    let selectedWeight = null;
    const weightItems = document.querySelectorAll(
      ".catalog-filter__one-options-weight-variant li"
    );

    weightItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedWeight = item.dataset.value;
        weightActiveCatalog.querySelector("p").textContent = item.textContent;
        weightVariantCatalog.classList.remove("active");
      });
    });

    //  фільтр ЦІНА (СТОИМОСТЬ)

    let selectedPriceOrder = null;

    priceDownCatalog.addEventListener("click", () => {
      selectedPriceOrder = "asc";
      priceDownCatalog.classList.add("active");
      priceUpCatalog.classList.remove("active");
    });
    priceUpCatalog.addEventListener("click", () => {
      selectedPriceOrder = "desc";
      priceUpCatalog.classList.add("active");
      priceDownCatalog.classList.remove("active");
    });

    // кнопка ПРИМЕНИТЬ
    applyBtnCatalog.addEventListener("click", () => {
      let filtered = [...productsData];

      if (selectedTaste) {
        filtered = filtered.filter((el) => el.taste === selectedTaste);
      }

      if (selectedWeight) {
        filtered = filtered.filter((el) => el.weight <= selectedWeight);
      }

      if (selectedPriceOrder === "asc") {
        filtered.sort((a, b) => a.price - b.price);
      }

      if (selectedPriceOrder === "desc") {
        filtered.sort((a, b) => b.price - a.price);
      }

      renderProducts(filtered, productContainer);
    });


    //  кнопка RESET
    resetBtnCatalog.addEventListener("click", () => {
      selectedTaste = null;
      selectedWeight = null;
      selectedPriceOrder = null;

      tasteActiveCatalog.querySelector("p").textContent = "Вкус";
      weightActiveCatalog.querySelector("p").textContent = "Масса";
      priceDownCatalog.classList.remove("active");
      priceUpCatalog.classList.remove("active");

      renderProducts(productsData, productContainer);
    });
  }
}

// if (productContainer) {
//   productsData.forEach((product, index) => {
//     const item = document.createElement("div");
//     item.classList.add("products__item");

//     let flag = "";
//     if (product.promo?.type === "sale") {
//       flag = `
// 			<div class="products__item-flag products__item-flag-sale">
//         <svg>
//           <use href="${sprite}#icon-flag"></use>
//         </svg>
// 	      <p>Акция</p>
//       </div>
// 			`;
//     } else if (product.promo?.type === "new") {
//       flag = `
// 			<div class="products__item-flag products__item-flag-new">
//         <svg>
//           <use href="${sprite}#icon-flag"></use>
//         </svg>
// 	      <p>Новинка</p>
//       </div>
// 			`;
//     }

//     const slides = product.images.map(
//       (img) => `
// <div class="products__item-image swiper-slide">
//   <img src="${img}" alt="${product.name}" class="products__img" />
//   <svg class="products__item-image-zoom">
//     <use href="${sprite}#icon-zoom"></use>
//   </svg>
// </div>
// 			`
//     );

//     let priceHtml = `
// <div class="products__item-info-two-price">
// 	<p class="products__item-info-two-price-title">Цена: </p>
// 	<p class="products__item-info-two-price-number"><span>от </span>${product.price}<span> грн.</span></p>
// </div>
// 		`;

//     if (product.promo?.type === "sale") {
//       priceHtml = `
// <div class="products__item-info-two-price">
//   <p class="products__item-info-two-price-title">Цена:</p>
//   <div class="products__item-info-two-price-sale">
// 		<p class="products__item-info-two-price-sale-new">${product.price}<span> грн.</span></p>
// 		<p class="products__item-info-two-price-sale-old">${product.promo.oldPrice}</p>
// 	</div>
// </div>
// 			`;
//     }

//     item.innerHTML = `
// 		${flag}
// 		<div class="swiper-products product-swiper-${index}">
// 		<div class="swiper-wrapper">
// 		  ${slides}
// 		</div>
// 		<div class="products__item-image-buttons">
//     <button class="products__item-image-buttons-prev">
//       <svg>
//         <use href="${sprite}#icon-left-arrow"></use>
//       </svg>
//     </button>
//     <button class="products__item-image-buttons-next">
//       <svg>
//         <use href="${sprite}#icon-right-arrow"></use>
//       </svg>
//     </button>
//     </div>
// 		</div>

// <div class="products__item-info">
//   <div class="products__item-info-one">
//     <h3 class="products__item-info-one-name">${product.name}</h3>
//     <p class="products__item-info-one-id">Арт: ${product.id}</p>
//     <p class="products__item-info-one-desc">${product.desc}</p>
//     <div class="products__item-info-one-stat">
//       <div class="products__item-info-one-stat-wight">
//         <svg>
//           <use href="${sprite}#icon-mass"></use>
//         </svg>
//         <div class="products__item-info-one-stat-wight-info">
//           <span>Масса:</span>
//           <p>${product.weight}г.</p>
//         </div>
//       </div>
//       <div class="products__item-info-one-stat-package">
//         <svg>
//           <use href="${sprite}#icon-package"></use>
//         </svg>
//         <div class="products__item-info-one-stat-package-info">
//           <span>Упаковка:</span>
//           <p>${product.package}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// 	<div class="products__item-info-two">
// 	  ${priceHtml}
// 		<button class="products__item-info-two-btn">
// 			Купить
// 		</button>
// 	</div>
// </div>
// 		`;

//     productContainer.appendChild(item);

//     const swiperProducts = new Swiper(`.product-swiper-${index}`, {
//       direction: "horizontal",
//       keyboard: { enabled: true, onlyInViewport: true },
//       modules: [Pagination, Keyboard],
//       resizeObserver: true,
//       observer: true,
//       observeParents: true,
//       slidesPerView: 1,
//       spaceBetween: 0,
//       navigation: {
//         nextEl: `.product-swiper-${index} .products__item-image-buttons-next`,
//         prevEl: `.product-swiper-${index} .products__item-image-buttons-prev`,
//       },
//       loop: true,
//     });
//     swiperProducts.update();

//     const buyBtn = item.querySelector(".products__item-info-two-btn");
//     buyBtn.addEventListener("click", () => {
//       let basket = getBasket();

//       const exists = basket.some((el) => el.id === product.id);
//       if (exists) return;

//       basket.push(product);
//       setBasket(basket);
//       updateBasketCounter();
//     });

//     class ImageZoom {
//       constructor(container) {
//         this.container = container;
//         this.image = this.container.querySelector(".products__img");
//         this.zoomEnabled = false;
//         this.scale = 2;

//         this.init();
//       }
//       init() {
//         if (!this.container || !this.image) return;

//         const zoomBtn = this.container.querySelector(
//           ".products__item-image-zoom"
//         );
//         if (zoomBtn) {
//           zoomBtn.addEventListener("click", () => {
//             this.toggleZoom();
//           });
//         }
//         this.container.addEventListener("mousemove", (e) => {
//           if (!this.zoomEnabled) return;

//           const rect = this.image.getBoundingClientRect();
//           const x = ((e.clientX - rect.left) / rect.width) * 100;
//           const y = ((e.clientY - rect.top) / rect.height) * 100;
//           this.image.style.transformOrigin = `${x}% ${y}%`;

//           const buffer = 25;
//           const outside =
//             e.clientX < rect.left - buffer ||
//             e.clientX > rect.right + buffer ||
//             e.clientY < rect.top - buffer ||
//             e.clientY > rect.bottom + buffer;

//           if (outside && this.zoomEnabled) {
//             this.disableZoom();
//           }
//         });
//       }

//       toggleZoom() {
//         this.zoomEnabled ? this.disableZoom() : this.enableZoom();
//       }

//       enableZoom() {
//         this.zoomEnabled = true;
//         this.image.style.transition = "transform 0.2s ease";
//         this.image.style.transform = `scale(${this.scale})`;
//         this.image.style.cursor = "zoom-out";
//       }

//       disableZoom() {
//         this.zoomEnabled = false;
//         this.image.style.transform = "scale(1)";
//         this.image.style.cursor = "zoom-in";
//       }
//     }

//     const zoomBlocks = item.querySelectorAll(".products__item-image");
//     zoomBlocks.forEach((block) => new ImageZoom(block));
//   });
// }
