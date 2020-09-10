import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import Image from '../components/common/Image';
import FsLightbox from 'fslightbox-react';

const SobluVoices = () => {
    const [lightboxController, setLightboxController] = useState({
        isLightboxOpen: false,
        slide: 1,
    });

    const lightboxImages = [];

    const lightboxCaptions = [];

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
                        <h2 style={{ fontSize: '1.5rem' }}>SOBLU Voices</h2>
                    </div>
                </div>
                <div className="row soblu-first-section-inner section-spacer">
                    <div className="col-md-12">
                        <div>
                            <div
                                className="row fgCompressed"
                                style={{
                                    fontWeight: '600',
                                    fontSize: '2.6rem',
                                }}
                            >
                                <div className="heading1">In Their Words</div>
                            </div>
                            <div
                                className="row mt-4"
                                style={{
                                    fontSize: '1.3rem',
                                }}
                            >
                                <div className="col-lg-20">
                                    SOBLU Members from different eras share their reflections
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div
                            className="fgCompressed heavy"
                            style={{ fontSize: '2.9rem', marginTop: '8rem', lineHeight: '3.2rem' }}
                        >
                            “... the SOBLU space, it’s the type of space where close to anything can
                            happen.”
                        </div>
                    </div>
                </div>
                <div className="row section-spacer">
                    <div className="col-md-22 offset-md-2">
                        <div
                            className="fgCompressed heavy"
                            style={{ fontSize: '2.9rem', lineHeight: '3.2rem' }}
                        >
                            “... I wonder, where we are now regarding, social, cultural, academic
                            and economic diversity, inclusion and equity, nationally, and at Colby?
                        </div>
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
                        <div className="row section-spacer-voices-quote">
                            <div className="col-md-22 offset-md-2 ">
                                <p>
                                    Dear readers, Our names are Kris de Luna and Juan Luna, and
                                    we’re the co-presidents of SOBLU (Students Organized for Black
                                    and Latinx Unity) for the 2019-20 scholastic year. And just in
                                    case you’re wondering, no, we are not related. This year, we’re
                                    proud to be celebrating SOBLU’s 50th anniversary. For all of
                                    those who don’t know too much about SOBLU, this organization was
                                    born out of a need for community and space. Much like other
                                    movements, SOBLU started as a motion for change in the late
                                    1960s. It began with a group of Black students’ discontent with
                                    the norms of Colby (and the greater nation) during that time
                                    period. SOBLU has gone through a couple of name changes, but the
                                    original spirit of this organization continues to prevail.
                                </p>
                                <p className="p-no-margin-bottom">
                                    More than anything, we decided to run as presidents because from
                                    the very beginning of our first year, SOBLU has been our home
                                    away from home. For the people who haven’t entered the SOBLU
                                    space, it’s the type of space where close to anything can
                                    happen. You never know what conversations people are going to be
                                    having, or what music will be blasting. It’s the type of space
                                    where on one couch people will be arguing about whether or not
                                    mumble rap is a legitimate form of rap, on another couch someone
                                    could be napping, and on our third couch people will be watching
                                    Rhythm and Flow on Netflix.
                                </p>
                            </div>
                        </div>
                        <div className="row section-spacer-voices-quote">
                            <div className="col">
                                <span className="fgCompressed heavy fgCompressed-voices-quote">
                                    “Through the ages, SOBLU has seen many chapters of Colby’s
                                    history. We have directly challenged our institution for our
                                    community. Much of the work we do is for us. by us.”
                                </span>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-22 offset-md-2 ">
                                <div>
                                    <p>
                                        Currently the room holds 50-80 student members, but is the
                                        home of many alums. Even though we have been here for a
                                        short amount of time, we know that this organization is more
                                        than just the current students. We are one big family. We
                                        stick with each other through thick and thin. Through the
                                        good and the bad. Through the sunshine and the snow.
                                    </p>
                                    <p>
                                        Through the ages, SOBLU has seen many chapters of Colby’s
                                        history. We have directly challenged our institution for our
                                        community. Much of the work we do is for us, by us. We
                                        wanted to extend our gratitude and thanks to those who came
                                        before us and paved the path for us to hold the position as
                                        one of the most influential student organizations on campus
                                        today. We want to reassure all alumni that we do not take
                                        this position lightly. We will continue advocating for the
                                        Black and Latinx community on Colby’s campus.
                                    </p>
                                    <p>
                                        With all this said, SOBLU continues to evolve and change.
                                        Our organization is not stagnant, and we will continue to
                                        radically hold, love, and support the Black and Latinx
                                        community of Colby. SOBLU has changed since its inception 50
                                        years ago, and we are excited to see it continue its
                                        evolution. SOBLU is such an important part in our lives, and
                                        we know SOBLU alums feel the same. Stay BLU’tiful
                                    </p>
                                </div>
                                <div>
                                    <p className="p-no-margin-bottom">Warmly,</p>
                                    <p className="p-no-margin-bottom">Kris de Luna and Juan Luna</p>
                                    <p className="p-no-margin-bottom">Co-Presidents of SOBLU</p>
                                    <p className="p-no-margin-bottom">
                                        <i>Essay submitted on Nov. 2019</i>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row section-spacer">
                            <div
                                style={{
                                    padding: '56.25% 0 0 0',
                                    position: 'relative',
                                    width: '100%',
                                }}
                            >
                                <iframe
                                    src="https://player.vimeo.com/video/239157971?title=0&byline=0&portrait=0"
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div style={{ marginTop: '-50px', fontSize: '1.4rem' }}>
                                <p
                                    style={{
                                        fontWeight: '600',
                                        display: 'inline-block',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    Rohnique Davy ’22 talks about what SOBLU is and does.
                                </p>
                            </div>
                        </div>
                        <div className="row section-spacer-voices-quote">
                            <div className="col-md-22 offset-md-2 ">
                                <p className="p-no-margin-bottom">
                                    SOBU. SOBHU. SOBLU. No matter what it was called during your
                                    time on campus, Students Organized for Black and Latinx Unity
                                    (SOBLU) has not only spoken truth to power but has taken risks
                                    for the greater good through activism. During the 1970s, there
                                    were few Black students enrolled at Colby, and SOBU organized to
                                    improve the recruitment support for Black students. For students
                                    who received scholarships, there was a higher minimum GPA than
                                    for non-scholarship students. This was a practice that adversely
                                    impacted the brilliant Black students at Colby. The occupation
                                    of the chapel was a protest against this discriminatory practice
                                    and demanded the institution to direct action to create better
                                    support for Black students. Led by senior Charles Terrell ’70
                                    (now a Colby trustee emeritus), 17 students locked themselves in
                                    the chapel for eight days to try to end this unfair policy,
                                    improve remediation academic support, and demand acceptance of
                                    more Black students. Ultimately, their efforts brought equity to
                                    the institutional practice: the higher GPA requirement for
                                    scholarship was eliminated. The Chapel 17 protest led to the
                                    creation of SOBU as a staple organization, which is still
                                    fighting for fair treatment and support of Black and Brown
                                    students on campus and in Waterville.
                                </p>
                            </div>
                        </div>
                        <div className="row section-spacer-voices-quote">
                            <div className="col">
                                <span className="fgCompressed heavy fgCompressed-voices-quote">
                                    “SOBHU gave me the courage to ... be me, unapologetically.”
                                </span>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col-md-22 offset-md-2 ">
                                <div>
                                    <p>
                                        I am an African-American woman who attended Colby as a
                                        Posse-NY scholar and therefore received financial aid. The
                                        Chapel 17 and their allies will never understand how
                                        indebted I am to them for their courage and for their
                                        leadership by example. I have so many fond memories of Colby
                                        because of the friendships, acquaintances, events, and
                                        opportunities for coalition-building that happened due to
                                        being a member and leader of SOBHU. During my first year, I
                                        recognized my calling and became an active member of SOBHU.
                                        The first demonstration I led was a march from the student
                                        center to Miller steps in protest of the murder of Trayvon
                                        Martin at the hands of vigilante George Zimmerman. Later on
                                        that semester, with the Pugh Community Board, we organized a
                                        conversation about affirmative action. These formative
                                        instances led me to join the SOBHU board, and, ultimately,
                                        become president of the longest-standing multicultural
                                        organization in Colby’s history.
                                    </p>
                                    <p>
                                        SOBHU gave me the courage to lead protests, the courage to
                                        lead demonstrations, the courage to pursue a double major in
                                        African-American studies and history, the courage to choose
                                        to be an educator in Black communities in Chicago in a world
                                        that does not value Black lives or the education that Black
                                        children receive, and the courage to be me,
                                        unapologetically. I know my story might be unique to me, but
                                        for anyone who was a member of the club or attended an
                                        event, you know that at the club’s foundation was love and
                                        empowerment.
                                    </p>
                                    <p>
                                        From fighting against the institution’s discriminatory
                                        practices to bringing cultural awareness of issues
                                        concerning Black and Latinx people throughout the diasporas
                                        to celebrating traditions and helping students feel good
                                        about being themselves in Maine at Colby, SOBLU has been at
                                        the forefront of the student-led changes on the campus. The
                                        diversity in applicants and the high graduation rates of
                                        Black students at Colby can only be celebrated since the
                                        Courageous Chapel 17 changed policy and changed the
                                        trajectory for success of international or domestic students
                                        of color at the school. The 50-year legacy of Students
                                        Organized for Black and Latinx Unity is proof that courage
                                        can change the world. On behalf of the many students of
                                        color who attended and graduated from Colby, thank you SOBU,
                                        every member and president since them, and allies for your
                                        courage. Because of you, we can.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <i>Essay submitted on Nov. 2019</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row section-spacer">
                            <div className="col">
                                <div
                                    className="fgCompressed heavy"
                                    style={{
                                        fontSize: '2.9rem',
                                        lineHeight: '3.2rem',
                                        marginBottom: '15px',
                                    }}
                                >
                                    “SOBLU has changed since its inception 50 years ago, and we are
                                    excited to see it continue its evolution. SOBLU is such an
                                    important part in our lives, and we know SOBLU alums feel the
                                    same.”
                                </div>
                                <div
                                    className="text-right heavy fgCompressed-quote"
                                    style={{ lineHeight: '1.5rem' }}
                                >
                                    <p>Kris de Luna and Juan Luna</p>
                                    <p>Co-Presidents of SOBLU for 2019-2020 Academic Year</p>
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

export default SobluVoices;
