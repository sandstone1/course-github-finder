/*
import React from 'react';
import './nav-bar.styles.scss';


// 1 -
// let's use props and props are properties you can pass into a component from the outside
// and let's go our App.js file and pass in a prop in the NavBar component and then we can
// access the prop below by using " { this.prop.title } "

// now we can also use prop types and prop types enable us to do type checking so prop types can
// tell us if the prop should be a string, a number, an array, an object, etc. and in order
// to use prop types we have to import it in first
import PropTypes from 'prop-types';

// and then we can declare the propTypes in 2 - below

// and if we pass an array for the title in the App.js file then we get the following error
// in the console " Warning: Failed prop type: Invalid prop `title` of type `array` supplied
// to `NavBar`, expected `string`. "

// and Brad said our application will work without using prop types but he would recommend we
// use prop types since it will make our application more robust and Brad said he will be using
// prop types throughout the entire course

// go to 3 -

// End of 1 -

// 4 -
// let convert the NavBar component from a class based component to a functional component
// and change " static propTypes = {} " to " NavBar.propTypes = {} " 

// End of 4 -


// 5 -
// coming from the app.js 10 - file
// and in react we want to use " Link " from react-router-dom to navigate around the site
// and let's import in Link and remember that we use curly braces or {} for named exports
// and we do not use curly braces or {} for default exports
import { Link } from 'react-router-dom';

// next let's create a link to the home page and a link to the about page ( see below )

// now let's test this out and we see that the links are working and in addition we are
// maintaining state; for example, if we search for users with a first name of " Brad " and
// then click on the link to the about page and then click on the link to the home page or
// come back to the home page and when we do we will still see the users with a first name
// of " Brad " so by using the Link component from react-router-dom we are able to maintain
// state

// and remember if we used an anchor tag instead of the Link component and then clicked on
// the home page to go back to the home page then the home page will refresh and thereby wipe
// out whatever state existed on the home page so using Link components results in a better
// user experience

// in the next video we will start working on the user page 

// End of 5 -


const NavBar = ( { icon, title } ) => {

    return (

        <nav className="navbar">

            <h1>
                <i className={ icon }></i>&nbsp;{ title }
            </h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>                
            </ul>

        </nav>

    );

}


NavBar.propTypes = {
    icon  : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};


export default NavBar;
*/











// ===============================











// at the beginning of lecture 35, given all the notes, I created a new file below without
// the notes so we are starting fresh


import React from 'react';
import PropTypes from 'prop-types';
// and in react we want to use " Link " from react-router-dom to navigate around the site
import { Link } from 'react-router-dom';

import './nav-bar.styles.scss';


const NavBar = ( { icon, title } ) => {

    return (

        <nav className="navbar">

            <h1>
                <i className={ icon }></i>&nbsp;{ title }
            </h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>                
            </ul>

        </nav>

    );

}


NavBar.propTypes = {
    icon  : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};


export default NavBar;

