/* eslint-disable react/no-array-index-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ClickButton from '@colbycommunications/colby-click-button-component';
import PropTypes from 'prop-types';
import Style from './style.css';

const SwiperTemplate = props => {
    const goNext = () => {
        if (props.sliderRef.current !== null && props.sliderRef.current.swiper !== null) {
            props.sliderRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (props.sliderRef.current !== null && props.sliderRef.current.swiper !== null) {
            props.sliderRef.current.swiper.slidePrev();
        }
    };

    return (
        <>
            {props.slider}
            <div className={`d-flex ${Style.navigationContainer}`}>
                <div
                    style={{
                        textTransform: 'uppercase',
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '7px',
                        flex: '1',
                        marginRight: '5px',
                    }}
                >
                    <span className="heavy">Document</span> Letter of demands
                </div>
                <div>
                    <ClickButton
                        className="btn"
                        title={
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-chevron-left"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                            </svg>
                        }
                        onClick={goPrev}
                    >
                        Prev
                    </ClickButton>
                    <ClickButton
                        className="btn"
                        title={
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-chevron-right"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        }
                        onClick={goNext}
                    >
                        Next
                    </ClickButton>
                </div>
            </div>
            <div
                style={{
                    marginTop: '5px',
                }}
            >
                SOBU’s letter to the administration. March 2, 1970.
            </div>
        </>
    );
};

SwiperTemplate.propTypes = {
    slider: PropTypes.node.isRequired,
    sliderRef: PropTypes.node.isRequired,
};

export default SwiperTemplate;
