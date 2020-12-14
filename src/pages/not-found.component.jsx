
import React, { Fragment } from 'react';

// coming from the app.js 26 - file
// after I create the Not Found component go to the app.js 27 - file

const NotFoundPage = () => (

    <Fragment>
        <h1 style={ { fontSize : '3.0rem' } }>Not Found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
    </Fragment>

);


export default NotFoundPage;