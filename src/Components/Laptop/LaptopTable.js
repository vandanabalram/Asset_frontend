import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './LaptopTable.css';
import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';
import { questionHandle } from '../../Action/LaptopAction'
import { connect } from 'react-redux';

class LaptopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee_Id: '',
      Asset_Number: '',
      Name: '',
      MAC_Address: '',
      ChargerAsset_Number: '',
      Comment: ''
    }
  }

  handleChangeg = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeEmployee_Id = (e) => {
    this.setState({
      Employee_Id: e.target.value
    });
  }

  onChangeAsset_Number = (e) => {
    this.setState({
      Asset_Number: e.target.value
    })
  }

  onChangeName = (e) => {
    this.setState({
      Name: e.target.value
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
      Employee_Id: this.state.Employee_Id,
      Asset_Number: this.state.Asset_Number,
      Name: this.state.Name,
      MAC_Address: this.state.MAC_Address,
      ChargerAsset_Number: this.state.ChargerAsset_Number,
      Comment: this.state.Comment,
    };

    this.props.questionHandle(payload);
    BrowserHistory.push('./Laptopform');
  }
  onHandleClicksCancel() {
    BrowserHistory.push('/laptoptable');
  }

  render() {
    const { Employee_Id, Asset_Number, Name, MAC_Address, ChargerAsset_Number, Comment } = this.state
    return (
      <div>
        <div className="laptopimg" style={{ marginTop: 10 }}>
          <form onSubmit={this.onSubmit} className="deskform">
            <div>
              <label className="name">Employee_Id:</label>
              <input
                type="text"
                className="lapwidth1"
                value={this.state.Employee_Id}
                onChange={this.onChangeEmployee_Id}
              />
            </div>
            <div>
              <label className="name">Asset_Number :</label>
              <input type="text"
                className="lapwidth2"
                value={this.state.Asset_Number}
                onChange={this.onChangeAsset_Number}
              />
            </div>
            <div >
              <label className="name">Name :</label>
              <input type="text"
                className="lapwidth3"
                value={this.state.Name}
                onChange={this.onChangeName}
              />
            </div>
            <div>
              <label className="name"> MAC_Address  :</label>
              <input type="text"
                className="lapwidth4"
                value={this.state.MAC_Address}
                onChange={this.onChangeMAC_Address}
              />
            </div>
            <div>
              <label className="name">ChargerAsset_Number  :</label>
              <input type="text"
                className="lapwidth5"
                value={this.state.ChargerAsset_Number}
                onChange={this.onChangeChargerAsset_Number}
              />
            </div>
            <div>
              <label className="name"> Comment :</label>
              <input type="text"
                className="lapwidth6"
                value={this.state.Comment}
                onChange={this.onChangeComment}
              />
            </div>
            <div className="form-group">
              <button type="submit" value="send" className="lapsendbta" onClick={this.onSubmit}>Send</button>
              <button onClick={this.onHandleClicksCancel} type="button" className="lapresetbta">cancel</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { Employee_Id } = state.Laptopreducer
  const { Asset_Number } = state.Laptopreducer
  const { Name } = state.Laptopreducer
  const { MAC_Address } = state.Laptopreducer
  const { ChargerAsset_Number } = state.Laptopreducer
  const { Comment } = state.Laptopreducer
  return { Employee_Id, Asset_Number, Name, MAC_Address, ChargerAsset_Number, Comment }
}
export default connect(mapStateToProps, { questionHandle })(LaptopTable);