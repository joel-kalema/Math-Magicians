import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const updateDetails = (e) => {
    const newObj = calculate(state, e.target.textContent);
    setState(newObj);
  };

  const { next, operation, total } = state;
  const op = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }
  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">{result || 0}</div>
        <button type="button" onClick={updateDetails}>AC</button>
        <button type="button" onClick={updateDetails}>+/-</button>
        <button type="button" onClick={updateDetails}>%</button>
        <button type="button" onClick={updateDetails}>÷</button>
        <button type="button" onClick={updateDetails}>7</button>
        <button type="button" onClick={updateDetails}>8</button>
        <button type="button" onClick={updateDetails}>9</button>
        <button type="button" onClick={updateDetails}>x</button>
        <button type="button" onClick={updateDetails}>4</button>
        <button type="button" onClick={updateDetails}>5</button>
        <button type="button" onClick={updateDetails}>6</button>
        <button type="button" onClick={updateDetails}>-</button>
        <button type="button" onClick={updateDetails}>1</button>
        <button type="button" onClick={updateDetails}>2</button>
        <button type="button" onClick={updateDetails}>3</button>
        <button type="button" onClick={updateDetails}>-</button>
        <button type="button" onClick={updateDetails}>.</button>
        <button type="button" onClick={updateDetails}>0</button>
        <button type="button" className="equal" onClick={updateDetails}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
