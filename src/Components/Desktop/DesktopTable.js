import React, { Component } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import './DesktopTable.css';
import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';
import { questionHandle } from '../../Action/DesktopAction'
import { connect } from 'react-redux';

class DesktopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee_Id: '',
      Asset_Number: '',
      Name: '',
      MAC_Address: '',
      Comment: '',
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
      Comment: this.state.Comment,

    };

    this.props.questionHandle(payload);
    BrowserHistory.push('./desktopform');
  }
  onHandleClicksCancel() {
    BrowserHistory.push('/desktoptable');
  }

  render() {
    const { Employee_Id, Asset_Number, Name, MAC_Address, Comment } = this.state
    return (
      <div >

        <div className="desktopimg" style={{ marginTop: 10 }}>
          <form onSubmit={this.onSubmit} className="deskform">
            <div>
              <label className="name">Employee_Id:</label>
              <input
                type="text"
                className="deswidth1"
                value={this.state.Employee_Id}
                onChange={this.onChangeEmployee_Id}
              />
            </div>
            <div>
              <label className="name">Asset_Number: </label>
              <input type="text"
                className="deswidth2"
                value={this.state.Asset_Number}
                onChange={this.onChangeAsset_Number}
              />
            </div>
            <div>
              <label className="name">Name: </label>
              <input type="text"
                className="deswidth3"
                value={this.state.Name}
                onChange={this.onChangeName}
              />
            </div>
            <div>
              <label className="name"> MAC_Address:</label>
              <input type="text"
                className="deswidth4"
                value={this.state.MAC_Address}
                onChange={this.onChangeMAC_Address}
              />
            </div>
            <div>
              <label className="name"> Comment:</label>
              <input type="text"
                className="deswidth5"
                value={this.state.Comment}
                onChange={this.onChangeComment}
              />
            </div>
            <div className="form-group">
              <button type="submit" value="send" className="dessendbta" onClick={this.onSubmit}>Send</button>
              <button onClick={this.onHandleClicksCancel} type="button" className="desresetbta">Cancel</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { Employee_Id } = state.Desktopreducer
  const { Asset_Number } = state.Desktopreducer
  const { Name } = state.Desktopreducer
  const { MAC_Address } = state.Desktopreducer
  const { Comment } = state.Desktopreducer
  return { Employee_Id, Asset_Number, Name, MAC_Address, Comment }
}
export default connect(mapStateToProps, { questionHandle })(DesktopTable);



