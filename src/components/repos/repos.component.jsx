
import React, { useContext } from 'react';
import RepoItem from '../repo-item/repo-item.component';

// coming from the user.component.jsx 3 - file

// let's map over the repos and then pass each repo ( i.e. one single repository ) into the
// RepoItem component and then pull out the data we need inside the RepoItem component and
// remember repos contains an array of 5 objects and this will result in 5 RepoItem components

// and remember to include PropTypes for " repos " and import in PropTypes above

// and remember to import in the RepoItem component above and let's go to the
// repo-item.component.jsx file now


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