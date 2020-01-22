import React, { Component } from 'react';
import logo from './van2.png';
import BrowserHistory from '../Utils/BrowserHistory';


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
        (localStorage.removeItem('LOGINDETAILS'));
        BrowserHistory.push('/');
      }
    
    render() {
        return (
            <div>
            <div className="row navbar">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
            <img src={logo} className="logo"></img>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{ color: 'white' }}>
            <button onClick={this.onHandleClickone} > Desktops</button>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{ color: 'white' }} >
            <button onClick={this.onHandleClicktwo}> Laptops</button>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{ color: 'white' }}>
            <button onClick={this.onHandleClickthree}> Miscellaneous</button>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{ color: 'white' }} >
            <button onClick={this.logout} >Logout</button>
          </div>
        </div>
            </div>
        );
    }
}

export default DpNavbar;