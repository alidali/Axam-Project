import React from "react";

import PhoneInput from "react-phone-input-2";
 import "react-phone-input-2/lib/style.css";

const Phone = () => {
  return (
    <div>
      <label>Téléphone</label>

      <PhoneInput
        country={"us"}
        value="1425652"
        onChange={phone => console.log({ phone })}
      />
      </div>

  );
};
export default Phone;