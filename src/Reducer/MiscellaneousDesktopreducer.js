const initialState={
    Assest_Number :'',
    Desktop:'',
    MAC_Address:'',
  
    }
    
    export default(state = initialState,action)=>{
    debugger
    switch(action.type){
    
    case "REGISTER":{
    return{...state,
   
    Assest_Number :action.payload.Assest_Number ,
    Desktop :action.payload.Desktop ,
    MAC_Address :action.payload.MAC_Address ,
   
    }
    }
    default:
    return state;
    }  
    }

    
