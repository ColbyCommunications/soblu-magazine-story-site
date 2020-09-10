import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import { Link } from 'react-router-dom';
import Image from '../components/common/Image';
import FsLightbox from 'fslightbox-react';
import Swiper from '@colbycommunications/colby-swiper-component';
import Template from '../components/Templates/SwiperTemplate';
import Modal from '@colbycommunications/colby-modal';

const EdwinEssay = () => {
    const [lightboxController, setLightboxController] = useState({
        isLightboxOpen: false,
        slide: 1,
    });

    const lightboxImages = [
        'images/Colby_SOBLU_Torres0016A.png',
        'images/Colby_SOBLU_Torres0001.png',
        'images/Colby_SOBLU_Torres0002.png',
        'images/Colby_SOBLU_Torres0003.png',
        'images/Colby_SOBLU_Torres0005.png',
        'images/Colby_SOBLU_Torres0004.png',
        'images/Colby_SOBLU_Torres0006.png',
    ];

    const lightboxCaptions = [
        'Edwin Torres ’12',
        'Doris’s granddaughter checks her makeup and hair before a portrait session on her porch in Washington D.C. in February 2020.',
        'A portrait of Doris Ford Mathis ‘73 at the Washington D.C. home. Doris was a first-year student when SOBLU was originally founded on Colby’s campus.',
        'Miller Library on Mayflower Hill in February of 2020.',
        'Students play a series of card games during a social night on a wintry Saturday in the SOBLU club room.',
        'Juan Luna ’20, co-president, in front of a mural wall made to inspire club members.',
    ];

    function openLightboxOnSlide(number) {
        setLightboxController({
            isLightboxOpen: !lightboxController.isLightboxOpen,
            slide: number,
        });
    }

    return (
        <>
            <Nav />
            <div className="container">
                <div className="row soblu-mobile-hide" id="soblu-title">
                    <div className="col-sm text-right">
                        <h1>
                            <span
                                style={{
                                    fontFamily: 'franklin-gothic-urw, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: '900',
                                }}
                            >
                                SOBLU
                            </span>
                            <span
                                style={{
                                    fontFamily: 'franklin-gothic-urw, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: '100',
                                }}
                            >
                                AT
                            </span>
                            <span
                                style={{
                                    fontFamily: 'franklin-gothic-urw, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: '900',
                                }}
                            >
                                50
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-right">
                        <h2 style={{ fontSize: '1.5rem' }}>
                            Photography essay by Edwin J. Torres ’12
                        </h2>
                    </div>
                </div>
                <div className="row soblu-first-section-inner">
                    <div className="col-md-10 offset-md-2">
                        <div
                            style={{
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '2rem',
                            }}
                            className="mb-4"
                        >
                            The Meaning of Home
                        </div>
                        <Image
                            src={{
                                main: 'images/Colby_SOBLU_Torres0016A.png',
                            }}
                            altText=""
                            onClick={() => openLightboxOnSlide(1)}
                            caption="Edwin Torres ’12"
                        />
                    </div>
                    <div className="col-md-12">
                        <p>
                            Photographing for Colby Magazine has prompted me to revisit the meaning
                            of home. What is it that best reminds us of home? Is it a porch with a
                            slow rocker? Is it the presence of loved ones? Is it the smell? Or is it
                            the collective feeling that we are all in this together? It’s a
                            combination of all of these things.
                        </p>
                        <p>
                            As I sat on the porch at the home of Doris Ford Mathis ‘73 in
                            Washington, D.C., it clicked. I took photographs of her with a twin-lens
                            reflex camera of the 1970s. She was part of the founding group of
                            students of Students Organized for Black and Latinx Unity (SOBLU). Doris
                            made it clear. The reason the club was created then was simple. To have
                            a sense of home and community in a renowned institution that was far
                            away from home.
                        </p>
                        <p>
                            As a student from the Bronx, N.Y., I traveled to Colby from a high
                            school that was 98 percent Hispanic and black. There was a certain
                            culture and rhythm to us whenever we hung out or even interacted. I
                            found this same rhythm at SOBLU. The club represented a sense of home
                            and family. In this new home, I would do a variety of things. I would
                            take a nap on the infamous couch after lunch before biology class,
                            listen to some Biggie and Tupac, or vote on strong club initiatives.
                        </p>
                    </div>
                </div>
                <div className="row" id="soblu-vertical-menu" style={{ marginTop: '5rem' }}>
                    <div
                        className="col-md-2 d-flex justify-content-center"
                        style={{ position: 'relative' }}
                    >
                        <div className="soblu-vertical-menu-container soblu-mobile-hide">
                            <div className="soblu-vertical-menu-sticky">
                                <SideNav />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-22">
                        <div className="row section-spacer">
                            <div className="col-md-11 d-flex align-items-center">
                                <div className="soblu-mobile-hide">
                                    <p className="soblu-img-caption">
                                        Doris’s granddaughter checks her makeup and hair before a
                                        portrait session on her porch in Washington D.C. in February
                                        2020.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0001.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(2)}
                                />

                                <p className="soblu-img-caption soblu-desktop-hide">
                                    Doris’s granddaughter checks her makeup and hair before a
                                    portrait session on her porch in Washington D.C. in February
                                    2020.
                                </p>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-11">
                                <div className="d-table">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0002.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(3)}
                                        caption="A portrait of Doris Ford Mathis ‘73 at the Washington
                                        D.C. home. Doris was a first-year student when SOBLU was
                                        originally founded on Colby’s campus."
                                    />
                                </div>
                            </div>
                            <div className="col-md-13">
                                <p>
                                    The sense of comfort in knowing that you all share similar
                                    perspectives and are looking out for each other—that was a
                                    powerful feeling. Whether it was the 1970s or decades later, the
                                    young ambitious faces that filled the room and created a sense
                                    of home, now in the present, remained the same. It is this
                                    timeless quality that I was looking to instill in my work.
                                    Working on this photo essay was a true blessing. I had the
                                    opportunity to meet SOBLU members from almost every major era in
                                    New York City, Washington D.C., and Maine. It was a process of
                                    sharing stories and catching up on life since Colby. With the
                                    students on campus, I felt incredibly humbled to be let into
                                    their “era of SOBLU.” I was wholeheartedly impressed with how
                                    they fostered community and contributed to the greater campus
                                    through their maturity. I listened to their stories and I
                                    embraced them.
                                </p>
                                <p>
                                    I made these photographs with the intention of preserving a
                                    slice of “home” for a club with an immense history. Many of my
                                    photographs were shot on medium format film and hand developed
                                    at my home. This slower process helped my subjects slow down
                                    from their usual routine and reflect on the importance of our
                                    collective narrative. For me, this process filled my heart with
                                    a warm feeling and I was humbled to be able to listen and see.
                                </p>
                                <p className="text-right">
                                    <b>&mdash; Edwin J. Torres ’12</b>
                                </p>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div
                                className="col-md-11 d-flex align-items-center justify-content-center"
                                style={{ flexDirection: 'column' }}
                            >
                                <div className="soblu-mobile-hide">
                                    <p
                                        className="soblu-img-caption"
                                        style={{ marginTop: '2.5rem' }}
                                    >
                                        Caption lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0003.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(4)}
                                    caption=""
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Caption lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <div>
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0005.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(5)}
                                        caption="Students play a series of card games during a social
                                        night on a wintry Saturday in the SOBLU club room."
                                    />
                                </div>
                            </div>
                            <div className="col-md-11 d-flex align-items-center">
                                <div className="soblu-edwin-adjust-left">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0004.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(6)}
                                        caption="Kris de Luna ’20 is co-president of the SOBLU this year."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-11 d-flex align-items-center">
                                <div className="soblu-mobile-hide">
                                    <p className="soblu-img-caption">
                                        Juan Luna ’20, co-president, in front of a mural wall made
                                        to inspire club members.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-13">
                                <div className="soblu-edwin-adjust-left">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0006.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(7)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-11 d-flex align-items-center justify-content-center">
                                <div style={{ maxWidth: '350px' }}>
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0009.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(8)}
                                        caption="A photograph of Lorimer Chapel."
                                    />
                                </div>
                            </div>
                            <div className="col-md-13">
                                <div className="soblu-edwin-adjust-left">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0008.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(9)}
                                        caption="in Harlem, New York City, James Reynolds ’90 works on his artwork in his home studio. James was president of SOBHU and his goal then was to collaborate further with the international club."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FsLightbox
                toggler={lightboxController.isLightboxOpen}
                sources={lightboxImages}
                captions={lightboxCaptions}
                slide={lightboxController.slide}
            />
        </>
    );
};

export default EdwinEssay;
