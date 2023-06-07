// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/calculatorpage', text: 'CalculatorPage' },
  { path: '/quote', text: 'Quote' },

];
const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
