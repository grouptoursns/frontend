import React from "react";
import "./about-us.css";
import paint from "./img/Subtract.png";
import phone from "./img/Vector (4).png";
import mail from "./img/mail.png";
import {useTranslation} from "react-i18next";


const AboutUs = ({data}) => {
  const {t} = useTranslation()

  return (
    <div className="about">
      <span className="title-contact">{t("footer.title")}</span>
      <div className="content-block">
        {
          data&&
          data.map((item,index)=>{
            if(item.name=="address"){
              return(
                <div className="block-text-footer" key={item.id}>
                <img className="paint-footer" alt="img" src={paint} />
              <span>{item.text}</span>
              </div>
              )
            }
            if(item.name=="phone"){
              return(
                <div className="block-text-footer" key={item.id}>
           <img alt="img" src={phone} />
              <span>{item.text}</span>
              </div>
              )
            }
            if(item.name=="mail"){
              return(
                <div className="block-text-footer" key={item.id}>
                <img alt="img" src={mail} />
              <span>{item.text}</span>
              </div>
              )
            }
          })
        }
       

      </div>
    </div>
  );
};
export default AboutUs;
