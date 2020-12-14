
// coming from the Github.state.js 2 - file
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


// remember a reducer is just a function and the reducer takes in 2 arguments, the state and
// the action and then we want to use a switch statement to evaluate the action type and then
// within the return{}; we are updating the state

// and remember in the GithubState component we initially set loading to false and then we
// called setLoading(); inside the searchUsers function, which resulted in setting loading to
// true inside the switch statement below

// now we want to go back to the app.js 18 - file
const GithubReducer = ( state, action ) => {

    switch ( action.type ) {

        case SEARCH_USERS :
            return {
                ...state,
                users   : action.payload,
                loading : false
            };
        
        case SET_LOADING :            
            return {
                ...state,
                loading : true
            };

        // 3 -
        // and now let's go to the user.component.jsx 6 - file
        case GET_USER_REPOS : 
            return {
                ...state,
                repos   : action.payload,
                loading : false
            };
        // End of 3 -
        
        // 2 -
        // and now let's go to the user.component.jsx 6 - file
        case GET_USER : 
            return {
                ...state,
                user    : action.payload,
                loading : false
            };
        // End of 2 -


        // 1 -
        // and now let's go to the search.component.jsx 7 - file
        case CLEAR_USERS :
            return {
                ...state,
                users   : [],
                loading : false
            };
        // End of 1 -

        default:
            return state;

    }

}


export default GithubReducer;