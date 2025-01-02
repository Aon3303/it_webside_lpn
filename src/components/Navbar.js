import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Lanna Polytechnic</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
            หน้าแรก
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
            เกี่ยวกับเรา
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({ isActive }) => isActive ? 'active-link' : ''}>
            หลักสูตร
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>
            ติดต่อเรา
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
