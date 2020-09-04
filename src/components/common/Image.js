/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
    static propTypes = {
        src: PropTypes.object.isRequired,
        altText: PropTypes.string.isRequired,
        useLightbox: PropTypes.bool,
        lightboxGallery: PropTypes.string,
        lightboxSrc: PropTypes.string,
        caption: PropTypes.string,
        isBlackCaption: PropTypes.bool,
    };

    static defaultProps = {
        useLightbox: true,
        lightboxGallery: '',
        lightboxSrc: '',
        caption: null,
        isBlackCaption: false,
    };

    customTriggerClick = () => {
        const lightbox = new FsLightbox();
        const blocks = document.querySelectorAll(`[data-fslightbox=${this.props.lightboxGallery}]`);
        const otherGalleryImages = [];
        if (blocks.length > 0) {
            blocks.forEach((block) => {
                lightbox.props.sources = [];
                otherGalleryImages.push(block.getAttribute('href'));
            });
        }
        // set up props, like sources, types, events etc.
        lightbox.props.sources = [this.props.lightboxSrc].concat(otherGalleryImages);
        lightbox.open();
    };

    render() {
        if (this.props.caption) {
            let bgcolor = '#fff';
            let color = 'auto';
            if (this.props.isBlackCaption) {
                bgcolor = '#000';
                color = '#fff';
            }

            return (
                <div>
                    <div>
                        <a
                            data-fslightbox={
                                this.props.lightboxGallery ? this.props.lightboxGallery : 'gallery'
                            }
                            href={this.props.lightboxSrc}
                            data-type="image"
                            data-caption={this.props.caption}
                        >
                            <img
                                src={this.props.src.main}
                                className="img-fluid"
                                alt={this.props.altText}
                            />
                        </a>
                    </div>
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
                            {this.props.caption}
                        </div>
                        <button className="btn btn-dark" onClick={this.customTriggerClick}>
                            +
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <a
                data-fslightbox={
                    this.props.lightboxGallery ? this.props.lightboxGallery : 'gallery'
                }
                href={this.props.lightboxSrc}
                data-type="image"
                data-caption={this.props.caption}
            >
                <img src={this.props.src.main} className="img-fluid" alt={this.props.altText} />
            </a>
        );
    }
}
