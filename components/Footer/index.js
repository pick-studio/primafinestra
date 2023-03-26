import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__contact">
                        <div className="footer__contact-block">
                            <h3 className="footer__contact-title">Телефон</h3>
                            <a className="footer__contact-link" href="tel:+79052445577">
                                8 (905) 244-55-77
                            </a>
                        </div>

                        <div className="footer__contact-block">
                            <h3 className="footer__contact-title">Email адрес</h3>
                            <a className="footer__contact-link" href="mailto:wdf@inbox.ru`">
                                wdf@inbox.ru
                            </a>
                        </div>

                        <div>
                            <h3 className="footer__contact-title">Мессенджеры</h3>
                            <div className="footer__top-social-list">
                                <a
                                    href="https://t.me/+79052445577"
                                    className="footer__top-social-link footer__top-social-link--instagram"
                                >
                                    <svg className="footer__top-social-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="footer__top-social-icon--color" fillRule="evenodd" clipRule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM16.0715 21.8015C13.6673 22.8512 11.1971 23.9298 8.93825 25.174C7.75877 26.0376 9.32638 26.6485 10.7971 27.2215C11.0309 27.3126 11.2622 27.4027 11.4797 27.4927C11.6607 27.5484 11.8447 27.607 12.0312 27.6664C13.6669 28.1875 15.4907 28.7686 17.0787 27.8945C19.6873 26.396 22.149 24.6636 24.6089 22.9325C25.4148 22.3653 26.2205 21.7983 27.0311 21.2397C27.0691 21.2154 27.1119 21.1876 27.1588 21.1573C27.8493 20.7096 29.4024 19.7029 28.8279 21.0901C27.4695 22.5757 26.0144 23.8907 24.5515 25.213C23.5655 26.1041 22.5759 26.9985 21.6099 27.9505C20.7686 28.6341 19.8949 30.0088 20.837 30.9661C23.0069 32.4851 25.2107 33.9673 27.4132 35.4487C28.1299 35.9307 28.8466 36.4127 29.5618 36.8959C30.774 37.8637 32.6685 37.0808 32.935 35.5685C33.0535 34.8728 33.1725 34.1772 33.2915 33.4815C33.9491 29.6368 34.6069 25.7907 35.188 21.9335C35.267 21.3284 35.3565 20.7234 35.4461 20.1181C35.6632 18.651 35.8806 17.1821 35.9485 15.7071C35.7735 14.2351 33.9887 14.5588 32.9955 14.8898C27.8903 16.8324 22.8361 18.919 17.8019 21.0424C17.2316 21.295 16.6535 21.5474 16.0715 21.8015Z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/790524455770"
                                    className="footer__top-social-link footer__top-social-link--instagram"
                                >
                                    <svg className="footer__top-social-icon" width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
                                        <defs></defs>
                                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g className="footer__top-social-icon--color" id="Black" transform="translate(-700.000000, -360.000000)" fill="#fff">
                                                <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" id="Whatsapp"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__catalog">
                        <div className="footer__catalog-wrapper">
                            <div className="footer__catalog-block">
                                <Link className="footer__catalog-text" href="/catalog-windows">
                                    Мансардные окна
                                </Link>
                                <Link className="footer__catalog-text" href="/catalog-ceramic">
                                    Подкровельные мембраны
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-wrapper">
                        {/* <div>ООО «Найсвин»</div> */}
                        <div className="footer__bottom-policy-container">
                            <Link className="footer__bottom-policy" href="/policy">Политика конфиденциальности</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};