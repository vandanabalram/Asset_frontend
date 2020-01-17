import React, { Component } from 'react';
import {Form, Navbar} from 'react-bootstrap';
// import './DesktopTable.css';
import axios from 'axios';
import browserHistory from '../Utils/BrowserHistory';
import {questionHandle} from '../../Action/MiscellaneousDesktopAction'
import { connect } from 'react-redux';

class MiscellaneousDesktopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Asset_Number: '',
      Desktop: '',
      MAC_Address:'',
      Mouse:false,
      Keyboard:false,
      Cables:false
    }
  }
  handleChangeg=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  
  onChangeAsset_Number=(e)=> {
      this.setState({
        Asset_Number: e.target.value
    })  
  }
  onChangeDesktop=(e)=> {
    this.setState({
        Desktop: e.target.value
  })  
}
onChangeMAC_Address=(e)=> {
    this.setState({
        MAC_Address: e.target.value
  })  
}
toggleClickMouse=(e)=> {
  debugger;
  console.log(this.state.Mouse)
  if(this.state.Mouse==false){
  this.setState({Mouse:true})}
  console.log(this.state.Mouse)
}
toggleClickKeyboard=(e)=> {
  this.setState({
      Keyboard:!this.state.Keyboard
  })
}
toggleClickCables=(e)=> {
  this.setState({
      Cables:!this.state.Cables
  })
}

  onSubmit=(e)=> {
    debugger
      e.preventDefault();
      const payload = {
     Asset_Number: this.state.Asset_Number,
     Desktop: this.state.Desktop,
     MAC_Address: this.state.MAC_Address,
     Mouse: this.state.Mouse,
     Keyboard: this.state. Keyboard,
     Cables: this.state. Cables,
    
    };
    
  
 
      this.props.questionHandle(payload);
      browserHistory.push('./miscellaneousdesktopform'); 
  }

  render() {
    const { Asset_Number, Desktop,MAC_Address } = this.state 
    return (
      <div >
          
            <div className="desktopimg" style={{ marginTop: 10 }}>
                <form onSubmit={this.onSubmit} className="deskform"> 
                  <div>
                    <label className="name">Asset_Number: </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Asset_Number}
                        onChange={this.onChangeAsset_Number}
                      />
                  </div>
                  <div>
                    <label className="name"> Desktop: </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Desktop}
                        onChange={this.onChangeDesktop}
                      />
                  </div>
                  <div>
                    <label className="name"> MAC_Address:</label>
                      <input type="text" 
                        className="width"
                        value={this.state.MAC_Address}
                        onChange={this.onChangeMAC_Address}
                      />
                  </div>
                  <div className="form-check">
                  
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isMouse}
                onChange={this.toggleClickMouse}
                className="form-check-input"
              />
              Mouse
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isKeyboard}
                onClick={this.toggleClickKeyboard}
                className="form-check-input"
              />
              Keyboard
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isCables}
                onClick={this.toggleClickCables}
                className="form-check-input"
              />
              Cables
            </label>
          </div>
                <div className="form-group">
                    <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Send</button>
                    <button type="submit" className="resetbta">Cancel</button> 
              </div>
                </form>
      </div>
       
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  const {Asset_Number}=state.MiscellaneousDesktopreducer
  const { Desktop}=state.MiscellaneousDesktopreducer
  const {MAC_Address}=state.MiscellaneousDesktopreducer
  const {Mouse}=state.MisLapreducer
  
  const {Keyboard}=state.MisLapreducer
  const { Cables}=state.MisLapreducer
  
  
  return {Asset_Number,Desktop,MAC_Address,Mouse,Keyboard,Cables}
  }
  export default connect(mapStateToProps,{questionHandle}) (MiscellaneousDesktopTable);