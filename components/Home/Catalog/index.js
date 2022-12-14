import React from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image';

import windowImg from "../../../public/img/catalog/window.jpg";
import kirpichImg from "../../../public/img/catalog/kirpich.jpg";

import SwiperCore, {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

export default function Catalog() {
    return (
        <div className="catalog">
            <div className="container">

                <div className="catalog-title-container">
                    <h2 className="catalog-title">Передовые технологии<br /> для крыши вашего дома</h2>
                    <p className="catalog-title-text">Мансардные окна и подкровельные материалы<br /> от проверенных временем Европейских брендов</p>
                </div>

                <Swiper
                    loop={false}
                    speed={1100}
                    spaceBetween={40}
                    slidesPerView={2}
                    breakpoints={{
                        // Если >= 550 то
                        550: {
                            slidesPerView: 2,
                        },
                        // Если >= 0 то
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    navigation={{
                        prevEl: ".catalog__arrow-prev",
                        nextEl: ".catalog__arrow-next",
                    }}
                    pagination={{
                        el: ".catalog__pagination",
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<div class="${className}"></div>`;
                        },
                    }}
                >
                    <SwiperSlide className="catalog__item">
                        <Link href="/catalog/skylights">
                            <Image className="catalog__item-img" src={windowImg} alt="Мансардные окна"></Image>
                            {/* <img className="catalog__item-img" src={windowImg} alt="Мансардные окна"></img> */}
                            <div className="catalog__item-description">
                                <span className="catalog__item-signature">
                                    Лидер производства из Дании
                                </span>
                                <h3 className="catalog__item-title">
                                    Мансардные
                                    <br /> окна
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="catalog__item">
                        <Link href="/catalog/roofing-materials">
                            <Image className="catalog__item-img" src={kirpichImg} alt="Подкровельные мембраны"></Image>
                            <div className="catalog__item-description">
                                <span className="catalog__item-signature">Большой выбор из Европы</span>
                                <h3 className="catalog__item-title">
                                    Подкровельные
                                    <br /> мембраны
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <div>
                        <div className="catalog__arrow-container">
                            <div className="container">
                                <div className="catalog__arrow-wrapper">
                                    <div className="catalog__arrow catalog__arrow-prev"></div>
                                    <div className="catalog__arrow catalog__arrow-next"></div>
                                </div>
                                <div className="catalog__pagination-container">
                                    <div className="catalog__pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
};