import '../styles/globals.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/main-page.css';
import '../styles/about.css';
import '../styles/bread-crumbs.css';
import '../styles/contacts.css';
import '../styles/contacts-form.css';
import '../styles/gallery.css';
import '../styles/card-product.css';
import '../styles/contacts-popap.css';
import '../styles/catalog.css';
import '../styles/search.css';
import '../styles/thanks.css';

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};
