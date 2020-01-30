const initialState = {
  Assest_Number: '',
  Desktop: '',
  MAC_Address: '',
  Mouse: '',
  Keyboard: '',
  Cables: '',
  Comment: '',
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER": {
      return {
        ...state,
        Assest_Number: action.payload.Assest_Number,
        Desktop: action.payload.Desktop,
        MAC_Address: action.payload.MAC_Address,
        Mouse: action.payload.Mouse,
        Keyboard: action.payload.Keyboard,
        Cables: action.payload.Cables,
        Comment: action.payload.Comment,
      }
    }
    default:
      return state;
  }
}


