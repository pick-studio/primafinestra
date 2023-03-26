import React from "react";
import Head from "next/head";
import Link from "next/link";

function About() {
  return (
    <div className="about">

      <Head>
        <title>О компании - огромный опыт работы в сфере строительства и кровли</title>
        <meta
          name="description"
          content="Огромный опыт работы в сфере строительства и кровли. Мы готовы делиться своим опытом. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России"
        />
        <meta property="og:description" content="Огромный опыт работы в сфере строительства и кровли. Мы готовы делиться своим опытом. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России" />
        <meta
          name="keywords"
          content="Компания по продаже кровельных материалов в Москве. Мансардные окна и подкровельная мембрана от лидеров производства"
        />
        <meta content="NICE WIN - подбор и продажа профессиональных кровельных материалов" property="twitter:title" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NICE WIN - подбор и продажа профессиональных кровельных материалов" />
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

      <div className="container">
        <div className="bread-crumbs">
          <ul className="bread-crumbs__list">
            <li className="bread-crumbs__item">
              <Link className="bread-crumbs__link" href="/">
                Главная
              </Link>
            </li>
            <li className="bread-crumbs__item">
              <span className="bread-crumbs__link bread-crumbs__link--active">
                О компании
              </span>
            </li>
          </ul>
        </div>

        <div className="about-wrapper">
          <div className="about__content">
            <h1 className="about__title">О нас</h1>
            <span className="about__subtitle">Команда профессионалов с большим опытом</span>
            <p className="about__text">
              Наша компания занимается поставками кровельных материалов в
              Калининграде с 1997 года. Более 3000 наших клиентов - владельцы
              частных домов, строительные компании и иные клиенты.
            </p>

            <p className="about__text">
              Большинство изделий всегда находится в наличии на нашем складе в
              городе Калининграде, а наши цены очень выгодные за счет прямых
              поставок от заводов производителей из и отсутствия посредников в
              торговой цепочке.
            </p>

            <p className="about__text">
              Обращаясь к нам — вы получите реальные советы, которые подскажут
              как сделать вашу мансарду уютным и светлым помещением, в котором
              приятно жить и работать.
            </p>

            <ul className="about__desc-list">
              <li className="about__desc-item">
                <span className="about__desc-number">
                  3 <span className="about__desc-unit">тысячи</span>
                </span>
                <span className="about__desc-item-text">
                  клиентов
                  <br /> обслужено
                </span>
              </li>
              <li className="about__desc-item">
                <span className="about__desc-number">
                  24 <span className="about__desc-unit">года</span>
                </span>
                <span className="about__desc-item-text">
                  опыт работы
                  <br /> компании
                </span>
              </li>
              <li className="about__desc-item">
                <span className="about__desc-number">
                  500 <span className="about__desc-unit">позиций</span>
                </span>
                <span className="about__desc-item-text">
                  товаров
                  <br /> в наличии
                </span>
              </li>
            </ul>
          </div>

          <div className="about__image"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
