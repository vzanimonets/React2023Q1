import styles from './navigation.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav className={styles.main_menu}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            caseSensitive
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
