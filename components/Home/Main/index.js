import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

export default function Main() {
  const swiperContainer = React.useRef();
  const swiperNextText = React.useRef();

  const changeBackground = (index) => {
    swiperContainer.current.classList.remove("zoom-one");
    swiperContainer.current.classList.remove("zoom-two");

    if (index === 0) {
      swiperContainer.current.classList.add("zoom-one");
    } else if (index === 1) {
      swiperContainer.current.classList.add("zoom-two");
    }
  };

  const appearanceSlideContent = (index) => {
    const contentArray = document.querySelectorAll(".main-page__content");
    contentArray.forEach((content) => {
      content.classList.remove("main-page__content--emergence");
    });

    contentArray[index].classList.add("main-page__content--emergence");
  };

  return (
    <div className="main-page">
      <Swiper
        className="main-swiper"
        ref={swiperContainer}
        effect={"fade"}
        loop={true}
        speed={1200}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".main-page__arrow-next",
        }}

        // Инициализация и смена пагинации справа
        pagination={{
          el: ".main-page__pagination",
          clickable: true,
          renderBullet: (index, className) => {
            let categoryName;

            function categorySelection(number) {
              if (number === 0) {
                return (categoryName = "Мансардные окна");
              } else if (number === 1) {
                return (categoryName = "Подкровельные мембраны");
              }
            }

            return `<div className="main-page__pagination-item ${className}">
                  <span className="main-page__pagination-item-text">${categorySelection(
              index
            )}</span>
                  <span className="main-page__pagination-item-toggle"></span>
                </div>`;
          },
        }}

        // Смена главной после нажатия на стрелку внизу
        onSlideChange={(swiper) => {
          swiperNextText.current.textContent = "Мансардные окна";

          if (swiper.pagination.bullets) {
            swiper.pagination.bullets.map((item) => {
              if (item.classList.contains("swiper-pagination-bullet-active")) {
                swiperNextText.current.textContent = item.innerText;
              }
            })
          }
          changeBackground(swiper.activeIndex);
          appearanceSlideContent(swiper.activeIndex);
        }}

        onSwiper={(swiper) => {
          changeBackground(swiper.activeIndex);
        }}
      >

        <SwiperSlide className="swiper-slide swiper-slide--first">
          <div className="container">
            <div className="main-page__content">
              <h2 className="main-page__title">
                Мансардные окна в Москве
                <br />
                От лидера отрасли NICE WIN
              </h2>
              <p className="main-page__text">Один из лидеров в Европе по призводству мансардных окон из Сербии</p>
              <div className="main-page__buttons-container">
                <Link className="main-page__button" href="catalog/skylights">
                  Перейти в каталог
                </Link>

                {/* <a
                  href="https://www.youtube.com/watch?v=tiHkOM2IdzE"
                  title="Производство NICE WIN"
                  className="main-page__button main-page__button--video"
                  rel="noreferrer"
                  target="_blank"
                >
                  Производство
                </a> */}

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide swiper-slide--second">
          <div className="container">
            <div className="main-page__content">
              <h2 className="main-page__title">
                Подкровельные мембраны
                <br />
                От лидера отрасли Corotop
              </h2>
              <p className="main-page__text">Проверенные временем материалы от известного производителя</p>
              <div className="main-page__buttons-container">
                <Link className="main-page__button" href="catalog/roofing-materials">
                  Перейти в каталог
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="container">
          <div className="main-page__arrow-container">
            <div className="container">
              <div className="main-page__arrow-wrapper">

                <div className="main-page__arrow-next-container">
                  <div className="main-page__arrow main-page__arrow-next">
                    <div className="main-page__arrow main-page__arrow-next--icon"></div>
                    <p ref={swiperNextText} className="main-page__arrow-next-text">Керамическая черепица</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="main-page__pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
