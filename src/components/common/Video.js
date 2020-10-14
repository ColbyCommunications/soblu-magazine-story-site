import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const Video = props => (
    <div className="player-wrapper">
        <ReactPlayer
            className="react-player embed-responsive"
            url={props.url}
            width="100%"
            height="100%"
            playing
            controls
            light={props.image}
        />
    </div>
);

Video.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Video;
