import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../Utils/BrowserHistory'
import { registerHandle } from '../../Action/Registeraction';
import './RegisterPage.css';


class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Lastname: '',
      email: '',
      password: '',
      Mobnum: '',
      ferr: '',
      lerr: '',
      uerr: '',
      perr: '',
      phnerr: ''
    };
  }

  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

  }
  onHandleClicks = (e) => {
    BrowserHistory.push('/login');
  }

  onHandleClicksCancel = (e) => {
    BrowserHistory.push('/');
  }

  onHandleClick = (e) => {
    e.preventDefault();
    const payload = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      email: this.state.email,
      password: this.state.password,
      Mobnum: this.state.Mobnum
    }

    if (this.state.Firstname.length === 0 && this.state.Lastname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
      this.setState({
        ferr: "Firstname is required",
        lerr: "Lastname is required",
        uerr: "Email is required",
        perr: "Password is required",
        phnerr: "Phonumber is required"

      })
    }
    else if (this.state.Firstname.length === 0) {
      this.setState({ ferr: "Firstname is required" })
    }
    else if (this.state.Lastname.length === 0) {
      this.setState({ lerr: "Lastname is required" })
    }
    else if (this.state.email.length === 0) {
      this.setState({ uerr: "Username is required" })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.Mobnum.length === 0) {
      this.setState({ phnerr: "Password is required" })
    }

    else if (!this.state.Firstname.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ ferr: "Please enter the valid fname" })
    }
    else if (!this.state.Lastname.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ lerr: "Please enter the valid lname" })
    }
    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
      this.setState({ uerr: "Please enter the valid email" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
    else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
      this.setState({ phnerr: "Please enter the valid number" })
    }
    else
      this.props.registerHandle(payload);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
            <div className="signup"><h1 className="signup"><b>SIGN UP</b> </h1>
              <div className="regcont">
                <div><label className="label"><b>First Name</b></label></div>
                <div><input placeholder="First Name" type="text" name="Firstname" className="input_box" onChange={this.onHandleChange} /></div>
                <div><p className="error" >{this.state.ferr}</p></div>
                <div><label className="label"><b>Last Name</b></label></div>
                <div><input placeholder="Last Name" type="text" name="Lastname" className="input_box" onChange={this.onHandleChange} /></div>
                <div> <p className="error">{this.state.lerr}</p></div>
                <div><label className="label"><b>Email</b></label></div>
                <div> <input placeholder="Email" type="text" name="email" className="input_box" onChange={this.onHandleChange} /></div>
                <div> <p className="error">{this.state.uerr}</p></div>
                <div><label className="label"><b>Password</b></label></div>
                <div> <input placeholder="Password" type="password" name="password" className="input_box" onChange={this.onHandleChange} /></div>
                <div> <p className="error">{this.state.perr}</p></div>
                <div> <label className="label"><b>Mobilenumber</b></label></div>
                <div> <input placeholder="Mobile" type="text" name="Mobnum" className="input_box" onChange={this.onHandleChange} /></div>
              </div>
              <a className="already" href="" onClick={this.onHandleClicks}><b id="acct">You have already account</b> </a>
              <p className="error">{this.state.phnerr}</p>
              <button className="regbtn" onClick={this.onHandleClick} ><b>Register</b></button><button id="cnl" href="" onClick={this.onHandleClicksCancel}> <b>Cancel </b></button>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { Firstname, Lastname, email, password,  Mobnum } = state.Registerreducer
  return { Firstname, Lastname, email, password, Mobnum }
}
export default connect(mapStateToProps, { registerHandle })(RegisterPage);
