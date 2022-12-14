import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Head from "next/head";

import SwiperCore, {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

import houseFirst from "../../public/img/gallery/house-first.jpeg";
import houseSecond from "../../public/img/gallery/house-second.jpeg";
import houseThird from "../../public/img/gallery/house-third.jpeg";
import houseFour from "../../public/img/gallery/house-four.jpeg";

export default function Gallery() {
    return (
        <div className="gallery">

            <h1 className="visually-hidden">Галерея работ</h1>

            <Head>
                <title>Галерея - готовые объекты которые мы выполнили</title>
                <meta
                    name="description"
                    content="Готовые объекты компании PRIMAFINESTRA которые мы выполнили. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России"
                />
                <meta property="og:description" content="Готовые объекты компании PRIMAFINESTRA которые мы выполнили. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России" />
                <meta
                    name="keywords"
                    content="Компания по продаже кровельных материалов в Москве. Мансардные окна и подкровельная мембрана от лидеров производства"
                />
                <meta content="PRIMAFINESTRA - подбор и продажа профессиональных кровельных материалов" property="twitter:title" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="PRIMAFINESTRA - подбор и продажа профессиональных кровельных материалов" />
                <meta property="og:title" content="Продаем профессиональную продукцию для кровли в Москве. Мансардные окна и подкровельные мембраны от лидеров производства" />
                <meta property="og:image" content="https://i.ibb.co/GQfppXF/2c0780f0cc93bd3cbe39d416fa0f69c7.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="twitter:image" content="https://i.ibb.co/GQfppXF/2c0780f0cc93bd3cbe39d416fa0f69c7.jpg" />
                <meta name="twitter:image" content="https://i.ibb.co/GQfppXF/2c0780f0cc93bd3cbe39d416fa0f69c7.jpg" />
                <meta property="twitter:description" content="Продаем профессиональную продукцию для кровли в Москве. Мансардные окна и подкровельные мембраны от лидеров производства" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>

            <Swiper
                // effect={"fade"}
                loop={true}
                speed={400}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: ".gallery__arrow-prev",
                    nextEl: ".gallery__arrow-next",
                }}
                pagination={{
                    el: ".card-product__pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<div class="${className}">
                </div>`;
                    },
                }}
            >
                <SwiperSlide>
                    <Image className="gallery__slide-img" src={houseFirst} alt="Выполненный объект"></Image>
                    <div className="gallery__slide-description">
                        <h3 className="gallery__slide-title">Мансардное окно Dakea</h3>
                        <p className="gallery__slide-text">Зеленоградск, Прибрежная 94</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Image className="gallery__slide-img" src={houseSecond} alt="Выполненный объект"></Image>
                    <div className="gallery__slide-description">
                        <h3 className="gallery__slide-title">Окна Dakea</h3>
                        <p className="gallery__slide-text">Калининград, Озерная 25</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Image className="gallery__slide-img" src={houseThird} alt="Выполненный объект"></Image>
                    <div className="gallery__slide-description">
                        <h3 className="gallery__slide-title">Черепица Wienerberger</h3>
                        <p className="gallery__slide-text">Калининград, Красная 105</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <Image className="gallery__slide-img" src={houseFour} alt="Выполненный объект"></Image>
                    <div className="gallery__slide-description">
                        <h3 className="gallery__slide-title">Черепица Wienerberger</h3>
                        <p className="gallery__slide-text">Калининград, Зеленая 19</p>
                    </div>
                </SwiperSlide>

                <div className="container">
                    <div className="main-page__arrow-container">
                        <div className="container">
                            <div className="gallery__arrow-wrapper">
                                <div className="gallery__arrow gallery__arrow-prev"></div>
                                <div className="gallery__arrow gallery__arrow-next"></div>
                            </div>
                        </div>
                    </div>

                    <div className="main-page__pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};
