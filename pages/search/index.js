import { createClient } from "contentful";
import Router from 'next/router'
import React, { useState } from "react";
import classnames from "classnames";
// import CardProduct from "../../components/cardProduct";
import CasesItem from "../catalog/components/CasesItem";
import Head from "next/head";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const products = await client.getEntries({ content_type: "products", limit: 250 });

    return {
        props: { items: products.items },
        revalidate: 1,
    };
}

function Search({ items }) {

    // закрывать при переходе на другую страницу
    // let location = useLocation().pathname;

    const [products, setProducts] = React.useState(items);
    const [value, setValue] = React.useState("");
    const [isOpen, setIsOpen] = useState(false);

    const searchButton = React.useRef();
    const searchInput = React.useRef();

    const filteredProducts = products.filter((product) => {
        if (value.toLowerCase() !== "") {
            if (product.fields.name.toLowerCase().includes(value.toLowerCase().replace(/\s+/g, ' ').trim()) || product.fields.category.toLowerCase().includes(value.toLowerCase().replace(/\s+/g, ' ').trim() || product.fields.article.toLowerCase().includes(value.toLowerCase().replace(/\s+/g, ' ').trim()))) {
                return product;
            }
        }
    });

    // const inputClickHandler = () => {
    //     setIsOpen(!isOpen);
    //     document.body.style.overflow = "hidden";
    // }

    // const inputClickClose = () => {
    //     setIsOpen(!isOpen);
    //     document.body.style.overflow = "visible";
    // }

    return (
        <>
            <Head>
                <title>Поиск по каталогу - большой выбор кровельных материалов</title>
                <meta
                    name="description"
                    content="Поиск по каталогу компании PRIMAFINESTRA. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России"
                />
                <meta property="og:description" content="Поиск по каталогу компании PRIMAFINESTRA. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России" />
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
            <section
                className={classnames("search", {
                    "search--open": isOpen,
                })}
            >
                <div className="container">
                    <div className="search__wrapper">
                        <form className="search__form">
                            <input ref={searchInput}
                                className="search__input"
                                onChange={(event) => { setTimeout(() => setValue(event.target.value), 750); }}
                                type="text"
                                placeholder="Например Horizon Fixed"></input>
                            <a className="search__input-close" onClick={() => Router.back()} ref={searchInput}></a>
                        </form>

                        <div className="catalog__list">
                            {filteredProducts.length < 1 &&
                                <div className="no-products">
                                    <div className="no-products__img"></div>
                                    <h3 className="no-products__title">Ничего не найдено</h3>
                                    <p className="no-products__text">Введите в поле название или артикул товара</p>
                                </div>
                            }
                            {filteredProducts.map((item, index) => {
                                return (
                                    <CasesItem key={index} caseItem={item} catalogUrl={"Доделать"} index={index} isLoad={true}></CasesItem>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search;