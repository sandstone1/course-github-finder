
import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import './spinner.styles.scss';

// now let's go to the users.component.jsx file 3 -

const Spinner = () => (

    <Fragment>
        <img
            src={ spinner }
            alt="Loading ..."
            className="spinner"
        />
    </Fragment>

);


export default Spinner;