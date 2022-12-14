// Компонент макета для других страниц, у нас подключен к _app.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

{/* Подключение метрики и других надстроек */ }
import Script from "next/script";

export default function Layout({ children }) {
    return (
        <>

            {/* Подключение метрики и других надстроек */}

            <Script id="yandexMetrica" type="text/javascript" >
                {/* {`(function(m,e,t,r,i,k,a){m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(88523540, "init", {
          clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`} */}

                {`window.replainSettings = { id: '05d73dd1-2129-4bc9-b8d1-1792a63847e4' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');`}
            </Script>

            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}