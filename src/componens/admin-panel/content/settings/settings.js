import React from "react";
import "./settings.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Avatar from "./avatar";

const AdminSettings = () => {
  return (
    <div className="block-settings">
      <span className="settings-title">Settings</span>
      <div className="settings-form">
        <MDBRow className="settings-wrapper">
          <MDBCol md="4">
            <label
              htmlFor="defaultFormRegisterPasswordEx4"
              className="grey-text"
            >
              Photo
            </label>
            <Avatar />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Name
              </label>

              <input
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                placeholder=""
                className="form-control input "
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
                Email
              </label>

              <input
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                placeholder=""
                className="form-control input "
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
                Address
              </label>

              <input
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                placeholder=""
                className="form-control input "
              />

              <div className="invalid-feedback">
                Please provide a valid date.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Phone
              </label>

              <input
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                placeholder=""
                className="form-control input "
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
                Site
              </label>

              <input
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                placeholder=""
                className="form-control input "
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
                Tripadvisor
              </label>

              <input
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                placeholder=""
                className="form-control input "
              />

              <div className="invalid-feedback">
                Please provide a valid date.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="block-save">
        <button className="settings-save">SAVE CHANGES</button>
      </div>
    </div>
  );
};
export default AdminSettings;
