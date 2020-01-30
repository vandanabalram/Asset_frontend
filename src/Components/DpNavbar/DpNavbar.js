import React, { Component } from 'react';
import logo from './van2.png';
import people from './images.png';
import BrowserHistory from '../Utils/BrowserHistory';
import './DpNavbar.css';

class DpNavbar extends Component {
  
  onHandleClickone = (e) => {
    BrowserHistory.push('/desktopform');
  }

  onHandleClicktwo = (e) => {
    BrowserHistory.push('/laptopform');
  }

  onHandleClickthree = (e) => {
    BrowserHistory.push('/miscellaneousindex');
  }

  logout = (e) => {
    localStorage.removeItem('LOGINDETAILS')
    localStorage.removeItem('Firstname')
    BrowserHistory.push('/');
  }
  render() {
    const { UserDetails } = this.props;
    debugger;
    return (
      <div>
        <div className="row navbar">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
            <img src={logo} className="logo"></img>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
          <img src={people} className="people"></img>
          {localStorage.getItem('Firstname')}
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
            <button className="dashbtn" onClick={this.onHandleClickone} > Desktops</button>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
            <button className="dashbtn" onClick={this.onHandleClicktwo}> Laptops</button>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
            <button className="dashbtn" onClick={this.onHandleClickthree}>Inventory</button>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1"  >
            <button className="dashbtn" onClick={this.logout} >Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DpNavbar;


