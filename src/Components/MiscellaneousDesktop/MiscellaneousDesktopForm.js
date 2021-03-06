import React, { Component } from 'react';
import axios from 'axios';
import TableRowMisdesk from './TableRowMisdesk';
import BrowserHistory from '../Utils/BrowserHistory';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';
import DpNavbar from '../DpNavbar/DpNavbar';
import "./MiscellaneousDesktopForm.css"

class MiscellaneousDesktopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }

  onHandleClicks = (e) => {
    BrowserHistory.push('/miscellaneousdesktoptable');
  }

  componentDidMount() {
    axios.get('http://localhost:3001/MiscellaneousDesktop')
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
      return <TableRowMisdesk obj={object} key={i} />;
    });
  }

  render() {
    const { UserDetails } = this.props;
    return (
      <div className="misdesktoptable">
        <DpNavbar />
        <p className="misdesk"><b>InventoryDesktop-List</b></p>
        {UserDetails.IsAdmin ? <button className="misdescrtbtn" onClick={this.onHandleClicks}>Create</button> : ""}
        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              <th className="misdeskemp">Asset_Number</th>
              <th className="misdeskemp">Desktop</th>
              <th className="misdeskemp">IP_Address</th>
              <th className="misdeskemp">Accessories</th>
              <th className="misdeskemp">Comment</th>
              <th className="misdeskemp" colSpan="2">Action</th>
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
export default connect(mapStateToProps, { GetUserDetailsById })(MiscellaneousDesktopForm);
