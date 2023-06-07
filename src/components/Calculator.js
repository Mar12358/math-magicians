import React, { useState, useEffect } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => (
  <section className="calculator">
    <DisplayCalculator />
  </section>
);

const DisplayCalculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');

    const btnHandler = (e) => {
      const response = calculate({ total, next, operation }, e.target.innerText);
      setTotal(response.total);
      setNext(response.next);
      setOperation(response.operation);
    };

    buttons.forEach((button) => {
      button.addEventListener('click', btnHandler);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', btnHandler);
      });
    };
  }, [total, next, operation]);

  return (
    <div className="btns-container">
      <div className="screen">
        {total || 0}
        {operation}
        {next}
      </div>
      <button type="button" className="btn">AC</button>
      <button type="button" className="btn">+/-</button>
      <button type="button" className="btn">%</button>
      <button type="button" className="btn orange">÷</button>
      <button type="button" className="btn">7</button>
      <button type="button" className="btn">8</button>
      <button type="button" className="btn">9</button>
      <button type="button" className="btn orange">x</button>
      <button type="button" className="btn">4</button>
      <button type="button" className="btn">5</button>
      <button type="button" className="btn">6</button>
      <button type="button" className="btn orange">-</button>
      <button type="button" className="btn">1</button>
      <button type="button" className="btn">2</button>
      <button type="button" className="btn">3</button>
      <button type="button" className="btn orange">+</button>
      <button type="button" className="btn zero-btn">0</button>
      <button type="button" className="btn">.</button>
      <button type="button" className="btn orange">=</button>
    </div>
  );
};

export default Calculator;
