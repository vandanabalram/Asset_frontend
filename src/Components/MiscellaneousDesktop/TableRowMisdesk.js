import React, { Component } from 'react';
import axios from 'axios';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { updateHandle } from '../../Action/MiscellaneousDesktopAction'
import BrowserHistory from '../Utils/BrowserHistory';


class TableRowMisdesk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      modalIsOpen: false,
      Asset_Number: '',
      Desktop: '',
      MAC_Address: '',
      Mouse:'',
      Keyboard:'',
      Cables:'',
      Comment: '',
      _id:'',

    };
    this.delete = this.delete.bind(this);
  }
  handleChangeg = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeAsset_Number = (e) => {
    console.log(e.target.value)
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
  onChangeComment = (e) => {
    this.setState({
      Comment: e.target.value
    })
  }
  toggleClickMouse = (e) => {
    console.log("hi",this.state.Mouse)
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

  delete() {
    axios.delete(`http://localhost:3001/delete2/${this.props.obj._id}`)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  openModal = () => {
    console.log(this.props.obj._id)
    this.setState({ Asset_Number: this.props.obj.Asset_Number })
    this.setState({ Desktop: this.props.obj.Desktop })
    this.setState({ MAC_Address: this.props.obj.MAC_Address })
    this.setState({ Mouse: this.props.obj.Mouse })
    this.setState({ Keyboard: this.props.obj.Keyboard })
    this.setState({ Cables: this.props.obj.Cables })
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
    console.log("hi",this.state._id)
    const payload = {
      _id: this.state._id,
      Asset_Number: this.state.Asset_Number,
      Desktop: this.state. Desktop,
      MAC_Address: this.state.MAC_Address,
      Mouse: this.state.Mouse,
      Keyboard: this.state.Keyboard,
      Cables: this.state.Cables,
      Comment: this.state.Comment,
    };
    console.log(payload);
    this.props.updateHandle(payload);
    BrowserHistory.push('./miscellaneouslaptopform');
  }
  onHandleClicksCancel() {
    BrowserHistory.push('./miscellaneouslaptopform');
  }


  render() {
    const { UserDetails } = this.props;

    return (
      <tr>
        <td>
          {this.props.obj.Asset_Number}
        </td>
        <td>
          {this.props.obj.Desktop}
        </td>
        <td>
          {this.props.obj.MAC_Address}
        </td>
        <td> {this.props.obj.Mouse? "Mouse," : ""}
          {this.props.obj.Keyboard? "Keyboard " : ""}     
          {this.props.obj.Cables? "Cables" : ""}
        </td>
        <td>
          {this.props.obj.Comment}
        </td>


        <td>
          {UserDetails.IsAdmin ? <button className="btn btn-primary">Edit</button> : ""}
          <Modal className="modelbody"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Register Modal"
          >
            <form onSubmit={this.onSubmit} className="deskform">
            <div>
              <label className="name">Asset_Number: </label>
              <input type="text"
                className="width"
                defaultValue={this.props.obj.Asset_Number}
                onChange={this.onChangeAsset_Number}
              />
            </div>
            <div>
              <label className="name"> Desktop: </label>
              <input type="text"
                className="width"
                defaultValue={this.props.obj.Desktop}
                onChange={this.onChangeDesktop}
              />
            </div>
            <div>
              <label className="name"> MAC_Address:</label>
              <input type="text"
                className="width"
                defaultValue={this.props.obj.MAC_Address}
                onChange={this.onChangeMAC_Address}
              />
            </div>
            <div>
            <label className="name">Accessories: </label>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  onChange={this.toggleClickMouse}
                  className="form-check-input"
                />
                Mouse
            </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox"
                  onChange={this.toggleClickKeyboard}
                  className="form-check-input"
                />
                Keyboard
            </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
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
                className="width"
                onChange={this.Comment}
              />
            </div>
            
            <div className="form-group">
              <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Update</button>
              <button onClick={this.onHandleClicksCancel} type="button" className="resetbta">Cancel</button>
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
export default connect(mapStateToProps, { GetUserDetailsById, updateHandle })(TableRowMisdesk);
