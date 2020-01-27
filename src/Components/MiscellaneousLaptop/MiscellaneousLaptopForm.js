import React, { Component } from 'react';
import axios from 'axios';
import TableRowMisLap from './TableRowMisLap';
import BrowserHistory from '../Utils/BrowserHistory';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';
import DpNavbar from '../DpNavbar/DpNavbar';
import './MisLapForm.css';

class MiscellaneousLaptopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  onHandleClicks = (e) => {

    BrowserHistory.push('/miscellaneouslaptoptable');

  }
  componentDidMount() {

    axios.get('http://localhost:3001/MiscellaneousLaptop')
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
      return <TableRowMisLap obj={object} key={i} />;
    });
  }

  render() {
    const { UserDetails } = this.props;

    return (
      <div className="mislaptoptable">
        <DpNavbar/>
        <p className="mislap">MiscellaneousLaptop List</p>
        {UserDetails.IsAdmin ? <button className="mislapcrtbtn" onClick={this.onHandleClicks}>Create</button> : ""}
        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              <th className="mislapemp">Asset_Number</th>
              <th className="mislapemp">MAC_Address</th>
              <th className="mislapemp">ChargerAsset_Number</th>
              <th className="mislapemp">Comment</th>
              <th className="mislapemp" colSpan="2">Action</th>

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
export default connect(mapStateToProps, { GetUserDetailsById })(MiscellaneousLaptopForm);
