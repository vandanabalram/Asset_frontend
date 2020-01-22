import axios from 'axios'
export function questionHandle(payload) {

  const options = {
    url: 'http://localhost:3001/MiscellaneousLaptop',
    method: 'POST',
    data: payload
  };

  return function (dispatch) {
    axios(options)
      .then(response => {
        console.log(response.status);
      });
    dispatch({ type: 'REGISTER', payload: payload });
  }
}

export function updateHandle(payload) {
  console.log(payload._id)
    const options = {
      url: "http://localhost:3001/MiscellaneousLaptop/"+payload._id,
      method: 'PUT',
      data: payload
    };
  
    return function (dispatch) {
      axios(options)
        .then(response => {
          console.log(response.status);
        });
      dispatch({ type: 'REGISTER', payload: payload });
    }
  }