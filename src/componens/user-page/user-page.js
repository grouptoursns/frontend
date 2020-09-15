import React, { useEffect } from "react";
import "./user-page.css";
import UserInfo from "./user-info/user-info";
import Booked from "./booked/booked";
import { connect } from "react-redux";
import { custimerCabinet } from "../../actions/custumerCabinet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Visited from "./visited/visited";
import AppSettings from "./settings/appSettings";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const UserPage = (props) => {
  useEffect(() => {
    props.custumerCabinet();
  }, [props.custumerCabinet]);
  console.log(props.custimerCabinetData);

  return (
    <div>
      <NavBar />
      <div className="user-page">
        {props.custimerCabinetData ? (
          <div className="user-container">
            <UserInfo userInfo={props.custimerCabinetData} />

            <div className="booking1">
              <Switch>
                <Route exact path="/user-page" component={Booked} />
                <Route path="/user-page/visited-tour" component={Visited} />
                <Route path="/user-page/settings" component={AppSettings} />
              </Switch>
            </div>
          </div>
        ) : (

            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

        )}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    custimerCabinetData: state.custimerCabinet.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    custumerCabinet: () => dispatch(custimerCabinet()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
