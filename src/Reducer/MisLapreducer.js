const initialState = {
  Asset_Number: '',
  Desktop: '',
  MAC_Address: '',
  ChargerAsset_Number: '',
  Comment: '',
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER": {
      return {
        ...state,
        Asset_Number: action.payload.Assest_Number,
        Desktop: action.payload.Desktop,
        MAC_Address: action.payload.MAC_Address,
        ChargerAsset_Number: action.payload.ChargerAsset_Number,
        Comment: action.payload.Comment,
      }
    }
    default:
      return state;
  }
}


