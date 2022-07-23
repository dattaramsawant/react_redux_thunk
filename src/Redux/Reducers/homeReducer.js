import { DELETE_HOME_DATA, EDIT_HOME_DATA, SUBMIT_HOME_DATA } from "../types";

const initialState={
    homeData:[]
}

const HomeReducer=(state=initialState,action)=>{
    let newState;

    switch(action.type){
        case SUBMIT_HOME_DATA:
            newState={
                ...state,
                homeData:action.payload
            }
            break;

        case DELETE_HOME_DATA:
            newState={
                ...state,
                homeData:action.payload
            }
            break;

        case EDIT_HOME_DATA:
            newState={
                ...state,
                homeData:action.payload
            }
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}

export default HomeReducer;