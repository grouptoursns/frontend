import React, { useEffect } from "react";
import "./footer.css";
import BoxAbout from "./box-about/box-about.js";
import Line from "./white-line/line.js";
import BlockRegistr from "./block-registration/block-registr.js";
import Text from "./text-end/text.js";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../../../actions/about";

const Footer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.AboutData.about_data)
  useEffect(() => {
    dispatch(getAbout());
  }, []);
  return (
    <div className="footer">
      <BoxAbout data={data&&data.Contacts}/>
      <Line />
      <BlockRegistr data={data&&data.SocialLinks}/>
      <Text />
    </div>
  );
};
export default Footer;
