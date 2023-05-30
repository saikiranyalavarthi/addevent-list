import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/AddEvent">Add Event</Link>
        </li>
        <li>
        <Link to="/EventList"> Event List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
