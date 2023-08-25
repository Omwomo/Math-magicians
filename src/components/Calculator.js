import React, { useState } from 'react';
import Results from './Results';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  return (
    <div className="calculator-grid">
      <Results
        previousOperand={calculatorData.total || ''}
        currentOperand={calculatorData.next || '0'}
      />
      <button type="button" onClick={handleButtonClick('A/C')}>A/C</button>
      <button type="button" onClick={handleButtonClick('+/-')}>+/-</button>
      <button type="button" onClick={handleButtonClick('%')}>%</button>
      <button type="button" onClick={handleButtonClick('÷')}>÷</button>
      <button type="button" onClick={handleButtonClick('7')}>7</button>
      <button type="button" onClick={handleButtonClick('8')}>8</button>
      <button type="button" onClick={handleButtonClick('9')}>9</button>
      <button type="button" onClick={handleButtonClick('x')}>x</button>
      <button type="button" onClick={handleButtonClick('4')}>4</button>
      <button type="button" onClick={handleButtonClick('5')}>5</button>
      <button type="button" onClick={handleButtonClick('6')}>6</button>
      <button type="button" onClick={handleButtonClick('-')}>-</button>
      <button type="button" onClick={handleButtonClick('1')}>1</button>
      <button type="button" onClick={handleButtonClick('2')}>2</button>
      <button type="button" onClick={handleButtonClick('3')}>3</button>
      <button type="button" onClick={handleButtonClick('+')}>+</button>
      <button type="button" className="span-two" onClick={handleButtonClick('0')}>0</button>
      <button type="button" onClick={handleButtonClick('.')}>.</button>
      <button type="button" onClick={handleButtonClick('=')}>=</button>
    </div>
  );
}

export default Calculator;
