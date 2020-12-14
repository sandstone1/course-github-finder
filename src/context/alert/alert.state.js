
import React, { useReducer } from 'react';
import AlertContext from './alert.context';
import AlertReducer from './alert.reducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';


// the AlertState component will be our global state for anything that has to do with alerts
const AlertState = ( props ) => {

    // INITIAL STATE
    const initialState = {
        alert : null
    };

    
    // REDUCER
    
    // the useReducer hook looks like the following:
    // " const [state, dispatch] = useReducer(reducer, initialState); "
    const [ state, dispatch ] = useReducer( AlertReducer, initialState );


    // ACTIONS

    // Show Alert ( an action )

    // 1 -
    // coming from the app.js 24 - file
    // now let's go to the search.component.jsx 8 - file now
    const setAlert = ( message, type ) => {

        dispatch( {
            type    : SET_ALERT,
            payload : { message : message, type : type }
        } );


        setTimeout( () => {

            removeAlert();

        }, 5000 )

    }


    // Remove Alert ( an action )
    const removeAlert = () => dispatch( { type : REMOVE_ALERT } );


    // RETURN THE CONTEXT PROVIDER
    return (

        <AlertContext.Provider
            value={ { 
                alert : state.alert,
                setAlert,
                removeAlert
            } }
        >
            { props.children }
        </AlertContext.Provider>

    );

    // End of 1 -

}


export default AlertState;

