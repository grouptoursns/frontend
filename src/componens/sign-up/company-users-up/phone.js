import "react-phone-number-input/style.css";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

function Phone(props) {

  return (
    <PhoneInput
      international
      defaultCountry="KG"
      value=""
      onChange={(value) => props.phone(value)}
    />
  );
}
export default Phone;

