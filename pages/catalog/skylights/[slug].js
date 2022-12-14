import { createClient } from "contentful";
import ProductCard from "../../../components/ProductCard/index.js";

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
        <ProductCard products={products} categoryUrl="skylights" currentItem={currentItem} isSkylight={true} />
    );
};