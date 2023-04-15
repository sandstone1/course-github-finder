
import React from 'react';
import './repo-item.styles.scss';


// coming from the repos.component.jsx file

// so now let's go back to the user.component.jsx 4 - file

 const RepoItem = ( { repo } ) => {
    
    // let's destructure " repo "
    const { name, html_url } = repo;

    return (

        <div className="card repo-item" style={ { margin : '4.0rem 0' } }>

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


export default RepoItem;