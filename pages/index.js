import Head from 'next/head';
import Catalog from '../components/Home/Catalog';
import Consultation from '../components/Home/Consultation';
import Main from '../components/Home/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>PRIMAFINESTRA - все для кровли в Москве</title>
        <meta name="description" content="Generated by create next app" />
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
