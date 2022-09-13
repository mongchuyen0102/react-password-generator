import React from "react";
import Checkbox from "./Checkbox/Checkbox";

// const handleSymbol = (e) => {
const PasswordForm = ({ symbol, number, upper, lower, handleLength, handleSymbol, handleNumber, handleUpper, handleLower, handleGeneratePassword, length, pw, state, handleCopy }) => {
  return (
    <form className="container form mg-bt">
      <div className="random-password">
        <h3>GENERATE RANDOM PASSWORD</h3>
        <div className="output mg-bt space-between ">
          <input value={pw} type="text" placeholder="password" />
          <button onClick={handleCopy}>{state.copied ? 'Copied' : 'Copy'}</button>
        </div>
        <div className="length mg-bt space-between color-w">
          <label >Length:</label>
          <input onChange={handleLength} type="number" placeholder="length of password" value={length} />
        </div>
        <div className="option color-w">
          <div className="symbol mg-bt space-between">
            <label>Include Symbol:</label>
            <Checkbox checked={symbol} handleChange={handleSymbol} />
          </div>
          <div className="number mg-bt space-between">
            <label >Include Number:</label>
            <Checkbox checked={number} handleChange={handleNumber} />
          </div>
          <div className="uppercase mg-bt space-between">
            <label>Include Uppercase:</label>
            <Checkbox checked={upper} handleChange={handleUpper} />
          </div>
          <div className="lowercase mg-bt space-between">
            <label >Include Lowercase:</label>
            <Checkbox checked={lower} handleChange={handleLower} />
          </div>
        </div>
        <button onClick={handleGeneratePassword} className="btnPassword">
          Generate Password
        </button>
      </div>

    </form >
  );
};
export default PasswordForm;
