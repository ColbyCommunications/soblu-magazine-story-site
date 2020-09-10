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
        'images/Colby_SOBLU_Torres0016A.jpg',
        'images/Colby_SOBLU_Torres0001.jpg',
        'images/Colby_SOBLU_Torres0002.png',
        'images/Colby_SOBLU_Torres0003.png',
        'images/Colby_SOBLU_Torres0005.jpg',
        'images/Colby_SOBLU_Torres0004.png',
        'images/Colby_SOBLU_Torres0006.jpg',
        'images/Colby_SOBLU_Torres0007.png',
        'images/Colby_SOBLU_Torres0009.jpg',
        'images/Colby_SOBLU_Torres0008.jpg',
        'images/Colby_SOBLU_Torres0011.png',
        'images/Colby_SOBLU_Torres0010.png',
        'images/Colby_SOBLU_Torres0013.png',
        'images/Colby_SOBLU_Torres0012.png',
        'images/Colby_SOBLU_Torres0014.png',
        'images/Colby_SOBLU_Torres0015.png',
        'images/Colby_SOBLU_Torres0016.png',
        'images/Colby_SOBLU_Torres0017.png',
    ];

    const lightboxCaptions = [
        'Edwin Torres ’12',
        'Doris’s granddaughter checks her makeup and hair before a portrait session on her porch in Washington D.C. in February 2020.',
        'A portrait of Doris Ford Mathis ‘73 at the Washington D.C. home. Doris was a first-year student when SOBLU was originally founded on Colby’s campus.',
        'Miller Library on Mayflower Hill in February of 2020.',
        'Students play a series of card games during a social night on a wintry Saturday in the SOBLU club room.',
        'Kris de Luna ’20 is co-president of the SOBLU this year.',
        'Juan Luna ’20, co-president, in front of a mural wall made to inspire club members.',
        'Rohnique Davy ’22 poses for a portrait on the SOBLU couch and President Obama “Hope” poster.',
        'A photograph of Lorimer Chapel.',
        'In Harlem, New York City, James Reynolds ’90 works on his artwork in his home studio. James was president of SOBHU and his goal then was to collaborate further with the international club.',
        'Reagen Dennis ’23 poses for a portrait by the club computer in the SOBLU room.',
        'Kenny Douyon ’23 by the Colby student mailboxes during his freshman year. Kenny traveled from Massachusetts to attend Colby. He was the first student I met while visiting campus for the story. I walked into the SOBLU club room unannounced and saw him lying on the couch bumping hip-hop music and nodding along.',
        'Sarah Martinez Roth ’11 is a Ph.D. candidate at Georgetown in tumor biology. Sarah was a president of the club in her years and was mentored by one of the original SOBU members Charles Terell of Class of 1970.',
        'A candid moment with Reagan Dennis ’22 and a few other students during a Saturday night at the Pugh Center.',
        'Donte Tates ’05 reflects on his SOBLU experience from his home terrace in Washington D.C. Donte currently teaches literature, psychology, queer studies, and public speaking. Tates says SOBLU was where he discovered himself in terms of his identity. Now, he’s trying to do the same for his students as a teacher.',
        'Donte’s desk at the Maret School in Washington D.C. in February.',
        'Ashley Olvera ’20 in her dorm room in downtown Waterville.',
        'Students sit tightly together on a SOBLU couch during one of their executive board club meetings on a Sunday night.',
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
                                main: 'images/Colby_SOBLU_Torres0016A.jpg',
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
                                        main: 'images/Colby_SOBLU_Torres0001.jpg',
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
                                        Miller Library on Mayflower Hill in February of 2020.
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
                                        Miller Library on Mayflower Hill in February of 2020.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <div>
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0005.jpg',
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
                                            main: 'images/Colby_SOBLU_Torres0006.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(7)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer rohnique-davy">
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0007.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(8)}
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Rohnique Davy ’22 poses for a portrait on the SOBLU couch
                                        and President Obama “Hope” poster.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-md-11 d-flex align-items-center justify-content-center"
                                style={{ flexDirection: 'column' }}
                            >
                                <div className="soblu-mobile-hide">
                                    <p
                                        className="soblu-img-caption"
                                        style={{ marginTop: '2.5rem' }}
                                    >
                                        Rohnique Davy ’22 poses for a portrait on the SOBLU couch
                                        and President Obama “Hope” poster.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-11 d-flex align-items-center justify-content-center">
                                <div style={{ maxWidth: '350px' }}>
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0009.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(9)}
                                        caption="A photograph of Lorimer Chapel."
                                    />
                                </div>
                            </div>
                            <div className="col-md-13">
                                <div className="soblu-edwin-adjust-left">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0008.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(10)}
                                        caption="In Harlem, New York City, James Reynolds ’90 works on his artwork in his home studio. James was president of SOBHU and his goal then was to collaborate further with the international club."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0011.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(11)}
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Reagen Dennis ’23 poses for a portrait by the club computer
                                        in the SOBLU room.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-md-11 d-flex align-items-center justify-content-center"
                                style={{ flexDirection: 'column' }}
                            >
                                <div className="soblu-mobile-hide">
                                    <p
                                        className="soblu-img-caption"
                                        style={{ marginTop: '2.5rem' }}
                                    >
                                        Reagen Dennis ’23 poses for a portrait by the club computer
                                        in the SOBLU room.
                                    </p>
                                </div>
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
                                        Kenny Douyon ’23 by the Colby student mailboxes during his
                                        freshman year. Kenny traveled from Massachusetts to attend
                                        Colby. He was the first student I met while visiting campus
                                        for the story. I walked into the SOBLU club room unannounced
                                        and saw him lying on the couch bumping hip-hop music and
                                        nodding along.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0010.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(12)}
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Kenny Douyon ’23 by the Colby student mailboxes during his
                                        freshman year. Kenny traveled from Massachusetts to attend
                                        Colby. He was the first student I met while visiting campus
                                        for the story. I walked into the SOBLU club room unannounced
                                        and saw him lying on the couch bumping hip-hop music and
                                        nodding along.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <div>
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0013.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(13)}
                                        caption="Sarah Martinez Roth ’11 is a Ph.D. candidate at Georgetown in tumor biology. Sarah was a president of the club in her years and was mentored by one of the original SOBU members Charles Terell of Class of 1970."
                                    />
                                </div>
                            </div>
                            <div className="col-md-11 d-flex align-items-center">
                                <div className="soblu-edwin-adjust-left">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0012.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(14)}
                                        caption="A candid moment with Reagan Dennis ’22 and a few other students during a Saturday night at the Pugh Center."
                                    />
                                </div>
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
                                        Donte Tates ’05 reflects on his SOBLU experience from his
                                        home terrace in Washington D.C. Donte currently teaches
                                        literature, psychology, queer studies, and public speaking.
                                        Tates says SOBLU was where he discovered himself in terms of
                                        his identity. Now, he’s trying to do the same for his
                                        students as a teacher.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0014.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(14)}
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Donte Tates ’05 reflects on his SOBLU experience from his
                                        home terrace in Washington D.C. Donte currently teaches
                                        literature, psychology, queer studies, and public speaking.
                                        Tates says SOBLU was where he discovered himself in terms of
                                        his identity. Now, he’s trying to do the same for his
                                        students as a teacher.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0015.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(15)}
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Donte’s desk at the Maret School in Washington D.C. in
                                        February.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-md-11 d-flex align-items-center justify-content-center"
                                style={{ flexDirection: 'column' }}
                            >
                                <div className="soblu-mobile-hide">
                                    <p
                                        className="soblu-img-caption"
                                        style={{ marginTop: '2.5rem' }}
                                    >
                                        Donte’s desk at the Maret School in Washington D.C. in
                                        February.
                                    </p>
                                </div>
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
                                        Ashley Olvera ’20 in her dorm room in downtown Waterville.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-13">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0016.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(16)}
                                />
                                <div className="soblu-desktop-hide">
                                    <p className="soblu-img-caption">
                                        Ashley Olvera ’20 in her dorm room in downtown Waterville.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <Image
                                src={{
                                    main: 'images/Colby_SOBLU_Torres0017.png',
                                }}
                                altText=""
                                onClick={() => openLightboxOnSlide(17)}
                                caption="Students sit tightly together on a SOBLU couch during one of their executive board club meetings on a Sunday night."
                            />
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
