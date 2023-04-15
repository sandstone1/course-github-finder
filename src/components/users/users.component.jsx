
/*
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

    // insert in some hard coded state
    /*
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
    }
    */

    // next, we want to loop through the 3 users above and let's go to the App.js file
    // 2 -

    // now were back from the App.js file and we want to create a CSS Grid and we can do that
    // by changing " <div> " to " <div style={ userStyle }> " and then setting the variable
    // " userStyle " below and in the next video we are going to convert the UserItem component
    // and the NavBar component to functional components and we can do that ( in old school
    // react ) because neither the UserItem or NavBar component contain state
    /*
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
*/







// ===============================








// at the beginning of lecture 15, given all the notes, I created a new file below without
// the notes so we are starting fresh


// 3 -
// change the Users component to a functional component and import in the Spinner component
// and then create an if else statement below and now that we have users and loading as
// props let's add in PropTypes below

// in the next video we will add our GitHub API credentials and we will learn how to create
// environment varaibles so that we can have variables that we can access from anywhere in our
// application

// End of 3 -

/*
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
*/












// ===============================











// at the beginning of lecture 35, given all the notes, I created a new file below without
// the notes so we are starting fresh


import React, { useContext } from 'react';
import UserItem from '../user-item/user-item.component';
import SkeletonUsers from '../skeletons/skeleton-users/skeleton-users.component';

import './users.styles.scss';

import GithubContext from '../../context/github/github.context';


const Users = () => {

    // initialize the GithubContext by using the useContext() hook
    // and now we will have access to githubContext.anything or anything that is in the
    // GithubContext ( where the value property is the key ) in the GithubState component
    const githubContent = useContext( GithubContext );

    // now let's destructure off loading and users from the githubContext object
    const { loading, users } = githubContent;


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

