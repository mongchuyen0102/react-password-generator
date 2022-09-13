import React from "react";

const Checkbox = ({ handleChange, checked }) => {
 return (
  <input onChange={handleChange} type="checkbox" defaultChecked={checked} />
 )};
export default Checkbox;