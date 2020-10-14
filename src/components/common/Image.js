/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';
import FsLightbox from 'fslightbox-react';

const Image = props => {
    const [lightboxController, setLightboxController] = useState({
        isLightboxOpen: false,
        slide: 1,
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            isLightboxOpen: !lightboxController.isLightboxOpen,
            slide: number,
        });
    }

    if (props.caption) {
        let bgcolor = '#fff';
        let color = 'auto';
        if (props.isBlackCaption) {
            bgcolor = '#000';
            color = '#fff';
        }

        return (
            <>
                <div className="soblu-image">
                    <div>
                        <ProgressiveImage src={props.src.main} placeholder={props.src.thumbnail}>
                            {(src, loading) => (
                                <img
                                    style={{
                                        ...{ filter: 'none' },
                                        width: '100%',
                                        filter: loading ? 'blur(3px)' : 'none',
                                        transition: 'filter 100ms ease-in',
                                    }}
                                    src={src}
                                    className="img-fluid"
                                    alt={props.altText}
                                    onClick={() => openLightboxOnSlide(1)}
                                />
                            )}
                        </ProgressiveImage>
                    </div>
                    <div>
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
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    onClick={() => openLightboxOnSlide(1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <FsLightbox
                    toggler={lightboxController.isLightboxOpen}
                    sources={[props.lightboxSrc]}
                    captions={[props.caption]}
                    slide={1}
                />
            </>
        );
    }

    return (
        <>
            <ProgressiveImage src={props.src.main} placeholder={props.src.thumbnail}>
                {(src, loading) => (
                    <img
                        style={{
                            ...{ filter: 'none' },
                            width: '100%',
                            filter: loading ? 'blur(3px)' : 'none',
                            transition: 'filter 100ms ease-in',
                        }}
                        src={src}
                        className="img-fluid"
                        alt={props.altText}
                        onClick={() => openLightboxOnSlide(1)}
                    />
                )}
            </ProgressiveImage>
            <FsLightbox
                toggler={lightboxController.isLightboxOpen}
                sources={[props.lightboxSrc]}
                captions={[props.caption]}
                slide={1}
            />
        </>
    );
};

Image.propTypes = {
    src: PropTypes.object.isRequired,
    altText: PropTypes.string.isRequired,
    caption: PropTypes.string,
    isBlackCaption: PropTypes.bool,
    lightboxSrc: PropTypes.string.isRequired,
};

Image.defaultProps = {
    caption: null,
    isBlackCaption: false,
};

export default Image;
