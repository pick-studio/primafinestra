import React from 'react';
import CasesList from '../components/CasesList.js'
import Head from 'next/head.js';
import BreadCrumbs from '../../../components/BreadCrumbs';

import * as contentful from 'contentful';

export async function getStaticProps() {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const products = await client.getEntries({
        content_type: "products",
        order: '-fields.filter', // Фильтрация
        'fields.category': 'Мансардные окна', // Отображаемая категория
        limit: 250 // Лимит отображаемой продукции
    });

    return {
        props: { products: products.items },
        revalidate: 1,
    };
}

export default function Skylights({ products }) {

    console.log(products);

    return (
        <>
            <Head>
                <title>Мансардные окна - купить в Москве c доставкой по России</title>
                <meta
                    name="description"
                    content="Мансардные окна от лидеров производства. У нас вы можете купить мансардные окна от лидера производства из Европы, компании Dakea с доставкой по Москве и России"
                />
                <meta property="og:description" content="Мансардные окна от лидеров производства. У нас вы можете купить подкровельные мембраны от лидера производства из Европы, компании Dakea с доставкой по Москве и России" />
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
            <div className="catalog-roof-windows">
                <BreadCrumbs catalogName={"Мансардные окна"} />

                <div className="container">

                    <div className="catalog-roof-windows__title-container">
                        <h1 className="catalog-roof-windows__title">Мансардные окна</h1>
                        <p className="catalog-roof-windows__subtitle">Профессиональное Европейское производство</p>
                    </div>
                    <div className="catalog-roof-windows__wrapper">
                        <CasesList
                            // catalogName={catalogName}
                            catalogUrl={"skylights"}
                            items={products}
                            // url={url}
                            isLoad={true} // Изменить
                        ></CasesList>
                    </div>
                </div>
            </div>
        </>
    )
};