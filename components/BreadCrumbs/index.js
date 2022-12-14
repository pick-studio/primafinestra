import React from "react";
import Link from "next/link";

export default function BreadCrumbs({ catalogUrl, catalogName, productName }) {

    return (
        <div className="bread-crumbs">
            <div className="container">
                <ul className="bread-crumbs__list">
                    <li className="bread-crumbs__item">
                        <Link className="bread-crumbs__link" href="/">
                            Главная
                        </Link>
                    </li>
                    {catalogUrl ? (
                        <li className="bread-crumbs__item">
                            <Link className="bread-crumbs__link" href={`/${catalogUrl}`}>
                                {catalogName}
                            </Link>
                        </li>
                    ) : (
                        <li className="bread-crumbs__item">
                            <span className="bread-crumbs__link">
                                {catalogName}
                            </span>
                        </li>
                    )
                    }
                    {productName &&
                        <li className="bread-crumbs__item">
                            <span className="bread-crumbs__link">
                                {productName}
                            </span>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};