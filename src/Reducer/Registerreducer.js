const initialState = {
  Firstname: '',
  Lastname: '',
  email: '',
  password: '',
  Confirmpassword: '',
  Mobnum: '',
  IsAdmin: '',
  UserDetails: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER": {
      return {
        ...state, Firstname: action.payload.Firstname,
        Lastname: action.payload.Lastname,
        email: action.payload.email,
        password: action.payload.password,
        Confirmpassword: action.payload.Confirmpassword,
        Mobnum: action.payload.Mobnum,
        IsAdmin: action.payload.IsAdmin
      }
    }
    case "FETCHUSERDETAILS": {
      return {
        ...state, UserDetails: action.payload
      }
    }
    default:
      return state;
  }

}