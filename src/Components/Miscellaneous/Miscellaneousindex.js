import React, { Component } from 'react';
import browserHistory from '../Utils/BrowserHistory';
import './Miscellaneousindex.css';
import BrowserHistory from '../Utils/BrowserHistory';
class Miscellaneousindex extends Component {

  onHandleClicksone = (e) => {
    BrowserHistory.push('/miscellaneousdesktopform');
  }

  onHandleClickstwo = (e) => {
    BrowserHistory.push('/miscellaneouslaptopform');
  }
  render() {
    return (
      <div>
        <div className="misimg">
          <button onClick={this.onHandleClicksone} className="deskbtn" type="submit" >Inventory_Desktop</button>
          <button onClick={this.onHandleClickstwo} className="lapbtn" type="submit" >Inventory_Laptop</button>
          <h1 className="inven">INVENTORY-LIST</h1>
        </div>
     
        
        
      </div>

    );
  }
}

export default Miscellaneousindex;