
/*
import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.component';

// 1 -
// import in the UserItem component
// import UserItem from './components/users/user-item.component';
// add the UserItem component under the NavBar component and let's go back to the UserItem
// component and add some state

// End of 1 -


// 2 -
// comment out import UserItem ... above and import in the User component and place
// the User component inside the container div and now let's go to the user-item.component.jsx file
// 1 -
import Users from './components/users/users.component';

// End of 2 -


import './App.css';

// however, Brad later took out fragments and used divs instead

// create a class based component
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
        /*
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
*/








// ===============================








// at the beginning of lecture 15, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
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


// 5 -
// import in the Search component and then insert the component above the Users component below
import Search from './components/users/search.component';

// now if we save the file and go to the home page, we see the search form and seerch button
// so everything is working as expected

// now let's go back to the search.component.jsx file 1 -

// End of 5 -


// 6 - 
// coming from the search.component.jsx 2 - file and the problem with sending a prop up or down
// the component tree is that this can get messy fast and this is known as prop drilling and to
// send the prop up the tree let's add " searchUsers={ this.searchUsers } " to the Search
// component and then let's build the searchUsers function

// End of 6 -


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
    /*
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
    /*
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
*/










// ===============================











// at the beginning of lecture 21, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
import React, { Fragment, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import Users from './components/users/users.component';
import Search from './components/search/search.component';
import Alert from './components/alert/alert.component';

import './App.scss';

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
import AboutPage from './pages/about.component'

// and now let's test this out by going to " localhost:3007/about " and when we do we see our
// about page so everything is working as expected

// and next we want to create some links in our NavBar component so let's go to the
// nav-bar.component.jsx 5 - file now

// End of 11 -


// 13 -
// coming from the user.component.jsx file
// let's import in the User component
import User from './components/user/user.component';

// and now let's create a route for the User component below and remember we can't just do
// " <Route exact path='/user' component={ User } /> " since we have stuff we need to pass
// into the route and that stuff is the getUser prop and the user state

// and remember we need to use a route parameter for the path or " path='/user/:login' "
// since we need to know which user we are working with 

// and we add " { ...props } " since we want to pass in any extra props that we have and we can
// do that by using the spread operator

// and now let's go back to the user.component.jsx 1 - file

// End of 13 -


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

/*
const App = () => {

    // 14 - continued
    // add " repos   : [], "
    /*
    state = {
        users   : [],
        user    : {},
        repos   : [],
        loading : false,
        alert   : null        
    };
    */
    // End of 14 -

    /*
    const [ users, setUsers ] = useState( [] );
    const [ user, setUser ] = useState( {} );
    const [ repos, setRepos ] = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ alert, setAlert ] = useState( null );


    const searchUsers = async ( text ) => {

        // first, set loading to true
        // this.setState( { loading : true } );
        setLoading( true );

        // then fetch the data
        const response =  await fetch( `https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}` );

        // convert response into a JavaScript object using the json() method
        const data = await response.json();

        // now let's reset the state
        // this.setState( { users : data.items, loading : false } );
        setUsers( data.items );
        setLoading( false );


    }


    // 12 -
    // create a function to make an API request for a specific user but first let's create a
    // new piece of state or " user : {} " and insert this piece of state into our state object
    // above
    const getUser = async ( username ) => {

       // first, set loading to true
       // this.setState( { loading : true } );
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
       // this.setState( { user : data, loading : false } );
       setUser( data );
       setLoading( false );

    }

    // and now let's create a new component in the users folder called " user.component.jsx " and
    // let's go to that file now

    // End of 12 -
    

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
    const getUserRepos = async ( username ) => {

       // first, set loading to true
       // this.setState( { loading : true } );
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
       // this.setState( { repos : data, loading : false } );
       setRepos( data );
       setLoading( false );

    }

    // End of 14 -


    const clearUsers = () => {

        // this.setState( { users : [], loading : false } );
        setUsers( [] );
        setLoading( false );

    }


    const showAlert = ( message, type ) => {

        /*
        this.setState(
            { 
                alert : { message : message, type : type }
            }
        );
        */
        /*
        setAlert( { message : message, type : type } );


        setTimeout( () => {

            // this.setState( { alert : null } );
            setAlert( null );

        }, 5000 )


    }


    // clear out the alert message as soon as the user puts focus in the search field
    const setAlertStateToNull = () => {

        // this.setState( { alert : null } );
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
*/












// ===============================














// at the beginning of lecture 28, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
import React, { Fragment } from 'react';
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


// 16 -
import GithubState from './context/github/Github.state';

// now wrap everthing inside the return(); below in the GithubState component and in the next few
// videos we want to move everything inside the App component ( not including what is in the
// return(); below ) to our app level state, which is now located in the GithubState component
// and then any changes that are made to the state will go through the reducer which is located
// in the github.reducer.js file

// and in the next video we will start to work with actions

// End of 16 -


// 25 - continued from below
import AlertState from './context/alert/alert.state';

// End of 25 -


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

    
    // 20 -
    // now we want to copy the getUser function below to the Github.state.js 5 - file

    // End of 20 -


    // 21 -
    // we are coming from the user.component.jsx 6 - file
    // now let's remove " const [ user, setUser ] = useState( {} ); ", " getUser={ getUser } ",
    // " user={ user } " and " loading={ loading } " from below

    // End of 21 -


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


    // 19 -
    // coming from the users.component.jsx 4 - file
    // let's copy the clearUsers function below and paste it in the GithubState component and
    // then remove " clearUsers={ clearUsers } " and
    // " showClear={ users.length > 0 ? true : false } " below and
    // " const [ users, setUsers ] = useState( [] ); " above and now let's go to the
    // Github.state.js 4 - file

    // End of 19 -


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

 
    // wrap everthing inside the return(); below in the GithubState component, which is now our
    // app level state
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
*/















// ===============================
















// at the beginning of lecture 34, given all the notes, I created a new file below without
// the notes so we are starting fresh



import React from 'react';

import GithubState from './context/github/Github.state';
import AlertState from './context/alert/Alert.state';

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



