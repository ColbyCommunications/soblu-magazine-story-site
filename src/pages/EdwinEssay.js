import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import Image from '../components/common/Image';
import FsLightbox from 'fslightbox-react';

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
        'images/Colby_SOBLU_Torres0011.jpg',
        'images/Colby_SOBLU_Torres0010.jpg',
        'images/Colby_SOBLU_Torres0013.jpg',
        'images/Colby_SOBLU_Torres0012.png',
        'images/Colby_SOBLU_Torres0014.jpg',
        'images/Colby_SOBLU_Torres0015.jpg',
        'images/Colby_SOBLU_Torres0016.jpg',
        'images/Colby_SOBLU_Torres0017.jpg',
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
            <div className="container edwin-essay-page">
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
                <div className="row soblu-desktop-hide" id="soblu-title">
                    <div className="col" style={{ marginTop: '3rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 977.526 591.123">
                            <title>SOBU At 50</title>
                            <path
                                d="M70.849,152.711c5.639,19.11,20.049,26,39.159,26,8.459,0,25.376-1.253,25.376-13.158,0-13.158-16.6-15.663-26.316-17.543-40.412-7.832-88.344-18.8-88.344-69.861,0-20.99,10.338-41.666,27.568-53.884,17.544-12.218,40.414-16.29,61.716-16.29,37.281,0,73.307,15.35,86.465,52.63l-54.51,16.6C135.7,61.234,123.792,55.6,107.189,55.6c-8.772,0-21.3,2.506-21.3,13.784S101.55,82.85,109.7,84.729c20.363,4.073,41.979,7.519,60.776,17.231,20.989,11.278,31.954,31.328,31.954,54.824,0,51.691-51.377,72.367-95.863,72.367-45.112,0-85.211-18.8-96.8-65.475Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M424.533,119.19c0,61.089-37.593,109.961-102.755,109.961S219.023,180.279,219.023,119.19c0-64.222,37.28-111.213,102.755-111.213S424.533,54.968,424.533,119.19ZM289.51,119.5c0,20.677,2.194,60.463,32.268,60.463s32.268-39.786,32.268-60.463c0-20.989-3.133-62.968-32.268-62.968S289.51,98.514,289.51,119.5Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M444.266,11.109H549.214c16.291,0,32.894,1.253,46.366,10.965,14.411,10.338,22.869,27.882,22.869,45.426,0,22.555-14.41,41.666-36.341,46.678v.626c24.75,4.386,41.667,23.183,41.667,48.872,0,18.483-6.579,39.159-21.93,50.124-16.6,11.905-39.786,12.218-59.21,12.218H444.266ZM531.357,93.5c6.266,0,13.785.313,18.484-4.072a19.534,19.534,0,0,0,6.265-14.1c0-15.977-13.157-18.17-25.689-18.17H504.729V93.5Zm1.88,84.585c6.579,0,13.784.314,19.11-4.072a18.708,18.708,0,0,0-2.506-31.954c-5.639-2.82-13.158-2.82-19.11-2.82h-26v38.846Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M800.144,226.018H649.458V11.109h66.415V173.387h84.271Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M987.167,149.265c0,25.062-2.819,45.112-23.5,61.715-18.483,14.412-41.039,18.171-63.6,18.171-19.737,0-45.425-4.386-62.03-15.351-22.869-15.037-27.254-35.4-27.254-61.089V11.109h67.041V145.192c0,7.2-.313,16.917,4.073,23.5,5.012,6.892,15.037,9.712,23.5,9.712,7.518,0,16.917-2.193,22.556-7.206,8.459-7.2,7.518-18.483,7.518-28.508V11.109h51.691Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M257.048,594.553h-40.01l-31.372-90.934H70.181L42.446,594.553H9.71l100.936-311.9h45.012ZM129.287,324.481,81.093,474.066h95.934Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M364.353,594.553h-39.1v-277.8h-88.66v-34.1H453.012v34.1H364.353Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M560.312,359.49l-4.093,44.1A100.439,100.439,0,0,1,612.6,386.315c25.461,0,53.651,10.913,71.837,28.19,20.006,19.551,29.554,46.376,29.554,74.11,0,70.474-58.653,110.485-124.579,110.485-61.38,0-116.394-31.828-127.306-95.481l80.476-10c4.091,22.279,22.733,34.1,44.557,34.1,21.369,0,37.282-15.459,37.282-37.282,0-23.189-16.368-38.193-39.1-38.193-15,0-28.644,6.82-36.373,19.551l-71.838-10,13.641-179.138H698.985L690.8,359.49Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M863.112,278.105c92.752,0,124.124,84.114,124.124,162.771,0,77.293-35.009,158.224-124.124,158.224S738.989,518.169,738.989,440.876C738.989,362.219,770.361,278.105,863.112,278.105Zm0,65.472c-15.458,0-34.1,5-34.1,97.753,0,87.751,21.824,92.3,34.1,92.3,11.821,0,34.1-1.364,34.1-92.3C897.212,370.4,888.119,343.577,863.112,343.577Z"
                                transform="translate(-9.71 -7.977)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-right">
                        <h2 className="inner-byline">Photography essay by Edwin J. Torres ’12</h2>
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
                <div className="row" id="soblu-vertical-menu">
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
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0001.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(2)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0001.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(2)}
                                        caption="Doris’s granddaughter checks her makeup and hair before a
                                    portrait session on her porch in Washington D.C. in February
                                    2020."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-11">
                                <div style={{ marginBottom: '1rem' }}>
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
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0003.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(4)}
                                        caption=""
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0003.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(4)}
                                        caption="Miller Library on Mayflower Hill in February of 2020."
                                    />
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
                                    <div className="soblu-mobile-hide">
                                        <Image
                                            src={{
                                                main: 'images/Colby_SOBLU_Torres0006.jpg',
                                            }}
                                            altText=""
                                            onClick={() => openLightboxOnSlide(7)}
                                        />
                                    </div>
                                    <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                        <Image
                                            src={{
                                                main: 'images/Colby_SOBLU_Torres0006.jpg',
                                            }}
                                            altText=""
                                            onClick={() => openLightboxOnSlide(7)}
                                            caption="Juan Luna ’20, co-president, in front of a mural wall made
                                            to inspire club members."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer rohnique-davy">
                            <div className="col-md-13">
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0007.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(8)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0007.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(8)}
                                        caption="Rohnique Davy ’22 poses for a portrait on the SOBLU couch
                                    and President Obama “Hope” poster."
                                    />
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
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0011.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(11)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0011.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(11)}
                                        caption="Reagen Dennis ’23 poses for a portrait by the club computer
                                    in the SOBLU room."
                                    />
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
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0010.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(12)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0010.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(12)}
                                        caption="Kenny Douyon ’23 by the Colby student mailboxes during his
                                    freshman year. Kenny traveled from Massachusetts to attend
                                    Colby. He was the first student I met while visiting campus
                                    for the story. I walked into the SOBLU club room unannounced
                                    and saw him lying on the couch bumping hip-hop music and
                                    nodding along."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <div>
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0013.jpg',
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
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0014.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(15)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0014.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(15)}
                                        caption="Donte Tates ’05 reflects on his SOBLU experience from his
                                        home terrace in Washington D.C. Donte currently teaches
                                        literature, psychology, queer studies, and public speaking.
                                        Tates says SOBLU was where he discovered himself in terms of
                                        his identity. Now, he’s trying to do the same for his
                                        students as a teacher."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-13">
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0015.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(16)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0015.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(16)}
                                        caption="Donte’s desk at the Maret School in Washington D.C. in
                                    February."
                                    />
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
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0016.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(17)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide mobile-interrupt-block-margin">
                                    <Image
                                        src={{
                                            main: 'images/Colby_SOBLU_Torres0016.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(17)}
                                        caption="Ashley Olvera ’20 in her dorm room in downtown Waterville."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <Image
                                src={{
                                    main: 'images/Colby_SOBLU_Torres0017.jpg',
                                }}
                                altText=""
                                onClick={() => openLightboxOnSlide(18)}
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
