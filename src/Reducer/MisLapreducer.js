const initialState={
    Asset_Number :'',
    Desktop:'',
    MAC_Address:'',
    Mouse:'',
    Keyboard:'',
    Cables:''
  
    }
    
    export default(state = initialState,action)=>{
    debugger
    switch(action.type){
    
    case "REGISTER":{
    return{...state,
   
    Asset_Number :action.payload.Assest_Number ,
    Desktop :action.payload.Desktop ,
    MAC_Address :action.payload.MAC_Address ,
    Mouse :action.payload. Mouse ,
    Keyboard :action.payload.Keyboard ,
    Cables :action.payload. Cables ,
   
    }
    }
    default:
    return state;
    }  
    }

    
