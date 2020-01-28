const initialState = {
  email: '',
  password: '',
  LoginDetails: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password

      }
    }

    case "LOGINDETAILS": {
      return {
        ...state,
        LoginDetails: action.payload.LoginDetails
      }
    }
    default:
      return state;
  }
}
