import React from "react";
// import { Link } from "react-router-dom";
// import MetaTags from "react-meta-tags";

function Thanks() {
    return (
        <div className="thanks">

            <div className="container">
                {/* <div className="bread-crumbs">
                    <ul className="bread-crumbs__list">
                        <li className="bread-crumbs__item">
                            <Link className="bread-crumbs__link" to="/">
                                Главная
                            </Link>
                        </li>
                        <li className="bread-crumbs__item">
                            <span className="bread-crumbs__link bread-crumbs__link--active">
                                Заявка принята
                            </span>
                        </li>
                    </ul>
                </div> */}
                <div className="text">
                    <h1>Спасибо!</h1>
                    <h3>Мы обработаем заявку и свяжемся с вами в ближайшее время.</h3>
                </div>
            </div>
        </div>
    );
}

export default Thanks;