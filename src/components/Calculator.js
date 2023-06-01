import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <section className="calculator">
    <DisplayCalculator />
  </section>
);

const DisplayCalculator = () => (
  <div className="btns-container">
    <div className="screen">0</div>
    <button type="button" className="keys top-left">AC</button>
    <button type="button" className="keys">+/-</button>
    <button type="button" className="keys">%</button>
    <button type="button" className="keys orange">÷</button>
    <button type="button" className="keys">7</button>
    <button type="button" className="keys">8</button>
    <button type="button" className="keys">9</button>
    <button type="button" className="keys orange">X</button>
    <button type="button" className="keys">4</button>
    <button type="button" className="keys">5</button>
    <button type="button" className="keys">6</button>
    <button type="button" className="keys orange">-</button>
    <button type="button" className="keys">1</button>
    <button type="button" className="keys">2</button>
    <button type="button" className="keys">3</button>
    <button type="button" className="keys orange">+</button>
    <button type="button" className="keys zero-btn">0</button>
    <button type="button" className="keys">.</button>
    <button type="button" className="keys orange">=</button>
  </div>
);
export default Calculator;
