import React from "react"
import "./footer.css";
import BoxAbout from "./box-about/box-about.js"
import Line from "./white-line/line.js"
import BlockRegistr from "./block-registration/block-registr.js"
import Text from "./text-end/text.js"

const Footer=()=>{
    return(
        <div className="footer">
            <BoxAbout/>
            <Line/>
            <BlockRegistr/>
            <Text/>
        </div>
    )
}
export default Footer;