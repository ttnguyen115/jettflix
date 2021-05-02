import React from 'react'

import './_videos.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';

const Videos = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="/hero-1.jpg" alt=""/>
                <span>50:30</span>
            </div>

            <div className="video__title">
                Test videoasdfakjsndfkjabsdjlghablsjkdbgajlhsdbfkajhsdbfkj
            </div>

            <div className="video__details">
                <span>
                    <VisibilityIcon /> 5m views <span> - 5 days ago </span>
                </span>
            </div>

            <div className="video__channel">
                <Avatar src="/broken-image.jpg" sizes="30px" /> 
                <p>Jett Nguyen</p>
            </div>
        </div>
    )
}

export default Videos
