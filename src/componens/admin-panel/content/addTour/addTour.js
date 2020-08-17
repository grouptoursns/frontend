import React from "react";
import "./addTour.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Price from "./price/price";
import Count from "./count/count";
import Img from "./uploaderImg";
import BlockBtn from "../block-btn/block-btn";
import { render } from "react-dom";
import Country from "./country/country";
import Status from "./status/status";

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
  };
  changeCountry = (country1) => {
    this.setState({ country: country1 });
  };
  submitImages = (file) => {
    console.log(this.state.avatar);
  };
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
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };
  changeStatus=(status)=>{
    this.setState(
      {
        tour_status:status
      }
    )
  }
  render() {
    return (
      <div className="wrapperr-addTour">
        <BlockBtn />
        <div className="adminPanel-block-form">
          <div className="block-title-adminPanel">
            <span>Create tour</span>
          </div>
          <div className="adminPanel-form">
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
                />

                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
                <div className="valid-feedback">Looks good!</div>
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

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                    placeholder=""
                    onChange={this.changeHandler}
                    className="form-control input"
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                    onChange={this.changeHandler}
                    className="form-control input"
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
                <MDBRow className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Price from {this.state.min_price} to {this.state.max_price}$
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

                  <input
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="Category"
                    placeholder=""
                    onChange={this.changeHandler}
                    className="form-control input"
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
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
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
              </MDBCol>
              <MDBCol md="3" className="mb-3  right-col-img">
                <MDBRow className="loadImgClass">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Main image
                  </label>

                  <Img />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
                <MDBRow className="loadImgClass">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Guide image
                  </label>

                  <Img />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
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

                  <Status status={this.changeStatus} />

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
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="age_control"
                    placeholder=""
                    onChange={this.changeHandler}
                    className="form-control input"
                  />

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
                    Transport
                  </label>

                  <input
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="transport"
                    placeholder=""
                    onChange={this.changeHandler}
                    className="form-control input"
                  />

                  <div className="invalid-feedback">
                    Please provide a valid date.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <div className="creat-block">
              <button className="create-tour">CREATE TOUR</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTour;
