import React from "react";
import "./result-search.css";
import ResultCard from "./result-card/result-card.js";
import Filter from "./result-filter/result-filter.js";

const ResultSearch = () => {
  return (
    <div className="block-result-filter">
      <Filter />
      <ResultCard />
    </div>
  );
};
export default ResultSearch;
