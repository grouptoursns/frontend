import React from "react";
import "./result-search.css";
import ResultCard from "./result-card/result-card.js";
import Filter from "./result-filter/result-filter.js";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";

const ResultSearch = () => {
  return (
    <div>
      <NavBar />
      <div className="block-result-filter">
        <Filter />
        <ResultCard />
      </div>
      <Footer />
    </div>
  );
};
export default ResultSearch;
