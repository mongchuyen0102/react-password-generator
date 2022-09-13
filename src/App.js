import React, { useState } from "react";
import PasswordForm from "./Components/PassWordForm/PasswordForm";
import password from "secure-random-password";
import "./App.scss";
import "./reset.css";

const App = () => {
  const [pw, setPw] = useState("");
  const [length, setLength] = useState(10);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [state, setState] = useState({
    value: '',
    copied: false,
  });

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(pw);
    setState({ copied: true })
  }

  const handleLength = (e) => {
    const passwordLength = e.target.value;
    setLength(+passwordLength);
  };

  const handleSymbol = (e) => {
    setSymbol(e.target.checked);
  };

  const handleNumber = (e) => {
    setNumber(e.target.checked);
  };

  const handleUpper = (e) => {
    setUpper(e.target.checked);
  };

  const handleLower = (e) => {
    setLower(e.target.checked);
  };

  const handleGeneratePassword = (e) => {
    e.preventDefault();

    const characters = [];
    if (number) characters.push(password.digits)
    if (symbol) characters.push(password.symbols)
    if (upper) characters.push(password.upper)
    if (lower) characters.push(password.lower)
    const randomPw = password.randomPassword({ length, characters })

    setState({ copied: false });
    setPw(randomPw);
  };
  return (
    <div className="App">
      <PasswordForm
        pw={pw}
        length={length}
        symbol={symbol}
        number={number}
        upper={upper}
        lower={lower}
        state={state}
        handleLength={handleLength}
        handleSymbol={handleSymbol}
        handleNumber={handleNumber}
        handleUpper={handleUpper}
        handleLower={handleLower}
        handleGeneratePassword={handleGeneratePassword}
        handleCopy={handleCopy}

      />
    </div>
  );
};
export default App;
