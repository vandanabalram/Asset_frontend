const initialState = {
  Employee_Id: '',
  Assest_Number: '',
  Name: '',
  MAC_Address: '',
  ChargerAsset_Number: '',
  Comment: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER": {
      return {
        ...state,
        Employee_Id: action.payload.Employee_Id,
        Assest_Number: action.payload.Assest_Number,
        Name: action.payload.Name,
        MAC_Address: action.payload.MAC_Address,
        ChargerAsset_Number: action.payload.ChargerAsset_Number,
        Comment: action.payload.Comment
      }
    }
    default:
      return state;
  }
}


