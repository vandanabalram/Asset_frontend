import React, { Component } from 'react';
import logo from './van2.png';
import BrowserHistory from '../Utils/BrowserHistory';
import './DpNavbar.css';
import { loginHandle } from '../../Action/Loginaction';
import { connect } from 'react-redux';




class DpNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      data:[],
      
    }
  }

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
        (localStorage.removeItem('LOGINDETAILS'))
        sessionStorage.removeItem('email');
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
          {sessionStorage.getItem('email')}
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
const mapStateToProps = (state) => {
  const { email } = state.Loginreducer
  return { email }
}
export default connect(mapStateToProps, { loginHandle })( DpNavbar);


