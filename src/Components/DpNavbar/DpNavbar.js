import React, { Component } from 'react';
import logo from './van2.png';
import BrowserHistory from '../Utils/BrowserHistory';
import { GetUserDetailsById } from '../../Action/Registeraction';
import './DpNavbar.css';
import { connect } from 'react-redux';

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
    (localStorage.removeItem('LOGINDETAILS'))
    BrowserHistory.push('/');
  }

  componentDidMount() {
    const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
    const LogDet = JSON.parse(LoginDetails);
    this.props.GetUserDetailsById(LogDet.userId);
  }

  render() {
    const { UserDetails } = this.props;
    console.log(UserDetails.Firstname);
    debugger;
    return (
      <div>
        <div className="row navbar">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
            <img src={logo} className="logo"></img>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
            {localStorage.getItem('email')}
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
  const { UserDetails } = state.Registerreducer
  return { UserDetails }
}
export default connect(mapStateToProps, { GetUserDetailsById })(DpNavbar);


