
import React from 'react';
import PropTypes from 'prop-types';
import './repo-item.styles.scss';


// coming from the repos.component.jsx file

// so now let's go back to the user.component.jsx 4 - file

 const RepoItem = ( { repo } ) => {
    
    // let's destructure " repo "
    const { name, html_url } = repo;

    return (

        <div className="card repo-item">

            <h3>
                <a 
                    href={ html_url }
                    rel="noreferrer"
                    target="_blank"
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