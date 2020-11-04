import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className='feed'>

            {/**Header */}
            <div className="feed__header">
                <h2>home</h2>
            </div>
            {/**TweetBOX */}
            <TweetBox />
            {/**Post */}
        </div>
    )
}

export default Feed
