import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import { loginHandle } from '../../Action/Loginaction';
import './LoginPage.css';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      uerr: '',
      perr: '',
    };
  }
  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onHandleClick = (e) => {
    BrowserHistory.push('/login');
  }
  confirmmail=(e)=>{
    sessionStorage.setItem('change',this.state.email)
    BrowserHistory.push('/forgetpassword');
}

  onHandleClicksCancel = (e) => {
    BrowserHistory.push('/');
  }

  onHandleClick = (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
    }

    

    if (this.state.email.length === 0 && this.state.password.length === 0) {
      this.setState({
        uerr: "Email is required",
        perr: "Password is required",
      })
    }

    else if (this.state.email.length === 0) {
      this.setState({ uerr: "Username is required" })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }


    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
      this.setState({ uerr: "Please enter the valid email" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
    this.props.loginHandle(payload);
  }


  render() {
    return (
      <div className="login">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <h1><b id="ww">SIGNIN</b></h1>
              <div className="regcont">


                <div><label ><b>Email</b></label><br /></div>
                <div> <input placeholder="email" type="text" name="email" className="input_box" onChange={this.onHandleChange} /><br /></div>
                <div> <p >{this.state.uerr}</p></div>
                <div><label ><b>Password</b></label><br /></div>
                <div> <input placeholder="password" type="password" name="password" className="input_box" onChange={this.onHandleChange} /><br /><br /></div>
                <div> <p >{this.state.perr}</p></div>
                <div><a id="fp" onClick={this.confirmmail} className="forgetpassword"><b>Forget Password</b></a></div>
              </div>

              <button onClick={this.onHandleClick} className="lgbtn"><b>Signin</b></button>
              <button id="cn" href="" onClick={this.onHandleClicksCancel}>Cancel</button>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { email, password } = state.Loginreducer
  return { email, password }
}
export default connect(mapStateToProps, { loginHandle })(LoginPage);
