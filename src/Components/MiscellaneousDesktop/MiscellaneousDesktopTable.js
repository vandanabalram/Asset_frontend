import React, { Component } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';
import { questionHandle } from '../../Action/MiscellaneousDesktopAction'
import { connect } from 'react-redux';
import './MiscellaneousDesktopTable.css';

class MiscellaneousDesktopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Asset_Number: '',
      Desktop: '',
      MAC_Address: '',
      Mouse: false,
      Keyboard: false,
      Cables: false,
      Comment: '',
    }
  }

  handleChangeg = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeAsset_Number = (e) => {
    this.setState({
      Asset_Number: e.target.value
    })
  }

  onChangeDesktop = (e) => {
    this.setState({
      Desktop: e.target.value
    })
  }

  onChangeMAC_Address = (e) => {
    this.setState({
      MAC_Address: e.target.value
    })
  }

  toggleClickMouse = (e) => {
    console.log("hi", this.state.Mouse)
    this.setState({ Mouse: !this.state.Mouse })
    console.log(this.state.Mouse)
  }

  toggleClickKeyboard = (e) => {
    this.setState({
      Keyboard: !this.state.Keyboard
    })
  }

  toggleClickCables = (e) => {
    this.setState({
      Cables: !this.state.Cables
    })
  }

  Comment = (e) => {
    this.setState({
      Comment: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      Asset_Number: this.state.Asset_Number,
      Desktop: this.state.Desktop,
      MAC_Address: this.state.MAC_Address,
      Mouse: this.state.Mouse,
      Keyboard: this.state.Keyboard,
      Cables: this.state.Cables,
      Comment: this.state.Comment
    };

    this.props.questionHandle(payload);
    BrowserHistory.push('./miscellaneousdesktopform');
  }
  onHandleClicksCancel() {
    BrowserHistory.push('/miscellaneousdesktoptable');
  }

  render() {
    const { Asset_Number, Desktop, MAC_Address, Comment } = this.state
    return (
      <div >
        <div className="misdesktopimg" style={{ marginTop: 10 }}>
          <form onSubmit={this.onSubmit} className="misdeskform">
            <div>
              <label className="name">Asset_Number: </label>
              <input type="text"
                className="misdeswidth1"
                value={this.state.Asset_Number}
                onChange={this.onChangeAsset_Number}
              />
            </div>
            <div>
              <label className="name"> Desktop: </label>
              <input type="text"
                className="misdeswidth2"
                value={this.state.Desktop}
                onChange={this.onChangeDesktop}
              />
            </div>
            <div>
              <label className="name"> MAC_Address:</label>
              <input type="text"
                className="misdeswidth3"
                value={this.state.MAC_Address}
                onChange={this.onChangeMAC_Address}
              />
            </div>
            <div>
              <label className="name ">Accessories: </label>
              <div className="box">
                <div className="form-check ">
                  <label className="form-check-label ">
                    <input type="checkbox"
                      onChange={this.toggleClickMouse}
                      className="form-check-input"
                    />
                    Mouse
            </label>
                </div >

                <div className="form-check ">
                  <label className="form-check-label">
                    <input type="checkbox"
                      onChange={this.toggleClickKeyboard}
                      className="form-check-input"
                    />
                    Keyboard
            </label>
                </div>
                <div className="form-check ">
                  <label className="form-check-label ">
                    <input type="checkbox"
                      onChange={this.toggleClickCables}
                      className="form-check-input"
                    />
                    Cables
            </label>
                </div>
              </div>
              <div>
                <label className="name">Comment:</label>
                <input type="text"
                  className="misdeswidth4"
                  onChange={this.Comment}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" value="send" className="misdessendbta" onClick={this.onSubmit}>Send</button>
              <button onClick={this.onHandleClicksCancel} type="button" className="misdesresetbta">Cancel</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { Asset_Number } = state.MiscellaneousDesktopreducer
  const { Desktop } = state.MiscellaneousDesktopreducer
  const { MAC_Address } = state.MiscellaneousDesktopreducer
  const { Mouse } = state.MisLapreducer
  const { Keyboard } = state.MisLapreducer
  const { Cables } = state.MisLapreducer
  const { Comment } = state.MisLapreducer
  return { Asset_Number, Desktop, MAC_Address, Mouse, Keyboard, Cables, Comment }
}
export default connect(mapStateToProps, { questionHandle })(MiscellaneousDesktopTable);