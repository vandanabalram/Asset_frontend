import React, { Component } from 'react';
import logo from './home2.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div><Navbar /></div>
        <img src={logo} className="home" ></img>
        <div><Footer /></div>
      </div>
    );
  }
}

export default HomePage;