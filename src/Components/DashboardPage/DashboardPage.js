import React, { Component } from 'react';
import './DashboardPage.css';
import images from './backgrnd2.jpg';
import Footer from '../Footer/Footer';
import DpNavbar from '../DpNavbar/DpNavbar';

class Dashboardpage extends Component {
  render() {
    return (
      <div>
        <DpNavbar />
        <div>
          <img src={images} className="backgrnd"></img>
          <p className="welcome">WELCOME TO COMPANY ASSETS LISTS</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default (Dashboardpage);