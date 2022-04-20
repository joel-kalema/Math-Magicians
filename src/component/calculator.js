import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="UI">
        <div className="screen">0</div>
        <div className="body">
          <div className="body-key">
            <div className="reset">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
            </div>
            <div className="buttons">
              <button type="button">7</button>
              <button type="button">8</button>
              <button type="button">9</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <div className="footer">
                <button type="button" className="zero">0</button>
                <button type="button" className="point">.</button>
              </div>
            </div>
          </div>
          <div className="sign">
            <button type="button">/</button>
            <button type="button">*</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
