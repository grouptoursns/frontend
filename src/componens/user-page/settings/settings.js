import React from "react";
import "./settings.css";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Avatar from "./avatar";
import { connect } from "react-redux";
import {putDataUser} from "../../../actions/putDataUser"
import {Link}from "react-router-dom";
import imgNull from "./img/null.png";

class Settings extends React.Component {
  state = {
    fname: "",
    lname: "",
    date: "",
    avatar: null,
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
   
    let data={}
    let formData= new FormData();
    if(this.state.avatar==null){
      data={
        first_name:this.state.fname,
        last_name:this.state.lname,
        birthday:this.state.date,
        avatar:this.state.avatar,
      }
      this.props.putDataUser(data)
    }
    else{
     
      formData.append('first_name',this.state.fname);
      formData.append('last_name',this.state.lname);
      formData.append('birthday',this.state.date);
      formData.append('avatar',this.state.avatar);
      console.log(formData.get('first_name'))
      console.log(formData.get('avatar'))
      this.props.putDataUser(formData)
    }
    for (let key of formData.keys()) {
      console.log(`${key}: ${formData.get(key)}`);
    }

  };
  submitImages=(file)=>{
      this.setState({avatar:file})
      console.log(this.state.avatar)

  }
  componentDidMount() {
    let data = {};
    if (this.props.custimerCabinetData === undefined) {
      data = {};
    } else {
      data = this.props.custimerCabinetData;
      this.setState({
        fname: data.first_name,
        lname: data.last_name,
        date: data.birthday,
      });
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="6" className="mb-3  ">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control input"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3  ">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control input"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Upload photo
              </label>
              <Avatar submit={this.submitImages}/>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Birthday
              </label>

              <input
                type="date"
                id="defaultFormRegisterPasswordEx4"
                name="date"
                value={this.state.date}
                onChange={this.changeHandler}
                placeholder=""
                className="form-control input"
              />

              <div className="invalid-feedback">
                Please provide a valid date.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <div className="settings-btn">

           <Link to="/user-page/settings/password"><button className="btn-change">Change password</button></Link>
            <MDBBtn color="primary" type="submit" className="submit">
              Save
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    custimerCabinetData: state.custimerCabinet.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      putDataUser:(data)=>dispatch(putDataUser(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
