import Head from 'next/head';
import Catalog from '../components/Home/Catalog';
import Consultation from '../components/Home/Consultation';
import Main from '../components/Home/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>NICE WIN - все для кровли в Москве</title>
        <meta name="description" content="Мансардные окна от лидеров производства. У нас вы можете купить мансардные окна от лидера производства из Европы, компании NICE WIN с доставкой по Москве и России" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
        <Catalog />
        <Consultation />
      </main>
    </>
  )
}
