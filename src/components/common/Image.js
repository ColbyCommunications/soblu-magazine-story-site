/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
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
                    <div className="d-flex mt-2">
                        <div
                            style={{
                                backgroundColor: bgcolor,
                                color,
                                flex: '1',
                            }}
                            className="p-2 mr-2"
                        >
                            {props.caption}
                        </div>
                        <div>
                            <button type="button" className="btn btn-dark" onClick={props.onClick}>
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
