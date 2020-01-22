import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import './DesktopForm.css';
import BrowserHistory from '../Utils/BrowserHistory'
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';
import DpNavbar from '../DpNavbar/DpNavbar';

class DesktopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  onHandleClicks = (e) => {

    BrowserHistory.push('/desktoptable');

  }
  componentDidMount() {
    axios.get('http://localhost:3001/Desktop')
      .then(response => {
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
    const LogDet = JSON.parse(LoginDetails);
    this.props.GetUserDetailsById(LogDet.userId);
    
  }

  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    const { UserDetails } = this.props;
    return (
      <div className="desktoptable">
        <DpNavbar/>
        <p className="desk">Desktop List</p>
        {UserDetails.IsAdmin ? <button onClick={this.onHandleClicks} >Create</button> : ""}

        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              <th>Employee_Id</th>
              <th>Asset_Number</th>
              <th>Name</th>
              <th>MAC_Address</th>
              <th>Comment</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { UserDetails } = state.Registerreducer
  return { UserDetails }
}
export default connect(mapStateToProps, { GetUserDetailsById })(DesktopForm);


