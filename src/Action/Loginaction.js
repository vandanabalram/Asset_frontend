// import axios from 'axios'
// import BrowserHistory from '../Components/Utils/BrowserHistory'
// export function loginHandle(payload){
// debugger
// const options = {
// url: 'http://localhost:3001/Signin',
// method: 'POST',

// data: payload
// };

// return function(dispatch)
// {
// axios(options)
// .then(response => {

// if(response.data === "User does not exist")
// {
//     alert("User does not exist")
// }
// else if(response.data === "wrong password")
// {
//     alert("Incorrect password")
// }
// else{
//     BrowserHistory.push('./dashboard')
// }
// dispatch({type:'LOGIN',payload:payload});
// });

// }
// }


import axios from 'axios'
import BrowserHistory from '../Components/Utils/BrowserHistory'
export function loginHandle(payload) {
const options = {
url: 'http://localhost:3001/Signin',
method: 'POST',

data: payload
};

return function (dispatch) {
axios(options)
.then(response => {

if (response.data === "User does not exist") {
alert("User does not exist")
}
else if (response.data === "wrong password") {
alert("Incorrect password")
}
else {
const LoginDet = JSON.stringify({'token':response.data.token, 'userId': response.data.userId});
localStorage.setItem('LOGINDETAILS', LoginDet);
BrowserHistory.push('./dashboard')
}
});

}
}