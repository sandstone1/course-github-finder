/*
import React, { Component } from 'react';
import './search.styles.scss';


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
/*
import PropTypes from 'prop-types';

// End of 2 -


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

    // 2 - continued
    // using PropTypes will make our code a little more robust and in the next video we will
    // add a clear button
    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers  : PropTypes.func.isRequired,
        showClear   : PropTypes.bool.isRequired,
        setAlert    : PropTypes.func.isRequired
    };
    // End of 2 -


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


    onFocus = ( e ) => {

        // clear out the alert message as soon as the user puts focus in the search field
        this.props.setAlertStateToNull();

    }


    render() {

        return (

            <div className="search-container">

                <form onSubmit={ this.onSubmit } className="search-container--form">

                    <input
                        type="text"
                        name="text"
                        label="text"
                        placeholder="Search Users"
                        className="search-container--input-label"
                        value={ this.state.text }
                        onChange={ this.onChange }
                        onFocus={ this.onFocus }
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
                            className="btn btn-blue btn-block search-container--btn-clear"
                            onClick={ this.props.clearUsers }
                            style={ { margin : '15px 0 0 0', fontSize : '1.8rem' } }
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
*/








// ===============================











// at the beginning of lecture 26, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
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


const Search = ( { showAlert, searchUsers, setAlertStateToNull, showClear, clearUsers } ) => {

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

            showAlert( 'Please enter something', 'light' );

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
    showAlert           : PropTypes.func.isRequired,
    setAlertStateToNull : PropTypes.func.isRequired
};


export default Search;
*/













// ===============================












// at the beginning of lecture 30, given all the notes, I created a new file below without
// the notes so we are starting fresh


/*
import React, { useContext, useState } from 'react';

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


// 8 -
// coming from the alert.state.js 1 - file
// import in the useContext hook above and then import in the AlertContext
import AlertContext from '../../context/alert/alert.context';

// End of 8 -


const Search = () => {


    // 6 - continued
    const githubContext = useContext( GithubContext );
    // End of 6 -


    // 7 -
    // let's destructure off " users " and " clearUsers " from the githubContext
    // and then use these 2 variables below and remember to remove " showClear " and
    // " clearUsers " from the argument above and from PropTypes below and now let's go back
    // to the app.js 20 - file
    const { users, clearUsers } = githubContext;
    // End of 7 -


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
*/













// ===============================














// at the beginning of lecture 35, given all the notes, I created a new file below without
// the notes so we are starting fresh



import React, { useContext, useState } from 'react';

import './search.styles.scss';

import GithubContext from '../../context/github/github.context';
import AlertContext from '../../context/alert/alert.context';


const Search = () => {

    // GithubContext
    // initialize our GithubContext by using the useContext() hook
    const githubContext = useContext( GithubContext );
    const { users, clearUsers } = githubContext;

    // AlertContext
    // initialize the AlertContext
    const alertContext = useContext( AlertContext );
    const { setAlert, removeAlert } = alertContext;

    // State
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

