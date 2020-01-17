import React, { Component } from 'react';
import "./Navbar.css";
import logo from './images1.jpg';
import Modal from 'react-modal';
import RegisterPage from '../RegisterPage/RegisterPage'
import LoginPage from '../LoginPage/LoginPage';
import '../Utils/BrowserHistory';
import BrowerHistory from '../Utils/BrowserHistory'; 
class Navbar extends Component {
   
  onHandleClick(){
    BrowerHistory.push('/register');
    }
    onHandleClicks(){
      BrowerHistory.push('/login');
      }
  render() {
    return (
      <div>
  <div className="row navbar">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7" >
                </div>
                
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{color:'white'}}>
                <button onClick={this.onHandleClick}> Register</button>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{color:'white'}} >
                <button onClick={this.onHandleClicks}> Signin</button>
                </div>
      </div> 
        
      </div>
    );
  }
}

export default Navbar;