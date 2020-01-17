import React, { Component } from 'react';
import axios from 'axios';

class  TableRowlapMisLap extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
  debugger;
    axios.delete(`http://localhost:3001/delete3/${this.props.obj._id}`)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        window.location.reload();
}
  render() {
    return (
        <tr>
         
          <td>
            {this.props.obj. Asset_Number}
          </td>
          
          <td>
            {this.props.obj.MAC_Address}
          </td>
          <td>
            {this.props.obj.ChargerAsset_Number}
          </td>
          
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRowlapMisLap;