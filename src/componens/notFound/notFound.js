import React from "react";
import "./notFound.css";
import img from "./img/Rectangle 98.png";
import { Link } from "react-router-dom";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation()

    return (
    <div>
      <NavBar />
      <div className="page-notFound">
        <div className="content-notFound">
          <strong className="notFound-title">{t("notFound.page")}</strong>
          <span className="back">
            {t("notFound.back")}{" "}
            <Link to="/" className="not-home">
              {t("notFound.home")}
            </Link>
          </span>

          <img alt="" src={img} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
