import React from "react";
import "./lang.css";
 import Usa from "../img/Group(1).png"
import 'bootstrap/dist/css/bootstrap.min.css';



class Lang extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <img src={Usa}/>
        <sran
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          EN
        </sran>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#nogo">
            RU
          </a>
          <a className="dropdown-item" href="#nogo">
          KG
          </a>
        </div>
      </div>
    );
  }
}

export default Lang;