import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Quote from '../routes/Quote';
import CalculatorPage from '../routes/CalculatorPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="quote" element={<Quote />} />
    <Route path="calculatorpage" element={<CalculatorPage />} />
  </Routes>
);
export default App;
