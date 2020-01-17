import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './LaptopTable.css';
import axios from 'axios';
import browserHistory from '../Utils/BrowserHistory';
import {questionHandle} from '../../Action/LaptopAction'
import { connect } from 'react-redux';

class LaptopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee_Id: '',
      Asset_Number: '',
      Name: '',
      MAC_Address:'',
      ChargerAssest_Number:'',
      Comment:''
    }
  }
  handleChangeg=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }
  onChangeEmployee_Id=(e)=> {
      this.setState({
      Employee_Id: e.target.value
    });
  }
  onChangeAsset_Number=(e)=> {
      this.setState({
        Asset_Number: e.target.value
    })  
  }
  onChangeName=(e)=> {
    this.setState({
        Name: e.target.value
  })  
}
onChangeMAC_Address=(e)=> {
    this.setState({
        MAC_Address: e.target.value
  })  
}
onChangeChargerAssest_Number=(e)=> {
  this.setState({
    ChargerAssest_Number: e.target.value
})  
}
onChangeComment=(e)=> {
    this.setState({
    Comment: e.target.value
  })  
}
  onSubmit=(e)=> {
    debugger
      e.preventDefault();
      const payload = {
     Employee_Id: this.state.Employee_Id,
     Asset_Number : this.state.Asset_Number,
     Name: this.state.Name,
     MAC_Address: this.state.MAC_Address,
     ChargerAssest_Number:this.state.ChargerAssest_Number,
     Comment: this.state.Comment,
    };
 
      this.props.questionHandle(payload);
      browserHistory.push('./Laptopform'); 
  }

  render() {
    const {Employee_Id, Asset_Number,Name,MAC_Address,ChargerAssest_Number,Comment } = this.state 
    return (
      <div>
   
            <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            <div style={{ marginTop: 10 }}>
                <form onSubmit={this.onSubmit} className="apptform">
                  <div>
                    <label>Employee_Id</label>
                      <input 
                        type="text" 
                        className="width" 
                        value={this.state.Employee_Id}
                        onChange={this.onChangeEmployee_Id}
                    />
                  </div>
                  <div>
                    <label>Asset_Number </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Asset_Number}
                        onChange={this.onChangeAsset_Number}
                      />
                  </div>
                  <div>
                    <label>Name </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Name}
                        onChange={this.onChangeName}
                      />
                  </div>
                  <div>
                    <label> MAC_Address</label>
                      <input type="text" 
                        className="width"
                        value={this.state.MAC_Address}
                        onChange={this.onChangeMAC_Address}
                      />
                  </div>
                  <div>
                    <label>ChargerAssest_Number</label>
                      <input type="text" 
                        className="width"
                        value={this.state.ChargerAssest_Number}
                        onChange={this.onChangeChargerAssest_Number}
                      />
                  </div>
                  <div>
                    <label> Comment </label>
                      <input type="text" 
                        className="width"
                        value={this.state.Comment }
                        onChange={this.onChangeComment}
                      />
                  </div>
                <div className="form-group">
                    <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Send</button>
                    <button type="submit" className="resetbta">Reset</button> 
              </div>
                </form>
      </div>
       
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  const {Employee_Id}=state.Laptopreducer
  const {Asset_Number}=state.Laptopreducer
  const {Name}=state.Laptopreducer
  const {MAC_Address}=state.Laptopreducer
  const {ChargerAssest_Number}=state.Laptopreducer
  const {Comment}=state.Laptopreducer
  
  return {Employee_Id,Asset_Number,Name,MAC_Address,ChargerAssest_Number,Comment}
  }
  export default connect(mapStateToProps,{questionHandle}) (LaptopTable);