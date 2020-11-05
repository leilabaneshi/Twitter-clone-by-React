import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Leila Baneshi',
            username: 'leilabaneshi',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu9aQEuH_CW4CVeiglI9AhtWlNJhp72ZQeawqW7DLg=s32-c-mo'
        });
        setTweetMessage('');
        setTweetImage('')
    }


    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GhTDsRNWbPThMR3kDn3Xz_2PgeKjnXiY6L4MPjprA=s88-c-k-c0x00ffffff-no-rj-mo' />

                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder='What is happening?'
                        type='text' />
                </div>

                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__inputImage"
                    placeholder='Enter image URL'
                    type='text' />

                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
