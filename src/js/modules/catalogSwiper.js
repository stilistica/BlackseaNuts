import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SimpleBar from 'simplebar';
import 'simplebar-core/dist/simplebar.css';
  new SimpleBar(document.querySelector(".catalog-swiper__info-desc"), {
    autoHide: false,
    scrollbarMaxSize: 38,
  });

const containerManufacturer = document.querySelector(
  ".catalog-swiper__images-swiper"
);

if (containerManufacturer) {
  const swiperManufacturer = new Swiper(`.catalog-swiper__images-swiper`, {
    direction: "horizontal",
    keyboard: { enabled: true, onlyInViewport: true },
    modules: [Pagination, Keyboard],
    resizeObserver: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: `.catalog-swiper__images-swiper-buttons-next`,
      prevEl: `.catalog-swiper__images-swiper-buttons-prev`,
    },
    loop: true,
  });
  swiperManufacturer.update();
}
