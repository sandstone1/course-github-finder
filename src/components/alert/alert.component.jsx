
import React, { useContext } from 'react';
import './alert.styles.scss';


// 1 -
// coming from the app.js 25 - file
// import in the useContext hook above and then import in the AlertContext
import AlertContext from '../../context/alert/alert.context';

// End of 1 -


// the Alert component will take as an argument the alert state property and now
// let's go to the app.js 9 - file and import in this component
const Alert = () => {


    // 1 - continued
    // initialize the AlertContext
    const alertContext = useContext( AlertContext );

    // let's destructure off " alert " from the alertContext and
    // then clear the alert argument
    const { alert } = alertContext;

    // and now let's test this out and everything is working as expected

    // and Brad said this is pretty much his workflow for using the context API and the
    // useContext() hook and the useReducer() hook

    // End of 1 -


    return (

        alert !== null && (

            <div className={ `alert alert-${ alert.type }` }>
                <i
                    className="fas fa-info-circle"
                >
                </i>{ alert.message }
            </div>

        )

    );

}


export default Alert;