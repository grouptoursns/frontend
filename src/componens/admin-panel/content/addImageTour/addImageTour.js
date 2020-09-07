import React, { useState } from "react";
import BlockBtn from "../block-btn/block-btn";
import "./addImageTour.css";
import LoadingImage from "./loadingImage/loadingImage";
import { connect } from "react-redux";
import TourPictureAddAdmin from "../../../../actions/admin-panel/tourPicturesAdd/tourPictureAdd";
import { errCreateTour } from "../../../../actions/admin-panel/createTour/createTour";

const AddImageTour = (props) => {
  const [data, setData] = useState([]);
  const [image,setImage]=useState(false)
  let formData = new FormData();
  const updateImage = (arrFiles) => {
    setData([...arrFiles]);
  };
  const Postdata = () => {
    if(data.length===0){
      console.log("hi")
      setImage(true)
    }
    else{
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      formData.append("image", data[i]);
    }
    props.TourPictureAdd(props.idTour, formData);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  }
  };
  const clickInput =()=>{
    setImage(false)
  }
  return (
    <div className="wrapperr-addTour">
      <BlockBtn />
      <div className="text-image">
        <span className={"title-update-image"+ (image ? " err-image" : " ")}>
          Upload at least one picture for the tour
        </span>
        <LoadingImage dataImage={updateImage} clickInput={()=>clickInput} />
        <div className="addImage-block-btn">
          <button className="addImage-back" onClick={() => props.back1()}>
            &#10092; Back
          </button>
          <button className="addImage-btn" onClick={Postdata}>
            Upload images
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    idTour: state.trigerCreateTour.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    TourPictureAdd: (id, dataImage) =>
      dispatch(TourPictureAddAdmin(id, dataImage)),
    back1: () => dispatch(errCreateTour()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImageTour);
