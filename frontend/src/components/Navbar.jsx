import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <Link to={"/"}>
        Home
    </Link>
  </nav>
</div>
);

export default Navbar;
