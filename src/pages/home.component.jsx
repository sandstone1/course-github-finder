
import React, { Fragment } from 'react';
import Search from '../components/search/search.component';
import Users from '../components/users/users.component';

// after I create the Home component go to the app.js 26 - file

const HomePage = () => (

    <Fragment>
        <Search />
        <Users />
    </Fragment>

);


export default HomePage;