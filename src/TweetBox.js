import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GhTDsRNWbPThMR3kDn3Xz_2PgeKjnXiY6L4MPjprA=s88-c-k-c0x00ffffff-no-rj-mo' />

                    <input placeholder='What is happening?' type='text' />
                </div>

                <input className="tweetBox__inputImage"
                    placeholder='Enter image URL' type='text' />

                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
