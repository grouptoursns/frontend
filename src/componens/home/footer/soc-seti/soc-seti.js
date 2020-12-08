import React from "react";
import "./soc-seti.css";
import instagram from "./img/Vector(1).png";
import facebook from "./img/Vector(2).png";
import stripe from "./img/Vector(3).png";
import twiter from "./img/Vector(4).png";
import youtube from "./img/Vector(5).png";
import { useTranslation } from "react-i18next";

const SocSeti = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="block-soc-seti">
      <span>{t("footer.social")}</span>
      <div className="soc-icon">
        {data &&
          data.map((item) => {
            if (item.name == "instagram")
              return (
                <a href={item.url} target="_blank" key={item.id}>
                  <img src={instagram} alt="img" />
                </a>
              );
            if (item.name == "FaceBook")
              return (
                <a href={item.url} target="_blank" key={item.id}>
                  <img src={facebook} alt="img" />
                </a>
              );
            if (item.name == "Stripe")
              return (
                <a href={item.url} target="_blank" key={item.id}>
                  <img src={stripe} alt="img" />
                </a>
              );
            if (item.name == "Twitter")
              return (
                <a href={item.url} target="_blank" key={item.id}>
                  <img src={twiter} alt="img" />
                </a>
              );
            if (item.name == "YouTube")
              return (
                <a href={item.url} target="_blank" key={item.id}>
                  <img src={youtube} alt="img" />
                </a>
              );
          })}
      </div>
    </div>
  );
};
export default SocSeti;
