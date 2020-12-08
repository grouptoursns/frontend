import React, { useEffect } from "react";
import "./history.css";
import images from "./img/44240014405_58ce5bce45_h.png";
import img1 from "./img/llw2.jpg";
import img2 from "./img/selfie.jpg";
import { useTranslation } from "react-i18next";


const History = () => {
  const { t } = useTranslation();

  return (
    <div className="history">
      <div className="histore-title">
        {/*<span className="history-titl">Our history</span>*/}
        <div className="line-history"></div>
      </div>
      <div className="block-content hist">
        <img alt="img" style={{ padding: "20px" }} src={img1} />
        <div className="block-history-text">
          <div style={{ padding: "20px" }} className="history-desc">
            <span>{t("aboutUs.first")}</span>
            <br />
            <img
              alt="img"
              style={{ width: "600px", padding: "20px" }}
              src={img2}
            />
            <span>{t("aboutUs.second")}</span>
          </div>
        </div>
      </div>
      {/*<div className="block-content block-buttom-history">*/}
      {/*  <div className="block-history-text">*/}
      {/*    <span className="lorem"></span>*/}
      {/*    <div style={{"padding": "20px"}} className="history-desc">*/}

      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
export default History;
