import { createClient } from "contentful";
import ProductCard from "../../../components/ProductCard/index.js";
import Image from "next/image.js";
import Head from "next/head.js";

import firstAdvantagesImage from '../../../public/img/card-product/advantages-roofing-materials/image-1.jpg';
import secondAdvantagesImage from '../../../public/img/card-product/advantages-roofing-materials/image-2.jpg';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "products",
    });

    const paths = res.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export async function getStaticProps({ params }) {
    const products = await client.getEntries({ content_type: "products" });

    const { items } = await client.getEntries({
        content_type: "products",
        "fields.slug": params.slug,
    });

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { products: products.items, currentItem: items[0] },
        revalidate: 1,
    };
}

export default function CardProduct({ products, currentItem }) {
    return (
        <>
            <Head>
                {currentItem &&
                    <title>{currentItem.name} - купить в Москве c доставкой по России</title>
                }
                <meta
                    name="description"
                    content="Кровельные материалы от лидеров производства. У нас вы можете купить подкровельные мембраны от лидера производства из Европы, компании Corotop с доставкой по Москве и России"
                />
                <meta property="og:description" content="Кровельные материалы от лидеров производства. У нас вы можете купить подкровельные мембраны от лидера производства из Европы, компании Corotop с доставкой по Москве и России" />
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
            {products && currentItem &&
                <>
                    <ProductCard products={products} categoryUrl="roofing-materials" currentItem={currentItem} isSkylight={false} />

                    <div className="container">
                        <h2 className="card-product__advantages-content-title">Рекомендуемые структуры наклонной кровли</h2>
                        <Image src={firstAdvantagesImage} alt="Рекомендуемые структуры наклонной кровли"></Image>
                        <Image src={secondAdvantagesImage} alt="Рекомендуемые структуры наклонной кровли"></Image>
                    </div>
                </>
            }
        </>
    );
};