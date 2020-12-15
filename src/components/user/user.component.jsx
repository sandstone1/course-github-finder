
/*
import React, { Component, Fragment } from 'react';
import './user-styles.scss';

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


// 2 -
// first, let's import in the Spinner component
import Spinner from '../spinner/spinner.component';

// and since we have a bunch of props below, let's bring in PropTypes and then add the PropTypes
// below
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// End of 2 -


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
        
        // 1 - continued
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

        // and now we should have access to the data and let's try this out by doing " { name } "
        // below or " <div>{ name }</div> " and if we go to the following URL
        // " localhost:3007/user/bradfitz " we see the name " Brad Fitzpatrick " and this is
        // correct so everything is working as expected

        // and in the next video we will create the UI for the User component now that we have
        // access to the data or the data is being brought into this component

        // End of 1 -

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
                <div className="user">

                    
                    { /* button */ /* }
                    <Link to="/" className="btn btn-light user--back-button">
                        Back to Search
                    </Link>


                    { /* font awesome checkbox and applied differet color checkmark and the x */  /*}
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


                    { /* 1st card and this card contains a 2 column grid */ /* }
                    <div className="card grid-2">

                        { /* first column: image, name and location */ /* }
                        <div className="all-center">
                            <img
                                src={ avatar_url }
                                className="user--card-1-img"
                                alt=""
                            />
                            <h2 className="user--card-1-h2">{ name }</h2>
                            <p>Location: { location }</p>

                        </div>

                        { /* second column: bio, GitHub profile button and then 3 list items */ /* }
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


                    { /* 2nd card and this card contains 4 badges */ /* }
                    <div className="card text-center">
                        <div className="badge badge-blue">Followers: { followers }</div>
                        <div className="badge badge-success">Following: { following }</div>
                        <div className="badge badge-light">Public Repos: { public_repos }</div>
                        <div className="badge badge-medium">Public Gists: { public_gists }</div>
                    </div>


                    { /* 4 - continued  */ /* }
                    { /* 3nd card and we will pass " this.props.repos " to the repos property */ /* }
                    { /* and then this property will get passed into the Repos component */ /* }
                    <h3 className="user--card-3-h3">The Last 5 GitHub Repositories for { name }</h3>
                    <Repos
                        repos={ this.props.repos }
                    />
                    { /* End of 4 - */ /* }

    
                </div>
    
            );

        }
        // End of 2 -
    }

}


export default User;
*/












// ===============================












// at the beginning of lecture 27, given all the notes, I created a new file below without
// the notes so we are starting fresh




import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Repos from '../repos/repos.component';
import { Link } from 'react-router-dom';

import './user.styles.scss';


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

// and when I go back to the site I no longer see this warning message so everything is working
// as expected

// and remember there are cases where we will add dependencies to the useEffect() hook 

// in the next video we will convert the App component to a functional component and we will
// use the useState() hook

// End of 5 -


// 6 -
// coming from the github.reducer.js 2 - file
// import in the useContext hook above and then import in the GithubContext
import GithubContext from '../../context/github/github.context';

// End of 6 -


const User = ( { match } ) => {


    // 6 - continued
    // initialize the GithubContext
    const githubContext = useContext( GithubContext );

    // let's destructure off " user ", " getUser " and " loading " from the githubContext and
    // then clear those 3 arguments above and remove those 3 variables from PropTypes and now
    // let's go back to the app.js 21 - file


    // 7 -
    // let's add getUserRepos to the const below and remove " repos " and " getUserRepos " from
    // the argument above and let's remove " repos={ repos } " below and remove the PropTypes
    // as well

    const { user, getUser, getUserRepos, loading } = githubContext;

    // now let's test this out and everything is working as expected which is great

    // End of 7 -

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
                <Link to="/" className="btn btn-blue user--back-button" style={ { marginRight: '2.0rem' } }>
                    Back to Search
                </Link>


                { /* font awesome checkbox and applied differet color checkmark and the x */ }
                <span>Hireable:</span>
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
                    <div className="badge badge-silver">Public Repos: { public_repos }</div>
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

