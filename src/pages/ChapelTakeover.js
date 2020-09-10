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
        'images/chapel-takover-slide-group-inside-three-people.png',
        'images/newspaper-01-black-students-urge-colby-headline-crop.png',
        'images/Serving-injunction-900-wide.png',
    ];

    const lightboxCaptions = [
        'Students gathered in front of Lorimer Chapel to hear SOBU17’s speech on March 1970.',
        'SOBU17 and the student government representatives addressed the crowd and reiterated SOBU’s demands.',
        'Charles Terrell ’70 (in glasses) alongside SOBU17 and student government leaders in front of Lorimer Chapel.',
        'SOBU members, including Doris Ford ’73 (right), inside the chapel.',
        '',
        'Terrell (center) and SOBU17 served with a restraining order on March 9.',
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
                                    <p>&mdash;Doris Ford Mathis ’73</p>
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
                                        <p>&mdash;Sebsibe Mamo ’70</p>
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
                                            &mdash;Charles Terrell ’70
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
                                                                fillRule="evenodd"
                                                                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                                            />
                                                            <path
                                                                fillRule="evenodd"
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
                                        <p style={{ fontSize: '1.4rem' }}>
                                            &mdash;Vincent Guess ’73
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
                                                                fillRule="evenodd"
                                                                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                                            />
                                                            <path
                                                                fillRule="evenodd"
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
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-20 offset-lg-2">
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “I had [a] scholarship to go to Moscow University
                                                and Stockholm University but I had to study strictly
                                                sports [there].”
                                            </span>
                                        </p>
                                        <p style={{ fontSize: '1.4rem', marginBottom: '0' }}>
                                            &mdash;Sebsibe Mamo ’70
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
                                                More on Mamo’s journey to and from Colby
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
                                                                fillRule="evenodd"
                                                                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                                            />
                                                            <path
                                                                fillRule="evenodd"
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
                                <Image
                                    src={{
                                        main:
                                            'images/chapel-takover-slide-group-inside-three-people.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(4)}
                                    caption="SOBU members, including Doris Ford ’73 (right), inside the chapel."
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-20 offset-lg-2">
                                        <div style={{ marginBottom: '3rem' }}>
                                            <Image
                                                src={{
                                                    main:
                                                        'images/newspaper-01-black-students-urge-colby-headline-crop.png',
                                                }}
                                                altText=""
                                                onClick={() => openLightboxOnSlide(5)}
                                            />
                                            <div
                                                style={{
                                                    marginTop: '5px',
                                                }}
                                            >
                                                <div
                                                    className="text-center"
                                                    style={{
                                                        padding: '7px',
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                    }}
                                                >
                                                    <span
                                                        className="heavy"
                                                        style={{ textTransform: 'uppercase' }}
                                                    >
                                                        <i>Echo</i>
                                                    </span>{' '}
                                                    <span style={{ textTransform: 'uppercase' }}>
                                                        The Debate Begins
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        marginTop: '5px',
                                                    }}
                                                >
                                                    Colby Echo, March 6, 1970
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Image
                                                src={{
                                                    main:
                                                        'images/newspaper-01-black-students-urge-colby-headline-crop.png',
                                                }}
                                                altText=""
                                                onClick={() => openLightboxOnSlide(5)}
                                            />
                                            <div
                                                style={{
                                                    marginTop: '5px',
                                                }}
                                            >
                                                <div
                                                    className="text-center"
                                                    style={{
                                                        padding: '7px',
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                    }}
                                                >
                                                    <span
                                                        className="heavy"
                                                        style={{ textTransform: 'uppercase' }}
                                                    >
                                                        News
                                                    </span>{' '}
                                                    <span style={{ textTransform: 'uppercase' }}>
                                                        Impact in the Media
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    marginTop: '5px',
                                                }}
                                            >
                                                Portland Press Herald, March 6, 1970
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    Over that one week, letters traveled back and forth between
                                    SOBU17 and the College’s president at the time, Robert Edward
                                    Lee Strider II. On March 3, President Strider wrote: “Valid and
                                    workable decisions on complex problems are reached, especially
                                    in an academic community, through rational discussion and in an
                                    atmosphere of cooperation and mutual respect among those
                                    involved in making decisions.”
                                </p>
                                <p>
                                    SOBU responded: “Obviously, we would not now be in the CHAPEL if
                                    we were confident in the administrative mechanism that you have
                                    instituted to bring about change.”
                                </p>
                                <p>More exchanges followed between two camps.</p>
                                <p>
                                    “We had a very good response to the pushback,” said Boston
                                    native Vincent Guess ’73 in a coffee shop in Connecticut, where
                                    he now lives. In addition, the group had been supported by the
                                    Student Government, which tabled at Roberts Union to inform the
                                    community about SOBU17’s mission and how the community could
                                    help them. “It was well thoughtout. We had some very, very
                                    talented, very smart people who were well connected with the
                                    student community,” Guess said.
                                </p>
                                <p>
                                    On March 5, the group’s leader, Charles Terrell ’70 gave a
                                    30-minute speech outside the chapel’s main entrance. He
                                    reiterated that the group wouldn’t leave until its demands were
                                    met; highlighted the support they were receiving from Colby
                                    students, alumni, and faculty, along with students at Unity and
                                    Bowdoin colleges, the NAACP central Maine Chapter. Asking
                                    supporters to continue boycotting classes, Terrell thanked white
                                    Colby students who were running errands for the protesters while
                                    they were in the chapel and the McDonald’s restaurant manager
                                    who sent them food, which, to this day, Terrell fondly
                                    remembers.
                                </p>
                                <p>
                                    The newspapers reported at the time that 350 faculty and
                                    students were listening to the speech, and around 50 students
                                    came with placards saying things like “I support Black Demands.”
                                    The news made the Portland Evening Express, Waterville Sentinel,
                                    Bangor Daily News, and several other outlets. “It is useless to
                                    ask us to leave; we are not leaving until our demands are met,”
                                    Terrell told reporters.
                                </p>
                                <p>
                                    “Charles was the man. He’s articulate and he’s well-known there.
                                    And he was our leader,” said Guess, who was holding a red,
                                    black, and green Pan-African flag behind Terrell that day.
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <Image
                                src={{
                                    main: 'images/Serving-injunction-900-wide.png',
                                }}
                                altText=""
                                onClick={() => openLightboxOnSlide(6)}
                                caption="Terrell (center) and SOBU17 served with a restraining order on March 9."
                            />
                        </div>
                        <div className="row" style={{ marginTop: '4rem' }}>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-20 offset-lg-2">
                                        <div style={{ marginBottom: '10rem' }}>
                                            <p>
                                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                    “... I had gone onto segregated schools in the
                                                    South all my life.”
                                                </span>
                                            </p>
                                            <p style={{ fontSize: '1.4rem', marginBottom: '0' }}>
                                                &mdash;Doris Ford Mathis ’73
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
                                                    More on Ford Mathis’s journey to and from Colby
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
                                                                    fillRule="evenodd"
                                                                    d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                                                />
                                                                <path
                                                                    fillRule="evenodd"
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
                                                        incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud
                                                        exercitation ullamco laboris nisi ut aliquip
                                                        ex ea commodo consequat. Duis aute irure
                                                        dolor in reprehenderit in voluptate velit
                                                        esse cillum dolore eu fugiat nulla pariatur.
                                                        Excepteur sint occaecat cupidatat non
                                                        proident, sunt in culpa qui officia deserunt
                                                        mollit anim id est laborum.
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div>
                                            <Image
                                                src={{
                                                    main:
                                                        'images/newspaper-01-black-students-urge-colby-headline-crop.png',
                                                }}
                                                altText=""
                                                onClick={() => openLightboxOnSlide(5)}
                                            />
                                            <div
                                                style={{
                                                    marginTop: '5px',
                                                }}
                                            >
                                                <div
                                                    className="text-center"
                                                    style={{
                                                        padding: '7px',
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                    }}
                                                >
                                                    <span
                                                        className="heavy"
                                                        style={{ textTransform: 'uppercase' }}
                                                    >
                                                        <i>ECHO</i>
                                                    </span>{' '}
                                                    <span style={{ textTransform: 'uppercase' }}>
                                                        Reaction
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    marginTop: '5px',
                                                }}
                                            >
                                                Colby Echo, March 13, 1970
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    In the coming days, the administration visited the chapel to
                                    talk with the occupying students. “They said, ‘we can’t do this,
                                    we can’t do that.’ And we basically said, ‘well, we’re not
                                    asking you to do this that particular way. You can do it this
                                    way or do it that way. We’ll help you out,’” Guess said. “Our
                                    demands really were not that outrageous in terms of the ability
                                    to meet them.”
                                </p>
                                <p>
                                    Amidst the exchange, the world was experiencing a unique moment
                                    on March 7: a total solar eclipse. And the group wasn’t going to
                                    miss it. “We were trying to watch it through various unsafe
                                    means,” recalled Guess. “I do remember going upstairs up to the
                                    tower.” The next day, a Sunday, a religious service was held in
                                    Bixler Auditorium.
                                </p>
                                <p>
                                    On March 9, President Strider wrote, “your idealism and your
                                    persistence are commendable, and the articulate manner in which
                                    you have argued is impressive. But the occupation of the chapel
                                    cannot be justified, whatever your motives.” A few hours later a
                                    court order was delivered by a sheriff’s deputy, telling the
                                    group to vacate the chapel within two hours.
                                </p>
                                <p>
                                    “We decided it would be more effective for us to leave and
                                    protest on the outside instead of spending our time in jail,”
                                    said Guess. But they weren’t going to leave quietly. “Once we
                                    got out of the chapel, we ended up marching around the
                                    administration building,” said Guess, referring to the Eustis
                                    Building. The students chanted: What do we want? The five
                                    demands. When do we want it? Now. “We did that for a long time,”
                                    he said, noting that they were joined by others in their march.
                                </p>
                                <p>
                                    “SOBU was probably the equivalent of a #MeToo Movement of years
                                    ago,” Terrell said because it stood up for people whose voices
                                    weren’t being heard before. “If you read about the activism in
                                    this era—we were ready to stay there until our demands were met.
                                    That’s who we were, but it was difficult because we were missing
                                    class.”
                                </p>
                                <p>
                                    It was also emotionally taxing. “We were getting all kinds of
                                    calls and inquiries from the press,” he said. “Our families were
                                    wary. It was a really difficult, stressful time.”
                                </p>
                                <p>
                                    That concern was understandable given the climate across college
                                    campuses at the time. At Cornell University, for instance, a
                                    student takeover involved violence and guns. “In our action, no
                                    weapons were used or considered,” Terrell said. “No property was
                                    damaged. No essential campus functions were delayed. No
                                    terrible, unpardonable things were said publicly. No student was
                                    dismissed.” He added that no one, including students of color,
                                    was ostracized if they chose not to participate or support
                                    SOBU17.
                                </p>
                                <p>
                                    Perhaps because of this, the chapel takeover is remembered as
                                    one of the key, exemplary moments of activism in Colby’s
                                    history.
                                </p>
                                <p>
                                    “I think a legacy of protest was established, a Black
                                    multicultural tradition was established, Black-white student
                                    coalition was established, and a campus tradition of protest was
                                    energized, if not created,” said Terrell. “I think the world of
                                    social activism, responsibility, and awareness at that time was
                                    brought to central Maine.”
                                </p>
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

export default ChapelTakeover;
