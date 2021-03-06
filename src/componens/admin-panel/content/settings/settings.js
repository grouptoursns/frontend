import React from "react";
import "./settings.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Avatar from "./avatar";
import { connect } from "react-redux";
import { changeDataCompany } from "../../../../actions/admin-panel/changeDataCompany/changeDataCompany";
import Country from "./country";

class AdminSettings extends React.Component {
  state = {
    fname: "",
    lname: "",
    country: "",
    name: "",
    email: "",
    photo: null,
    adress: "",
    phone: "",
    site: "",
    tripadvisor: "",
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";

    this.props.changeData(this.state);
    console.log("hide-text");
    let data = {};
    let formData = new FormData();
    if (this.state.photo == null) {
      this.props.changeData({
        email: this.state.email,
        first_name: this.state.fname,
        last_name: this.state.lname,
        name: this.state.name,
        address: this.state.adress,
        phone: this.state.phone,
        site: this.state.site,
        country: this.state.country,
        tripadvisor: this.state.tripadvisor,
      });
    } else {
      formData.append("email", this.state.email);
      formData.append("first_name", this.state.fname);
      formData.append("last_name", this.state.lname);
      formData.append("name", this.state.name);
      formData.append("address", this.state.adress);
      formData.append("phone", this.state.phone);
      formData.append("site", this.state.site);
      formData.append("country", this.state.country);
      formData.append("tripadvisor", this.state.tripadvisor);
      formData.append("avatar", this.state.photo);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      this.props.changeData(formData);
    }
  };
  submitImages = (file) => {
    this.setState({ photo: file });
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changeCountry = (country1) => {
    this.setState({ country: country1 });
  };
  componentDidMount() {
    let data = {};
    if (this.props.defaultDataCompany === undefined) {
      data = {};
    } else {
      data = this.props.defaultDataCompany;
      this.setState({
        fname: data.first_name,
        lname: data.last_name,
        country: data.country,
        name: data.name,
        email: data.email,
        adress: data.address,
        phone: data.phone,
        photo: data.avatar,
        site: data.site,
        tripadvisor: data.tripadvisor,
      });
    }
  }

  render() {
    return (
      <div className="block-settings">
        <span className="settings-title">Profile editing</span>

        <form
          className="needs-validation settings-form form-admin"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow className="settings-wrapper">
            <MDBCol md="4">
              <MDBRow className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  First name
                </label>

                <input
                  type="text"
                  value={this.state.fname}
                  id="defaultFormRegisterPasswordEx4"
                  onChange={this.changeHandler}
                  name="fname"
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
                  Last name
                </label>

                <input
                  type="text"
                  value={this.state.lname}
                  id="defaultFormRegisterPasswordEx4"
                  name="lname"
                  onChange={this.changeHandler}
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
                  Country
                </label>

                <Country
                  country={this.changeCountry}
                  countryProps={this.state.country}
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
                  Name
                </label>

                <input
                  type="text"
                  value={this.state.name}
                  id="defaultFormRegisterPasswordEx4"
                  onChange={this.changeHandler}
                  name="name"
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
                  value={this.state.email}
                  id="defaultFormRegisterPasswordEx4"
                  name="email"
                  onChange={this.changeHandler}
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
                  value={this.state.adress}
                  id="defaultFormRegisterPasswordEx4"
                  name="adress"
                  onChange={this.changeHandler}
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
                  value={this.state.phone}
                  id="defaultFormRegisterPasswordEx4"
                  name="phone"
                  onChange={this.changeHandler}
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
                  value={this.state.site}
                  id="defaultFormRegisterPasswordEx4"
                  name="site"
                  onChange={this.changeHandler}
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
                  value={this.state.tripadvisor}
                  id="defaultFormRegisterPasswordEx4"
                  name="tripadvisor"
                  onChange={this.changeHandler}
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
          <MDBRow>
            <MDBCol md="4">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Company logo
              </label>
              <Avatar submit={this.submitImages} photo={this.state.photo} />
            </MDBCol>
          </MDBRow>
          <div className="block-save">
            <MDBBtn type="submit" className="submit settings-save">
              SAVE CHANGES
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    defaultDataCompany: state.dataCompany.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeData: (data) => dispatch(changeDataCompany(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSettings);
