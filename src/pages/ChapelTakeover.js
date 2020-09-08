import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import { Link } from 'react-router-dom';
import Image from '../components/common/Image';
import FsLightbox from 'fslightbox-react';
import Swiper from '@colbycommunications/colby-swiper-component';
import Template from '../components/Templates/SwiperTemplate';
import Modal from '@colbycommunications/colby-modal';

const ChapelTakeover = () => {
    const [lightboxController, setLightboxController] = useState({
        isLightboxOpen: false,
        slide: 1,
    });

    const slides = [
        {
            content: (
                <img src="https://www.colby.edu/celebrate2020/images/hats-and-miller-Comm2016-162_optimized.jpg" />
            ),
            type: 'image',
        },
        {
            content: (
                <img src="https://www.colby.edu/wp-content/uploads/2020/08/Will-Johnson-homepage-02-1.jpg" />
            ),
            type: 'image',
        },
    ];

    const lightboxImages = [
        'images/Long-view-of-chapel-gathering-students-speakers-on-balcony.png',
        'images/chapel-takover-slide-wide-at-podium.png',
        'images/chapel-takover-slide-at-podium.png',
    ];

    const lightboxCaptions = [
        'Students gathered in front of Lorimer Chapel to hear SOBU17’s speech on March 1970.',
        'SOBU17 and the student government representatives addressed the crowd and reiterated SOBU’s demands.',
        'Charles Terrell ’70 (in glasses) alongside SOBU17 and student government leaders in front of Lorimer Chapel.',
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
                        <h2 style={{ fontSize: '1.5rem' }}>Chapel Takeover | March 1970</h2>
                    </div>
                </div>
                <div className="row soblu-first-section-inner">
                    <div className="col-md-12" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flexGrow: '2' }}>
                            <div
                                className="row fgCompressed"
                                style={{
                                    fontWeight: '600',
                                    fontSize: '2.6rem',
                                }}
                            >
                                <div className="heading1">The Insiders</div>
                            </div>
                            <div
                                className="row mt-4"
                                style={{
                                    fontSize: '1.3rem',
                                }}
                            >
                                <div className="col-lg-20">
                                    Four of the seventeen students from the Chapel Takeover recount
                                    the landmark event
                                </div>
                            </div>
                        </div>
                        <div style={{ flexGrow: '1' }}>
                            <div className="row" style={{ fontSize: '1.4rem' }}>
                                <div
                                    className="col-lg-20 offset-lg-2"
                                    style={{ fontSize: '1.4rem' }}
                                >
                                    <p>
                                        <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                            “I didn’t want to drop out of school because I got a ‘C’
                                            instead of a ’B.’”
                                        </span>
                                    </p>
                                    <p>—Doris Ford Mathis ’73</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ flexGrow: '1' }}></div>
                    </div>
                    <div className="col-md-12">
                        <p>
                            Despite being a shy student from Mobile, Ala., Doris Ford Mathis ’73
                            wasn’t the type to stay silent on issues of injustice. So on the night
                            of March 2, 1970, Mathis, then a first-year, packed her class books and
                            bedding and headed over to Lorimer Chapel, where she joined the rest of
                            SOBU members, who later became known as SOBU17.
                        </p>
                        <p>
                            SOBU had five demands of the College: have at least 50 Black students in
                            the incoming class; start a Black Sub-Freshman week; eliminate the
                            higher GPA requirement for students receiving financial aid; establish a
                            Black studies program; ensure 10 percent Black student enrollment in the
                            classes after 1974. These were a continuation of an earlier set of
                            proposals, first proposed as “A Program of Necessary Improvements at
                            Colby College” in March 1969, followed by “Proposal for a New Colby.”
                        </p>
                        <p>
                            “Hence, the student body has given the committee system a year and as a
                            result has gained nothing more than more committees,” wrote the SOBU
                            members, in a letter published in the Echo on March 6, 1970. “The
                            Student Organization for Black Unity is now taking action simply because
                            we feel that our concerns cannot wait another year.”
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
                        <div className="row">
                            <Image
                                src={{
                                    main:
                                        'images/Long-view-of-chapel-gathering-students-speakers-on-balcony.png',
                                }}
                                altText=""
                                onClick={() => openLightboxOnSlide(1)}
                                caption="Students gathered in front of Lorimer Chapel to hear SOBU17’s speech on March 1970."
                            />
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row" style={{ fontSize: '1.4rem' }}>
                                    <div
                                        className="col-lg-20 offset-lg-2"
                                        style={{ fontSize: '1.4rem' }}
                                    >
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “Some schools took over the administration but that
                                                was too much for us; we didn’t feel like we should
                                                interfere with the activity of the school.”
                                            </span>
                                        </p>
                                        <p>—Sebsibe Mamo ’70</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    “To say that if you can’t keep up the average, you lose your
                                    financial aid—that would have left me nowhere,” said Mathis in
                                    an interview at a public library close to her home in Washington
                                    D.C. Mathis came to Colby on a full scholarship and was one of
                                    the first in her immediate family to attend college. “I didn’t
                                    want to drop out of school because I got a ‘C’ instead of a
                                    ‘B.’”
                                </p>
                                <p>
                                    It was decided to organize a sit-in—fitting for the spirit of
                                    the era. “The atmosphere in the country was civil rights and gay
                                    needs and acceptance,” explained Mathis. “In my mind, I was
                                    ready.”
                                </p>
                                <p>
                                    The chapel, used mostly on Sundays and occasional activities
                                    like jazz band practice, was chosen as the location of the
                                    takeover because it would allow for the protest but would not
                                    disrupt the campus.
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col-md-12">
                                <Image
                                    src={{
                                        main: 'images/chapel-takover-slide-wide-at-podium.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(2)}
                                    caption="SOBU17 and the student government representatives addressed the crowd and reiterated SOBU’s demands."
                                />
                            </div>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-20 offset-lg-2">
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “Coming to Colby was a huge cultural shock for me.”
                                            </span>
                                        </p>
                                        <p style={{ fontSize: '1.4rem', marginBottom: '0' }}>
                                            —Charles Terrell ’70
                                        </p>
                                        <div className="d-flex">
                                            <div
                                                style={{
                                                    padding: '7px',
                                                    backgroundColor: '#fff',
                                                    color: '#000',
                                                    flex: '1',
                                                    marginRight: '5px',
                                                }}
                                            >
                                                More on Terrell’s journey to and from Colby
                                            </div>
                                            <Modal
                                                trigger={
                                                    <button
                                                        type="button"
                                                        className="btn btn-dark"
                                                        style={{ fontSize: '1rem' }}
                                                    >
                                                        <svg
                                                            width="1em"
                                                            height="1em"
                                                            viewBox="0 0 16 16"
                                                            className="bi bi-card-text"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                                            />
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                                                            />
                                                        </svg>
                                                    </button>
                                                }
                                                showModalCloseButton
                                                title={'I am a modal'}
                                            >
                                                <div>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa
                                                    qui officia deserunt mollit anim id est laborum.
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col">
                                <Swiper
                                    slides={slides}
                                    params={{
                                        slidesPerView: 1,
                                        loop: true,
                                    }}
                                    template={Template}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row" style={{ fontSize: '1.4rem' }}>
                                    <div className="col-lg-20 offset-lg-2">
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “One of the things that is interesting about Colby
                                                is that the minority population was pretty scarce
                                                and that didn’t bother me that much because I’d gone
                                                to prep school ...”
                                            </span>
                                        </p>
                                        <p style={{ fontSize: '1.4rem' }}>—Vincent Guess ’73</p>
                                        <div className="d-flex">
                                            <div
                                                style={{
                                                    padding: '7px',
                                                    backgroundColor: '#fff',
                                                    color: '#000',
                                                    flex: '1',
                                                    marginRight: '5px',
                                                }}
                                            >
                                                More on Guess’s journey to and from Colby
                                            </div>
                                            <Modal
                                                trigger={
                                                    <button type="button" className="btn btn-dark">
                                                        <svg
                                                            width="1em"
                                                            height="1em"
                                                            viewBox="0 0 16 16"
                                                            className="bi bi-card-text"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                                            />
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                                                            />
                                                        </svg>
                                                    </button>
                                                }
                                                showModalCloseButton
                                                title={'I am a modal'}
                                            >
                                                <div>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa
                                                    qui officia deserunt mollit anim id est laborum.
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    “Some schools took over the administration but that was too much
                                    for us; we didn’t feel like we should interfere with the
                                    activity of the school,” said Sebsibe Mamo ’70, an Ethiopian
                                    student and Olympic team track athlete who boycotted the 1968
                                    Olympics to protest South Africa’s participation during the
                                    apartheid.
                                </p>
                                <p>
                                    “In those days, …nobody would pay attention to you, nobody would
                                    create any solution or understanding if you didn’t do something
                                    like that,” he said. “We decided to just have a sit-in at the
                                    chapel and they made a big deal about it. But we… just wanted to
                                    get attention to the problem and we wanted Colby to address the
                                    problem because it was a nice school.”
                                </p>
                                <p>
                                    The occupiers said they passed the time studying, reading—and
                                    discussing SOBU and its structure. What should it be like? Who
                                    could join? What would it do?
                                </p>
                                <p>
                                    Music was the backdrop to their conversations, they recalled,
                                    and they blared their tunes across campus during class hours and
                                    evenings from loudspeakers facing out of the Lorimer Chapel.
                                    That week, students in classes could hear, “Yes, my skin is
                                    Black. But that’s no reason to hold me back,” from “Message From
                                    a Black Man” by The Temptations. This particular song
                                    particularly expressed the feelings of the SOBU17. The lyrics
                                    went, “This is a message. A message to y’all: Together we stand,
                                    Divided we fall.”
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <Image
                                src={{
                                    main: 'images/chapel-takover-slide-at-podium.png',
                                }}
                                altText=""
                                onClick={() => openLightboxOnSlide(3)}
                                caption="Charles Terrell ’70 (in glasses) alongside SOBU17 and student government leaders in front of Lorimer Chapel."
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

export default ChapelTakeover;
