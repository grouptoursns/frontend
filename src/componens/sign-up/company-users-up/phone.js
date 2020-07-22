import "react-phone-number-input/style.css";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

function Phone() {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      international
      defaultCountry="RU"
      value={value}
      onChange={setValue}
    />
  );
}
export default Phone;
