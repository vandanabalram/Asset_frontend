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
      <button  onClick={this.onHandleClicksone}  className="deskbtn" type="submit" >Desktop</button>
      <button  onClick={this.onHandleClickstwo} className="lapbtn" type="submit" >Laptop</button> 
      </div>
      </div>
     
    );
  }
}

export default Miscellaneousindex;