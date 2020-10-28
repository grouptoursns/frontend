import React from "react";
import "./useful.css";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";


const Useful = () => {
  const {t} = useTranslation()

  return (
    <div className="useful">
      <span className="title-contact">{t("footer.usefulLinks")}</span>
      <div className="content-block">
        <Link to="/">
          <span className="link-footer">{t("footer.home")}</span>
        </Link>
        <Link to="/about">
          <span className="link-footer">{t("footer.about")}</span>
        </Link>
        <Link to="/activity">
          <span className="link-footer">{t("footer.activities")}</span>
        </Link>
        <Link to="/destinations">
          <span className="link-footer">{t("footer.destinations")}</span>
        </Link>
      </div>
    </div>
  );
};
export default Useful;
