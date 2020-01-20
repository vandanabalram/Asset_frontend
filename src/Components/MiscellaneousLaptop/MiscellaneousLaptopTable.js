import React, { Component } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';
import { questionHandle } from '../../Action/MisLapAction'
import { connect } from 'react-redux';

class MiscellaneousLaptopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Asset_Number: '',
      MAC_Address: '',
      ChargerAsset_Number: '',
      Comment:'',

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

  onChangeMAC_Address = (e) => {
    this.setState({
      MAC_Address: e.target.value
    })
  }
  onChangeChargerAsset_Number = (e) => {
    this.setState({
      ChargerAsset_Number: e.target.value
    })
  }
  onChangeComment = (e) => {
    this.setState({
      Comment: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      Asset_Number: this.state.Asset_Number,
      MAC_Address: this.state.MAC_Address,
      ChargerAsset_Number: this.state.ChargerAsset_Number,
      Comment:this.state. Comment
    };
    this.props.questionHandle(payload);
    BrowserHistory.push('./miscellaneouslaptopform');
  }
  onHandleClicksCancel() {
    BrowserHistory.push('/miscellaneouslaptoptable');
  }


  render() {
    const { Asset_Number, MAC_Address, ChargerAsset_Number, Comment } = this.state
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
              <label className="name"> MAC_Address:</label>
              <input type="text"
                className="width"
                value={this.state.MAC_Address}
                onChange={this.onChangeMAC_Address}
              />
            </div>
            <div>
              <label className="name"> ChargerAsset_Number: </label>
              <input type="text"
                className="width"
                value={this.state.ChargerAsset_Number}
                onChange={this.onChangeChargerAsset_Number}
              />
            </div>
            <div>
              <label className="name"> Comment: </label>
              <input type="text"
                className="width"
                value={this.state.Comment}
                onChange={this.onChangeComment}
              />
            </div>

            <div className="form-group">
              <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Send</button>
              <button onClick={this.onHandleClicksCancel} type="button" className="resetbta">Cancel</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { Asset_Number } = state.MisLapreducer
  const { MAC_Address } = state.MisLapreducer
  const { ChargerAsset_Number } = state.MisLapreducer
  const { Comment } = state.MisLapreducer

  
  return { Asset_Number, MAC_Address, ChargerAsset_Number,Comment }

}
export default connect(mapStateToProps, { questionHandle })(MiscellaneousLaptopTable);