import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import plus from "./img/plus.png";
import done from "./img/done.png";
import deleteImg from "./img/del.png";
import "./addImage.css";
import css from "./addPhote.module.css";

const GuidPhoto = (props) => {
  let { setimg, image } = props;
  const [block, setBlock] = useState("block");
  const [url, setUrl] = useState("");
  const [hovered, setHovered] = useState(false);
  const [name, setName] = useState("");
  const [checkName, setCheckName] = useState("");
  const [image1, setImage] = useState(false);
  const [dataFile, setDataFile] = useState();

  useEffect(() => {
    if (props.photoDefault !== null) {
      setBlock("none");
    }
  });
 
  const handlehange = (e) => {
    let file = e.target.files[0];

    setBlock("none");
    let reader = new FileReader();
    if (e.target.files.length > 0) {
      if (checkName === "") {
        reader.readAsDataURL(e.target.files[0]);
        setName(e.target.files[0].name);
      } else {
        if (e.target.files[0].name === checkName) {
          setCheckName("");
          return 0;
        } else {
          reader.readAsDataURL(e.target.files[0]);
          setName(e.target.files[0].name);
        }
      }
    } else {
      setBlock("block");
    }
    reader.onload = (e) => {
      setImage(true);
      setUrl(e.target.result);
      setDataFile(file);
      props.photoGuid(file);
      props.imageProps(true);
    };
  };

  const containerStyle = {
    background: `url(http://161.35.199.172${props.photoDefault}) center center no-repeat`,
    backgroundSize: "cover",
    width: "80px",
    height: "80px",
  };
  return (
    <>
      <div
        className={css.fileWrapper}
        style={
          url.length > 0
            ? {
                background: `url(${url}) center center no-repeat`,
                backgroundSize: url.length > 0 ? "cover" : null,
              }
            : props.photoDefault && containerStyle
        }
      >
        <label className={css.inpWrapper}>
          <input
            {...props}
            onChange={(e) => handlehange(e)}
            accept="image/*"
            type="file"
            className={css.chooseFile}
          />
          <img style={{ display: block }} src={plus} alt="+" />
        </label>
        
        <img
          style={{ display: block === "block" ? "none" : "block" }}
          src={hovered ? deleteImg :  done}
          onMouseOver={() => setHovered(!hovered)}
          onMouseOut={() => setHovered(!hovered)}
          onClick={() => {
            setCheckName(name);
            setUrl("");
            setBlock("block");
            props.imageProps(false);
          }}
          alt="Done"
        />
      </div>
    </>
  );
};
export default GuidPhoto;
