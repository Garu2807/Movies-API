import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css'
function NavBar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Главное</Link>
        <Link to="/favourites">Избранное</Link>
      </div>
    </div>
  );
}

export default NavBar;
