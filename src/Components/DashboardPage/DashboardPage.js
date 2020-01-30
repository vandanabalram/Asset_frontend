import React, { Component } from 'react';
import './DashboardPage.css';
import images from './backgrnd2.jpg';
import Footer from '../Footer/Footer';
import DpNavbar from '../DpNavbar/DpNavbar';

class Dashboardpage extends Component {
  render() {
    return (
      <div className="backgrnd">
        <DpNavbar />
        <div>
          <img src={images} className="backgrnd"></img>
          <h2 className="welcome">WELCOME TO COMPANY ASSETS LISTS</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default (Dashboardpage);