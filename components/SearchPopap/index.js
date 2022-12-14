import React, { useState } from "react";
import { useRouter } from 'next/router'
import classnames from "classnames";
import CasesItem from "../../pages/catalog/components/CasesItem";

import * as contentful from 'contentful';

export async function getStaticProps() {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const products = await client.getEntries({
        content_type: "products",
        order: '-fields.filter', // Фильтрация
        limit: 250 // Лимит отображаемой продукции
    });

    return {
        props: { products: products.items },
        revalidate: 1,
    };
}

// Исключить пробелы + добавить название раздела + цену

export default function SearchPopap({ products }) {

    console.log(products);

    // const allProductsList = items;
    const location = useRouter();

    // const [products, setProducts] = React.useState([]);
    const [openSearchContainer, setOpenSearchContainer] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [isFocus, setIsFocus] = useState(true);

    const searchButton = React.useRef();
    const searchInput = React.useRef();

    const changeStateContainer = () => {
        setOpenSearchContainer(!openSearchContainer);

        if (openSearchContainer !== true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    };

    // const searchProducts = products.filter((product) => {
    //     if (value.toLowerCase() !== "") {
    //         if (product.fields.name.toLowerCase().includes(value.toLowerCase()) || product.fields.nameCategory.toLowerCase().includes(value.toLowerCase()) || product.fields.category.toLowerCase().includes(value.toLowerCase())) {
    //             return product;
    //         }
    //     }
    // });

    // React.useEffect(() => {
    //     setProducts(allProductsList);
    // }, [allProductsList]);

    React.useEffect(() => {
        setOpenSearchContainer(false);
        document.body.style.overflow = "visible";
        // searchInput.current.value = "";
    }, [location.asPath]);

    const inputClickHandler = () => {
        setIsOpen(true);
    }

    const hideList = () => {
        setTimeout(() => setIsFocus(false), 100);
    }

    const showList = () => {
        setIsFocus(true);
    }

    const itemClickHandler = (e) => {
        setValue(e.target.textContent);
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div
                ref={searchButton}
                onClick={changeStateContainer}
                className="header__menu-top-search-button"
            ></div>
            <div
                className={classnames("header__menu-top-search-container", {
                    "header__menu-top-search-container-open": openSearchContainer,
                })}
            >
                <div className="container">

                    <div
                        onClick={changeStateContainer}
                        className="header__menu-top-search-close-button"
                    ></div>

                    <div className="header__menu-top-search-list-container">
                        <input
                            ref={searchInput}
                            onChange={(event) => setValue(event.target.value)}
                            onBlur={hideList}
                            onFocus={showList}
                            onClick={inputClickHandler}
                            value={value}
                            className="header__menu-top-search-input"
                            placeholder="Введите название товара ... "
                        ></input>

                        {/* {value && isOpen && isFocus ?
            <ul className="autocomplete">
              {value && isOpen 
              ? filteredProducts.map((caseItem, index) => {
                return (
                  <li key={index} onClick={itemClickHandler} className="autocomplete__item">{caseItem.name}</li>
                );
              })
              :null
            }
            </ul>
            :null
            } */}
                    </div>

                    <div className="header__menu-top-search-list">
                        <ul className="catalog-roof-windows__list">

                            {/* {products &&
                                <>
                                    {searchProducts.map((caseItem, index) => {
                                        return (
                                            <CasesItem key={index} caseItem={caseItem} isLoad={isLoad}></CasesItem>
                                        );
                                    })}
                                </>
                            } */}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};