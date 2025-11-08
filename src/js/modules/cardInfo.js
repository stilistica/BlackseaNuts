import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { getBasket, setBasket, updateBasketCounter } from "./localStorage";
import { productsData } from "../arrs/products";

const cardInfoSwiper = document.querySelector(".card-info__swiper");

if (cardInfoSwiper) {
  const swiperCard = new Swiper(`.card-info__swiper`, {
    direction: "horizontal",
    keyboard: { enabled: true, onlyInViewport: true },
    modules: [Pagination, Keyboard],
    resizeObserver: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: `.card-info__swiper-buttons-next`,
      prevEl: `.card-info__swiper-buttons-prev`,
    },
    loop: true,
  });
  swiperCard.update();

  const buyBtnCard = document.querySelector(".card-info__text-ends-price-buy");
  buyBtnCard.addEventListener("click", () => {
    let basket = getBasket();

    // const exists = basket.some((el) => el.id === product.id);
    // if (exists) return;

    basket.push(productsData[1]);
    setBasket(basket);
    updateBasketCounter();
  });

  class ImageZoom {
    constructor(container) {
      this.container = container;
      this.image = this.container.querySelector(".card-info__swiper-item-img");
      this.zoomEnabled = false;
      this.scale = 2;

      this.init();
    }
    init() {
      if (!this.container || !this.image) return;

      const zoomBtnCard = this.container.querySelector(
        ".card-info__swiper-item-zoom"
      );
      if (zoomBtnCard) {
        zoomBtnCard.addEventListener("click", (e) => {
          e.stopPropagation();
          this.toggleZoom();
        });
      }

      this.container.addEventListener("click", () => {
        if (this.zoomEnabled) {
          this.disableZoom();
        }
      });

      this.container.addEventListener("mousemove", (e) => {
        if (!this.zoomEnabled) return;

        const rect = this.image.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        this.image.style.transformOrigin = `${x}% ${y}%`;
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

  const zoomBlocksCard = document.querySelectorAll(".card-info__swiper-item");
  zoomBlocksCard.forEach((block) => new ImageZoom(block));
}
