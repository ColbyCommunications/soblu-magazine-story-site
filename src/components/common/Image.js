/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    if (props.caption) {
        let bgcolor = '#fff';
        let color = 'auto';
        if (props.isBlackCaption) {
            bgcolor = '#000';
            color = '#fff';
        }

        return (
            <div className="d-table soblu-image">
                <div>
                    <img
                        src={props.src.main}
                        className="img-fluid"
                        alt={props.altText}
                        onClick={props.onClick}
                    />
                </div>
                <div className="span-caption">
                    <div
                        className="d-flex"
                        style={{
                            marginTop: '5px',
                        }}
                    >
                        <div
                            style={{
                                padding: '7px',
                                backgroundColor: bgcolor,
                                color: color,
                                flex: '1',
                                marginRight: '5px',
                            }}
                        >
                            {props.caption}
                        </div>
                        <div>
                            <button className="btn btn-dark" onClick={props.onClick}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <img
                src={props.src.main}
                className="img-fluid"
                alt={props.altText}
                onClick={props.onClick}
            />
        </>
    );
};

Image.propTypes = {
    src: PropTypes.object.isRequired,
    altText: PropTypes.string.isRequired,
    caption: PropTypes.string,
    isBlackCaption: PropTypes.bool,
    onClick: PropTypes.func,
};

Image.defaultProps = {
    caption: null,
    isBlackCaption: false,
    onClick: () => {},
};

export default Image;
