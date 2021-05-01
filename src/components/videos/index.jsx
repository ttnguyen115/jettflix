import React from 'react'

import './_videos.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Avatar from '@material-ui/core/Avatar';

const Videos = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="" alt=""/>
                <span>50:30</span>
            </div>

            <div className="video__title">
                Test videoasdfakjsndfkjabsdjlghablsjkdbgajlhsdbfkajhsdbfkj
            </div>

            <div className="video__details">
                <span>
                    <VisibilityIcon /> 5m views
                </span>

                <span>5 days ago</span>
            </div>

            <div className="video__channel">
                <Avatar src="/broken-image.jpg" /> 
                <p>Jett Nguyen</p>
            </div>
        </div>
    )
}

export default Videos
