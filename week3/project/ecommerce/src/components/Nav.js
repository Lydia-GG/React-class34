import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Products</NavLink>
      {/* <link></link> */}
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default Nav;
