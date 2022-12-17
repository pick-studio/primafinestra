import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

export default function CardGallery({ items, salePercent }) {
  // let itemsArray = items.map(item => item.fields.file.url);
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  return (
    <div className="card-product__slider">

      {items &&
        <>
          <div className="card-product__slider-container">
            <div className="card-product__slider-left-container">
              {items.salePrice && (
                <div className="card-product__slider-sale">
                  <span>
                    Скидка {Math.round(100 - (items.salePrice * 100) / items.price)}
                    %
                  </span>
                </div>
              )}
              {items.hit && (
                <div className="card-product__slider-hit">Хит продаж</div>
              )}
            </div>
            {items.new && <div className="card-product__slider-new">Новинка!</div>}
          </div>
        </>
      }

      {items &&
        <Swiper
          loop={true}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".card-product__pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="${className}"></div>`;
            },
          }}
        >
          {items.images.map((currentImage, index) => {
            return (
              <SwiperSlide className="card-product__slider-item"
                key={index}
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}>
                <Image
                  className="card-product__slider-img"
                  src={`https:${currentImage.fields.file.url}`}
                  alt={`Фотография ${items.nameCategory} ${items.name}`}
                  layout="fill"
                ></Image>
              </SwiperSlide>
            );
          })}

          {items.images.length > 1 && (
            <div className="container">
              <div className="card-product__arrow-container">
                <div className="container">
                  <div className="card-product__arrow-wrapper">
                    <div className="swiper-button-prev card-product__arrow card-product__arrow-prev"></div>
                    <div className="swiper-button-next card-product__arrow card-product__arrow-next"></div>
                  </div>
                </div>
              </div>

              <div className="card-product__pagination-container">
                <div className="card-product__pagination"></div>
              </div>
            </div>
          )}
        </Swiper>
      }

      {/* {!!isOpen && items(
        <Lightbox
          animationDuration={500}
          closeLabel="Закрыть"
          zoomInLabel="Увеличить изображение"
          zoomOutLabel="Отдалить изображение"
          imageCaption={items.name}
          mainSrc={itemsArray[photoIndex]}
          nextSrc={
            items[
            (photoIndex + 1) % items.length
            ]
          }
          prevSrc={
            itemsArray[
            (photoIndex + itemsArray.length - 1) %
            itemsArray.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + itemsArray.length - 1) %
              itemsArray.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              (photoIndex + 1) % itemsArray.length
            )
          }
        />
      )} */}

    </div>
  );
};
