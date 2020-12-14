
// ==============================
// STEPS TO QUITING AND THEN RESTARTING TERMINAL
// ==============================

// to get back to the main folder directory, we need to type:
// " cd /Applications/MAMP/htdocs/stoneburyhomes/misc/brad_traversy/react_front_to_back "














// ==============================
// STEPS TO UPDATING NODE.JS
// ==============================



// ****************
// STEP 1 - UPDATE NODE TO THE LATEST RELEASE VERION
// ****************

// go to the Node Crash Course for details on STEP 1















// ==============================
// STEPS TO FIX MONGODB WHITELIST ISSUE
// ==============================

// The steps below are taken from the following website:
// https://studio3t.com/knowledge-base/articles/mongodb-atlas-login-ip-whitelisting/#whitelist-your-current-ip-address


/*
// TITLE
How to whitelist IP addresses on MongoDB Atlas

// SUBTITLE
Whitelist your current IP address

// TEXT
With your MongoDB Atlas login credentials, open your account and find the cluster that is
triggering the error message.

// TEXT
Next, click on Network Access under the Security tab on the left-hand sidebar. This will take
you to the IP Whitelist tab.

// TEXT
Click on Add IP Address in the top-right corner. This will open the Add IP Whitelist Entry
dialog.

// TEXT
Click on Add current IP address. MongoDB will automatically detect your current address,
then click Confirm.

// TEXT
MongoDB Atlas will take a few minutes to deploy the changes, after which you should be good to go.
*/


















// ==============================
// MODULES INSTALLED AND UNINSTALLED
// ==============================


// #1
// react: " Rogers-iMac:the_net_ninja Home$ npx create-react-app . " and this will include
// react in our react front to back folder
// lecture 6: Create React App & File Structure


// #2
// react: " Rogers-iMac:the_net_ninja Home$ npm i react-router-dom " and this will install the
// latest version of react-router-dom
// lecture 21: React Router Setup


// #3
// node-sass: " Rogers-iMac:react_front_to_back Home$ npm install node-sass@4.14.1 " and this
// will include sass in our project
// lecture 24.5: Change the file structure and include SASS and React Skeleton


























// ==============================
// REACT FRONT TO BACK
// ==============================




// ==============================
// SECTION 1: INTRODUCTION
// ==============================


// lectures 1 - 3: understood and move one to Section 2








// ==============================
// SECTION 2: PROJECT 1 START [ GITHUB FINDER ] & REACT SETUP
// ==============================


// lecture 4: understood and move one to lecture 5





// lecture 5: Code & Resources

// copied the below from the lecture

/*
" The final code for this project can be found in this Github repo:

https://github.com/bradtraversy/github-finder



Docs for the Github API:

https://developer.github.com/v3/



To Register Your Github App & Get Keys:

https://github.com/settings/applications/new



API Endpoints We Will Be Working With:

https://api.github.com/users

https://api.github.com/search/users?q=brad

https://api.github.com/users/bradtraversy

https://api.github.com/users/bradtraversy/repos "
*/







// lecture 6: Create React App & File Structure

// first thing we will do is create a react app and Brad Traversy is doing:
// " npx create-react-app ."

// I set up my react project as follows

// ==============================
// SET UP PROJECT
// ==============================

// and now let's set up our project and before we set up the project let's remove my
// app-react-front-to-back.js file

// ======
// STEP 1 - Remove my app-react-front-to-back.js file
// ======

// and then let's create a react project by typing:

// ======
// STEP 2 - " Rogers-iMac:the_net_ninja Home$ npx create-react-app ."
// ======

// #1
// react: " Rogers-iMac:the_net_ninja Home$ npx create-react-app . " and this will include
// react in our react front to back folder
// lecture 6: Create React App & File Structure

// now let's clean up our files

// ======
// STEP 3 - so we can start with the correct tab settings let's create new files for:
// index.html ( add in Google fonts and material icon fonts )
// App.css ( add the default styles from the Complete React Developer in 2019 course and
// the React Front to Back course )
// App.js ( modify the file )
// index.js ( modify the file )

// and then delete the following files:
// index.css
// logo.svg

// and then create the following old files:
// old_App.css
// old_App.js
// old_App.test.js
// old_index.css
// old_index.js
// ======

// ======
// STEP 4 - delete the yarn.lock file  
// ======

// and now we are ready to start coding



// ==============================
// INITIAL FILE STRUCTURE
// ==============================


// node_modules
// public
    // favicon.ico
    // index.html
    // logo192.png
    // logo512.png
    // manifest.json
    // robots.txt
// src
    // App.css
    // App.js
    // index.js
    // old_App.css
    // old_App.js
    // old_App.test.js
    // old_index.css
    // old_index.js
    // reportWebVitals.js
    // setupTests.js
// gitignore
// app-react-front-to-back.js
// package.json
// README.md



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/PACKAGE.JSON
// ==============================

/*
{
    "name": "react_front_to_back",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-scripts": "4.0.0",
        "web-vitals": "^0.2.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
*/

// Brad said that this is our start script " "start": "react-scripts start", " and this will start
// our dev server which will run by default on port 3000 and we have our build script or build
// command " "build": "react-scripts build", " that will generate our static assets for when we
// are ready to deploy and we have a test script or test command " "test": "react-scripts test", "
// if we want to run tests

// remember in react everything is routed through a single file and that file is our index.html
// file and remember all of our files, components and state will go in the src folder

// if we run " npm run build " then we will create a production build and a folder called build
// and inside the build folder will be a number of files including our static files and our
// index.html file

// now, let's run our dev server and to do that let's go to the integrated terminal and type
// " Rogers-iMac:react_front_to_back Home$ npm start " and then we will see a webpage open with
// the following address " http://localhost:3007/ "

// and remember components can be functions or classes and in this project we will start with
// class based functions







// lecture 7: Create React App Cleanup & Prepare

// Brad deleted the index.css and the logo.svg files so I deleted both of those files as well
// and then let's modify the App.js file and let's go to that file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS
// ==============================


import React, { Component } from 'react';

import './App.css';

// create a class based component
class App extends Component {

    render() {

        return (
            <div className="App">
    
                <h1>Hello from React</h1>
    
            </div>
        );

    }
    
}

export default App;




// -------------------- END OF FILE


// and now if we go back to our browser or " localhost:3007 " we see this is correct
// so everything is working as expected

// for the css file Brad will use a lot of classes that similar to Bootstrap and let's go
// to the App.css file now and update that file



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.CSS
// ==============================


/*
// Brad's styles are listed below and I will use his styles since Brad's body, a and * tags match
// up pretty well with my default styles for the body, a and * tags


// Global Styles

// from Mozilla: " Property names that are prefixed with --, like --example-name, represent
// custom properties that contain a value that can be used in other declarations using the
// var() function. "

:root {
    --primary-color  : rgba( 220, 53, 69, 1 );
    --dark-color     : rgba( 51, 51, 51, 1 );
    --light-color    : rgba( 244, 244, 244, 1 );
    --danger-color   : rgba( 220, 53, 69, 1 );
    --success-color  : rgba( 40, 167, 69, 1 );
}

// global reset
* {
    margin  : 0;
    padding : 0;

    box-sizing : border-box;
}

html {
    font-size : 62.5%; // 1 rem = 10px
}

body {
    font-family : 'Roboto', Arial, sans-serif;
    font-size   : 1.6rem;
    line-height : 1.6;
    color       : rgba( 51, 51, 51, 1 );

    background-color : rgba( 255, 255, 255, 1 );
}

a {
    color           : var(--primary-color);
    text-decoration : none;
}

a:hover {
    color : rgba( 102, 102, 102, 1 );
}

ul {
    list-style : none;
}

// we need set max-height and max-width in order to make the images responsive

// w3schools said: " How To Create Responsive Images? If you want the image to scale
// both up and down on responsiveness, set the CSS width property to 100% and height
// to auto ( i.e. { width : 100%; height : auto; } ) " and " If you want an image to
// scale down if it has to, but never scale up to be larger than its original size,
// use max-width: 100%; ( i.e. { max-width : 100%; height : auto; } ) "

img {
    max-width : 100%;
}


// Utilities
.container {
    max-width : 1100px;
    margin    : auto;
    padding   : 0 3.2rem;

    overflow : hidden;
}


// Text Styles
.x-large {
    margin: 0 0 1.6rem 0;

    font-size   : 6.4rem;
    line-height : 1.2;
}

.large {
    margin: 0 0 1.6rem 0;

    font-size   : 4.8rem;
    line-height : 1.2;
}

.lead {
    margin: 0 0 1.6rem 0;

    font-size : 2.4rem;
}

.text-primary {
    color : var(--primary-color);
}

.text-dark {
    color : var(--dark-color);
}

.text-success {
    color : var(--success-color);
}

.text-danger {
    color : var(--danger-color);
}

.text-center {
    text-align : center;
}

.text-right {
    text-align : right;
}

.text-left {
    text-align : left;
}


// Center All
.all-center {
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    width           : 100%;
    margin          : auto;

    text-align : center;
}


// Cards
.card {
    margin  : 1.1rem 0;
    padding : 1.6rem;

    border : rgba( 204, 204, 204, 1 ) 1px dotted;
}


// List
.list {
    margin : 0.8rem 0;
}

.list li {
    padding: 0 0 0.5rem 0;
}


// Padding
.p {
    padding : 0.5rem;
}
.p-1 {
    padding : 1.6rem;
}
.p-2 {
    padding : 3.2rem;
}
.p-3 {
    padding: 4.8rem;
}
.py {
    padding : 0.8rem 0;
}
.py-1 {
    padding : 1.6rem 0;
}
.py-2 {
    padding : 3.2rem 0;
}
.py-3 {
    padding : 4.8rem 0;
}


// Margin
.m {
    margin : 0.8rem;
}
.m-1 {
    margin : 1.6rem;
}
.m-2 {
    margin : 3.2rem;
}
.m-3 {
    margin : 4.8rem;
}
.my {
    margin : 0.8rem 0;
}
.my-1 {
    margin : 1.6rem 0;
}
.my-2 {
    margin : 3.2rem 0;
}
.my-3 {
    margin : 4.8rem 0;
}


// Grid
.grid-2 {
    display               : grid;
    grid-template-columns : repeat( 2, 1fr );
    grid-gap              : 1.6rem;
}

.grid-3 {
    display               : grid;
    grid-template-columns : repeat( 3, 1fr );
    grid-gap              : 1.6rem;
}

.grid-4 {
    display               : grid;
    grid-template-columns : repeat( 4, 1fr );
    grid-gap              : 1.6rem;
}

.btn {
    display : inline-block;
    margin  : 0 0.8rem 0 0;
    padding : 0.6rem 2.1rem;

    border : none;

    font-size : 1rem;
    color     : #333;

    background : var(--light-color);
    outline    : none;
    cursor     : pointer;
    
    transition : opacity 0.2s ease-in;
}

.btn-link {
    margin : 0;
    padding : 0;

    background : none;
}

.btn-block {
    display : block;
    width   : 100%;
}

.btn-sm {
    margin  : 0 0.3rem 0 0;
    padding : 0.3rem 1rem;

    font-size : 1.3rem;
}

.badge {
    display : inline-block;
    margin  : 0.5rem;
    padding : 0.3rem 1.1rem;

    border-radius : 5px;

    font-size  : 1.3rem;
    color      : rgba( 51, 51, 51, 1 );
    text-align : center;
    
    background : var(--light-color);
}

.alert {
    margin  : 1.6rem 0;
    padding : 1.1rem;

    color : rgba( 51, 51, 51, 1 );
    
    background : var(--light-color);

    opacity : 0.9;
}

.btn-primary,
.bg-primary,
.badge-primary,
.alert-primary {
    color: rgba( 255, 255, 255, 1 );

    background : var(--primary-color);
}

.btn-light,
.bg-light,
.badge-light,
.alert-light {
    color : rgba( 51, 51, 51, 1 );

    background : var(--light-color);
}

.btn-dark,
.bg-dark,
.badge-dark,
.alert-dark {
    color : rgba( 255, 255, 255, 1 );

    background : var(--dark-color);
}

.btn-danger,
.bg-danger,
.badge-danger,
.alert-danger {
    color : rgba( 255, 255, 255, 1 );

    background : var(--danger-color);
}

.btn-success,
.bg-success,
.badge-success,
.alert-success {
    color : rgba( 255, 255, 255, 1 );

    background : var(--success-color);
}

.btn-white,
.bg-white,
.badge-white,
.alert-white {
    border : rgba(204, 204, 204, 1) solid 1px;

    color : rgba( 51, 51, 51, 1 );

    background : rgba( 255, 255, 255, 1 );
}

.btn:hover {
    opacity : 0.8;
}

.bg-light,
.badge-light {
    border : rgba( 204, 204, 204, 1 ) solid 1px;
}

.round-img {
    border-radius : 50%;
}


// Forms
input {
    margin : 1.9rem 0;
}

.form-text {
    display    : block;
    margin-top : 0.5rem;

    color : rgba( 136, 136, 136, 1 );
}

input[type='text'],
input[type='email'],
input[type='password'],
input[type='date'],
select,
textarea {
    display : block;
    width   : 100%;
    padding : 0.6rem;

    border : 1px solid rgba( 204, 204, 204, 1 );

    font-size : 1.9rem;
}

input[type='submit'],
button {
    font : inherit;
}

table th,
table td {
    padding : 1rem;

    text-align : left;
}

table th {
    background : var(--light-color);
}


// Navbar
.navbar {
    display         : flex;
    justify-content : space-between;
    align-items     : center;
    z-index         : 1;
    width           : 100%;
    margin          : 0 0 1.6rem 0;
    padding         : 1.1rem 3.2rem;

    opacity : 0.9;
}

.navbar ul {
    display : flex;
}

.navbar a {
    margin  : 0 0.4rem;
    padding : 0.72rem;

    color: rgba( 255, 255, 255, 1 );    
}

.navbar a:hover {
    color: var(--light-color);
}

.navbar .welcome span {
    margin: 0 0.96rem 0 0;
}


// Mobile Styles
@media ( max-width : 1280px ) {
  html {
      font-size : 50%;
  }
}

@media ( max-width: 700px ) {
    .hide-sm {
        display : none;
    }

    .grid-2,
    .grid-3,
    .grid-4 {
        grid-template-columns : 1fr;
    }

    // Text Styles
    .x-large {
        font-size : 4.8rem;
    }

    .large {
        font-size : 3.2rem;
    }

    .lead {
        font-size : 1.6rem;
    }

    // Navbar
    .navbar {
        display    : block;

        text-align : center;
    }

    .navbar ul {
        justify-content : center;

        text-align : center;
    }
}
*/




// -------------------- END OF FILE







// lecture 8: Intro To JSX & Fragments

// jsx means JavaScript Syntax Extension and remember in jsx we use
// " <label htmlFor='name'>Name</label> " instead of " <label for='name'>Name</label> " and
// remember our jsx has to have one parent element in order to work and remember we may not want
// the parent element to be a <div> for example and in those cases we can use a fragment or
// " <React.Fragment></React.Fragment> " and if we look inside the inspector html we see that
// fragments do not result in any elements being added to the html so fragments are almost like
// ghost elements and let's bring in fragments to our app.js file and let's go to that file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS
// ==============================


import React, { Component, Fragment } from 'react';

import './App.css';

// below we used fragemnts instead of divs

// create a class based component
class App extends Component {

    render() {

        return (
            <Fragment>
    
                <h1>Hello from React</h1>
    
            </Fragment>
        );

    }
    
}

export default App;



// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS
// ==============================


import React, { Component } from 'react';

import './App.css';

// however, Brad later took out fragments and used divs instead

// create a class based component
class App extends Component {

    render() {

        return (
            <div className="App">
    
                <h1>Hello from React</h1>
    
            </div>
        );

    }
    
}

export default App;




// -------------------- END OF FILE








// lecture 9: Expressions & Conditionals In JSX

// I understood this so let's move on to the next lecture










// lecture 10: Components, Props & PropTypes

// in this video we will create our nav bar component and we will look at props as well
// and let's create a folder called components and inside this folder let's create another
// folder called layout and then inside that folder create a file called nav-bar.component.jsx
// and let's go to that file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/LAYOUT/NAVBAR.COMPONENT.JSC -- NOTES PERTAIN TO
// 1 -, 2 -, 3 -
// ==============================


import React, { Component } from 'react';

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


class NavBar extends Component {

    // 3 -
    // we can remove our props from the App.js file or
    // " <NavBar title="Github Finder" icon="fab fa-github" /> " and then use defaultProps instead
    // ( see below ) but I chose to keep the above props in the App.js file since we will use
    // that pattern more in react
    static defaultProps = {
        title : "Github Finder",
        icon  : "fab fa-github"
    };
    // End of 3 -

    // 2 -
    static propTypes = {
        icon  : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired
    };
    // End of 2 -

    render() {

        return (

            <nav className="navbar bg-primary">
                <h1>
                    <i className={ this.props.icon }></i>&nbsp;{ this.props.title }
                </h1>
            </nav>

        );

    }

}

export default NavBar;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';

import './App.css';


// create a class based component
class App extends Component {

    render() {

        return (
            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />
    
            </div>
        );

    }
    
}

export default App;




// -------------------- END OF FILE





// next, let's import in font awesome and include the link or script tag in our html file


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/PUBLIC/INDEX.HTML
// ==============================

/*
<!DOCTYPE html>

<html lang="en">

    <head>

        <meta charset="utf-8" />

        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See
            https://developers.google.com/web/fundamentals/web-app-manifest/
        -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <!--
            Add in a font from Google fonts
        -->
        <link href="https://fonts.googleapis.com/css?family=Rancho|Tenor+Sans|Nothing+You+Could+Do|Open+Sans:300,400,700,800|Montserrat:400,700|Roboto:100,300,400,700,900|Open+Sans+Condensed:300|Josefin+Sans:300,400,400i|Nunito:300,300i" />

        <!--
            Add in material icon fonts from Google
        -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!--
            Add in Font Awesome
        -->
        <script src="https://kit.fontawesome.com/e06035d8d0.js" crossorigin="anonymous"></script>

        <!--
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.

            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
        -->
        <title>React Front To Back</title>

    </head>

    <body>

        <noscript>You need to enable JavaScript to run this app.</noscript>

        <div id="root"></div>
        <!--
            This HTML file is a template.
            If you open it directly in the browser, you will see an empty page.

            You can add webfonts, meta tags, or analytics to this file.
            The build step will place the bundled scripts into the <body> tag.

            To begin the development, run `npm start` or `yarn start`.
            To create a production bundle, use `npm run build` or `yarn build`.
        -->

    </body>

</html>
*/




// -------------------- END OF FILE









// lecture 11: Getting Started With Component State

// we are going to talk about component level state and component level state means your state
// is contained within a single component and let's first create a new folder called " users "
// and inside this folder let's create a file called " user-item.component.jsx " and let's go to
// that file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER-ITEM.COMPONENT.JSX
// ==============================


import React, { Component } from 'react';

// there are a couple ways to add state to a class based component and one way is to use a
// constructor although Brad would not recommend using it and another way is as shown below and
// after we make these changes we see that we now have some state inside our UserItem component
// and the goal is to display a bunch of users and we can do this by looping through the user's
// array and in the next video we will create a Users component and inside this component we will
// output a UserItem component for each user and the way we get the data into the UserItem
// component is through props

class UserItem extends Component {

    state = {
        id         : 'id',
        login      : 'mojumbo',
        avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url   : 'https://github.com/mojumbo'
    };

    render() {

        return (

            <div className="card text-center">

                <img
                    src={ this.state.avatar_url }
                    alt=''
                    className="round-img"
                    style={ { width : '60px' } }
                />

                <h3>{ this.state.login }</h3>

                <div>
                    <a 
                        href={ this.state.html_url }
                        className="btn btn-dark btn-sm my-1"
                    >
                        More
                    </a>
                </div>

            </div>

        );

    }

}

export default UserItem;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 1 -
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';

// 1 -
// import in the UserItem component
import UserItem  from './components/users/user-item.component';
// add the UserItem component under the NavBar component and let's go back to the UserItem
// component and add some state

// End of 1 -

import './App.css';

// however, Brad later took out fragments and used divs instead

// create a class based component
class App extends Component {

    render() {

        return (
            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />
                <UserItem />
    
            </div>
        );

    }
    
}

export default App;




// -------------------- END OF FILE








// lecture 12: Lists & Passing State With Props

// now let's create a User's component and call it " users.component.jsx " and let's go to
// that file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USERS.COMPONENT.JSX
// ==============================


import React, { Component } from 'react';
import UserItem from './user-item.component';


class Users extends Component {

    // insert in some hard coded state
    state = {
        users : [
            {
                id         : '1',
                login      : 'mojumbo',
                avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url   : 'https://github.com/mojumbo'
            },
            {
                id         : '2',
                login      : 'defunkt',
                avatar_url : 'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url   : 'https://github.com/defunkt'
            },
            {
                id         : '3',
                login      : 'pjhyett',
                avatar_url : 'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url   : 'https://github.com/pjhyett'
            }
        ]
    };

    // next, we want to loop through the 3 users above and let's go to the App.js file
    // 2 -

    // now were back from the App.js file and we want to create a CSS Grid and we can do that
    // by changing " <div> " to " <div style={ userStyle }> " and then setting the variable
    // " userStyle " below and in the next video we are going to convert the UserItem component
    // and the NavBar component to functional components and we can do that ( in old school
    // react ) because neither the UserItem or NavBar component contain state
    render() {

        return (

            <div style={ userStyle }>
                {
                    this.state.users.map( ( user ) => (

                        <UserItem
                            key={ user.id }
                            user={ user }
                        />

                    ) )
                }
            </div>
        );

    }

}


const userStyle = {

    display             : 'grid',
    gridTemplateColumns : 'repeat( 3, 1fr )',
    gridGap             : '1rem'

};


export default Users;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 2 -
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';

// 2 -
// comment out import UserItem ... above and import in the User component and place
// the User component inside the container div and now let's go to the user-item.component.jsx file
// 1 -
import Users from './components/users/users.component';

// End of 2 -

import './App.css';

// create a class based component
class App extends Component {

    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Users />
                </div>               
    
            </div>

        );

    }
    
}

export default App;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER-ITEM.COMPONENT.JSX -- NOTES PERTAIN
// TO 1 -
// =============================


import React, { Component } from 'react';

// 1 -
// change the component below to use the props that are being passed in from the
// users.component.jsx file and let's use destructuring to pull out the values we need or
// " const { avatar_url, login, html_url } = this.props.user; "

// End of 1 -

class UserItem extends Component {

    render() {

        const { avatar_url, login, html_url } = this.props.user;

        return (

            <div className="card text-center">

                <img
                    src={ avatar_url }
                    alt=''
                    className="round-img"
                    style={ { width : '60px' } }
                />

                <h3>{ login }</h3>

                <div>
                    <a 
                        href={ html_url }
                        className="btn btn-dark btn-sm my-1"
                    >
                        More
                    </a>
                </div>

            </div>

        );

    }

}

export default UserItem;




// -------------------- END OF FILE







// lecture 13: Stateless Functional Components

// in this video we will convert the UserItem and NavBar components to functional components
// and let's refactor the UserItem component first so let's go to the user-item.component.jsx file


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER-ITEM.COMPONENT.JSX -- NOTES PERTAIN
// TO 2 -
// =============================


import React from 'react';

// 2 -
// change the UserItem component to a functional component and change
// " const { avatar_url, login, html_url } = user; " to
// " const UserItem = ( { user : { avatar_url, login, html_url } } ) => { " and since we
// have the user prop being passed into the functional component we should use PropTypes
// so let's first import in PropTypes and then use PropTypes below and remember the user
// that is being passed in is an object or:

/*
    {
        id         : '1',
        login      : 'mojumbo',
        avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url   : 'https://github.com/mojumbo'
    }
*/

// so we need to do " user : PropTypes.object.isRequired " and in the next video we will
// address the users state and we will need to move our users array into the App component
// or the top level component since multiple components will need access to the users array
import PropTypes from 'prop-types';

// End of 2 -

const UserItem = ( { user : { avatar_url, login, html_url } } ) => {

    return (

        <div className="card text-center">

            <img
                src={ avatar_url }
                alt=''
                className="round-img"
                style={ { width : '60px' } }
            />

            <h3>{ login }</h3>

            <div>
                <a 
                    href={ html_url }
                    className="btn btn-dark btn-sm my-1"
                >
                    More
                </a>
            </div>

        </div>

    );

}


UserItem.propTypes = {
    user : PropTypes.object.isRequired
};


export default UserItem;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/LAYOUT/NAVBAR.COMPONENT.JSC -- NOTES PERTAIN
// TO 4 -
// ==============================


import React from 'react';

import PropTypes from 'prop-types';

// 4 -
// let convert the NavBar component from a class based component to a functional component
// and change " static propTypes = {} " to " NavBar.propTypes = {} " 

// End of 4 -


const NavBar = ( { icon, title } ) => {

    return (

        <nav className="navbar bg-primary">
            <h1>
                <i className={ icon }></i>&nbsp;{ title }
            </h1>
        </nav>

    );

}


NavBar.propTypes = {
    icon  : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};


export default NavBar;



// -------------------- END OF FILE








// lecture 14: HTTP Requests & Updating State

// let's make an API request in the app.js file 2 - and let's go to that file
// now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 3 -
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import './App.css';


class App extends Component {

    // 3 -
    // let's use componentDidMount to make an API request ( see below )
    // need to first set the state
    state = {
        users : [],
        loading : false
    };

    async componentDidMount() {

        // first, set loading to tru
        this.setState( { loading : true } );

        // then fetch the data
        const response = await fetch( 'https://api.github.com/users' );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // test out and make we see our data
        // console.log( data );

        // and the result in the console is:
        /*
            Array(30)
            0: {login: "mojombo", id: 1, node_id: "MDQ6VXNlcjE=", 
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4", gravatar_id: "", …}
            1: {login: "defunkt", id: 2, node_id: "MDQ6VXNlcjI=", 
            avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4", gravatar_id: "", …}
                length: 30
            __proto__: Array(0)
        */

        // so we see our data and everything is working as expected

        // now let's comment out " console.log( data ); " and reset the state
        this.setState( { users : data, loading : false } );

        // now that the users data is in state we want to pass that state down to the Users
        // component through props so let's change " <Users /> " to
        // "  <Users users={ this.state.users } loading={ this.state.loading } /> " and now
        // let's go to the users.component.jsx file

    }

    // End of 3 -

    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Users
                        users={ this.state.users }
                        loading={ this.state.loading }
                    />
                </div>               
    
            </div>

        );

    }
    
}

export default App;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USERS.COMPONENT.JSX -- NOTES PERTAIN
// TO 1 -
// =============================


import React, { Component } from 'react';
import UserItem from './user-item.component';

class Users extends Component {

    // 1 -
    // coming form the app.js file 3 -
    // first let's comment out state = {} below and then bring in the users and loading
    // props from the App component and we do that by changing
    // " this.state.users.map( ( user ) => () " to " this.props.users.map( ( user ) => () "

    // and now if we go to the home page or localhost:3007 we see all 30 users in the array
    // being displayed on the page so everything is working as expected

    // and in the next video we will create a spinner component if the users have not been
    // fetched yet and we will add our GitHub API key to our API request so that we don't
    // run out requests

    // End of 1 -

    render() {

        return (

            <div style={ userStyle }>
                {
                    this.props.users.map( ( user ) => (

                        <UserItem
                            key={ user.id }
                            user={ user }
                        />

                    ) )
                }
            </div>
        );

    }

}


const userStyle = {

    display             : 'grid',
    gridTemplateColumns : 'repeat( 3, 1fr )',
    gridGap             : '1rem'

};


export default Users;



// -------------------- END OF FILE








// lecture 15: Spinner Component & Refactoring

// in this video we will create a spinner component and add our API keys for GitHub and let's
// copy in the spinner.gif file and place it in the layout folder and then create a new file in
// this folder called spinner.component.jsx


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/LAYOUT/SPINNER.COMPONENT.JSX
// =============================


import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// now let's go to the users.component.jsx file 3 -

const Spinner = () => (

    <Fragment>
        <img
            src={ spinner }
            alt="Loading ..."
            style={ { display : 'block', width : '200px', margin : '0 auto' } }
        />
    </Fragment>

);


export default Spinner;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USERS.COMPONENT.JSX -- NOTES PERTAIN
// TO 3 -
// =============================


// 3 -
// change the Users component to a functional component and import in the Spinner component
// and then create an if else statement below and now that we have users and loading as
// props let's add in PropTypes below

// in the next video we will add our GitHub API credentials and we will learn how to create
// environment varaibles so that we can have variables that we can access from anywhere in our
// application

// End of 3 -


import React, { Component } from 'react';
import UserItem from './user-item.component';
import Spinner from '../layout/spinner.component';
import PropTypes from 'prop-types';


const Users = ( { users, loading } ) => {

    if ( loading ) {

        return <Spinner />

    }

    else {

        return (
            <div style={ userStyle }>

                {
                    users.map( ( user ) => (

                        <UserItem
                            key={ user.id }
                            user={ user }
                        />

                    ) )
                }

            </div>
        );

    }

};


Users.propTypes = {
    users   : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
};


const userStyle = {

    display             : 'grid',
    gridTemplateColumns : 'repeat( 3, 1fr )',
    gridGap             : '1rem'

};


export default Users;




// -------------------- END OF FILE








// lecture 16: Environment Variables

// to register our GitHub app let's search for " github register application " and then click
// on the link that takes you to this URL: " https://github.com/settings/applications/new "
// and this will take us to a screen like the following:

// Application name:

// Homepage URL:

// Application description:

// Authorization callback URL:

// and Brad suggested we fill out this form as follows:

// Application name: GH Finder ( GitHub would not let me call the app " GitHub Finder " )

// Homepage URL: http://localhost:3007

// Application description:

// Authorization callback URL: http://localhost:3007

// and then click on the " register application " button and then on the next page we will
// see:

/*
GH Finder
----

@sandstone1sandstone1 owns this application.  /  Transfer Ownership button

----

You can list your application in the GitHub Marketplace so that other users can discover it.
/ List this application in the Marketplace button

-----

0 users

-----

Client ID
26e69ffc341cba46b5cf

Client secrets  /  Generate a new client secret button
You need a client secret to authenticate as the application to the API.

----
*/

// and let's click on the " Generate a new client secret button " and generate a client secret
// and this results in the following:

/*
----
BLUE BOX AROUND CONTENT
Make sure to copy your new client secret now. You won’t be able to see it again.
----

----
GREEN BOX AROUND CONTENT
Client secret
0adbf05da14e824e0c00c03842e9ab3b4769ebd2
Added now by sandstone1
Never used  /  Delete button
You cannot delete the only client secret. Generate a new client secret first.
----
*/


// and then we want to put the client ID and secret into environment variables and to do that
// we will create a file on our root called " .env.local " and remember when we deploy we want
// to add these environment variables to the server and we will be deploying to Netlify and
// Brad is going to show us how to add these environment variables to Netlify and remember we
// don't want to put this .env.local file in a public repository and in fact if we look at our
// .gitignore file we see that

/*
# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
*/

// .env.local is already in the .getignore file so this file will not get pushed to our GitHub
// repository and let's go to the .env.local file now

// and remember in the .env.local file we have to start both environment variables with
// " REACT_APP " and then we can name the variables whatever we want and in this case we will
// name the 2 variables: " REACT_APP_GITHUB_CLIENT_ID='' and
// " REACT_APP_GITHUB_CLIENT_SECRET='' "

// and remember once we create environment variables we have to restart the server in order for
// the variables to take effect and let's go to the integrated terminal and do that now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/.ENV.LOCAL
// =============================

/*
REACT_APP_GITHUB_CLIENT_ID='26e69ffc341cba46b5cf'
REACT_APP_GITHUB_CLIENT_SECRET='0adbf05da14e824e0c00c03842e9ab3b4769ebd2'
*/



// -------------------- END OF FILE


// and then we want to bring these environment varaibles into the application and we do that in
// the App.js file and let's go to App.js 4 - now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 3 -
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import './App.css';

// 4 -
// let's change " await fetch( 'https://api.github.com/users' ); " to
// " await fetch( `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
// &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` ); " and let's check at least one
// of these varaibles by doing " console.log( process.env.REACT_APP_GITHUB_CLIENT_SECRET ); "

// and the result in the console is " 0adbf05da14e824e0c00c03842e9ab3b4769ebd2 " and this is
// correct so everything is working as expected

// and now let's delete " console.log( process.env.REACT_APP_GITHUB_CLIENT_SECRET ); "

// so now that we have included our environment variables in our API request we no longer
// have to worry about running out of requests and in the next video we will create the search
// component because we want to be able to search by user name

// End of 4 -

class App extends Component {

    state = {
        users : [],
        loading : false
    };

    async componentDidMount() {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data, loading : false } );

    }

    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Users
                        users={ this.state.users }
                        loading={ this.state.loading }
                    />
                </div>               
    
            </div>

        );

    }
    
}

export default App;




// -------------------- END OF FILE









// ==============================
// SECTION 4: EVENTS, PASSING PROPS, REACT ROUTER & MORE
// ==============================


// lecture 17: Events & Search Component

// now we are going to work on the search form where we can search for users based on
// their user name and let's create a file in the users folder called " search.component.jsx "
// and let's go to that file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/SEARCH.COMPONENT.JSX -- NOTES PERTAIN
// TO 1 -
// ==============================


import React, { Component } from 'react';


// create a class based component and then go to the App.js file 5 -

// 1 -
// and remember when we have a form in react we are usually going to want to attach
// state to the input so let's start by including a state object below or
// " state = { text : '' }; " and then add a value property inside the text input element
// and then we need to add an onChange property and then we add an onChange function
// ( see below )

// and now if I go to our home page and type " Joe " into the search field and then go
// to react dev tools and look at the state inside the search component we see the following:
/*
state

text : "Joe"
*/

// and this is correct so everything is working as expected

// and remember this is not a piece of state that we want at the App level but it is a
// piece of state relevant to the component itself and even when we implement context
// or redux your forms will still be comprised of component level state

// remember if we have a bunch of input fields then we need to change this.setState in the
// onChange function from " this.setState( { text : e.target.value } ); " to
// " this.setState( { [ e.target.name ] : e.target.value } ); "

// so our form is updating component state

// let add an onSubmit function below and just console log out the text value for now

// and when I go to the home page and type some text into the search field and then press
// the submit button I see that text is logged out in the console so everything is working
// as expected

// but what we actually want to do is take the search value and use a method to connect to
// the GitHub API and find the specified user and we will do that in the next video

// End of 1 -


export class Search extends Component {

    state = {
        text : ''
    };

    onSubmit = ( e ) => {

        e.preventDefault();

        console.log( this.state.text );

    }

    onChange = ( e ) => {

        this.setState( { [ e.target.name ] : e.target.value } );

    }

    render() {

        return (

            <div>
                <form onSubmit={ this.onSubmit } className="form">

                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users"
                        value={ this.state.text }
                        onChange={ this.onChange }
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />

                </form>
            </div>

        );

    }

}


export default Search;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 5 -
// ==============================



import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import './App.css';


// 5 -
// import in the Search component and then insert the component above the Users component below
import Search from './components/users/search.component';

// now if we save the file and go to the home page, we see the search form and seerch button
// so everything is working as expected

// now let's go back to the search.component.jsx file 1 -

// End of 5 -


class App extends Component {

    state = {
        users : [],
        loading : false
    };

    async componentDidMount() {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data, loading : false } );

    }

    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Search />
                    <Users
                        users={ this.state.users }
                        loading={ this.state.loading }
                    />
                </div>               
    
            </div>

        );

    }
    
}

export default App;





// -------------------- END OF FILE








// lecture 18: Passing Props Up & Search

// now we want to be able to search for users in GitHub based on what a user enters into the
// search form and let's look at the GitHub documentation around " search " and to do that
// let's go to the following URL
// " https://docs.github.com/en/free-pro-team@latest/rest/overview/
// endpoints-available-for-github-apps#search " and for search we see the following endpoints:

/*
search
GET /search/code
GET /search/commits
GET /search/issues
GET /search/labels
GET /search/repositories
GET /search/topics
GET /search/users
*/

// and if we press on the following link " GET /search/users " we'll see the following result:

/*
Search users
Find users via various criteria. This method returns up to 100 results per page.

For example, if you're looking for a list of popular users, you might try this query:

q=tom+repos:%3E42+followers:%3E1000

This query searches for users with the name tom. The results are restricted to users
with more than 42 repositories and over 1,000 followers.

GET /search/users
*/

// and Brad wants to have the App.js file make the GitHub API request and to do that we will need
// pass the search form state or this.state.text from the Search component up to the App component
// and the way we can pass up this value to the App component is by using props so let's go to the
// search.component.jsx 2 - file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/SEARCH.COMPONENT.JSX -- NOTES PERTAIN
// TO 2 -
// ==============================


import React, { Component } from 'react';

// 2 -
// we can pass " this.state.text " up to the App component by using props so let's change
// " console.log( this.state.text ); " to " this.props.searchUsers( this.state.text ); "
// and then let's clear the search form after we submit the form by doing
// " this.setState( {  text : '' } ); "

// and remember this.props.searchUsers( ); doesn't exist right now and let's change that
// by going to the app.js 6 - file now

// coming from the app.js 6 - file
// let's import in PropTypes and then add PropTypes below and remember we need to add PropTypes
// whenever we pass a prop up or down the component tree and in this component we are passing
// the prop " searchUsers " up the component tree
import PropTypes from 'prop-types';

// End of 2 -


export class Search extends Component {

    state = {
        text : ''
    };

    // 2 - continued
    // using PropTypes will make our code a little more robust and in the next video we will
    // add a clear button
    static propTypes = {
        searchUsers : PropTypes.func.isRequired
    };
    // End of 2 -

    onSubmit = ( e ) => {

        e.preventDefault();

        // pass this.state.text up to the App component
        this.props.searchUsers( this.state.text );

        // clear the form
        this.setState( {  text : '' } );

    }

    onChange = ( e ) => {

        this.setState( { [ e.target.name ] : e.target.value } );

    }

    render() {

        return (

            <div>
                <form onSubmit={ this.onSubmit } className="form">

                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users"
                        value={ this.state.text }
                        onChange={ this.onChange }
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />

                </form>
            </div>

        );

    }

}


export default Search;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 6 -
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/users/search.component';

import './App.css';


// 6 - 
// coming from the search.component.jsx 2 - file and the problem with sending a prop up or down
// the component tree is that this can get messy fast and this is known as prop drilling and to
// send the prop up the tree let's add " searchUsers={ this.searchUsers } " to the Search
// component and then let's build the searchUsers function

// End of 6 -


class App extends Component {

    state = {
        users : [],
        loading : false
    };

    // 6 -
    // comment out
    /*
    async componentDidMount() {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data, loading : false } );

    }
    */

    // since we passed in " this.state.text " as the argument to this.props.searchUsers(); in the
    // Search component, the argument to the searchUsers function below should be " text " and
    // to test this out let's add " console.log( text ); " and type in search form " Fred "

    // and when we go to the home page and look inside the console we see " Fred App.js:212  "
    // and this is correct so everything is working as expected

    // next we want to make an API call to the endpoint " /search/users " and then add the query
    // parameter or " q " to the end of the endpoint and remember to use async await below 

    // and now that were using the search functionality to fetch users let's commnent out the
    // async componentDidMount() {} above

    // remember to change " this.setState( { users : data, loading : false } ); " to
    // " this.setState( { users : data.items, loading : false } ); "

    // now let's go to the home page and test this out and initially we do not see any users
    // on the home page and this is correct because we are no longer using componentDidMount and
    // now we should only see users after we submit the form or after we make a valid search
    // request and now let's search for " Brad " and the result on the home page is we see 30
    // results for users with the first name of Brad and this is correct so everything is
    // working as expected

    // so now we have search functionality

    // and the last thing we need to do is add searchUsers as a PropType and to do that let's
    // go back to the search.component.jsx 2 - file
    searchUsers = async ( text ) => {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data.items, loading : false } );

    }
    // End of 6 -

    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Search
                        searchUsers={ this.searchUsers }
                    />
                    <Users
                        users={ this.state.users }
                        loading={ this.state.loading }
                    />
                </div>               
    
            </div>

        );

    }
    
}

export default App;




// -------------------- END OF FILE







// lecture 19: Clear Users From State

// we will now build a clear button so that we can clear the users array amd we only want the
// clear button to show if there are users on the home page and let's go to the
// search.component.jsx 3 - file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/SEARCH.COMPONENT.JSX -- NOTES
// PERTAIN TO 3 -
// ==============================


import React, { Component } from 'react';
import PropTypes from 'prop-types';


// 3 -
// let's add a button below the <form> element and we will add a prop function to the onClick
// property called clearUsers and since we are adding a new prop we need to add this prop or
// clearUsers to the static propTypes = {} below

// and again we are sending this prop up the component tree to App.js ( like we did with
// the searchUsers function ) and let's handle this prop or clearUsers in the App.js 7 -
// file

// we are back from the App.js 7 - file and let's handle the showClear prop below and
// remember to add the showClear prop to our PropTypes

// and let's test this out on the home page and when there are no users there is no
// clear button and when there are users there is a clear button and when there are users
// and we click on the clear button all the users disappear and the clear also disappears
// and this is the correct behavior so everything is working as expected 

// next we will create an alert componnet and a function to set the alert and the alert
// will give us some validation

// End of 3 -


export class Search extends Component {

    state = {
        text : ''
    };


    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers  : PropTypes.func.isRequired,
        showClear   : PropTypes.bool.isRequired
    };


    onSubmit = ( e ) => {

        e.preventDefault();

        // pass this.state.text up to the App component
        this.props.searchUsers( this.state.text );

        // clear the form
        this.setState( {  text : '' } );

    }

    onChange = ( e ) => {

        this.setState( { [ e.target.name ] : e.target.value } );

    }

    render() {

        return (

            <div>
                <form onSubmit={ this.onSubmit } className="form">

                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users"
                        value={ this.state.text }
                        onChange={ this.onChange }
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />

                </form>

                {
                    this.props.showClear && (
                        <button
                            className="btn btn-light btn-block clear"
                            onClick={ this.props.clearUsers }
                            style={ { margin : '15px 0 0 0', fontSize : '1.6rem' } }
                        >
                            Clear
                        </button>
                    )
                }
            </div>

        );

    }

}


export default Search;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 7 -
// ==============================


// at the beginning of lecture 15, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/users/search.component';

import './App.css';


class App extends Component {

    state = {
        users : [],
        loading : false
    };


    searchUsers = async ( text ) => {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data.items, loading : false } );

    }


    // 7 -
    // so we passed a prop up from the Search component to this component and the prop we passed
    // up is called clearUsers and let's add that to our Search component below or
    // " clearUsers={ this.clearUsers } " and let's now create the clearUsers function below
    clearUsers = () => {

        this.setState( { users : [], loading : false } );

    }

    // and if we test this out on the home page we see that the clear button is working as
    // expected

    // now only want to see the clear button if there are users on the home page so to make
    // this happen let's create a new prop inside the Search component below called
    // " showClear " and remember in this case we are passing the showClear prop down the
    // component tree to the Search component and let's go to the search.component.jsx 3 -
    // file now

    // End of 7 -


    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Search
                        searchUsers={ this.searchUsers }
                        clearUsers={ this.clearUsers }
                        showClear={ this.state.users.length > 0 ? true : false }
                    />
                    <Users
                        users={ this.state.users }
                        loading={ this.state.loading }
                    />
                </div>               
    
            </div>

        );

    }
    
}

export default App;




// -------------------- END OF FILE







// lecture 20: Alert State & Component

// so now we want to set up an alert system; for example, if we click on the search button without
// entering anything into the search field we want to show an alert or an error message and let's
// start off by going to the search.component.jsx 4 - file



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/SEARCH.COMPONENT.JSX -- NOTES
// PERTAIN TO 4 -
// ==============================


import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {

    state = {
        text : ''
    };


    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers  : PropTypes.func.isRequired,
        showClear   : PropTypes.bool.isRequired,
        setAlert    : PropTypes.func.isRequired
    };


    // 4 -
    // let's set up an alert inside the obSubmit function by using an if else statement and we
    // will create a prop called setAlert that will pass up the component tree to the App
    // component and the setAlert function will take in 2 arguments: the first argument will be
    // the text for the alert and the second argument will be the color of the alert

    // and remember since we have a new prop called " setAlert " we need to add this prop to
    // PropTypes

    // and now let's handle the setAlert function in the App component so let's go to the App.js
    // 8 - file now
    onSubmit = ( e ) => {

        e.preventDefault();

        // 4 - continued
        if ( this.state.text === '' ) {

            this.props.setAlert( 'Please enter something', 'light' );

        }
        else {

            // pass this.state.text up to the App component
            this.props.searchUsers( this.state.text );

            // clear the form
            this.setState( {  text : '' } );

        }

        // End of 4 -

    }


    onChange = ( e ) => {

        this.setState( { [ e.target.name ] : e.target.value } );

    }


    render() {

        return (

            <div>
                <form onSubmit={ this.onSubmit } className="form">

                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users"
                        value={ this.state.text }
                        onChange={ this.onChange }
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />

                </form>

                {
                    this.props.showClear && (
                        <button
                            className="btn btn-light btn-block clear"
                            onClick={ this.props.clearUsers }
                            style={ { margin : '15px 0 0 0', fontSize : '1.6rem' } }
                        >
                            Clear
                        </button>
                    )
                }
            </div>

        );

    }

}


export default Search;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 8 -, 9 -
// ==============================


import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/users/search.component';

import './App.css';


// 9-
// coming from the alert.component.jsx file
// import in the Alert component and then let's add this component inside the container div
import Alert from './components/layout/alert.component';

// and let's test this out on the home page and if we press the submit button and the search
// form is empty then we should get an alert that says " Please enter something " and the
// background should be light grey and this is what happened so everything is working as
// expected

// so we now have a nice validation message for the user which is great

// and now the issue we have is that the error message is not going away; for example, if
// I put my cursor in the search form the error message is still there and to fix this issue
// Brad recommends we give the alert a certain amount of screen time and then automatically
// remove it and let's make this happen inside the setAlert() function below

// End of 9 -


class App extends Component {

    // 8 - continued
    // set a new piece of state
    state = {
        users : [],
        loading : false,
        alert : null
    };
    // End of 8 -


    searchUsers = async ( text ) => {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data.items, loading : false } );

    }


    clearUsers = () => {

        this.setState( { users : [], loading : false } );

    }


    // 8 - continued
    // coming from the search.component.jsx 4 - file and let's add the setAlert prop to the
    // Search component and then create the setAlert function below and also add a new piece of
    // state or " alert : null "

    // inside the setState() function we will set the alert property equal to an object and the
    // object will contain 2 properties: message and type

    // and remember the code below will not display the alert but will simply update the state

    // and we can test this out by going to the react dev tools and intially our state looks like:
    /*
    state
        alert : null
        loading : false
        users : []
    */

    // and after we press the submit button, our state looks like:
    /*
    state
        alert : {message: "Please enter something", type: "light"}
        loading : false
        users : []
    */

    // and this is correct so everything is working as expected 

    // now the next goal is to get this displayed on the screen and to do that let's create an
    // alert component so inside the layout folder let's create a file called
    // " alert.component.jsx " and let's go to that file now
    setAlert = ( message, type ) => {

        this.setState(
            { 
                alert : { message : message, type : type }
            }
        );

        // 9 - continued
        // and by setting the alert state back to null, it should trigger the code inside the
        // Alert component to remove the alert

        // and if we go to the home page and test this out we see that after 5 seconds the error
        // message goes away and this is correct so everything is working as expected

        // and in the next video we will to implement react router
        setTimeout( () => {

            this.setState( {  alert : null } );

        }, 5000 )
        // End of 9 -

    }
    // End of 8 -


    render() {

        return (

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Alert
                        alert={ this.state.alert }
                    />
                    <Search
                        searchUsers={ this.searchUsers }
                        clearUsers={ this.clearUsers }
                        showClear={ this.state.users.length > 0 ? true : false }
                        setAlert={ this.setAlert }
                    />
                    <Users
                        users={ this.state.users }
                        loading={ this.state.loading }
                    />
                </div>               
    
            </div>

        );

    }
    
}

export default App;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/LAYOUT/ALERT.COMPONENT.JSX
// ==============================


import React from 'react';


// the Alert component will take as an argument the alert state property and now
// let's go to the app.js 9 - file and import in this component
const Alert = ( { alert } ) => {

    return (

        alert !== null && (

            <div className={ `alert alert-${ alert.type }` }>
                <i
                    className="fas fa-info-circle"
                    style={ { marginRight : '10px', color : 'var(--blue-color)' } }
                >
                </i>{ alert.message }
            </div>

        )

    );

}


export default Alert;




// -------------------- END OF FILE









// lecture 21: React Router Setup

// in this video, we will set up react router since we want to have different routes and let's
// install react-router-dom


// #2
// react: " Rogers-iMac:the_net_ninja Home$ npm i react-router-dom " and this will install the
// latest version
// lecture 21: React Router Setup

// and after we install react-router-dom we want to restart our server or
// " Rogers-iMac:the_net_ninja Home$ npm start " and then let's go to the app.js 10 - file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 10 -, 11 -
// ==============================


// at the beginning of lecture 21, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Component, Fragment } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/users/search.component';
import Alert from './components/layout/alert.component';

import './App.css';

// 10 -
// import in BrowserRouter, Switch and Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// the first thing we need to do is wrap everything inside the return function ( i.e. our entire
// App component ) in " <BrowserRouter></BrowserRouter> " and the second thing we want to do
// is wrap all of our routes in a switch statement ( see below ) and then the third thing we want
// to do is create a home page route and inside the home page route we want to put the Search and
// Users components ( see below )  

// and if we test out the changes on the home page we see that everything is working as expected

// let's create another route for the About component but before we do that let's create a new
// folder called pages and inside the pages folder let's create a new file called
// " about.component.jsx " and let's go to that file now

// End of 10 -


// 11 -
// coming from the about.component.jsx file
// first let's import in the AboutPage component and then let's create a route for the
// AboutPage component and we will place this route underneth the home page route
import AboutPage from './components/pages/about.component'

// and now let's test this out by going to " localhost:3007/about " and when we do we see our
// about page so everything is working as expected

// and next we want to create some links in our NavBar component so let's go to the
// nav-bar.component.jsx 5 - file now

// End of 11 -


class App extends Component {

    state = {
        users : [],
        loading : false,
        alert : null
    };


    searchUsers = async ( text ) => {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data.items, loading : false } );

    }
    

    clearUsers = () => {

        this.setState( { users : [], loading : false } );

    }


    setAlert = ( message, type ) => {

        this.setState(
            { 
                alert : { message : message, type : type }
            }
        );

        setTimeout( () => {

            this.setState( {  alert : null } );

        }, 5000 )


    }


    render() {

        return (

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ this.state.alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search
                                            searchUsers={ this.searchUsers }
                                            clearUsers={ this.clearUsers }
                                            showClear={ this.state.users.length > 0 ? true : false }
                                            setAlert={ this.setAlert }
                                        />

                                        <Users
                                            users={ this.state.users }
                                            loading={ this.state.loading }
                                        />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                        </Switch>
 
                    </div>               
        
                </div>

            </BrowserRouter>

        );

    }
    
}

export default App;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/PAGES/ABOUT.COMPONENT.JSX
// ==============================


import React, { Fragment } from 'react';

// after we create this component let's go back to the app.js 11 - file
const AboutPage = () => (

        <Fragment>
            <h1>About this App</h1>
            <p>App to search GitHub users</p>
            <p>Version 1.0.0</p>
        </Fragment>

);


export default AboutPage;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/LAYOUT/NAV-BAR.COMPONENT.JSX -- NOTES
// PERTAIN TO 5 -
// ==============================



import React from 'react';
import PropTypes from 'prop-types';


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

        <nav className="navbar bg-primary">

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




// -------------------- END OF FILE








// lecture 22: Single User Component & Data

// and now we want to create a details page for each user and with the GitHub API we can make
// an API call to a user endpoint like the following " https://api.github.com/users/bradtraversy "
// and from this endpoint you can make a pretty extension profile and before we create the
// user component let's create the function to make the API request and to do that let's go to
// the app.js 12 - file



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 12 -, 13 -
// ==============================


import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/users/search.component';
import Alert from './components/layout/alert.component';
import AboutPage from './components/pages/about.component'

import './App.css';


// 13 -
// coming from the user.component.jsx file
// let's import in the User component
import User from './components/users/user.component';

// and now let's create a route for the User component below and remember we can't just do
// " <Route exact path='/user' component={ User } /> " since we have stuff we need to pass
// into the route and that stuff is the getUser prop and the user state

// and remember we need to use a route parameter for the path or " path='/user/:login' "
// since we need to know which user we are working with 

// and we add " { ...props } " since we want to pass in any extra props that we have and we can
// do that by using the spread operator

// and now let's go back to the user.component.jsx 1 - file

// End of 13 -


class App extends Component {

    state = {
        users : [],
        user : {},
        loading : false,
        alert : null
    };


    searchUsers = async ( text ) => {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data.items, loading : false } );

    }


    // 12 -
    // create a function to make an API request for a specific user but first let's create a
    // new piece of state or " user : {} " and insert this piece of state into our state object
    // above
    getUser = async ( username ) => {

       // first, set loading to true
       this.setState( { loading : true } );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}?client_id=
       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

        // now let's reset the state
       this.setState( { user : data, loading : false } );

    }

    // and now let's create a new component in the users folder called " user.component.jsx " and
    // let's go to that file now

    // End of 12 -
    

    clearUsers = () => {

        this.setState( { users : [], loading : false } );

    }


    setAlert = ( message, type ) => {

        this.setState(
            { 
                alert : { message : message, type : type }
            }
        );

        setTimeout( () => {

            this.setState( {  alert : null } );

        }, 5000 )


    }


    render() {

        return (

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ this.state.alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search
                                            searchUsers={ this.searchUsers }
                                            clearUsers={ this.clearUsers }
                                            showClear={ this.state.users.length > 0 ? true : false }
                                            setAlert={ this.setAlert }
                                        />

                                        <Users
                                            users={ this.state.users }
                                            loading={ this.state.loading }
                                        />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                            <Route
                                exact
                                path='/user/:login'
                                render= {
                                    ( props ) => (
                                        <Fragment>
    
                                            <User
                                                { ...props }
                                                getUser={ this.getUser }
                                                user={ this.state.user }
                                                loading={ this.state.loading }
                                            />
    
                                        </Fragment>
                                    ) }                                
                            />

                        </Switch>
 
                    </div>               
        
                </div>

            </BrowserRouter>

        );

    }
    
}

export default App;





// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER.COMPONENT.JSX -- NOTES
// PERTAIN TO 1 -
// ==============================


import React, { Component } from 'react';

// and after we create our class based component, let's import this component into the
// App component and let's go to the app.js 13 - file now

// 1 -
// coming from the app.js 13 - file
// and first let's create a link to the user page and we can do that in the UserItem component
// and let's go to the user-item.component.jsx 3 - file now 

// coming from the user-item.component.jsx 3 -
// let's add the componentDidMount() {} method below and then add in this.props.getUser() to the
// componentDidMount() {} method and then we pass in as an argument to this.props.getUser()
// " this.props.match.params.login " and then we can use this login name in the getUser function
// in the App component and this login or username will allow us to make an API call and retrieve
// information related to that particular user and once we get the users information we can then
// update the " user " state and then use this updated state in the User component below

// so the next thing we want to do is destructure " user " ( see below )

// End of 1 -


class User extends Component {

    componentDidMount() {

        this.props.getUser( this.props.match.params.login );

    }

    render() {
        
        // 1 - continued
        // let's destructure " user "
        const { 
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        // let's also destructure this.props
        const { loading } = this.props;

        // and now we should have access to the data and let's try this out by doing " { name } "
        // below or " <div>{ name }</div> " and if we go to the following URL
        // " localhost:3007/user/bradfitz " we see the name " Brad Fitzpatrick " and this is
        // correct so everything is working as expected

        // and in the next video we will create the UI for the User component now that we have
        // access to the data or the data is being brought into this component

        // End of 1 -

        return (

            <div>

                { name }

            </div>

        );

    }

}

export default User;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER-ITEM.COMPONENT.JSX -- NOTES
// PERTAIN TO 3 -
// ==============================


import React from 'react';
import PropTypes from 'prop-types';


// 3 -
// coming from the user.component.jsx 1 - file
// let's create a link to the User component and first let's import in the Link component
import { Link } from 'react-router-dom';

// let's change the <a></a> tag below to use the Link component and this key value pair will
// take us to the specified user page or " to={ `/user/${login}` } " 

// and let's test this out by searching for users with the text "Brad" and then pressing on
// the more button for Brad Traversy and when we do that we are taken to the following
// URL " http://localhost:3007/user/bradtraversy " and this is correct so everything is
// working as expected

// and now we need to pull this username or login name ( i.e. bradtraversy ) from the URL
// and then do an API call for that particular user and let's gp back to the
// user.component.jsx 1 - file

// End of 3 -

const UserItem = ( { user : { avatar_url, login, html_url } } ) => {

    return (

        <div className="card text-center">

            <img
                src={ avatar_url }
                alt=''
                className="round-img"
                style={ { width : '60px' } }
            />

            <h3>{ login }</h3>

            <div>
                <Link
                    to={ `/user/${login}` }
                    className="btn btn-dark btn-sm my-1"
                >
                    More
                </Link>
            </div>

        </div>

    );

}


UserItem.propTypes = {
    user : PropTypes.object.isRequired
};


export default UserItem;




// -------------------- END OF FILE









// lecture 23: User Component UI & Layout

// let's start to create the UI and to do that let's go back to the user.component.jsx 2 -
// file



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER.COMPONENT.JSX -- NOTES
// PERTAIN TO 2 -
// ==============================


import React, { Component, Fragment } from 'react';


// 2 -
// first, let's import in the Spinner component
import Spinner from '../layout/spinner.component';

// and since we have a bunch of props below, let's bring in PropTypes and then add the PropTypes
// below
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// End of 2 -


class User extends Component {

    componentDidMount() {

        this.props.getUser( this.props.match.params.login );

    }

    // 2 - continued
    static propTypes = {
        loading : PropTypes.bool.isRequired,
        user    : PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired
    };
    // End of 2 -

    render() {

        const { 
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { loading } = this.props;


        // 2 - continued
        // create an if else statment to handle when the data is loading and the UI after the
        // data has loaded and remember to return the Spinner component

        // and if we test this out on the user page we see the spinner as the data is being
        // fetched and this is correct so everything is working as expected

        // Brad wanted to wrap the UI in a Fragment instead of a div so remember to import
        // Fragment above and we want to have a back button so let's import in the Link
        // component as well
        if ( loading ) {

            return (

                <Spinner />

            );

        }
        else {

            return (

                // our UI has a back button, hireable checkmark or x and 2 card elements
                <Fragment>
    
                    { /* button */ }
                    <Link to="/" className="btn btn-light" style={ { marginRight : '30px' } }>
                        Back to Search
                    </Link>

                    { /* font awesome checkbox and applied differet color checkmark and the x */ }
                    <span>Hireable:&nbsp;</span>
                    { hireable ? (

                        <i className="fas fa-check text-success" />

                    ) : (

                        <i className="fas fa-times-circle text-danger" />

                    ) }

                    { /* 1st card and this card contains a 2 column grid */ }
                    <div className="card grid-2">

                        { /* first column: image, name and location */ }
                        <div className="all-center">
                            <img
                                src={ avatar_url }
                                className="round-img"
                                alt=""
                                style={ { width : '150px' } }
                            />
                            <h2 style={ { margin : '15px 0 5px 0' } }>{ name }</h2>
                            <p>Location: { location }</p>

                        </div>

                        { /* second column: bio, GitHub profile button and then 3 list items */ }
                        <div>
                            { bio && (
                                <Fragment>
                                    <h3>Bio:</h3>
                                    <p>{ bio }</p>
                                </Fragment>
                            ) }
                            <a 
                                href={ html_url }
                                className="btn btn-blue my-1"
                                target="_blank"
                                style={ { margin : '30px 0' } }
                            >
                                Visit GitHub Profile
                            </a>
                            <ul>
                                <li>
                                    { login && (
                                        <Fragment>
                                            <strong>Username: </strong>&nbsp;{ login }
                                        </Fragment>
                                    ) }
                                </li>
                                <li>
                                    { company && (
                                        <Fragment>
                                            <strong>Company: </strong>&nbsp;{ company }
                                        </Fragment>
                                    ) }
                                </li>
                                <li>
                                    { blog && (
                                        <Fragment>
                                            <strong>Website: </strong>&nbsp;
                                            <a href={ `https://${blog}` } target="_blank">{ blog }</a>
                                        </Fragment>
                                    ) }
                                </li>
                            </ul>
                        </div>

                    </div>

                    { /* 2nd card and this card contains 4 badges */ }
                    <div className="card text-center">
                        <div className="badge badge-blue">Followers: { followers }</div>
                        <div className="badge badge-success">Following: { following }</div>
                        <div className="badge badge-light">Public Repos: { public_repos }</div>
                        <div className="badge badge-dark">Public Gists: { public_gists }</div>
                    </div>
    
                </Fragment>
    
            );

        }
        // End of 2 -
    }

}

export default User;




// -------------------- END OF FILE








// lecture 24: Repos & RepoItem Component & Data

// now we want to display each users' repositories below the 2 cards that are currently
// dispalyed in the user.component.jsx file and to do this we will create 2 separate components,
// a repo component and a repo item component and the end point we want to hit is
// " https://api.github.com/users/bradtraversy/repos " and we want to get the 5 latest
// repositories per user and we will add some parameters to the end point that will enable
// us to get the 5 latest repositories

// let's start by creating the actual repository function in the app.js 14 - file and let's
// go to that file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 14 -
// ==============================


import React, { Component, Fragment } from 'react';
import NavBar from './components/layout/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/users/search.component';
import Alert from './components/layout/alert.component';
import AboutPage from './components/pages/about.component'
import User from './components/users/user.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';


class App extends Component {

    // 14 - continued
    // add " repos   : [], "
    state = {
        users   : [],
        user    : {},
        repos   : [],
        loading : false,
        alert   : null        
    };
    // End of 14 -


    searchUsers = async ( text ) => {

        // first, set loading to true
        this.setState( { loading : true } );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

         // now let's reset the state
        this.setState( { users : data.items, loading : false } );

    }


    getUser = async ( username ) => {

       // first, set loading to true
       this.setState( { loading : true } );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}?client_id=
       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

        // now let's reset the state
       this.setState( { user : data, loading : false } );

    }
    

    // 14 -
    // create a function to get a user's repositories
    // and like the getUser function, we will take in the username since we need to know which
    // user we are dealing with and let's add some extra parameters and remember we add
    // parameters after the question mark or ? and the first parameter we will add is called
    // " per_page=5 " and " sort=created:asc "

    // and remember to separate the parameters with an " & " and then create a new item in our
    // state object called " repos " and repos will equal an array of objects

    // and then we want to call the getUserRepos function inside the User component below
    // or " getUserRepos={ this.getUserRepos } "

    // and then remember we also need to pass in the repo state or " repos={ this.state.repos } "
    // and now let's go to the user.component.jsx 3 - file
    getUserRepos = async ( username ) => {

       // first, set loading to true
       this.setState( { loading : true } );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
       sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

        // now let's reset the state
       this.setState( { repos : data, loading : false } );

    }

    // End of 14 -


    clearUsers = () => {

        this.setState( { users : [], loading : false } );

    }


    setAlert = ( message, type ) => {

        this.setState(
            { 
                alert : { message : message, type : type }
            }
        );

        setTimeout( () => {

            this.setState( {  alert : null } );

        }, 5000 )


    }


    render() {

        return (

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ this.state.alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search
                                            searchUsers={ this.searchUsers }
                                            clearUsers={ this.clearUsers }
                                            showClear={ this.state.users.length > 0 ? true : false }
                                            setAlert={ this.setAlert }
                                        />

                                        <Users
                                            users={ this.state.users }
                                            loading={ this.state.loading }
                                        />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                            <Route
                                exact
                                path='/user/:login'
                                render= {
                                    ( props ) => (
                                        <Fragment>
    
                                            <User
                                                { ...props }
                                                getUser={ this.getUser }
                                                getUserRepos={ this.getUserRepos }
                                                user={ this.state.user }
                                                repos={ this.state.repos }
                                                loading={ this.state.loading }
                                            />
    
                                        </Fragment>
                                    ) }                                
                            />

                        </Switch>
 
                    </div>               
        
                </div>

            </BrowserRouter>

        );

    }
    
}

export default App;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER.COMPONENT.JSX -- NOTES
// PERTAIN TO 3 -, 4 -
// ==============================


import React, { Component, Fragment } from 'react';
import Spinner from '../layout/spinner.component';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// 3 -
// let's pass the getUserRepos function up to the App component and we will define the function
// inside the componentDidMount() method below or
// " this.props.getUserRepos( this.props.match.params.login ); " and after we do this the App
// component will reset the repos state and then we can pull out the data we need inside the
// RepoItem component

// remember to set the PropTypes for " getUserRepos "

// and then let's create a new folder called " repos " and then 2 new files, one called
// " repos.component.jsx " and another called " repo-item.component.jsx "

// and let's go to the repos.component.jsx file now

// End of 3 -


// 4 -
// coming from the repo-item.component.jsx file
// import in the Repos component
import Repos from '../repos/repos.component';

// so let's pass down the " repos " property to the Repos component and let's do that below
// or " <Repos repos={ this.props.repos } /> " and then the Repos component will pass down
// the " repo " property to the RepoItem component and from there we can pull out the data
// we need inside the RepoItem component

// remember to set the PropTypes for " repos "

// so as far as functionality our application is finished

// now there is a better way to do what we have done so far so instead of having everything
// crammed in the App.js file we could use a state manager like the Context API but before
// we get into the Context API we are going to convert all of our components to functional
// components and we will also cover the useState() hook and the useState() hook allows us
// to have state in our functional components and the useEffect() hook and the useEffect()
// hook allows us to mimic lifecycle methods

// so in the next section we will refactor all of our components to be functional components
// and we will start to work with the context API and the useContext() hook and the
// useReducer() hook

// End of 4 -


class User extends Component {

    componentDidMount() {

        this.props.getUser( this.props.match.params.login );
        this.props.getUserRepos( this.props.match.params.login );

    }

    // 2 -, 3 -, 4 - continued
    static propTypes = {
        loading      : PropTypes.bool.isRequired,
        user         : PropTypes.object.isRequired,
        repos        : PropTypes.array.isRequired,
        getUser      : PropTypes.func.isRequired,
        getUserRepos : PropTypes.func.isRequired        
    };
    // End of 2 -, 3 -, 4-

    render() {

        // let's destructure " user "
        const { 
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        // let's also destructure this.props
        const { loading } = this.props;


        if ( loading ) {

            return (

                <Spinner />

            );

        }
        else {

            return (

                // our UI has a back button, hireable checkmark or x and 2 card elements
                <Fragment>

    
                    { /* button */ }
                    <Link to="/" className="btn btn-light" style={ { marginRight : '30px' } }>
                        Back to Search
                    </Link>


                    { /* font awesome checkbox and applied differet color checkmark and the x */ }
                    <span>Hireable:&nbsp;</span>
                    { hireable ? (

                        <i className="fas fa-check text-success" />

                    ) : (

                        <i className="fas fa-times-circle text-danger" />

                    ) }


                    { /* 1st card and this card contains a 2 column grid */ }
                    <div className="card grid-2">

                        { /* first column: image, name and location */ }
                        <div className="all-center">
                            <img
                                src={ avatar_url }
                                className="round-img"
                                alt=""
                                style={ { width : '150px' } }
                            />
                            <h2 style={ { margin : '15px 0 5px 0' } }>{ name }</h2>
                            <p>Location: { location }</p>

                        </div>

                        { /* second column: bio, GitHub profile button and then 3 list items */ }
                        <div>
                            { bio && (
                                <Fragment>
                                    <h3>Bio:</h3>
                                    <p>{ bio }</p>
                                </Fragment>
                            ) }
                            <a 
                                href={ html_url }
                                className="btn btn-blue my-1"
                                rel="noreferrer"
                                target="_blank"
                                style={ { margin : '30px 0' } }
                            >
                                Visit GitHub Profile
                            </a>
                            <ul>
                                <li>
                                    { login && (
                                        <Fragment>
                                            <strong>Username: </strong>&nbsp;{ login }
                                        </Fragment>
                                    ) }
                                </li>
                                <li>
                                    { company && (
                                        <Fragment>
                                            <strong>Company: </strong>&nbsp;{ company }
                                        </Fragment>
                                    ) }
                                </li>
                                <li>
                                    { blog && (
                                        <Fragment>
                                            <strong>Website: </strong>&nbsp;
                                            <a href={ blog } rel="noreferrer" target="_blank">{ blog }</a>
                                        </Fragment>
                                    ) }
                                </li>
                            </ul>
                        </div>

                    </div>


                    { /* 2nd card and this card contains 4 badges */ }
                    <div className="card text-center">
                        <div className="badge badge-blue">Followers: { followers }</div>
                        <div className="badge badge-success">Following: { following }</div>
                        <div className="badge badge-light">Public Repos: { public_repos }</div>
                        <div className="badge badge-medium">Public Gists: { public_gists }</div>
                    </div>


                    { /* 4 - continued  */ }
                    { /* 3nd card and we will pass " this.props.repos " to the repos property */ }
                    { /* and then this property will get passed into the Repos component */ }
                    <h3 style={ { marginTop : '80px' } }>The Last 5 GitHub Repositories for { name }</h3>
                    <Repos
                        repos={ this.props.repos }
                    />
                    { /* End of 4 - */ }

    
                </Fragment>
    
            );

        }

    }

}

export default User;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/REPOS/REPOS.COMPONENT.JSX
// ==============================


import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './repo-item.component';

// coming from the user.component.jsx 3 - file

// let's map over the repos and then pass each repo ( i.e. one single repository ) into the
// RepoItem component and then pull out the data we need inside the RepoItem component and
// remember repos contains an array of 5 objects and this will result in 5 RepoItem components

// and remember to include PropTypes for " repos " and import in PropTypes above

// and remember to import in the RepoItem component above and let's go to the
// repo-item.component.jsx file now

const Repos = ( { repos } ) => (

    repos.map( ( repo ) => (

        <RepoItem
            key={ repo.id }
            repo={ repo }
        />

    ) )

);


Repos.propTypes = {
    repos : PropTypes.array.isRequired
};


export default Repos;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/REPOS/REPOS-ITEM.COMPONENT.JSX
// ==============================


import React from 'react';
import PropTypes from 'prop-types';


// coming from the repos.component.jsx file

// so now let's go back to the user.component.jsx 4 - file

 const RepoItem = ( { repo } ) => {
    
    // let's destructure " repo "
    const { name, html_url } = repo;

    return (

        <div className="card" style={ { background : 'rgba( 240, 248, 255 ,1 )' } }>

            <h3>
                <a 
                    href={ html_url }
                    rel="noreferrer"
                    target="_blank"
                    style={ { color : 'var(--blue-color)' } }
                >
                { name }
                </a>
            </h3>

        </div>

    );

}


RepoItem.propTypes = {
    repo : PropTypes.object.isRequired
};


export default RepoItem;




// -------------------- END OF FILE











// lecture 24.5: Change the file structure and include SASS and React Skeleton

// #3
// node-sass: " Rogers-iMac:react_front_to_back Home$ npm install node-sass@4.14.1 " and this will
// include sass in our project
// lecture 24.5: Change the file structure and include SASS and React Skeleton













// ==============================
// SECTION 5: REFACTORING TO HOOKS & CONTEXT
// ==============================


// lecture 25: Overview of Hooks & Context

// in this video, we will go over hooks and the context API

// SLIDE

// What are Hooks?

// hooks are functions that let us hook into react state and lifecycle features from a
// functional component

// useState
// useEffect
// useContext
// useReducer
// useRef

// useState and useEffect are probably the two most popular hooks and useState allows us
// to have state within a functional component and useEffect will allow us to mimic some of
// the lifecycle methods and useContext and useReducer are used with the contextAPI and
// useContext makes it very easy to bring in your context into any component and useReducer
// allows us to create a really nice redux like reducer without having to use something like
// redux and a reducer is a function that you can dispatch actions to to manipulate your
// app level state and then you can send that state down to the components that need it


// DIAGRAM

// Brad provided a diagram to explain how the context API works

// Brad is going to show us the way he implements the context API and below is the current
// state of our application

// App Component ( top level component in our app )

// NavBar | Alert | Search | Users | User ( these are child components of the App component )

// Users => UserItem ( UserItem is a child component of Users )

// User => Repos ( Repos is a child component of User )

// Repos = RepoItem ( RepoItem is a child component of Repos )


// and what context does is it allows us remove the App level state ( or any state for that
// matter ) and put it into a context and remember we can have multiple contexts and in our
// application we are going to have a githubContext and an alertContext

// and the way Brad does it is he breaks up the context into three files: githubContext.js,
// GithubState.js and githubReducer.js and in githubContext.js file we initialize the context
// API and in GithubState.js file we store the state and store any functions like searchUsers()
// or getRepos() and we make our API requests in the GithubState.js file and then this file
// will export a provider that will wrap our entire application and that way we can access the
// state or any function within any component in the application

// and the githubReducer.js file is what decides what our state looks like after each action
// so for example if we click a button in the RepoItem component and then this calls an action
// or function in the GithubState.js file and this will in turn dispatch an action to the
// githubReducer.js file and this action may revise the state and then this new state will be
// passed down to any component that needs it

// so we can think of the context as a cloud that hovers over our application that we can
// consistently interact with and get stuff from and in the next video we are going to start
// to convert our class based components to functional components and for those components that
// have component level state we will implement the useState() hook






// lecture 26: Search Class to Function With useState Hook

// so now we are going to start to refactor our application and we have all the functionality we
// need but there are better and more modern ways to write oru code and let's start in the
// Search component so let's go to the search.component.jsx 4 - file


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/SEARCH/SEARCH.COMPONENT.JSX -- NOTES
// PERTAIN TO 5 -
// ==============================


// at the beginning of lecture 26, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './search.styles.scss';


// 5 -
// let's convert the class based component below to a functional component and then use the
// useState() hook and remember to put PropTypes below the functional component and remember to
// add " const " before each function inside the Search component so
// " onSubmit = ( e ) => { " will change to " const onSubmit = ( e ) => { " and then let's
// destructure our props so " this.props.setAlert( 'Please enter something', 'light' ); " will
// change to " setAlert( 'Please enter something', 'light' ); " and we will destructure
// " setAlert " or " ( { setAlert } ) "

// and remember to import in the useState() hook 

// End of 5 -


const Search = ( { setAlert, searchUsers, setAlertStateToNull, showClear, clearUsers } ) => {

    // 5 - continued
    // the default value for useState is " '' "
    const [ text, setText ] = useState( '' );
    // End of 5 -

    const onSubmit = ( e ) => {

        e.preventDefault();

        // 5 -
        // change " if ( this.state.text === '' ) { " to " if ( text === '' ) { " and change
        // " searchUsers( this.state.text ); " to " searchUsers( text ); "  and change
        // " this.setState( {  text : '' } ); " to " setText( '' ); "
        if ( text === '' ) {

            setAlert( 'Please enter something', 'light' );

        }
        else {

            // pass text up to the App component
            searchUsers( text );

            // clear the form
            setText( '' );
            // End of 5 -

        }

    }

    const onChange = ( e ) => {

        // 5 - continued
        // change " this.setState( { [ e.target.name ] : e.target.value } ); " to
        // " setText( e.target.value ); "
        setText( e.target.value );
        // End of 5 -

    }

    const onFocus = ( e ) => {

        // clear out the alert message as soon as the user puts focus in the search field
        setAlertStateToNull();

    }

    // 5 -
    // change " onSubmit={ this.onSubmit } " to " onSubmit={ onSubmit } "

    // change " value={ this.state.text } " to " value={ text } " and change
    // " onChange={ this.onChange } " to " onChange={ onChange } " and change
    // " onFocus={ this.onFocus } " to " onFocus={ onFocus } "

    // remember we are passing " clearUsers ", " setAlertStateToNull ", " searchUsers ",
    // " setAlert " up to the App component as props

    // and " showClear " is a prop that is being passed down from the App component

    // now let's test this by going to the home page and everything is working as expected
    // which is great
    
    // so we just converted a class based component that has state into a functional
    // component that has state because of the useState() hook

    // End of 5 -

    return (

        <div className="search-container">

            <form onSubmit={ onSubmit } className="search-container--form">

                <input
                    type="text"
                    name="text"
                    label="text"
                    placeholder="Search Users"
                    className="search-container--input-label"
                    value={ text }
                    onChange={ onChange }
                    onFocus={ onFocus }
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />

            </form>

            {
                showClear && (
                    <button
                        className="btn btn-blue btn-block search-container--btn-clear"
                        onClick={ clearUsers }
                        style={ { margin : '15px 0 0 0', fontSize : '1.8rem' } }
                    >
                        Clear
                    </button>
                )
            }

        </div>

    );

}


Search.propTypes = {
    searchUsers         : PropTypes.func.isRequired,
    clearUsers          : PropTypes.func.isRequired,
    showClear           : PropTypes.bool.isRequired,
    setAlert            : PropTypes.func.isRequired,
    setAlertStateToNull : PropTypes.func.isRequired
};


export default Search;




// -------------------- END OF FILE








// lecture 27: User Class to Function With useEffect Hook

// in this video we are going to revise the User component and replace the componentDidMount()
// method with the useEffect hook and let's go to the user.component.jsx 5 - file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USER.COMPONENT.JSX -- NOTES
// PERTAIN TO 5 -
// ==============================


// at the beginning of lecture 27, given all the notes, I created a new file below without
// the notes so we are starting fresh

import React, { Fragment, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Repos from '../repos/repos.component';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './user-styles.scss';


// 5 -
// take out " Component " above and import in " useEffect " and now let's convert the class based
// component below to a functional component and replace the componentDidMount() method with
// the useEffect() hook and remember with the useEffect() hook we want to pass in an arrow function

// and remember the useEffect() hook will continue to run constantly in a loop and the way we can
// stop the loop is by using " [] " after the {} and within the [] we can define special
// conditions as to when we want the useEffect() hook to run; for example, if we only want the
// useEffect() hook to run when the repos change then we would do " [ repos ] " and then the
// useEffect() hook will only run when the repos change

// in our case, we only want the useEffect() hook to run once and the way we get this done is
// by doing " [] " and remember by doing " [] " the useEffect() hook will mimic the
// componentDidMount() method

// now let's go to the home page and test this out and we see that everything is working as
// expected which is great

// now we are getting a message in the console that says: " webpackHotDevClient.js:138
// src/components/user/user.component.jsx
// Line 352:8:  React Hook useEffect has missing dependencies: 'getUser', 'getUserRepos', and
// 'match.params.login'. Either include them or remove the dependency array. If 'getUser' changes
// too often, find the parent component that defines it and wrap that definition in useCallback
// react-hooks/exhaustive-deps " and in our case we don't want to include " getUser " or
// " getUserRepos " or " match.params.login " as dependencies or [ getUser, getUserRepos, etc. ]
// so to turn off this warning message let's add the following to the useEffect() hook
// " // eslint-disable-next-line "

// and when I go back to the ste I no longer see this warning message so everything is working
// as expected

// and remember there are cases where we will add dependencies to the useEffect() hook 

// in the next video we will convert the App component to a functional component and we will
// use the useState() hook

// End of 5 -


const User = ( { match, getUser, getUserRepos, user, loading, repos } ) => {


   useEffect ( () => {

        getUser( match.params.login );
        getUserRepos( match.params.login );
        // eslint-disable-next-line
    }, [] );


    // let's destructure " user "
    const { 
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;


    if ( loading ) {

        return (

            <Spinner />

        );

    }
    else {

        return (

            // our UI has a back button, hireable checkmark or x and 2 card elements
            <div className="user">


                { /* button */ }
                <Link to="/" className="btn btn-light user--back-button">
                    Back to Search
                </Link>


                { /* font awesome checkbox and applied differet color checkmark and the x */ }
                <span>Hireable:&nbsp;</span>
                { hireable ? (

                    <i 
                        className="fas fa-check text-success user--check"
                    />

                ) : (

                    <i 
                        className="fas fa-times-circle text-danger user--x"
                    />

                ) }


                { /* 1st card and this card contains a 2 column grid */ }
                <div className="card grid-2">

                    { /* first column: image, name and location */ }
                    <div className="all-center">
                        <img
                            src={ avatar_url }
                            className="user--card-1-img"
                            alt=""
                        />
                        <h2 className="user--card-1-h2">{ name }</h2>
                        <p>Location: { location }</p>

                    </div>

                    { /* second column: bio, GitHub profile button and then 3 list items */ }
                    <div>
                        { bio && (
                            <Fragment>
                                <h3>Bio:</h3>
                                <p>{ bio }</p>
                            </Fragment>
                        ) }
                        <a
                            href={ html_url }
                            className="btn btn-blue my-1 user--github-button"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Visit GitHub Profile
                        </a>
                        <ul>
                            <li>
                                { login && (
                                    <Fragment>
                                        <strong>Username: </strong>&nbsp;{ login }
                                    </Fragment>
                                ) }
                            </li>
                            <li>
                                { company && (
                                    <Fragment>
                                        <strong>Company: </strong>&nbsp;{ company }
                                    </Fragment>
                                ) }
                            </li>
                            <li>
                                { blog && (
                                    <Fragment>
                                        <strong>Website: </strong>&nbsp;
                                        <a href={ blog } rel="noreferrer" target="_blank">{ blog }</a>
                                    </Fragment>
                                ) }
                            </li>
                        </ul>
                    </div>

                </div>


                { /* 2nd card and this card contains 4 badges */ }
                <div className="card text-center">
                    <div className="badge badge-blue">Followers: { followers }</div>
                    <div className="badge badge-success">Following: { following }</div>
                    <div className="badge badge-light">Public Repos: { public_repos }</div>
                    <div className="badge badge-medium">Public Gists: { public_gists }</div>
                </div>


                { /* 3nd card and we will pass " this.props.repos " to the repos property */ }
                { /* and then this property will get passed into the Repos component */ }
                <h3 className="user--card-3-h3">The Last 5 GitHub Repositories for { name }</h3>
                <Repos
                    repos={ repos }
                />

            </div>
    
        );

    }

}


User.propTypes = {
    loading      : PropTypes.bool.isRequired,
    user         : PropTypes.object.isRequired,
    repos        : PropTypes.array.isRequired,
    getUser      : PropTypes.func.isRequired,
    getUserRepos : PropTypes.func.isRequired        
};


export default User;





// -------------------- END OF FILE








// lecture 28: App Class to Function Component

// so now let's convert the App component to a functional component and let's go to the
// app.js 15 - file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 15 -
// ==============================


// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh


import React, { Fragment, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';


// 15 -
// change the App component to a functional component
// and remember " searchUsers " and other methods below are no longer methods that are part of a
// class so we need to declare the functions below or do " const searchUsers = () => {} "

// I made all the changes and checked the app and everything is working as expected

// so we have successfully converted our application to all functional components and replaced
// State = {} with the useState() hook and are now using the useEffect() hook as well; however,
// this is still not optimal since we still have a very cluttered app.js file and we will
// declutter this file by using the context API and using or creating actions that are not in
// our app.js file

// End of 15 -


const App = () => {

    const [ users, setUsers ] = useState( [] );
    const [ user, setUser ] = useState( {} );
    const [ repos, setRepos ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ alert, setAlert ] = useState( null );


    const searchUsers = async ( text ) => {
        
        // first, set loading to true
        setLoading( true );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // now let's reset the state
        setUsers( data.items );
        setLoading( false );


    }


    const getUser = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}?client_id=
       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setUser( data );
       setLoading( false );

    }


    const getUserRepos = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
       sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setRepos( data );
       setLoading( false );

    }


    const clearUsers = () => {

        setUsers( [] );
        setLoading( false );

    }


    const showAlert = ( message, type ) => {


        setAlert( { message : message, type : type } );


        setTimeout( () => {

            setAlert( null );

        }, 5000 )


    }


    // clear out the alert message as soon as the user puts focus in the search field
    const setAlertStateToNull = () => {

        setAlert( null );

    }


    return (

        <BrowserRouter>

            <div className="App">
    
                <NavBar title="Github Finder" icon="fab fa-github" />

                <div className="container">
                    <Alert
                        alert={ alert }
                    />
                    <Switch>

                        <Route
                            exact
                            path='/'
                            render= {
                            ( props ) => (
                                <Fragment>

                                    <Search
                                        searchUsers={ searchUsers }
                                        clearUsers={ clearUsers }
                                        showClear={ users.length > 0 ? true : false }
                                        showAlert={ showAlert }
                                        setAlertStateToNull={ setAlertStateToNull }
                                    />

                                    <Users
                                        users={ users }
                                        loading={ loading }
                                    />

                                </Fragment>
                            ) }
                        />

                        <Route
                            exact
                            path='/about'
                            component={ AboutPage }
                        />

                        <Route
                            exact
                            path='/user/:login'
                            render= {
                                ( props ) => (
                                    <Fragment>

                                        <User
                                            { ...props }
                                            getUser={ getUser }
                                            getUserRepos={ getUserRepos }
                                            user={ user }
                                            repos={ repos }
                                            loading={ loading }
                                        />

                                    </Fragment>
                                ) }                                
                        />

                    </Switch>

                </div>               
    
            </div>

        </BrowserRouter>

    );

}

export default App;





// -------------------- END OF FILE








// lecture 29: Implementing Context

// we are now going to look at the context API and a couple new hooks, which are the useContext
// and the useReducer hooks and the idea here is to give us an alternative to redux and the
// context API gives us a really nice solution for small to mid sized applications and there are
// a lot of different ways to implement the context API and let's start by creating a new folder
// called " context " and we will have a context for anything to do with GitHub and this includes
// the users and the repos and then we will have an Alert context for our alerts

// and let's create another folder inside the context folder called " github " and inside the
// github folder we will have 3 files: " github.context.js ", " Github.state.js " and
// " github.reducer.js " and we will put all of our actions in the Github.state.js file and these
// actions would include actions to fetch data and the github.reducer.js file will be a function
// that will determine what will happen to our state based on an action

// and remember each resource ( e.g. the github resource ) will have 3 files

// and the context file is very simple and all we're doing in this file is initializing a new
// context and let's go to our context file now or github.context.js


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.CONTEXT.JS
// ==============================


import { createContext } from 'react';

// now we will initialize our github context with createContext
const GithubContext = createContext();

export default GithubContext;

// and now let's go to the Github.state.js file



// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.STATE.JS -- NOTES PERTAIN TO 1 -
// ==============================


// this file will contain our initial state and this file will contain our actions like
// when we make an API request to GitHub to search users and by moving our initial state
// and our actions to this file we will really clean up our app.js file

// and let's create a new file in context folder called " types.js " and types are just
// variables of strings that we can call to change the state within our reducer and let's
// go to the types.js file now

// 1 -
// coming from the types.js file
import React, { useReducer } from 'react';
import GithubContext from './github.context';
import GithubReducer from './github.reducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


// after we import in what we need then we need to create our initial state and this
// will be our global state for anything that has to do with GitHub
const GithubState = ( props ) => {

    const initialState = {
        users   : [],
        user    : {},
        repos   : [],
        loading : false
    };

    // the useReducer hook looks like the following:
    // " const [state, dispatch] = useReducer(reducer, initialState); "

    // now we need to dispatch a type to our reducer and we do that through the userReducer
    // hook or " const [ state, dispatch ] = useReducer( GithubReducer, initialState ); " and
    // remember the 2 arguments we pass in to the useReducer hook are our reducer or
    // " GithubReducer " in this case and our " initialState "
    const [ state, dispatch ] = useReducer( GithubReducer, initialState );

    // and alot of this code is boilerplate and once we get set up then were good to go and we can
    // start to create all of our actions and stuff that we need


    
    // Search Users ( an action )


    // Set Loading ( an action )


    // Get User ( an action )


    // Get User Repos ( an action )


    // Clear Users ( an action )



    // now what we need to return here is the provider and we will wrap our entire application
    // with the provider and the provider will take in one prop called " value " and let's pass
    // in anything that we want to make available to the entire app

    // in the middle, let's pass in " { props.children } " and the idea here is that we will wrap
    // our entire application in the " <GithubContext.Provider></<GithubContext.Provider> " and
    // doing " { props.children } " enables us to do that
    return (

        <GithubContext.Provider    
            value={ { 
                users   : state.users,
                user    : state.user,
                repos   : state.repos,
                loading : state.loading
            } }
        >
            { props.children }
        </GithubContext.Provider>

    );

}


export default GithubState;

// and now let's go to our app.js 16 - file

// End of 1 -




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/TYPES.JS
// ==============================


// remember all of our actions have types and let's go back to the Github.state.js 1 - file now
export const SEARCH_USERS   = 'SEARCH_USERS';
export const SET_LOADING    = 'SET_LOADING';
export const GET_USER       = 'GET_USER';
export const GET_USER_REPOS = 'GET_USER_REPOS';
export const CLEAR_USERS    = 'CLEAR_USERS';
export const SET_ALERT      = 'SET_ALERT';
export const REMOVE_ALERT   = 'REMOVE_ALERT';




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 16 -
// ==============================


import React, { Fragment, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';


// 16 -
import GithubState from './context/github/Github.state';

// now wrap everthing inside the return(); below in the GithubState component and in the next few
// videos we want to move everything inside the App component ( not including what is in the
// return(); below ) to our app level state, which is now located in the GithubState component
// and then any changes that are made to the state will go through the reducer which is located
// in the github.reducer.js file

// and in the next video we will start to work with actions

// End of 16 -


const App = () => {

    const [ users, setUsers ] = useState( [] );
    const [ user, setUser ] = useState( {} );
    const [ repos, setRepos ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ alert, setAlert ] = useState( null );


    const searchUsers = async ( text ) => {
        
        // first, set loading to true
        setLoading( true );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // now let's reset the state
        setUsers( data.items );
        setLoading( false );


    }


    const getUser = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}?client_id=
       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setUser( data );
       setLoading( false );

    }


    const getUserRepos = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
       sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setRepos( data );
       setLoading( false );

    }


    const clearUsers = () => {

        setUsers( [] );
        setLoading( false );

    }


    const showAlert = ( message, type ) => {


        setAlert( { message : message, type : type } );


        setTimeout( () => {

            setAlert( null );

        }, 5000 )


    }


    // clear out the alert message as soon as the user puts focus in the search field
    const setAlertStateToNull = () => {

        setAlert( null );

    }


    return (

        <GithubState>

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search
                                            searchUsers={ searchUsers }
                                            clearUsers={ clearUsers }
                                            showClear={ users.length > 0 ? true : false }
                                            showAlert={ showAlert }
                                            setAlertStateToNull={ setAlertStateToNull }
                                        />

                                        <Users
                                            users={ users }
                                            loading={ loading }
                                        />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                            <Route
                                exact
                                path='/user/:login'
                                render= {
                                    ( props ) => (
                                        <Fragment>

                                            <User
                                                { ...props }
                                                getUser={ getUser }
                                                getUserRepos={ getUserRepos }
                                                user={ user }
                                                repos={ repos }
                                                loading={ loading }
                                            />

                                        </Fragment>
                                    ) }                                
                            />

                        </Switch>

                    </div>               
        
                </div>

            </BrowserRouter>

        </GithubState>

    );

}

export default App;




// -------------------- END OF FILE







// lecture 30: Create Reducer & Actions

// so in the last video we set up our contexts and we set up our GitHub state file with the
// initial state and now we want to move everything from the app.js file to our context and
// to our state ( i.e. the Github.state.js file ) and we want to have a reducer that will
// change the state of certain components that need changing

// and if we go to our application and to the react dev tools and put our cursor on the App
// component ( which is the top level component ) we can see the state under the heading of
// " hooks " but as Brad mentioned the UI is not very good

// in the react dev tools our component hierarchy looks like:

/*
App
    GithubState
        Context.Provider
            BrowserRouter
*/

// and this is correct and if we look under Context.Provider ( on the right side of the screen )
// we see:

/*
props
    children: <BrowserRouter />
    value: {loading: false, repos: Array(0), user: {…}, users:…}
        loading: false
        repos: []
        user: {}
        users: []
        new entry: ""
    new entry: ""

rendered by
    GithubState
    App
    createLegacyRoot()
    react-dom@17.0.1

source
    Github.state.js:74
*/

// and notice that there is nothing in the users array, for example, and that is because we have
// not yet moved over to the GithubState component the actions related to the users state

// and now let's start moving the methods in the App component to the GithubState component and
// these methods include searchUsers, getUser, etc. and these methods will become actions
// inside the GithubState component and then Brad will show us how we can connect to the context
// within individual components using the useContext() hook

// let's start by going to the app.js 17 - file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 17 -, 18 -
// ==============================


import React, { Fragment, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import GithubState from './context/github/Github.state';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';


const App = () => {

    // 17 -
    // first, let's copy the searchUsers function below and move it to the GithubState component
    // and let's go to the Github.state.js 2 - file now

    // End of 17 -

    // 18 -
    // coming from the github.reducer.js file
    // so now we need to make a change since our searchUsers function is no longer located in
    // this file and let's go below and delete " searchUsers={ searchUsers } "

    // and now let's update the Search component and let's go to the search.component.jsx 6 - file
    // now

    // End of 18 -

    const [ users, setUsers ] = useState( [] );
    const [ user, setUser ] = useState( {} );
    const [ repos, setRepos ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ alert, setAlert ] = useState( null );


    const getUser = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}?client_id=
       ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setUser( data );
       setLoading( false );

    }


    const getUserRepos = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
       sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setRepos( data );
       setLoading( false );

    }


    const clearUsers = () => {

        setUsers( [] );
        setLoading( false );

    }


    const showAlert = ( message, type ) => {


        setAlert( { message : message, type : type } );


        setTimeout( () => {

            setAlert( null );

        }, 5000 )


    }


    // clear out the alert message as soon as the user puts focus in the search field
    const setAlertStateToNull = () => {

        setAlert( null );

    }


    return (

        <GithubState>

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search
                                            clearUsers={ clearUsers }
                                            showClear={ users.length > 0 ? true : false }
                                            showAlert={ showAlert }
                                            setAlertStateToNull={ setAlertStateToNull }
                                        />

                                        <Users
                                            users={ users }
                                            loading={ loading }
                                        />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                            <Route
                                exact
                                path='/user/:login'
                                render= {
                                    ( props ) => (
                                        <Fragment>

                                            <User
                                                { ...props }
                                                getUser={ getUser }
                                                getUserRepos={ getUserRepos }
                                                user={ user }
                                                repos={ repos }
                                                loading={ loading }
                                            />

                                        </Fragment>
                                    ) }                                
                            />

                        </Switch>

                    </div>               
        
                </div>

            </BrowserRouter>

        </GithubState>

    );

}

export default App;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.STATE.JS -- NOTES PERTAIN TO 2 -
// 3 -
// ==============================


import React, { useReducer } from 'react';
import GithubContext from './github.context';
import GithubReducer from './github.reducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


// the GithubState component will be our global state for anything that has to do with GitHub
const GithubState = ( props ) => {

    const initialState = {
        users   : [],
        user    : {},
        repos   : [],
        loading : false
    };


    const [ state, dispatch ] = useReducer( GithubReducer, initialState );


    // ACTIONS
    
    // Search Users ( an action )

    // 2 -
    // paste in the searchUsers function below and then let's create the setLoading function below
    const searchUsers = async ( text ) => {
        
        setLoading();

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // then dispatch to the reducer the following type and payload
        dispatch( {
            type    : SEARCH_USERS,
            payload : data.items
         } );

    }


    // Set Loading ( an action )
    // and all we want setLoading to do is to dispatch to our reducer and we do this with the
    // " dispatch " that was pulled from the useReducer hook 
    // ( see " const [ state, dispatch ] = useReducer( GithubReducer, initialState ); " ) and
    // what we dispatch is an object that has a type and remember for the setLoading function we
    // don't need a payload but we do need a type and the type in this case will be " SET_LOADING "
    // and remember we defined the const " SET_LOADING " in the types.js file
    
    // and now we can change " setLoading( true ); " to " setLoading(); " in the searchUsers
    // function above and we need to remove " setLoading( false ); " from the searchUsers
    // function above

    // and then change " setUsers( data.items ); " in the searchUsers function above to
    // " dispatch( { type : SEARCH_USERS, payload : data.items } ); "

    // so we have 5 things happening here: (1) inside the searchUsers function we call
    // setLoading(); and (2) that causes setLoading below to make a dispatch to the reducer with
    // the following object " type : SET_LOADING " and then (3) inside the searchUsers function
    // we make a request to the GitHub API and then (4) we convert the response into a JavaScript
    // object and then (5) we dispatch to the reducer the following object
    // " { type : SEARCH_USERS, payload : data.items } "

    // and then the reducer will be reponsible for receiving these dispatches and then updating
    // the state as needed and then sending the updated state down to any components that need it 

    // so now let's go the github.reducer.js file

    const setLoading = () => dispatch( { type : SET_LOADING } );

    // End of 2 -


    // 3 -
    // coming from the search.component.jsx 6 - file
    // and remember if we want to use the searchUsers function we have to add it to the
    // <GithubContext.Provider> component below and all we have to do is add " searchUsers "
    // and it will become available for use throughout the application

    // and we can bring the searchUsers function into any component by doing 4 things ( the
    // same 4 things we did in the search.component.jsx file ):
    // 1 - import in the GithubContext component or
    // " import GithubContext from '../../context/github/github.context'; "
    // 2 - import in the useContext hook or
    // " import React, { useContext, useState } from 'react'; "
    // 3 - initialize the GithubContext by using the useContext() hook or
    // " const githubContext = useContext( GithubContext ); "
    // 4 - connect the searchUsers function to the GithubContext or
    // " githubContext.searchUsers( text ); "

    // and now if we go to the react dev tools and look under Context.Provider, we see the
    // following key value pairs underneth the value key:

    /*
    props
        value: {loading: false, repos: Array(0), searchUsers: ƒ se…}
            loading: false
            repos: []
            searchUsers: ƒ searchUsers() {}
            user: {}
            users: []
    */

    // and now let's test this out by going to the home page and after I press the submit button
    // and then look inside the react dev tools and look under the Context.Provider, we see the
    // following key value pairs underneth the value key:

    /*
    props
        value: {loading: false, repos: Array(0), searchUsers: ƒ se…}
            loading: false
            repos: []
            searchUsers: ƒ searchUsers() {}
            user: {}
            users: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
            0: {avatar_url: "https://avatars0.githubusercontent.co…}
            1: {avatar_url: "https://avatars2.githubusercontent.co…}
            etc.
            etc,
            etc,
    */

    // and now " users " eqauls an array of objects and this is correct so everything is working
    // as expected

    // in the next video, we will continue cleaning up our app.js file

    // End of 3 -


    // Get User ( an action )


    // Get User Repos ( an action )


    // Clear Users ( an action )


    return (

        <GithubContext.Provider
            value={ { 
                users   : state.users,
                user    : state.user,
                repos   : state.repos,
                loading : state.loading,
                searchUsers
            } }
        >
            { props.children }
        </GithubContext.Provider>

    );

}


export default GithubState;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.REDUCER.JS
// ==============================


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

        default:
            return state;

    }

}


export default GithubReducer;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/SEARCH/SEARCH.COMPONENT.JSX -- NOTES
// PERTAIN TO 6 -
// ==============================


// at the beginning of lecture 30, given all the notes, I created a new file below without
// the notes so we are starting fresh



import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import './search.styles.scss';

// 6 -
// and since we are now using the context API and the useContext() hook we no longer need to have
// searchUsers as a prop so let's delete that prop now and we can then delete searchUsers from
// PropTypes below

// and instead of passing " searchUsers( text ); " up to the App component we can now connect
// searchUsers to the context or the <GithubContext.Provider></<GithubContext.Provider>
// component so let's first import in the useContext hook above and then import in the
// GithubContext
import GithubContext from '../../context/github/github.context';

// and then let's initialize our GithubContext by using the useContext() hook ( see below )

// and then we can connect the searchUsers function to the Github context by changing
// " searchUsers( text ); " to " githubContext.searchUsers( text ); "

// and now let's go to the Github.state.js 3 - file

// End of 6 -

const Search = ( { showAlert, setAlertStateToNull, showClear, clearUsers } ) => {

    // 6 - continued
    const githubContext = useContext( GithubContext );
    // End of 6 -

    // the default value for useState is " '' "
    const [ text, setText ] = useState( '' );


    const onSubmit = ( e ) => {

        e.preventDefault();

        if ( text === '' ) {

            showAlert( 'Please enter something', 'light' );

        }
        else {

            // 6 - continued
            // connect the searchUsers function to the Github context
            githubContext.searchUsers( text );
            // End of 6 -

            // clear the form
            setText( '' );

        }

    }

    const onChange = ( e ) => {

        setText( e.target.value );


    }

    const onFocus = ( e ) => {

        // clear out the alert message as soon as the user puts focus in the search field
        setAlertStateToNull();

    }


    return (

        <div className="search-container">

            <form onSubmit={ onSubmit } className="search-container--form">

                <input
                    type="text"
                    name="text"
                    label="text"
                    placeholder="Search Users"
                    className="search-container--input-label"
                    value={ text }
                    onChange={ onChange }
                    onFocus={ onFocus }
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />

            </form>

            {
                showClear && (
                    <button
                        className="btn btn-blue btn-block search-container--btn-clear"
                        onClick={ clearUsers }
                        style={ { margin : '15px 0 0 0', fontSize : '1.8rem' } }
                    >
                        Clear
                    </button>
                )
            }

        </div>

    );

}


Search.propTypes = {
    clearUsers          : PropTypes.func.isRequired,
    showClear           : PropTypes.bool.isRequired,
    showAlert           : PropTypes.func.isRequired,
    setAlertStateToNull : PropTypes.func.isRequired
};


export default Search;




// -------------------- END OF FILE










// lecture 31:  Moving User State To Context

// in the last video, we started working on our reducer and we moved the searchUsers function
// to an action within the GitHub state and now we need to connect the Users component to the
// context so let's go to the users.component.jsx 4 - file


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USERS/USERS.COMPONENT.JSX -- NOTES
// PERTAIN TO 4 -
// ==============================


import React, { useContext } from 'react';
import UserItem from '../user-item/user-item.component';
import SkeletonUsers from '../skeletons/skeleton-users/skeleton-users.component';
import './users.styles.scss';


// 4 -
// let's bring in our GithubContext component and then initialize the GithubContext by using
// the useContext() hook and then connect " users " and " loading " to the GithubContext
import GithubContext from '../../context/github/github.context';

// remember to import in the useContext hook above

// End of 4 -


const Users = () => {

    // 4 - continued
    // initialize the GithubContext by using the useContext() hook
    // and now we will have access to githubContext.anything or anything that is in the
    // GithubContext ( where the value property is the key ) in the GithubState component
    const githubContent = useContext( GithubContext );

    // now let's destructure off loading and users from the githubContext object
    // and remember to remove the props above

    // and if we test this out on the home page by searching for a user we see that the
    // 30 users are showing on the home page and this is correct so everything is working as
    // expected

    // and now let's go back to the app.js 19 - file
    const { loading, users } = githubContent;
    // End of 4 -


    if ( loading ) {

        return (
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map( ( number ) => <SkeletonUsers key={ number } /> )
        )

    }

    else {

        return (
            <div className="users">

                {
                    users.map( ( user ) => (

                        <UserItem
                            key={ user.id }
                            user={ user }
                        />

                    ) )
                }

            </div>
        );

    }

};


export default Users;





// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 19 -, 20 -, 21-
// ==============================


import React, { Fragment, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/Github.state';

import './App.scss';


const App = () => {

    const [ repos, setRepos ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ alert, setAlert ] = useState( null );


    // 20 -
    // now we want to copy the getUser function below to the Github.state.js 5 - file

    // End of 20 -


    // 21 -
    // we are coming from the user.component.jsx 6 - file
    // now let's remove " const [ user, setUser ] = useState( {} ); ", " getUser={ getUser } ",
    // " user={ user } " and " loading={ loading } " from below

    // End of 21 -


    const getUserRepos = async ( username ) => {

       // first, set loading to true
       setLoading( true );

       // then fetch the data
       // and remember we want to put a ? before client_id since client_id is now the first
       // parameter and I take it that the & separates the parameters
       const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
       sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
       ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

       // convert response into a JavaScript object using the json() method
       const data = await response.json();

       // now let's reset the state
       setRepos( data );
       setLoading( false );

    }


    // 19 -
    // coming from the users.component.jsx 4 - file
    // let's copy the clearUsers function below and paste it in the GithubState component and
    // then remove " clearUsers={ clearUsers } " and
    // " showClear={ users.length > 0 ? true : false } " below and
    // " const [ users, setUsers ] = useState( [] ); " above and now let's go to the
    // Github.state.js 4 - file

    // End of 19 -


    const showAlert = ( message, type ) => {


        setAlert( { message : message, type : type } );


        setTimeout( () => {

            setAlert( null );

        }, 5000 )


    }


    // clear out the alert message as soon as the user puts focus in the search field
    const setAlertStateToNull = () => {

        setAlert( null );

    }


    // wrap everthing inside the return(); below in the GithubState component, which is now our
    // app level state
    return (

        <GithubState>

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search                                            
                                            showAlert={ showAlert }
                                            setAlertStateToNull={ setAlertStateToNull }
                                        />

                                        <Users />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                            <Route
                                exact
                                path='/user/:login'
                                render= {
                                    ( props ) => (
                                        <Fragment>

                                            <User
                                                { ...props }
                                                getUserRepos={ getUserRepos }
                                                repos={ repos }
                                            />

                                        </Fragment>
                                    ) }                                
                            />

                        </Switch>

                    </div>               
        
                </div>

            </BrowserRouter>

        </GithubState>

    );

}

export default App;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.STATE.JS -- NOTES PERTAIN TO
// 4 -, 5 -
// ==============================


// this file will contain our initial state and this file will contain our actions 
import React, { useReducer } from 'react';
import GithubContext from './github.context';
import GithubReducer from './github.reducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


// the GithubState component will be our global state for anything that has to do with GitHub
const GithubState = ( props ) => {
    
    // INITIAL STATE
    const initialState = {
        users   : [],
        user    : {},
        repos   : [],
        loading : false
    };

    
    // REDUCER

    // the useReducer hook looks like the following:
    // " const [state, dispatch] = useReducer(reducer, initialState); "
    const [ state, dispatch ] = useReducer( GithubReducer, initialState );


    // ACTIONS

    // Search Users ( an action )
    const searchUsers = async ( text ) => {
        
        setLoading();

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // then dispatch to the reducer the following type and payload
        dispatch( {
            type    : SEARCH_USERS,
            payload : data.items
         } );

    }


    // Set Loading ( an action )
    const setLoading = () => dispatch( { type : SET_LOADING } );


    // Get User ( an action )


    // Get User Repos ( an action )

    // 5 -
    // coming from the app.js 20 - file
    // remember to add the getUser function to the value object below and then let's go to
    // the github.reducer.js 2 - file
    const getUser = async ( username ) => {

        // call the setLoading action
        setLoading();
 
        // then fetch the data
        // and remember we want to put a ? before client_id since client_id is now the first
        // parameter and I take it that the & separates the parameters
        const response =  await fetch( `https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
 
        // convert response into a JavaScript object using the json() method
        const data = await response.json();
 
        // dispatch to the reducer the following type and payload
        dispatch( {
            type    : GET_USER,
            payload : data
        } );
 
     }
    // End of 5 -


    // Clear Users ( an action )

    // 4 -
    // coming from the app.js 19 - file
    // remember to add the clearUsers function to the value object below and then let's go to
    // the github.reducer.js 1 - file
    const clearUsers = () => dispatch( { type : CLEAR_USERS } );
    // End of 4 -


    // RETURN THE CONTEXT PROVIDER
    return (

        <GithubContext.Provider
            value={ { 
                users   : state.users,
                user    : state.user,
                repos   : state.repos,
                loading : state.loading,
                searchUsers,
                getUser,
                clearUsers
            } }
        >
            { props.children }
        </GithubContext.Provider>

    );

}


export default GithubState;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.REDUCER.JS -- NOTES PERTAIN TO
// 1 -, 2 -
// ==============================


import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


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




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/SEARCH/SEARCH.COMPONENT.JSX -- NOTES
// PERTAIN TO 7 -
// ==============================


import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/github.context';

import './search.styles.scss';


const Search = ( { showAlert, setAlertStateToNull } ) => {

    const githubContext = useContext( GithubContext );


    // 7 -
    // let's destructure off " users " and " clearUsers " from the githubContext
    // and then use these 2 variables below and remember to remove " showClear " and
    // " clearUsers " from the argument above and from PropTypes below and now let's go back
    // to the app.js 20 - file
    const { users, clearUsers } = githubContext;
    // End of 7 -


    // the default value for useState is " '' "
    const [ text, setText ] = useState( '' );


    const onSubmit = ( e ) => {

        e.preventDefault();

        if ( text === '' ) {

            showAlert( 'Please enter something', 'light' );

        }
        else {

            // 6 - continued
            // connect the searchUsers function to the Github context
            githubContext.searchUsers( text );
            // End of 6 -

            // clear the form
            setText( '' );

        }

    }

    const onChange = ( e ) => {

        setText( e.target.value );


    }

    const onFocus = ( e ) => {

        // clear out the alert message as soon as the user puts focus in the search field
        setAlertStateToNull();

    }


    return (

        <div className="search-container">

            <form onSubmit={ onSubmit } className="search-container--form">

                <input
                    type="text"
                    name="text"
                    label="text"
                    placeholder="Search Users"
                    className="search-container--input-label"
                    value={ text }
                    onChange={ onChange }
                    onFocus={ onFocus }
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />

            </form>

            {
                users.length > 0 && (
                    <button
                        className="btn btn-blue btn-block search-container--btn-clear"
                        onClick={ clearUsers }
                        style={ { margin : '15px 0 0 0', fontSize : '1.8rem' } }
                    >
                        Clear
                    </button>
                )
            }

        </div>

    );

}


Search.propTypes = {
    showAlert           : PropTypes.func.isRequired,
    setAlertStateToNull : PropTypes.func.isRequired
};


export default Search;




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USER/USER.COMPONENT.JSX -- NOTES
// PERTAIN TO 6 -
// ==============================


import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Repos from '../repos/repos.component';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './user-styles.scss';


// 6 -
// coming from the github.reducer.js 2 - file
// import in the useContext hook above and then import in the GithubContext
import GithubContext from '../../context/github/github.context';

// End of 6 -


const User = ( { match, getUserRepos, repos } ) => {


    // 6 - continued
    // initialize the GithubContext
    const githubContext = useContext( GithubContext );

    // let's destructure off " user ", " getUser " and " loading " from the githubContext and
    // then clear those 3 arguments above and remove those 3 variables from PropTypes and now
    // let's go back to the app.js 21 - file
    const { user, getUser, loading } = githubContext;

    // now let's test this out by going to the home page and then search for a user and then
    // press the more button for that particular user and then I'm taken to the user details page
    // and I see the correct user details so everything is working as expected

    // so in the next video we will work on moving our getUserRepos function to our GithubState
    // component

    // End of 6 -


   useEffect ( () => {

        getUser( match.params.login );
        getUserRepos( match.params.login );
        // eslint-disable-next-line
    }, [] );


    // let's destructure " user "
    const { 
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;


    if ( loading ) {

        return (

            <Spinner />

        );

    }
    else {

        return (

            // our UI has a back button, hireable checkmark or x and 2 card elements
            <div className="user">


                { /* button */ }
                <Link to="/" className="btn btn-light user--back-button">
                    Back to Search
                </Link>


                { /* font awesome checkbox and applied differet color checkmark and the x */ }
                <span>Hireable:&nbsp;</span>
                { hireable ? (

                    <i 
                        className="fas fa-check text-success user--check"
                    />

                ) : (

                    <i 
                        className="fas fa-times-circle text-danger user--x"
                    />

                ) }


                { /* 1st card and this card contains a 2 column grid */ }
                <div className="card grid-2">

                    { /* first column: image, name and location */ }
                    <div className="all-center">
                        <img
                            src={ avatar_url }
                            className="user--card-1-img"
                            alt=""
                        />
                        <h2 className="user--card-1-h2">{ name }</h2>
                        <p>Location: { location }</p>

                    </div>

                    { /* second column: bio, GitHub profile button and then 3 list items */ }
                    <div>
                        { bio && (
                            <Fragment>
                                <h3>Bio:</h3>
                                <p>{ bio }</p>
                            </Fragment>
                        ) }
                        <a
                            href={ html_url }
                            className="btn btn-blue my-1 user--github-button"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Visit GitHub Profile
                        </a>
                        <ul>
                            <li>
                                { login && (
                                    <Fragment>
                                        <strong>Username: </strong>&nbsp;{ login }
                                    </Fragment>
                                ) }
                            </li>
                            <li>
                                { company && (
                                    <Fragment>
                                        <strong>Company: </strong>&nbsp;{ company }
                                    </Fragment>
                                ) }
                            </li>
                            <li>
                                { blog && (
                                    <Fragment>
                                        <strong>Website: </strong>&nbsp;
                                        <a href={ blog } rel="noreferrer" target="_blank">{ blog }</a>
                                    </Fragment>
                                ) }
                            </li>
                        </ul>
                    </div>

                </div>


                { /* 2nd card and this card contains 4 badges */ }
                <div className="card text-center">
                    <div className="badge badge-blue">Followers: { followers }</div>
                    <div className="badge badge-success">Following: { following }</div>
                    <div className="badge badge-light">Public Repos: { public_repos }</div>
                    <div className="badge badge-medium">Public Gists: { public_gists }</div>
                </div>


                { /* 3nd card and we will pass " this.props.repos " to the repos property */ }
                { /* and then this property will get passed into the Repos component */ }
                <h3 className="user--card-3-h3">The Last 5 GitHub Repositories for { name }</h3>
                <Repos
                    repos={ repos }
                />

            </div>
    
        );

    }

}


User.propTypes = {
    repos        : PropTypes.array.isRequired,
    getUserRepos : PropTypes.func.isRequired        
};


export default User;





// -------------------- END OF FILE








// lecture 32:  Moving Repos State To Context

// let's move the repos to the Github.state.js file so let's go to the App.js 22 - file now



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 22 -, 23 -
// ==============================


import React, { Fragment, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import GithubState from './context/github/Github.state';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';


const App = () => {
    
    const [ alert, setAlert ] = useState( null );


    // 22 -
    // let's move the getUserRepos function to the GithubState component and let's go to the
    // Github.state.js 6 - file now

    // End of 22 -

    // 23 -
    // let's remove " getUserRepos={ getUserRepos } " and " repos={ repos } " below and
    // " const [ repos, setRepos ] = useState( [] ); " and
    // " const [ loading, setLoading ] = useState( false ); " above and remember we can also
    // change the render props for the User component to " component={ User } " and then
    // let's go the user.component.jsx 7 - file

    // End of 23 -


    const showAlert = ( message, type ) => {


        setAlert( { message : message, type : type } );


        setTimeout( () => {

            setAlert( null );

        }, 5000 )


    }


    // clear out the alert message as soon as the user puts focus in the search field
    const setAlertStateToNull = () => {

        setAlert( null );

    }


    // wrap everthing inside the return(); below in the GithubState component, which is now our
    // app level state
    return (

        <GithubState>

            <BrowserRouter>

                <div className="App">
        
                    <NavBar title="Github Finder" icon="fab fa-github" />

                    <div className="container">
                        <Alert
                            alert={ alert }
                        />
                        <Switch>

                            <Route
                                exact
                                path='/'
                                render= {
                                ( props ) => (
                                    <Fragment>

                                        <Search                                            
                                            showAlert={ showAlert }
                                            setAlertStateToNull={ setAlertStateToNull }
                                        />

                                        <Users />

                                    </Fragment>
                                ) }
                            />

                            <Route
                                exact
                                path='/about'
                                component={ AboutPage }
                            />

                            <Route
                                exact
                                path='/user/:login'
                                component={ User }
                            />

                        </Switch>

                    </div>               
        
                </div>

            </BrowserRouter>

        </GithubState>

    );

}

export default App;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.STATE.JS -- NOTES PERTAIN TO
// 6 -
// ==============================


import React, { useReducer } from 'react';
import GithubContext from './github.context';
import GithubReducer from './github.reducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


// the GithubState component will be our global state for anything that has to do with GitHub
const GithubState = ( props ) => {

    // INITIAL STATE
    const initialState = {
        users   : [],
        user    : {},
        repos   : [],
        loading : false
    };

    
    // REDUCER
    
    // the useReducer hook looks like the following:
    // " const [state, dispatch] = useReducer(reducer, initialState); "
    const [ state, dispatch ] = useReducer( GithubReducer, initialState );


    // ACTIONS
    
    // Search Users ( an action )
    const searchUsers = async ( text ) => {
        
        setLoading();

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // then dispatch to the reducer the following type and payload
        dispatch( {
            type    : SEARCH_USERS,
            payload : data.items
         } );

    }


    // Set Loading ( an action )
    const setLoading = () => dispatch( { type : SET_LOADING } );


    // Get User ( an action )

    // 6 -
    // coming from the app.js 22 - file
    // now let's go to the github.reducer.js 3 - file now
    const getUserRepos = async ( username ) => {

        // call the setLoading action
        setLoading();
 
        // then fetch the data
        // and remember we want to put a ? before client_id since client_id is now the first
        // parameter and I take it that the & separates the parameters
        const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
        sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
 
        // convert response into a JavaScript object using the json() method
        const data = await response.json();
 
        // dispatch to the reducer the following type and payload
        dispatch( {
            type    : GET_USER_REPOS,
            payload : data
        } );
 
    }

    // 6 -


    // Get User Repos ( an action )
    const getUser = async ( username ) => {

        // call the setLoading action
        setLoading();
 
        // then fetch the data
        // and remember we want to put a ? before client_id since client_id is now the first
        // parameter and I take it that the & separates the parameters
        const response =  await fetch( `https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );
 
        // convert response into a JavaScript object using the json() method
        const data = await response.json();
 
        // dispatch to the reducer the following type and payload
        dispatch( {
            type    : GET_USER,
            payload : data
        } );
 
     }


    // Clear Users ( an action )
    const clearUsers = () => dispatch( { type : CLEAR_USERS } );


    // RETURN THE CONTEXT PROVIDER
    return (

        <GithubContext.Provider
            value={ { 
                users   : state.users,
                user    : state.user,
                repos   : state.repos,
                loading : state.loading,
                searchUsers,
                getUserRepos,
                getUser,
                clearUsers
            } }
        >
            { props.children }
        </GithubContext.Provider>

    );

}


export default GithubState;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITHUB/GITHUB.REDUCER.JS -- NOTES PERTAIN TO
// 3 -
// ==============================


import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../types';


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

        case GET_USER : 
            return {
                ...state,
                user    : action.payload,
                loading : false
            };

        case CLEAR_USERS :
            return {
                ...state,
                users   : [],
                loading : false
            };

        default:
            return state;

    }

}


export default GithubReducer;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/REPOS/REPOS.COMPONENTS.JSX -- NOTES PERTAIN TO
// 1 -
// ==============================


import React, { useContext } from 'react';
import RepoItem from '../repo-item/repo-item.component';

// 1 -
// coming from the github.reducer.js 3 - file
// import in the useContext hook above and then import in the GithubContext
import GithubContext from '../../context/github/github.context';

// End of 1 -

const Repos = () => {

    // 1 - continued
    // initialize the GithubContext
    const githubContext = useContext( GithubContext );

    // let's destructure off " repos " from the githubContext and then clear the repo argument
    // above and remove the PropTypes below and now let's go back to the app.js 23 - file
    const { repos } = githubContext;

    // End of 1 -

    return (

        repos.map( ( repo ) => (

            <RepoItem
                key={ repo.id }
                repo={ repo }
            />

        ) )

    );

}


export default Repos;



// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/USER/USER.COMPONENTS.JSX -- NOTES PERTAIN TO
// 7 -
// ==============================




import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Repos from '../repos/repos.component';
import { Link } from 'react-router-dom';

import './user-styles.scss';

// import in the useContext hook above and then import in the GithubContext
import GithubContext from '../../context/github/github.context';


const User = ( { match } ) => {

    // initialize the GithubContext
    const githubContext = useContext( GithubContext );


    // 7 -
    // let's add getUserRepos to the const below and remove " repos " and " getUserRepos " from
    // the argument above and let's remove " repos={ repos } " below and remove the PropTypes
    // as well
    const { user, getUser, getUserRepos, loading } = githubContext;

    // now let's test this out and everything is working as expected which is great

    // End of 7 -


   useEffect ( () => {

        getUser( match.params.login );
        getUserRepos( match.params.login );
        // eslint-disable-next-line
    }, [] );


    // let's destructure " user "
    const { 
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;


    if ( loading ) {

        return (

            <Spinner />

        );

    }
    else {

        return (

            // our UI has a back button, hireable checkmark or x and 2 card elements
            <div className="user">


                { /* button */ }
                <Link to="/" className="btn btn-light user--back-button">
                    Back to Search
                </Link>


                { /* font awesome checkbox and applied differet color checkmark and the x */ }
                <span>Hireable:&nbsp;</span>
                { hireable ? (

                    <i 
                        className="fas fa-check text-success user--check"
                    />

                ) : (

                    <i 
                        className="fas fa-times-circle text-danger user--x"
                    />

                ) }


                { /* 1st card and this card contains a 2 column grid */ }
                <div className="card grid-2">

                    { /* first column: image, name and location */ }
                    <div className="all-center">
                        <img
                            src={ avatar_url }
                            className="user--card-1-img"
                            alt=""
                        />
                        <h2 className="user--card-1-h2">{ name }</h2>
                        <p>Location: { location }</p>

                    </div>

                    { /* second column: bio, GitHub profile button and then 3 list items */ }
                    <div>
                        { bio && (
                            <Fragment>
                                <h3>Bio:</h3>
                                <p>{ bio }</p>
                            </Fragment>
                        ) }
                        <a
                            href={ html_url }
                            className="btn btn-blue my-1 user--github-button"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Visit GitHub Profile
                        </a>
                        <ul>
                            <li>
                                { login && (
                                    <Fragment>
                                        <strong>Username: </strong>&nbsp;{ login }
                                    </Fragment>
                                ) }
                            </li>
                            <li>
                                { company && (
                                    <Fragment>
                                        <strong>Company: </strong>&nbsp;{ company }
                                    </Fragment>
                                ) }
                            </li>
                            <li>
                                { blog && (
                                    <Fragment>
                                        <strong>Website: </strong>&nbsp;
                                        <a href={ blog } rel="noreferrer" target="_blank">{ blog }</a>
                                    </Fragment>
                                ) }
                            </li>
                        </ul>
                    </div>

                </div>


                { /* 2nd card and this card contains 4 badges */ }
                <div className="card text-center">
                    <div className="badge badge-blue">Followers: { followers }</div>
                    <div className="badge badge-success">Following: { following }</div>
                    <div className="badge badge-light">Public Repos: { public_repos }</div>
                    <div className="badge badge-medium">Public Gists: { public_gists }</div>
                </div>


                { /* 3nd card and we will pass " this.props.repos " to the repos property */ }
                { /* and then this property will get passed into the Repos component */ }
                <h3 className="user--card-3-h3">The Last 5 GitHub Repositories for { name }</h3>
                <Repos />

            </div>
    
        );

    }

}


export default User;




// -------------------- END OF FILE







// lecture 33:  Alert Context Workflow

// now we just need to take care of the alert and we will create a new folder under the context
// folder called " alert " and this will give us an idea of how we can break our global state
// into resources and then create 3 new files inside the alert folder: " alert.context.js ",
// " alert.reducer.js " and " alert.state.js " and let's start by going to the alert.context.js
// file


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/ALERT/ALERT.CONTEXT.JS -- NOTES PERTAIN TO 1 -
// ==============================


import { createContext } from 'react';

// now we will initialize our alert context with createContext
const AlertContext = createContext();

export default AlertContext;

// and now let's go to the alert.state.js file




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 24 -, 25 -
// ==============================


import React, { Fragment } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import GithubState from './context/github/Github.state';


// 25 - continued from below
import AlertState from './context/alert/alert.state';

// End of 25 -


const App = () => {


    // 24 -
    // let's copy and paste the showAlert function into the alert.state.js 1 - file and then
    // let's copy and paste the removeAlert function into the alert.state.js 1 - file and then
    // let's delete " showAlert={ showAlert } " and " removeAlert={ removeAlert } " below and
    // then let's remove " const [ alert, setAlert ] = useState( null ); " above

    // End of 24 -


    // 25 -
    // coming from the search.component.jsx 8 - file
    // let's import in the AlertState component above and then the wrap the application in the
    // AlertState component, like we did with the GithubState component and let's remove
    // " alert={ alert } " below and now let's go to the alert.component.jsx 1 - file

    // End of 25 -


    return (

        <GithubState>

            <AlertState>

                <BrowserRouter>

                    <div className="App">
            
                        <NavBar title="Github Finder" icon="fab fa-github" />

                        <div className="container">
                            <Alert />
                            <Switch>

                                <Route
                                    exact
                                    path='/'
                                    render= {
                                    ( props ) => (
                                        <Fragment>
                                            <Search />
                                            <Users />
                                        </Fragment>
                                    ) }
                                />

                                <Route
                                    exact
                                    path='/about'
                                    component={ AboutPage }
                                />

                                <Route
                                    exact
                                    path='/user/:login'
                                    component={ User }
                                />

                            </Switch>

                        </div>               
            
                    </div>

                </BrowserRouter>

            </AlertState>

        </GithubState>

    );

}

export default App;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/ALERT/ALERT.STATE.JS
// ==============================


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




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/ALERT/ALERT.REDUCER.JS
// ==============================


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




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/SEARCH/SEARCH.COMPONENT.JSX -- NOTES PERTAIN
// TO 8 -
// ==============================


import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/github.context';

import './search.styles.scss';


// 8 -
// coming from the alert.state.js 1 - file
// import in the useContext hook above and then import in the AlertContext
import AlertContext from '../../context/alert/alert.context';

// End of 8 -


const Search = () => {


    const githubContext = useContext( GithubContext );
    const { users, clearUsers } = githubContext;


    // 8 - continued
    // initialize the AlertContext
    const alertContext = useContext( AlertContext );

    // let's destructure off " showAlert " and " removeAlert " from the alertContext and
    // then clear those 2 arguments above and then remove those 2 variables from PropTypes below
    // and then remove the PropTypes import above and now let's go back to the app.js 25 - file
    const { setAlert, removeAlert } = alertContext;

    // End of 8 -


    // the default value for useState is " '' "
    const [ text, setText ] = useState( '' );


    const onSubmit = ( e ) => {

        e.preventDefault();

        if ( text === '' ) {

            setAlert( 'Please enter something', 'light' );

        }
        else {

            // connect the searchUsers function to the Github context
            githubContext.searchUsers( text );

            // clear the form
            setText( '' );

        }

    }

    const onChange = ( e ) => {

        setText( e.target.value );


    }

    const onFocus = ( e ) => {

        // clear out the alert message as soon as the user puts focus in the search field
        removeAlert();

    }


    return (

        <div className="search-container">

            <form onSubmit={ onSubmit } className="search-container--form">

                <input
                    type="text"
                    name="text"
                    label="text"
                    placeholder="Search Users"
                    className="search-container--input-label"
                    value={ text }
                    onChange={ onChange }
                    onFocus={ onFocus }
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />

            </form>

            {
                users.length > 0 && (
                    <button
                        className="btn btn-blue btn-block search-container--btn-clear"
                        onClick={ clearUsers }
                        style={ { margin : '15px 0 0 0', fontSize : '1.8rem' } }
                    >
                        Clear
                    </button>
                )
            }

        </div>

    );

}


export default Search;




// -------------------- END OF FILE





// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/COMPONENTS/ALERT/ALERT.COMPONENT.JSX -- NOTES PERTAIN
// TO 1 -
// ==============================


import React, { useContext } from 'react';
import './alert.styles.scss';


// 1 -
// coming from the app.js 25 - file
// import in the useContext hook above and then import in the AlertContext
import AlertContext from '../../context/alert/alert.context';

// End of 1 -


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




// -------------------- END OF FILE







// lecture 34:  Home & NotFound Components

// there are a couple more things Brad would like to do, one Brad would like to create a home
// component within our pages folder and two Brad would like to create a not found component
// and let's start by creating a new file inside the pages folder called " home.component.jsx "
// and then go to that file now


// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/PAGES/HOME.COMPONENT.JSX
// ==============================


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




// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/APP.JS -- NOTES PERTAIN TO 26 -, 27 -
// ==============================


// at the beginning of lecture 34, given all the notes, I created a new file below without
// the notes so we are starting fresh


import React from 'react';

import GithubState from './context/github/Github.state';
import AlertState from './context/alert/alert.state';

import NavBar from './components/nav-bar/nav-bar.component';
import Alert from './components/alert/alert.component';
import HomePage from './pages/home.component';
import AboutPage from './pages/about.component'
import User from './components/user/user.component';
import NotFoundPage from './pages/not-found.component';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';


// 26 -
// coming from the home.component.jsx file
// change the home route from render props to " component={ Home } " and import in the Home
// component above

// now let's create a not-found component in the pages folder and let's go to the
// " not-found.component.jsx " file now

// End of 26 -


// 27 - 
// coming from the not-found.component.jsx file
// import the NotFoundPage component above and add the component to the routing below

// and I tested the app and everything is working as expected

// and our application is all set and in the next video we will deploy to Netlify

// End of 27-


const App = () => {
 
    // wrap everthing inside the return(); below in the GithubState component and the AlertState
    // component and these components serve as our app level state
    return (

        <GithubState>

            <AlertState>

                <BrowserRouter>

                    <div className="App">
            
                        <NavBar title="Github Finder" icon="fab fa-github" />

                        <div className="container">
                            <Alert />
                            <Switch>

                                <Route
                                    exact
                                    path='/'
                                    component={ HomePage }
                                />

                                <Route
                                    exact
                                    path='/about'
                                    component={ AboutPage }
                                />

                                <Route
                                    exact
                                    path='/user/:login'
                                    component={ User }
                                />

                                <Route
                                    component={ NotFoundPage }
                                />

                            </Switch>

                        </div>               
            
                    </div>

                </BrowserRouter>

            </AlertState>

        </GithubState>

    );

}

export default App;





// -------------------- END OF FILE






// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/PAGES/NOT-FOUND.COMPONENT.JSX
// ==============================


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





// -------------------- END OF FILE










// lecture 35:  Prepare & Deploy To Netlify

// we are going to use Netlify's CLI tool to deploy our site but first let's make one change
// to the App component so let's go to Github.state.js 7 - file



// ==============================
// BACK FROM REACT_FRONT_TO_BACK/SRC/CONTEXT/GITUHB/GITHUB.STATE.JS -- NOTES PERTAIN TO 7 -
// ==============================






// -------------------- END OF FILE



