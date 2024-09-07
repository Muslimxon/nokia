import React from 'react';
import './Navbar.css';
import nokia from './assets/nokia 2.webp'

const Navbar = () => {
  return (
    <div className="container">
      <img src={nokia} alt="Nokia Logo" />
      <ul className="ul1">
        <li>Home</li>
        <li>Products</li>
        <li>Service</li>
        <li>Training</li>
      </ul>
      <button className="btn1">Log in</button>
      <button className="btn2">Sign up</button>
      <ion-icon className="ion1" name="earth-outline"></ion-icon>
      <ion-icon className="ion2" name="search-outline"></ion-icon>
    </div>
  );
};

export default Navbar;
