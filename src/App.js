import { useState } from "react";
import "./App.css";

function App() {
  const [currValue, setCurrValue] = useState("");

  const operators = ["+", "-", "*", "/"];

  const handleClick = (e) => {
    if (
      (operators.includes(e.target.value) && currValue === "") ||
      (operators.includes(e.target.value) &&
        operators.includes(currValue.toString().slice(-1))) ||
      (e.target.value.includes(".") && currValue.toString().includes("."))
    ) {
      return;
    }

    setCurrValue(currValue + e.target.value);
  };

  const clear = () => {
    setCurrValue("");
  };

  const calculate = () => {
    if (currValue == "") {
      return;
    }

    try {
      setCurrValue(eval(currValue));
    } catch (error) {
      setCurrValue("invalid operation");
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <input value={currValue} disabled />
        <div className="numbers">
          <button onClick={clear} className="span-two">
            clear
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="/" onClick={handleClick}>
            &#xF7;
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="*" onClick={handleClick}>
            x
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="0" onClick={handleClick} className="span-three">
            0
          </button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
