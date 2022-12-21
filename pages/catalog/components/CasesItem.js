import React from "react";
import Link from "next/link";
// import urlTransliterate from "./UrlTransliterate";
import ContentLoader from "react-content-loader";

export default function CasesItem({ caseItem, index, isLoad = false }) {

  const returnCatalogUrl = (currentCategory) => {
    if (currentCategory === "Мансардное окно") {
      const catalogUrl = "skylights";
      return catalogUrl;
    } else if (currentCategory === "Подкровельная мембрана") {
      const catalogUrl = "roofing-materials";
      return catalogUrl;
    }
  };

  return (
    <>
      {isLoad ? (
        <Link
          key={index}
          className="catalog-roof-windows__item"
          href={`/catalog/${returnCatalogUrl(caseItem.fields.nameCategory)}/${caseItem.fields.slug}`}
        >
          {caseItem.fields.hit && (
            <div className="catalog-roof-windows__item-hit">
              <span className="catalog-roof-windows__item-hit-text">
                Хит продаж
              </span>
            </div>
          )}

          {caseItem.fields.new && (
            <div className="catalog-roof-windows__item-new">
              <span className="catalog-roof-windows__item-new-text">
                <span className="catalog-roof-windows__item-new-text--big">Новинка!</span>
                <span className="catalog-roof-windows__item-new-text--min">New!</span>
              </span>
            </div>
          )}

          <div
            className="catalog-roof-windows__item-img"
            style={{
              backgroundImage: `url(https:${caseItem.fields.images[0].fields.file.url})`,
            }}
          >
            {caseItem.fields.salePrice && (
              <span className="catalog-roof-windows__sale-percent">-{Math.round(100 - (caseItem.fields.salePrice * 100 / caseItem.fields.price))}%</span>
            )}
          </div>

          <div className="catalog-roof-windows__item-content">
            <p className="catalog-roof-windows__item-signature">
              {caseItem.fields.nameCategory}
            </p>
            <h3 className="catalog-roof-windows__item-title">
              {caseItem.fields.name}
            </h3>

            {caseItem.fields.rangeName && caseItem.fields.rangeList ? (
              <>
                {caseItem.fields.rangeName && (
                  <>
                    <p className="catalog-roof-windows__item-size">
                      <span>{caseItem.fields.rangeName}</span>
                      <span> </span>
                      <span> - {caseItem.fields.rangeList.length}</span>
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                {caseItem.fields.specificationsName &&
                  caseItem.fields.specificationsValue && (
                    <>
                      {caseItem.fields.specificationsName.length ===
                        caseItem.fields.specificationsValue.length && (
                          <>
                            <p className="catalog-roof-windows__item-size">
                              <span>{caseItem.fields.specificationsName[0]}</span>
                              <span> </span>
                              <span>{caseItem.fields.specificationsValue[0]}</span>
                            </p>
                          </>
                        )}
                    </>
                  )}
              </>
            )}

            <div className="catalog-roof-windows__item-price">
              {caseItem.fields.salePrice ? (
                <>
                  <div className="catalog-roof-windows__item-price-sale-wrapper">
                    <div className="catalog-roof-windows__item-price-sale">
                      {caseItem.fields.priceFrom ? <span>от </span> : undefined}
                      <span>{caseItem.fields.salePrice} ₽</span>
                      <span>
                        {caseItem.fields.pricePerMetr ? (
                          <span>
                            {" "}
                            м<sup>2</sup>
                          </span>
                        ) : undefined}
                      </span>
                    </div>
                    <div className="catalog-roof-windows__item-price-text">
                      {caseItem.fields.priceFrom ? <span>от </span> : undefined}
                      <span>{caseItem.fields.price} ₽</span>
                      {caseItem.fields.pricePerMetr ? (
                        <span>
                          {" "}
                          м<sup>2</sup>
                        </span>
                      ) : undefined}
                    </div>
                  </div>
                </>
              ) : (
                <span className="catalog-roof-windows__item-price-text">
                  {caseItem.fields.price} ₽
                </span>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className="catalog-roof-windows__item">
          <ContentLoader
            className="content-loader__item"
            speed={2}
            width={255}
            viewBox="0 0 280 430"
            backgroundColor="#f2f2f2"
            foregroundColor="#ecebeb"
          >
            <rect
              className="content-loader__item--img"
              x="8"
              y="-1"
              rx="10"
              ry="10"
              width="260"
              height="280"
            />
            <rect
              className="content-loader__item--content"
              x="11"
              y="315"
              rx="10"
              ry="10"
              width="137"
              height="60"
            />
            <rect
              className="content-loader__item--price"
              x="12"
              y="390"
              rx="10"
              ry="10"
              width="113"
              height="36"
            />
          </ContentLoader>
        </div>
      )}
    </>
  );
};
