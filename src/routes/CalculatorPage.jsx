import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <div className="wrapper">
    <div className="todos">
      <Navbar />
      <div className="calc-container">
        <span className="do-math-quote">Let&apos;s do some math!</span>
        <Calculator />
      </div>
    </div>
  </div>
);
export default CalculatorPage;
