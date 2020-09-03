import React from "react";
import "./addTour.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Price from "./price/price";
import Count from "./count/count";
import Img from "./uploaderImg";
import BlockBtn from "../block-btn/block-btn";
import Modal from "react-modal";
import Country from "./country/country";
import Status from "./status/status";
import FileUpdate from "./addImage/addImage";
import GuidPhoto from "./guidePhoto/addImage";
import CountryImage from "./countryImage/addImage";
import Difficult from "./difficult/difficult";
import { connect } from "react-redux";
import createTour from "../../../../actions/admin-panel/createTour/createTour";
import { errCreateTour } from "../../../../actions/admin-panel/createTour/createTour";
import Category from "./category/category";
import { number } from "prop-types";

class AddTour extends React.Component {
  state = {
    name: "",
    count_of_day: "",
    min_people: "5",
    main_image: null,
    max_people: "40",
    country: "",
    description: "",
    language: "",
    age_control: "",
    difficult: "",
    location: "",
    min_price: "200",
    max_price: "600",
    about_guide: "",
    guide_photo: null,
    gathering_place: "",
    tour_status: "",
    route_description: "",
    residence: "",
    transport: "",
    what_is_included: "",
    need_to_take: "",
    Category: "",
    country_image: null,
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const formData = new FormData();
 
    const newState = {};
    for (let key in this.state) {
        if(this.state[key]===null){
            newState[key] = "";
         }
         else{
          newState[key]=this.state[key]
         }
     }
    for (const key in newState) {
      formData.append(key, newState[key]);
    }
    this.props.createdTour(formData);
    console.log(this.state);
  };
  changeCountry = (country1) => {
    this.setState({ country: country1 });
  };

  submitImages = (file) => {};
  changeCount = (arr) => {
    this.setState({
      min_people: arr[0],
      max_people: arr[1],
    });
  };
  changePrice = (arr) => {
    this.setState({
      min_price: arr[0],
      max_price: arr[1],
    });
  };
  changeMainImage = (file1) => {
    this.setState({
      main_image: file1,
    });
    console.log(this.state.main_image);
  };
  changeCountImage = (file3) => {
    this.setState({
      country_image: file3,
    });
  };
  changeGuidPhoto = (file2) => {
    console.log(this.props.image1);
    this.setState({
      guide_photo: file2,
    });
    console.log(this.state.guide_photo);
  };
  changeHandler = (event) => {

    this.setState({ [event.target.name]: event.target.value });
  };
  changeStatus = (status) => {
    this.setState({
      tour_status: status,
    });
  };
  changeDifficult = (diffic) => {
    this.setState({
      difficult: diffic,
    });
  };
  render() {
    return (


      <div className="wrapperr-addTour">
        <Modal
          isOpen={this.props.isOpenModal}
          style={{
            content: {
              position: "absolute",
              top: "30%",
              left: "30%",
              right: "30%",
              bottom: "30%",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            },
          }}
        >
            <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        </Modal>
        <BlockBtn />
        <div className="adminPanel-block-form">
          <div className="block-title-adminPanel">
            <span>Create tour</span>
          </div>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <div className="adminPanel-form">
              <MDBRow>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="name"
                    value={this.state.name}
                    placeholder=""
                    onChange={this.changeHandler}
                    className="form-control input"
                    
                    required
                  />
                </MDBCol>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Count of day
                  </label>

                  <input
                    type="number"
                    id="defaultFormRegisterPasswordEx4"
                    name="count_of_day"
                    value={this.state.count_of_day}
                    placeholder=""
                    onChange={this.changeHandler}
                    className="form-control input"
                    required
                  />
                </MDBCol>
                <MDBCol md="4">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Difficult
                  </label>

                  <Difficult propsDifficult={this.changeDifficult} />
                </MDBCol>
              </MDBRow>
              <MDBRow className="top-form">
                <MDBCol md="4" className="mb-3  ">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Description
                  </label>

                  <textarea
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="description"
                    onChange={this.changeHandler}
                    placeholder=""
                    className="form-control input input-descr"
                    required
                  />
                </MDBCol>
                <MDBCol md="3" className="mb-3  ">
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Country
                    </label>

                    <Country country={this.changeCountry} />
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Location
                    </label>

                    <input
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="location"
                      value={this.state.location}
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input"
                      required
                    />
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Gathering place
                    </label>

                    <input
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="gathering_place"
                      placeholder=""
                      value={this.state.gathering_place}
                      onChange={this.changeHandler}
                      className="form-control input"
                      required
                    />
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Residence
                    </label>

                    <input
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="residence"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input"
                      required
                    />
                  </MDBRow>
                </MDBCol>
                <MDBCol md="3" className="mb-3 right-col ">
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Language
                    </label>

                    <input
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="language"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input"
                      required
                    />
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Price from {this.state.min_price} to{" "}
                      {this.state.max_price}$
                    </label>

                    <Price price={this.changePrice} />
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      People count from {this.state.min_people} to{" "}
                      {this.state.max_people}
                    </label>

                    <Count count={this.changeCount} />
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Category
                    </label>

                    <Category categoryId={(e)=>this.setState({
                      Category:e
                    })}/>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <div className="line-black-admin"></div>
              <MDBRow className="bottom-form">
                <MDBCol md="4" className="mb-3  ">
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      About guide
                    </label>

                    <textarea
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="about_guide"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input bottom-textarea"
                      required
                    />
                  </MDBRow>
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Route description
                    </label>

                    <textarea
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="route_description"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input bottom-textarea"
                      required
                    />
                  </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="mb-3  ">
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      What is included ?
                    </label>

                    <textarea
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="what_is_included"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input bottom-textarea"
                      required
                    />
                  </MDBRow>
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Need to take
                    </label>

                    <textarea
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="need_to_take"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input bottom-textarea"
                      required
                    />
                  </MDBRow>
                </MDBCol>
                <MDBCol md="3" className="mb-3  right-col-img">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Main image
                  </label>

                  <FileUpdate
                 
                    imagePropsTriger={(e) => {
                      if (e == false) {
                        this.setState({
                          main_image: null,
                        });
                      }
                    }}
                    imageProps={this.changeMainImage}
                  />

                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Guide image
                  </label>

                  <GuidPhoto
                    imageProps={(e) => {
                      if (e == false) {
                        this.setState({
                          guide_photo: null,
                        });
                      }
                    }}
                    photoGuid={this.changeGuidPhoto}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="3">
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Status
                    </label>

                    <Status required status={this.changeStatus} />

                    <div className="invalid-feedback">
                      Please provide a valid date.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBRow>
                </MDBCol>
                <MDBCol md="3">
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Age control
                    </label>

                    <input
                      type="number"
                      id="defaultFormRegisterPasswordEx4"
                      name="age_control"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input"
                      required
                    />
                  </MDBRow>
                </MDBCol>
                <MDBCol md="3">
                  <MDBRow>
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Transport
                    </label>

                    <input
                      type="text"
                      id="defaultFormRegisterPasswordEx4"
                      name="transport"
                      placeholder=""
                      onChange={this.changeHandler}
                      className="form-control input"
                      required
                    />
                  </MDBRow>
                </MDBCol>
                <MDBCol md="3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Country image
                  </label>

                  <CountryImage
                    imageProps={(e) => {
                      if (e == false) {
                        this.setState({
                          country_image: null,
                        });
                      }
                    }}
                    imagePropsCountry={this.changeCountImage}
                  />
                </MDBCol>
              </MDBRow>
              <div className="creat-block">
                <MDBBtn type="submit" className="create-tour">
                  NEXT &#10093;
                </MDBBtn>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpenModal: state.trigerCreateTour.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createdTour: (data) => dispatch(createTour(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTour);
