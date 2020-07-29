import React from "react";
import "./result-filter.css";
import DropdownCountry from "./country/country.js";
import Activity from "./activity/activity.js";
import Price from "./price/prise.js";

const Filter = (props) => {
    console.log(props)
  return (
      
    <div className="block-filter">
      <div className="block-title-filter">
        <h1>Results of search</h1>
      </div>
      <div className="filter-block">
        <div className="dropdown-filter">
          <div className="country">
            <span className="country-span">Countries</span>
            <DropdownCountry />
          </div>
          <div className="activity">
            <span>Activities</span>
            <Activity />
          </div>
          <div className="price">
            <Price />
          </div>
        </div>
        <button className="apply">apply</button>
      </div>
    </div>
  );
};
export default Filter;
