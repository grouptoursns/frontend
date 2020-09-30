import React from "react";
import "./registr.css";
import next from "./img/Vector(1).png";
import {Link}  from "react-router-dom";
import {useTranslation} from "react-i18next";


const Registy = () => {
    const {t} = useTranslation()

    return (
    <div className="registr">
      <Link to="/sign-up-company">
        
        <span className="regist">{t("footer.register")}</span>
        <img src={next} alt="img" />
      </Link>
    </div>
  );
};
export default Registy;
