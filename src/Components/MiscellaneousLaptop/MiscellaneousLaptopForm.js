import React, { Component } from 'react';
import axios from 'axios';
import TableRowMisLap from './TableRowMisLap';
import BrowserHistory from '../Utils/BrowserHistory';

export default class MiscellaneousLaptopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  onHandleClicks = (e) => {

    BrowserHistory.push('/miscellaneouslaptoptable'); 
        
        }
  componentDidMount() {
    debugger;
    axios.get('http://localhost:3001/MiscellaneousLaptop')
      .then(response => {
        debugger
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRowMisLap obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="desktoptable">
        <p className="desk">MiscellaneousLaptop List</p>
        <button  onClick={this.onHandleClicks}>Create</button>
        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              
              <th>Asset_Number</th>
             
              <th>MAC_Address</th>
              <th>ChargerAsset_Number</th>
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