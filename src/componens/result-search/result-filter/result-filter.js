import React, { useState } from "react";
import "./result-filter.css";
import DropdownCountry from "./country/country.js";
import Activity from "./activity/activity.js";
import Price from "./price/prise.js";
import { connect } from "react-redux";
import { filterTour } from "../../../actions/filterTour";
import{trigerFilterOn} from "../../../actions/trigerFilter"
import{searchTrigerFalse} from "../../../actions/tourSearch";
import {trigerBestOff} from "../../../actions/trigerBest";
import {trigerActivityOff} from "../../../actions/trigerActivity"
import {useTranslation} from "react-i18next";


const Filter = (props) => {
  const {t} = useTranslation()
  const [country, setCountry] = useState("");
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState([200,600]);

  const chengeCountry = (e) => {
    setCountry(e);

  };
  const chengeActivity = (e) => {
    setActivity(e);
  };
  const chengePrice = (arr) => {
    setPrice([...arr]);
  };

  const filterTour = () => {
    props.trigerSearchOff()
    props.trigerBestOff()
    props.trigerActivityOff()
    props.getFilterTour(
      `http://161.35.199.172:7000/api/tour-filter/?country=${country}&/&min_price=${price[0]}&max_price=${price[1]}&category=${activity}`
    );
    props.trigerFilter()
  };
  return (
    <div className="block-filter">
      <div className="block-title-filter">
        <h1>{t("result.search")}</h1>
      </div>
      <div className="filter-block">
        <div className="dropdown-filter">
          <div className="country">
            <span className="country-span">{t("result.country")}</span>
            <DropdownCountry countryProps={chengeCountry} />
          </div>
          <div className="activity">
            <span>{t("activities.activity")}</span>
            <Activity activityProps={chengeActivity} />
          </div>
          <div className="price">
            <Price priceProps={chengePrice} />
          </div>
        </div>
        <button onClick={filterTour} className="apply">
          {t("result.apply")}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilterTour: (url) => dispatch(filterTour(url)),
    trigerFilter:()=>dispatch(trigerFilterOn()),
    trigerSearchOff:()=>dispatch(searchTrigerFalse()),
    trigerBestOff:()=>dispatch(trigerBestOff()),
    trigerActivityOff:()=>dispatch(trigerActivityOff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
