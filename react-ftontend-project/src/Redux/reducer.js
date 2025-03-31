




let initialValue = {
    employeeData:[],
    isLoading:false
}



export function reducer(state = initialValue,action){
    switch(action.type){
        case "success":
          return{ ...state,employeeData:action.payload}
        case "loading":
            return {...state,isLoading:action.payload}
        default:
         return state
    }
}