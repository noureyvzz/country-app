import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers.");
      return;
    }

    let calcResult;
    switch (operator) {
      case "+":
        calcResult = number1 + number2;
        break;
      case "-":
        calcResult = number1 - number2;
        break;
      case "*":
        calcResult = number1 * number2;
        break;
      case "/":
        calcResult = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        calcResult = "Invalid operation";
    }

    setResult(calcResult);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;

