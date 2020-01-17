// const initialState={
//     email:'',
//     password:'',
//     }
    
//     export default(state = initialState,action)=>{
//     debugger
//     switch(action.type){
    
//     case "LOGIN":{
//     return{...state,
   
//     email:action.payload.email,
//     password:action.payload.password
    
//     }
//     }
//     default:
//     return state;
//     }
    
//     }


const initialState={
    email:'',
    password:'',
    LoginDetails:{}
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    case "LOGIN":{
    return{...state,
    email:action.payload.email,
    password:action.payload.password
    
    }
    }
    
    case "LOGINDETAILS":{
    return{...state,
    LoginDetails: action.payload.LoginDetails
    }
    }
    default:
    return state;
    }
    }