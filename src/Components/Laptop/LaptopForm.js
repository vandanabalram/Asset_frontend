import React, { Component } from 'react';
import axios from 'axios';
import TableRowlap from './TableRowlap';
import BrowserHistory from '../Utils/BrowserHistory';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';
import DpNavbar from '../DpNavbar/DpNavbar';

class LaptopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }

  onHandleClicks = (e) => {
    BrowserHistory.push('/laptoptable');
  }

  componentDidMount() {
    axios.get('http://localhost:3001/Laptop')
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
      return <TableRowlap obj={object} key={i} />;
    });
  }
  render() {
    const { UserDetails } = this.props;
    return (
      <div className="desktoptable">
        <DpNavbar />
        <p className="desk"><b>Laptop List</b></p>
        {UserDetails.IsAdmin ? <button className="crtbtn" onClick={this.onHandleClicks} >Create</button> : ""}
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th className="emp">Employee_Id</th>
              <th className="emp">Asset_Number</th>
              <th className="emp">Name</th>
              <th className="emp">MAC_Address</th>
              <th className="emp">ChargerAsset_Number</th>
              <th className="emp">Comment</th>
              <th className="emp" colSpan="2">Action</th>
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
export default connect(mapStateToProps, { GetUserDetailsById })(LaptopForm);
