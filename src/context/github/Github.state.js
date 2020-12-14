
// this file will contain our initial state and this file will contain our actions like
// when we make an API request to GitHub to search users and by moving our initial state
// and our actions to this file we will really clean up our app.js file

// and let's create a new file in context folder called " types.js " and types are just
// variables of strings that we can call to change the state within our reducer and let's
// go to the types.js file now

// 1 -
// coming from the types.js file
/*
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

    // now we need to dispatch a type to our reducer and we do that through the userReducer
    // hook or " const [ state, dispatch ] = useReducer( GithubReducer, initialState ); " and
    // remember the 2 arguments we pass in to the useReducer hook are our reducer or
    // " GithubReducer " in this case and our " initialState "
    const [ state, dispatch ] = useReducer( GithubReducer, initialState );

    // and alot of this code is boilerplate and once we get set up then were good to go and we can
    // start to create all of our actions and stuff that we need

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

    // 6 -
    // coming from the app.js 22 - file
    // now let's go to the github.reducer.js 3 - file now
    /*
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


    // now what we need to return here is the provider and we will wrap our entire application
    // with the provider and the provider will take in one prop called " value " and let's pass
    // in anything that we want to make available to the entire app

    // in the middle, let's pass in " { props.children } " and the idea here is that we will wrap
    // our entire application in the " <GithubContext.Provider></<GithubContext.Provider> " and
    // doing " { props.children } " enables us to do that

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

// and now let's go to our app.js 16 - file

// End of 1 -
*/














// ===============================
















// at the beginning of lecture 35, given all the notes, I created a new file below without
// the notes so we are starting fresh


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


// 7 -
// and remember in our .env.local file we have our environment variables and we don't want to
// use these environment variables in production and first let's initialize 2 variables:
// " let githubClientId; " and " let githubClientSecret; " 
let githubClientId;
let githubClientSecret;

// and then what we want to do is check the environmentand we'll use an if else statement and
// the way we check our environment to see if it is in production or not is to use
// " process.env.NODE_ENV !== 'production' " inside the if argument
if ( process.env.NODE_ENV !== 'production' ) {

    // if we are not in production then we want the
    // githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID and we want the
    // githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

} else {

    // if we are in production then we want to use a normal environment variable
    // ( i.e. see below )
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

}

// and now let's replace the variables below with " githubClientId " and " githubClientSecret "

// go app-css-grid-react-nexter.js to see the steps to deploy to Netlify 

// End of 7 -


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
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&
        client_id=${githubClientId}&
        client_secret=${githubClientSecret}` );

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

    const getUserRepos = async ( username ) => {

        // call the setLoading action
        setLoading();
 
        // then fetch the data
        // and remember we want to put a ? before client_id since client_id is now the first
        // parameter and I take it that the & separates the parameters
        const response =  await fetch( `https://api.github.com/users/${username}/repos?per_page=5&
        sort=created:asc&
        client_id=${githubClientId}&
        client_secret=${githubClientSecret}` );
 
        // convert response into a JavaScript object using the json() method
        const data = await response.json();
 
        // dispatch to the reducer the following type and payload
        dispatch( {
            type    : GET_USER_REPOS,
            payload : data
        } );
 
    }


    // Get User Repos ( an action )

    const getUser = async ( username ) => {

        // call the setLoading action
        setLoading();
 
        // then fetch the data
        // and remember we want to put a ? before client_id since client_id is now the first
        // parameter and I take it that the & separates the parameters
        const response =  await fetch( `https://api.github.com/users/${username}?
        client_id=${githubClientId}&
        client_secret=${githubClientSecret}` );
 
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

    // now what we need to return here is the provider and we will wrap our entire application
    // with the provider and the provider will take in one prop called " value " and let's pass
    // in anything that we want to make available to the entire app

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


