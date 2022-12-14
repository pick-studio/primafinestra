import React from "react";
import CasesItem from "./CasesItem.js";

function CasesList({ items, url, catalogUrl, isLoad }) {

  const renderItems = () => {
    const filtredItems = items;

    return (!isLoad ? [...Array(8)] : filtredItems).map((caseItem, index) => (
      <CasesItem key={index} caseItem={caseItem} catalogUrl={catalogUrl} index={index} url={url} isLoad={isLoad}></CasesItem>
    ));
  };

  return (
    <>
      <ul className="catalog-roof-windows__list">
        {renderItems()}
      </ul>
    </>
  );
}

export default CasesList;
