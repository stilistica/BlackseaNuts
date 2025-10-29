import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const containerManufacturer = document.querySelector(
  ".manufacturer__images-swiper"
);

if (containerManufacturer) {
  const swiperManufacturer = new Swiper(`.manufacturer__images-swiper`, {
    direction: "horizontal",
    keyboard: { enabled: true, onlyInViewport: true },
    modules: [Pagination, Keyboard],
    resizeObserver: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: `.manufacturer__images-swiper-buttons-next`,
      prevEl: `.manufacturer__images-swiper-buttons-prev`,
    },
    loop: true,
  });
  swiperManufacturer.update();
}
