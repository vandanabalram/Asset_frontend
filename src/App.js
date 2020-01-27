import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboardpage from './Components/DashboardPage/DashboardPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import DesktopTable from './Components/Desktop/DesktopTable';
import DesktopForm from './Components/Desktop/DesktopForm';
import LaptopTable from './Components/Laptop/LaptopTable';
import LaptopForm from './Components/Laptop/LaptopForm';
import Miscellaneousindex from './Components/Miscellaneous/Miscellaneousindex';
import MiscellaneousDesktopTable from './Components/MiscellaneousDesktop/MiscellaneousDesktopTable';
import MiscellaneousDesktopForm from './Components/MiscellaneousDesktop/MiscellaneousDesktopForm';
import MiscellaneousLaptopTable from './Components/MiscellaneousLaptop/MiscellaneousLaptopTable';
import MiscellaneousLaptopForm from './Components/MiscellaneousLaptop/MiscellaneousLaptopForm';
import DpNavbar from './Components/DpNavbar/DpNavbar';
import Forgetpassword from './Components/LoginPage/Forgetpassword';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => ( 
  (localStorage.getItem('LOGINDETAILS')) ? (<IncomingComponent {...props} />) : ( 
  <Redirect to={{pathname: '/', state: { from: props.location }, }} />)
  )
  }
  />
  );

export default class App extends Component {
  render() {
    return <div className="app">
      <Router>
        <switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/dpnavbar' component={DpNavbar}></Route>

          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/register' component={RegisterPage}></Route>
          <PrivateRoute exact path='/dashboard' component={Dashboardpage}></PrivateRoute>
          <PrivateRoute exact path='/navbar' component={Navbar}></PrivateRoute>
          <PrivateRoute exact path='/footer' component={Footer}></PrivateRoute>
          <PrivateRoute exact path='/desktoptable' component={DesktopTable}></PrivateRoute>
          <PrivateRoute exact path='/desktopform' component={DesktopForm}></PrivateRoute>
          <PrivateRoute exact path='/laptoptable' component={LaptopTable}></PrivateRoute>
          <PrivateRoute exact path='/laptopform' component={LaptopForm}></PrivateRoute>
          <PrivateRoute exact path='/miscellaneousindex' component={Miscellaneousindex}></PrivateRoute>
          <PrivateRoute exact path='/miscellaneousdesktoptable' component={MiscellaneousDesktopTable}></PrivateRoute>
          <PrivateRoute exact path='/miscellaneousdesktopform' component={MiscellaneousDesktopForm}></PrivateRoute>
          <PrivateRoute exact path='/miscellaneouslaptoptable' component={MiscellaneousLaptopTable}></PrivateRoute>
          <PrivateRoute exact path='/miscellaneouslaptopform' component={MiscellaneousLaptopForm}></PrivateRoute>
          <Route exact path='/forgetpassword' component={Forgetpassword}></Route>

        </switch>
      </Router>

    </div>

  }
}

