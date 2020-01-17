import React, { Component } from 'react';
import axios from 'axios';
import TableRowlap from './TableRowlap';
import BrowserHistory from '../Utils/BrowserHistory';




export default class LaptopForm extends Component {

  constructor(props) {
      super(props);
      this.state = {Users: []};
    }
    onHandleClicks = (e) => {

      BrowserHistory.push('/laptoptable'); 
          
          }
    componentDidMount(){
      debugger;
      axios.get('http://localhost:3001/Laptop')
        .then(response => {
          debugger
          this.setState({ Users: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.Users.map(function(object, i){
          return <TableRowlap obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <p>Laptop List</p>
          <button onClick={this.onHandleClicks} >Create</button>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Employee_Id</th>
                <th>Asset_Number</th>
                <th>Name</th>
                <th>MAC_Address</th>
                <th>ChargerAssest_Number</th>
                <th>Comment</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }