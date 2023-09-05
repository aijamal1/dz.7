import { NavLink, Outlet } from 'react-router-dom';
import style from './laout.module.css';

const Laout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">
            <li>Страница1</li>
          </NavLink>
          <NavLink to="Page2">
            <li>Страница2</li>
          </NavLink>
          <NavLink to="Page3">
            <li>Страница3</li>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Laout;
