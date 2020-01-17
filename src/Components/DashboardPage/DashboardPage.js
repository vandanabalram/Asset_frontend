import React, { Component } from 'react';
import logo from './image.jpg';
import image from './author.jpeg';
import './DashboardPage.css';
import images from './backgrnd2.jpg';
import Footer from '../Footer/Footer';
import BrowserHistory from '../Utils/BrowserHistory'
import Navbar from '../Navbar/Navbar';



class Dashboardpage extends Component {
    onHandleClickone = (e) => {

        BrowserHistory.push('/desktopform'); 
            
            }
 onHandleClicktwo = (e) => {

     BrowserHistory.push('/laptopform'); 
                    
             }
 onHandleClickthree = (e) => {

     BrowserHistory.push('/miscellaneousindex'); 
                    
         }    
         onHandleClickfour = (e) => {

            BrowserHistory.push('/homepage'); 
                           
                }    
            
    render() {
        return (
            <div>
                
                <div className="row navbar">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
                <img src={logo} className="logo"></img>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" >
                <img src={image} className="logo"></img>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{color:'white'}}>
                <button onClick={this.onHandleClickone} > Desktops</button>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{color:'white'}} >
                <button onClick={this.onHandleClicktwo}> Laptops</button>
                </div>
                
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{color:'white'}}>
                <button onClick={this.onHandleClickthree}> Miscellaneous</button>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-2 col-lg-1" style={{color:'white'}} >
                <button onClick={this.onHandleClickfour} > Logout</button>
                </div>    
      </div> 
      <div>
                <img  src={images} className="backgrnd"></img>
                <h2 className="welcome">WELCOME TO COMPANY ASSETS LISTS</h2>

                </div>
            
                <Footer/>
            </div>
        );
    }
}

export default Dashboardpage;