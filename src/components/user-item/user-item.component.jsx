
import React from 'react';
import './user-item.styles.scss';

// there are a couple ways to add state to a class based component and one way is to use a
// constructor although Brad would not recommend using it and another way is as shown below and
// after we make these changes we see that we now have some state inside our UserItem component
// and the goal is to display a bunch of users and we can do this by looping through the user's
// array and in the next video we will create a Users component and inside this component we will
// output a UserItem component for each user and the way we get the data into the UserItem
// component is through props

// 1 -
// change the component below to use the props that are being passed in from the
// users.component.jsx file and let's use destructuring to pull out the values we need or
// " const { avatar_url, login, html_url } = this.props.user; "

// End of 1 -


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

        <div className="user-item card-small text-center">

            <img
                src={ avatar_url }
                alt=''
                className="user-item--img"
            />

            <h3>{ login }</h3>

            <div>
                <Link
                    to={ `/user/${login}` }
                    className="user-item--btn"
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