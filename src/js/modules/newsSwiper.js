import { newData } from "../arrs/news.js";
import sprite from "../../img/sprite.svg";

import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const containerNewsSwiper = document.querySelector(
  ".news-el__swiper .swiper-wrapper"
);

if (containerNewsSwiper) {
  const slides = newData
    .map((el) => {
      if (el.type === "video") {
        return `
<div class="news-el__swiper-item swiper-slide">
  <div class="news-el__swiper-item-img hero">
  <div class="hero-text">
	<img src="${el.img}" alt="${el.title}"/>
	<button aria-label="play" class="hero-play">
    <svg>
      <use href="${sprite}#icon-play"></use>
    </svg>
  </button></div>
	<div class="hero-video" style="display: none"></div>
	</div>
  <div class="news-el__swiper-item-info">
    <span>${el.date}</span>
    <h3>${el.title}</h3>
    <p>${el.desc}</p>
    <a href="articleId.html">
      Читать
      <svg>
        <use href="${sprite}#icon-read"></use>
      </svg>
    </a>
  </div>
</div>
				`;
      } else {
        return ` 
<div class="news-el__swiper-item swiper-slide">
  <div class="news-el__swiper-item-img">
  <img src="${el.img}" alt="${el.title}" />
	</div>
  <div class="news-el__swiper-item-info">
    <span>${el.date}</span>
    <h3>${el.title}</h3>
    <p>${el.desc}</p>
    <a href="articleId.html">
      Читать
      <svg>
        <use href="${sprite}#icon-read"></use>
      </svg>
    </a>
  </div>
</div>
			`;
      }
    })
    .join("");
  containerNewsSwiper.innerHTML = slides;

  const swiperNews = new Swiper(`.news-el__swiper`, {
    direction: "horizontal",
    keyboard: { enabled: true, onlyInViewport: true },
    modules: [Pagination, Keyboard],
    resizeObserver: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: `.news-el__swiper-buttons-next`,
      prevEl: `.news-el__swiper-buttons-prev`,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 31,
      },
    },
  });
  swiperNews.update();
}
