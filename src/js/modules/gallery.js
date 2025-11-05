import imgGal1 from "../../img/components/gallery/image-1.png";
import imgGal2 from "../../img/components/gallery/image-2.png";
import imgGal3 from "../../img/components/gallery/image-3.png";
import imgGal4 from "../../img/components/gallery/image-5.png";
import imgGal5 from "../../img/components/gallery/image-6.png";
import imgGal6 from "../../img/components/gallery/image-7.png";

import sprite from "../../img/sprite.svg";

const oneGalleryContainer = document.querySelector(".gallery-container__one");

if (oneGalleryContainer) {
  let galleryHtml = `
    <div class="gallery-item gallery-item__one">
      <img src="${imgGal1}" alt="photo" />
      <div class="gallery-item__hover">
        <h3>SIAL Paris 2018</h3>
        <p>
          В этом Году при поддержке проекта International Trade Centre Ukraine,
          и финансировании правительства Швеции, мы побывали на крупнейшей
          продовольственной выставке Европы <span>SIAL Paris 2018</span>
        </p>
      </div>
    </div>
    <div class="gallery-item gallery-item__two">
      <img src="${imgGal2}" alt="photo" />
      <div class="gallery-item__hover">
        <h3>SIAL Paris 2018</h3>
        <p>
          В этом Году при поддержке проекта International Trade Centre Ukraine,
          и финансировании правительства Швеции, мы побывали на крупнейшей
          продовольственной выставке Европы <span>SIAL Paris 2018</span>
        </p>
      </div>
    </div>
    <div class="gallery-item gallery-item__three hero">
      <img src="${imgGal3}" alt="photo" />
      <div class="gallery-item__textvideo hero-text">
        <button aria-label="play" class="play hero-play">
          <svg>
            <use href="${sprite}#icon-play"></use>
          </svg>
        </button>
        <h3>Проект UBHDP</h3>
        <p>
          Вчера к нам приезжал американский агроном Рон , спасибо Мельнику
          Евгению и проекту UBHDP за возможность получить консультацию от
          мировых специалистов!
        </p>
      </div>
			  <div class="hero-video" style="display: none"></div>
    </div>
    <div class="gallery-item gallery-item__four">
      <img src="${imgGal4}" alt="photo" />
      <div class="gallery-item__hover">
        <h3>SIAL Paris 2018</h3>
        <p>
          В этом Году при поддержке проекта International Trade Centre Ukraine,
          и финансировании правительства Швеции, мы побывали на крупнейшей
          продовольственной выставке Европы <span>SIAL Paris 2018</span>
        </p>
      </div>
    </div>
    <div class="gallery-item gallery-item__five">
      <img src="${imgGal5}" alt="photo" />
      <div class="gallery-item__hover">
        <h3>SIAL Paris 2018</h3>
        <p>
          В этом Году при поддержке проекта International Trade Centre Ukraine,
          и финансировании правительства Швеции, мы побывали на крупнейшей
          продовольственной выставке Европы <span>SIAL Paris 2018</span>
        </p>
      </div>
    </div>
    <div class="gallery-item gallery-item__six hero">
      <img src="${imgGal6}" alt="photo" />
      <div class="gallery-item__textvideo hero-text">
        <button aria-label="play" class="play hero-play">
          <svg>
            <use href="${sprite}#icon-play"></use>
          </svg>
        </button>
      </div>
			  <div class="hero-video" style="display: none"></div>
    </div>
	`;
  //         <h3>Проект UBHDP</h3>
  // <p>
  //   Вчера к нам приезжал американский агроном Рон , спасибо Мельнику
  //   Евгению и проекту UBHDP за возможность получить консультацию от
  //   мировых специалистов!
  // </p>
  oneGalleryContainer.innerHTML = galleryHtml;
}
