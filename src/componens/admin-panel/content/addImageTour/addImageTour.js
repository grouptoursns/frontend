import React, { useState } from "react";
import BlockBtn from "../block-btn/block-btn";
import "./addImageTour.css";
import LoadingImage from "./loadingImage/loadingImage";
import { connect } from "react-redux";
import TourPictureAddAdmin from "../../../../actions/admin-panel/tourPicturesAdd/tourPictureAdd";
import { errCreateTour } from "../../../../actions/admin-panel/createTour/createTour";

const AddImageTour = (props) => {
  const [data, setData] = useState([]);
  let formData = new FormData();
  const updateImage = (arrFiles) => {
    setData([...arrFiles]);
  };
  const Postdata = () => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      formData.append("image", data[i]);
    }
    props.TourPictureAdd(props.idTour, formData);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className="wrapperr-addTour">
      <BlockBtn />
      <div className="text-image">
        <LoadingImage dataImage={updateImage} />
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
