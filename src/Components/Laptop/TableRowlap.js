import React, { Component } from 'react';
import axios from 'axios';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import './TableRowlap.css';
import { updateHandle } from '../../Action/LaptopAction'
import BrowserHistory from '../Utils/BrowserHistory';

class TableRowlap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      modalIsOpen: false,
      Employee_Id: '',
      Asset_Number: '',
      Name: '',
      MAC_Address: '',
      ChargerAsset_Number: '',
      Comment: '',
      _id: '',
    };
    this.delete = this.delete.bind(this);
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
    console.log(e.target.value)
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

  delete() {
    axios.delete(`http://localhost:3001/delete1/${this.props.obj._id}`)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  openModal = () => {
    console.log(this.props.obj._id)
    this.setState({ Employee_Id: this.props.obj.Employee_Id })
    this.setState({ Asset_Number: this.props.obj.Asset_Number })
    this.setState({ Name: this.props.obj.Name })
    this.setState({ MAC_Address: this.props.obj.MAC_Address })
    this.setState({ ChargerAsset_Number: this.props.obj.ChargerAsset_Number })
    this.setState({ Comment: this.props.obj.Comment })
    this.setState({ _id: this.props.obj._id })
    this.setState({ modalIsOpen: true });
    console.log("hi", this.state)
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
    const LogDet = JSON.parse(LoginDetails);
    this.props.GetUserDetailsById(LogDet.userId);
  }

  handleChangeg = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("hi", this.state._id)
    const payload = {
      _id: this.state._id,
      Employee_Id: this.state.Employee_Id,
      Asset_Number: this.state.Asset_Number,
      Name: this.state.Name,
      MAC_Address: this.state.MAC_Address,
      ChargerAsset_Number: this.state.ChargerAsset_Number,
      Comment: this.state.Comment,
    };
    console.log(payload);
    this.props.updateHandle(payload);
    BrowserHistory.push('./laptopform');
  }

  onHandleClicksCancel() {
    BrowserHistory.push('/laptopform');
  }

  render() {
    const { UserDetails } = this.props;
    return (
      <tr>
        <td>
          {this.props.obj.Employee_Id}
        </td>
        <td>
          {this.props.obj.Asset_Number}
        </td>
        <td>
          {this.props.obj.Name}
        </td>
        <td>
          {this.props.obj.MAC_Address}
        </td>
        <td>
          {this.props.obj.ChargerAsset_Number}
        </td>
        <td>
          {this.props.obj.Comment}
        </td>
        <td>
          {UserDetails.IsAdmin ? <button onClick={this.openModal} className="btn btn-primary">Edit</button> : ""}
          <Modal className="modelbodylap"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Register Modal"
          >
            <form onSubmit={this.onSubmit} className="tablerowlap">
              <div>
                <label className="name">Employee_Id:</label>
                <input
                  type="text"
                  className="rlwidth1"
                  defaultValue={this.props.obj.Employee_Id}
                  onChange={this.onChangeEmployee_Id}
                />
              </div>
              <div>
                <label className="name">Asset_Number: </label>
                <input type="text"
                  className="rlwidth2"
                  defaultValue={this.props.obj.Asset_Number}
                  onChange={this.onChangeAsset_Number}
                />
              </div>
              <div>
                <label className="name">Name: </label>
                <input type="text"
                  className="rlwidth3"
                  defaultValue={this.props.obj.Name}
                  onChange={this.onChangeName}
                />
              </div>
              <div>
                <label className="name"> MAC_Address:</label>
                <input type="text"
                  className="rlwidth4"
                  defaultValue={this.props.obj.MAC_Address}
                  onChange={this.onChangeMAC_Address}
                />
              </div>
              <div>
                <label className="name"> ChargerAsset_Number:</label>
                <input type="text"
                  className="rlwidth5"
                  defaultValue={this.props.obj.ChargerAsset_Number}
                  onChange={this.onChangeChargerAsset_Number}
                />
              </div>
              <div>
                <label className="name"> Comment:</label>
                <input type="text"
                  className="rlwidth6"

                  defaultValue={this.props.obj.Comment}
                  onChange={this.onChangeComment}
                />
              </div>
              <div className="form-group">
                <button type="submit" value="send" className="lapsendbta" onClick={this.onSubmit}>Update</button>
                <button onClick={this.onHandleClicksCancel} type="button" className="lapresetbta">Cancel</button>
              </div>
            </form>
          </Modal>
        </td>
        <td>
          {UserDetails.IsAdmin ? <button onClick={this.delete} className="btn btn-danger">Delete</button> : ""}
        </td>
      </tr>

    );
  }
}

const mapStateToProps = (state) => {
  const { UserDetails } = state.Registerreducer
  return { UserDetails }
}
export default connect(mapStateToProps, { GetUserDetailsById, updateHandle })(TableRowlap);
