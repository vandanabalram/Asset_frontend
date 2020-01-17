import React, { Component } from 'react';
import axios from 'axios';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';


class  TableRowMisdesk extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
  debugger;
    axios.delete(`http://localhost:3001/delete2/${this.props.obj._id}`)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        window.location.reload();
}
componentDidMount() {
  const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
  debugger;
  // if (LoginDetails) {
  const LogDet = JSON.parse(LoginDetails);
  this.props.GetUserDetailsById(LogDet.userId);
  // }
  }

  render() {
    const {UserDetails}= this.props;

    return (
        <tr>
         
          <td>
            {this.props.obj. Asset_Number}
          </td>
          <td>
            {this.props.obj.Desktop}
          </td>
          <td>
            {this.props.obj.MAC_Address}
          </td>
          <td>
            {this.props.obj.Mouse}
          </td>
          <td>
            {this.props.obj.Keyboard}
          </td>
          <td>
            {this.props.obj.Cables}
          </td>
         
          <td>
          {UserDetails.IsAdmin ?<button className="btn btn-primary">Edit</button>:""}
          </td>
          <td>
          {UserDetails.IsAdmin ?<button onClick={this.delete} className="btn btn-danger">Delete</button>:""}
          </td>
        </tr>
    );
  }
}

const mapStateToProps = (state) => {
  const { UserDetails } = state.Registerreducer
  return { UserDetails }
  }
  export default connect(mapStateToProps, {GetUserDetailsById})(TableRowMisdesk);
