import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType"

const initialState ={
    loading:false,
    users:[],
    error:''
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        //first case when user makes request then only type of loading is set to true.
        case FETCH_USERS_REQUEST:return{
            ...state,
            loading:true
        }
        //second case is when the data fetching is successful
        case FETCH_USERS_SUCCESS:return{
            ...state,
            loading:false,
            users: action.payload, //user now has the property action.payload which is now the property we are passing.
            error:''
        }
        //third case for error when no data is returned
        case FETCH_USERS_FAILURE: return{
            ...state,
            loading:false,
            user:[],
            error: action.payload
        }
        //IF THE DATA IS RETURNED THEN ERROR IS AN EMPTY ARRAY AND IF NOT THEN THE USERS ARRAY HAS AN EMPTY VALUE
        default:return state
    }

}

export default reducer