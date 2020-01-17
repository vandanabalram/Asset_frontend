// 

import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory'

export function registerHandle(payload) {
const options = {
url: 'http://localhost:3001/Signup',
method: 'POST',
data: payload
};
return function (dispatch) {
axios(options)
.then(response => {
console.log(response.status);
BrowserHistory.push('./login')
});
dispatch({ type: 'REGISTER', payload: payload });
}
}

export function GetUserDetailsById(UserId) {
debugger;
const options = {
url: `http://localhost:3001/User/${UserId}`,
method: 'GET',
data: ''
};
return function (dispatch) {
axios(options)
.then(response => {
debugger;
console.log("registeraction");
dispatch({ type: 'FETCHUSERDETAILS', payload: response.data });
});
}
}
