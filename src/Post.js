import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src='https://lh3.googleusercontent.com/ogw/ADGmqu9aQEuH_CW4CVeiglI9AhtWlNJhp72ZQeawqW7DLg=s32-c-mo' />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Leila Baneshi <small>{'@leila.bni'}</small>
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className='post__badge' />
                            </span>
                        </h3>
                    </div>
                    <div className="Post__headerDescription">
                        <p> i made a twitter clone </p>
                    </div>
                </div>

                <img src="https://media.giphy.com/media/qxsgm2X2Fb5WE/giphy.gif" alt='gif' />

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post
