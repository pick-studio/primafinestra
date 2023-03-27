import React from "react";
import CardGallery from "../../pages/catalog/components/CardGallery";
import ContactsPopap from "../ContactsPopap";
import Head from "next/head";
import BreadCrumbs from "../BreadCrumbs";
import advantagesImage from "../../public/img/advantages/window.jpeg";
import Image from "next/image.js";

export default function ProductCard({ products, currentItem, categoryUrl, isSkylight }) {
    const [currentPriceIndex, setCurrentPriceIndex] = React.useState(0);
    const formRange = React.useRef("");

    const rangeFirstInput = React.useRef("");

    const [radioState, setRadioState] = React.useState("");
    React.useEffect(() => {
        setRadioState(rangeFirstInput.current.value);
    }, [rangeFirstInput.current.value]);

    const toggleRadio = (e, index) => {
        setRadioState(e.target.value);
        setCurrentPriceIndex(index);
    };

    return (
        <div className="card-product">
            {currentItem && (
                <div>
                    <Head>
                        <title>{`${currentItem.fields.nameCategory} ${currentItem.fields.name}`}</title>
                        <meta
                            name="description"
                            content={`${currentItem.fields.nameCategory} ${currentItem.fields.name} в Москве. Большой выбор, Низкие цены, Гарантия`}
                        />
                        <meta
                            name="keywords"
                            content={`${currentItem.fields.category} ${currentItem.fields.name}, Мансардные окна в Москве, Недорогие мансардные окна, Большие мансардные окна, Окна в крышу, Окна на крыше, Окна NICE WIN, Окна в частный дом`}
                        />
                    </Head>

                    <BreadCrumbs
                        catalogUrl={`catalog/${categoryUrl}`}
                        catalogName={currentItem.fields.category}
                        productName={currentItem.fields.name}
                    />

                    <div className="card-product__wrapper">
                        <div className="container">
                            <div className="card-product__content">
                                <div className="card-product__title-container">
                                    <div>
                                        <div className="card-product__title-signature">
                                            <span>{currentItem.fields.nameCategory}</span>
                                            {currentItem.fields.article && (
                                                <span>
                                                    {" "}
                                                    (артикул {`${currentItem.fields.article}`})
                                                </span>
                                            )}
                                        </div>
                                        <h1 className="card-product__title">
                                            {currentItem.fields.name}
                                        </h1>
                                    </div>
                                    <div className="card-product__text-price">
                                        <div className="card-product__price-signature">
                                            {currentItem.fields.inStock && (
                                                <span>Сейчас в наличии</span>
                                            )}
                                        </div>

                                        {/* Цена товара со скидкой и без */}

                                        {/* Цены на продукцию */}
                                        {!currentItem.fields.additionalPrices && currentItem.fields.price &&
                                            <span className={"price activePrice"}>{currentItem.fields.price} ₽</span>
                                        }

                                        {currentItem.fields.additionalPrices &&
                                            currentItem.fields.additionalPrices.map((item, index) => {
                                                if (currentPriceIndex === index) {
                                                    return <span className={"price activePrice"} key={index}>{item} ₽</span>
                                                }
                                            })
                                        }

                                        {/* Цены на продукцию */}

                                        {/* <p className="card-product__item-price">
                                            {currentItem.fields.salePrice ? (
                                                <div className="card-product__item-price-sale-wrapper">
                                                    <div className="card-product__item-price-sale">
                                                        {currentItem.fields.priceFrom ? (
                                                            <span>от </span>
                                                        ) : undefined}
                                                        <span>{currentItem.fields.salePrice} ₽</span>
                                                        <span>
                                                            {currentItem.fields.pricePerMetr ? (
                                                                <span>
                                                                    {" "}
                                                                    м<sup>2</sup>
                                                                </span>
                                                            ) : undefined}
                                                        </span>
                                                    </div>
                                                    <div className="card-product__item-price-text">
                                                        {currentItem.fields.priceFrom ? (
                                                            <span>от </span>
                                                        ) : undefined}
                                                        <span>{currentItem.fields.price} ₽</span>
                                                        {currentItem.fields.pricePerMetr ? (
                                                            <span>
                                                                {" "}
                                                                м<sup>2</sup>
                                                            </span>
                                                        ) : undefined}
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="card-product__item-price-text">
                                                    {currentItem.fields.price} ₽
                                                </span>
                                            )}
                                        </p> */}

                                        {/* Цена товара со скидкой и без */}

                                    </div>
                                </div>

                                <div className="card-product__text-content">
                                    <h3 className="card-product__text-title">Описание</h3>
                                    <p className="card-product__text-description">
                                        {currentItem.fields.description}
                                    </p>

                                    {currentItem.fields.rangeName &&
                                        currentItem.fields.rangeList && (
                                            <div className="card-product__feature">
                                                {currentItem.fields.rangeName && (
                                                    <h3 className="card-product__text-title">
                                                        {currentItem.fields.rangeName}
                                                    </h3>
                                                )}
                                                {currentItem.fields.rangeList && (
                                                    <form
                                                        ref={formRange}
                                                        className="card-product__range-list"
                                                    >
                                                        {currentItem.fields.rangeList.map(
                                                            (featureItem, index) => {
                                                                if (featureItem.includes("#")) {
                                                                    return (
                                                                        <>
                                                                            <input
                                                                                key={index}
                                                                                ref={
                                                                                    index === 0
                                                                                        ? rangeFirstInput
                                                                                        : undefined
                                                                                }
                                                                                name="range"
                                                                                id={`radio-button-${index}`}
                                                                                type="radio"
                                                                                className="card-product__range-input"
                                                                                value={featureItem}
                                                                                onChange={(e) => {
                                                                                    toggleRadio(e, index);
                                                                                }}
                                                                                defaultChecked={
                                                                                    index === 0 ? true : false
                                                                                }
                                                                            ></input>
                                                                            <label
                                                                                className="card-product__range-item--color"
                                                                                htmlFor={`radio-button-${index}`}
                                                                                style={{
                                                                                    backgroundColor: `${featureItem}`,
                                                                                }}
                                                                            ></label>
                                                                        </>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <>
                                                                            <input
                                                                                key={index}
                                                                                ref={
                                                                                    index === 0
                                                                                        ? rangeFirstInput
                                                                                        : undefined
                                                                                }
                                                                                className="card-product__range-input"
                                                                                name="range"
                                                                                id={`radio-button-${index}`}
                                                                                type="radio"
                                                                                value={featureItem}
                                                                                onChange={(e) => {
                                                                                    toggleRadio(e, index);
                                                                                }}
                                                                                defaultChecked={
                                                                                    index === 0 ? true : false
                                                                                }
                                                                            ></input>
                                                                            <label
                                                                                className="card-product__range-item"
                                                                                htmlFor={`radio-button-${index}`}
                                                                            >
                                                                                {featureItem}
                                                                            </label>
                                                                        </>
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    </form>
                                                )}
                                            </div>
                                        )}

                                    <div className="card-product__feature">
                                        <h3 className="card-product__text-title">Особенности</h3>
                                        <ul className="card-product__feature-list">
                                            {currentItem.fields.fields.map((featureItem, index) => {
                                                return (
                                                    <li
                                                        className="card-product__feature-item"
                                                        key={index}
                                                    >
                                                        {featureItem}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    {currentItem.fields.specificationsName &&
                                        currentItem.fields.specificationsValue && (
                                            <>
                                                {currentItem.fields.specificationsName.length ===
                                                    currentItem.fields.specificationsValue.length && (
                                                        <div className="card-product__specification">
                                                            <h3 className="card-product__text-title">
                                                                Технические характеристики
                                                            </h3>
                                                            <div className="card-product__specification-wrapper">
                                                                <div className="card-product__specification-keys">
                                                                    {currentItem.fields.specificationsName.map(
                                                                        (specificationItemKey, index) => {
                                                                            return (
                                                                                <span
                                                                                    className="card-product__specification-key-text"
                                                                                    key={index}
                                                                                >
                                                                                    {specificationItemKey}
                                                                                </span>
                                                                            );
                                                                        }
                                                                    )}
                                                                </div>

                                                                <div className="card-product__specification-value">
                                                                    {currentItem.fields.specificationsValue.map(
                                                                        (specificationItemValue, index) => {
                                                                            return (
                                                                                <span
                                                                                    className="card-product__specification-value-text"
                                                                                    key={index}
                                                                                >
                                                                                    {specificationItemValue}
                                                                                </span>
                                                                            );
                                                                        }
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                            </>
                                        )}

                                    <div className="card-product__button-container">

                                        <ContactsPopap
                                            buttonName="Оставить заявку"
                                            textPreview="Введите контактные данные и мы свяжемся с вами в течении 15 минут"
                                            product={`${currentItem.fields.nameCategory} ${currentItem.fields.name}`}
                                            article={currentItem.fields.article}
                                            range={radioState}
                                        ></ContactsPopap>

                                        {currentItem.fields.document && (
                                            <a
                                                href={`https://${currentItem.fields.document.fields.file.url}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                title="Документы товара"
                                                className="card-product__document"
                                            >
                                                <div className="card-product__document-icon"></div>
                                                <span className="card-product__document-text">
                                                    Документация
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <CardGallery
                                items={currentItem.fields}>
                            </CardGallery>

                        </div>
                    </div>

                    {isSkylight &&
                        <>
                            <div className="card-product__advantages">
                                <div className="container">
                                    <div className="card-product__advantages-wrapper">
                                        <div className="card-product__advantages-image-block">
                                            <div className="card-product__advantages-image-container">
                                                <Image
                                                    className="card-product__advantages-image"
                                                    src={advantagesImage}
                                                    alt="Окна NICE WIN"
                                                    width="600px"
                                                    height="500px"
                                                ></Image>
                                                <div className="card-product__advantages-image-dot-container dot-position--first">
                                                    <div className="card-product__advantages-image-dot"></div>
                                                    <div className="card-product__advantages-image-description">
                                                        <p className="card-product__advantages-image-description-text">
                                                            Цельный каркас их дерева высших пород
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="card-product__advantages-image-dot-container dot-position--second">
                                                    <div className="card-product__advantages-image-dot"></div>
                                                    <div className="card-product__advantages-image-description">
                                                        <p className="card-product__advantages-image-description-text">
                                                            Каждое стекло протестировано на ударопрочность и
                                                            звукоизоляцию
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="card-product__advantages-image-dot-container dot-position--third">
                                                    <div className="card-product__advantages-image-dot"></div>
                                                    <div className="card-product__advantages-image-description">
                                                        <p className="card-product__advantages-image-description-text">
                                                            Простой и надежный механизм открывания окна
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="card-product__advantages-image-dot-container dot-position--four">
                                                    <div className="card-product__advantages-image-dot"></div>
                                                    <div className="card-product__advantages-image-description">
                                                        <p className="card-product__advantages-image-description-text">
                                                            Идеальное качество сборки гарантирует простую и
                                                            быструю установку
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-product__advantages-signature">
                                                Многократное тестирование окна на заводе NICE WIN
                                            </p>
                                        </div>
                                        <div className="card-product__advantages-content">
                                            <h2 className="card-product__advantages-content-title">
                                                Почему окна NICE WIN?
                                            </h2>
                                            <div className="card-product__advantages-content-text-container">
                                                <p className="card-product__advantages-content-text">
                                                    Благодаря 75-летнему опыту производства мансардных
                                                    окон, мы достигли самых высоких производственных
                                                    стандартов качества выпускаемой нами продукции.
                                                </p>
                                                <p className="card-product__advantages-content-text">
                                                    Уникальное решение - Комфортное стекло, сохраняет тепло
                                                    в доме зимой и предотвращает накопление тепла летом.
                                                    Кроме того, благодаря блокировке 95% ультрафиолетовых
                                                    лучей он защищает мебель и ковры от выцветания.
                                                </p>
                                                <p className="card-product__advantages-content-text">
                                                    Технология шумоподавления снижает внешний шум на 50%
                                                    эффективнее, чем аналогичные окна на рынке.
                                                </p>
                                                <p className="card-product__advantages-content-text">
                                                    Даже самые доступные окна в нашей продукции способны
                                                    выдерживать ураган уровня 2 и ветра до 110 миль в час.
                                                </p>
                                            </div>
                                            <ul className="card-product__feature-list">
                                                <li className="card-product__feature-item">
                                                    Максимальная защита от внешней среды
                                                </li>
                                                <li className="card-product__feature-item">
                                                    Только качественные породы дерева и пластика
                                                </li>
                                                <li className="card-product__feature-item">
                                                    Высокий уровень комфорта и шумоизоляции
                                                </li>
                                                <li className="card-product__feature-item">
                                                    Гарантия до 20 лет
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Тут работает блокировщик рекламы, разобраться с ним */}

                            {/* <div className="card-product__video">
                                <div className="container">
                                    <h2 className="card-product__video-title">
                                        Качество производимых продуктов
                                    </h2>
                                    <p className="card-product__video-text">
                                        Вы можете посмотреть процесс производства нашей продукции с
                                        самого начала.
                                    </p>
                                    <div className="card-product__video__wrapper">
                                        <iframe
                                            className="card-product__video-frame"
                                            width="100%"
                                            height="600px"
                                            src="https://www.youtube.com/embed/jOUUbvzDKE8"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div> */}
                        </>
                    }

                </div>
            )
            }
        </div >
    );
};