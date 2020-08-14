import React from "react";
import "./addTour.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Price from "./price/price";
import Img from "./uploaderImg";
import BlockBtn from "../block-btn/block-btn";

const AddTour = () => {
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
                name="date"
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

                <input
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  name="date"
                  placeholder=""
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
                  Location
                </label>

                <input
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
                  Price from 0 to 348$
                </label>

                <Price />
              </MDBRow>
              <MDBRow className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  People count from 0 to 25
                </label>

                <Price />
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
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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

                <input
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  name="date"
                  placeholder=""
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
                  Age control
                </label>

                <input
                  type="text"
                  id="defaultFormRegisterPasswordEx4"
                  name="date"
                  placeholder=""
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
                  name="date"
                  placeholder=""
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
};
export default AddTour;
