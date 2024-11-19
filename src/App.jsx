import { useState } from "react";

import './App.css';

function App() {
  const [equation, setEquation] = useState("");

  const handleKeyPress = (key) => {
    setEquation(equation + key);
  };

  const calculate = () => {
    try {
      setEquation(eval(equation).toString());
    } catch (error) {
      setEquation("Error");
    }
  };

  const handleClear = () => {
    setEquation(equation.substring(0, equation.length - 1));
  };

  const handleClearAll = () => {
    setEquation("");
  };

  return (
    <>
      <div className="calculator">
        <input value={equation} onChange={(e) => setEquation(e.target.value)} type="text" className="display" placeholder="0"
        />
        <div className="keypad">
          <button className="key" onClick={handleClear}>C</button>
          <button className="key" onClick={handleClearAll}>CE</button>
          <button className="key" onClick={() => handleKeyPress("%")}>%</button>
          <button className="key" onClick={() => handleKeyPress("/")}>/</button>

          <button className="key" onClick={() => handleKeyPress("7")}>7</button>
          <button className="key" onClick={() => handleKeyPress("8")}>8</button>
          <button className="key" onClick={() => handleKeyPress("9")}>9</button>
          <button className="key" onClick={() => handleKeyPress("-")}>-</button>

          <button className="key" onClick={() => handleKeyPress("4")}>4</button>
          <button className="key" onClick={() => handleKeyPress("5")}>5</button>
          <button className="key" onClick={() => handleKeyPress("6")}>6</button>
          <button className="key" onClick={() => handleKeyPress("*")}>*</button>

          <button className="key" onClick={() => handleKeyPress("1")}>1</button>
          <button className="key" onClick={() => handleKeyPress("2")}>2</button>
          <button className="key" onClick={() => handleKeyPress("3")}>3</button>
          <button className="key" onClick={() => handleKeyPress("+")}>+</button>

          <button className="key" onClick={() => handleKeyPress("00")}>00</button>
          <button className="key" onClick={() => handleKeyPress("0")}>0</button>
          <button className="key" onClick={() => handleKeyPress(".")}>.</button>
          <button className="key" onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
