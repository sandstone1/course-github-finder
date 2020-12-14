
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';


// remember a reducer is just a function and the reducer takes in 2 arguments, the state and
// the action and then we want to use a switch statement to evaluate the action type and then
// within the return{}; we are updating the state

const AlertReducer = ( state, action ) => {

    switch ( action.type ) {

        case SET_ALERT :
            return {
                ...state,
                alert : action.payload
            };

        case REMOVE_ALERT :
            return {
                ...state,
                alert : null
            };
        
        default:
            return state;

    }

}


export default AlertReducer;