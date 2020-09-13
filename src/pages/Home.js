import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import { Link } from 'react-router-dom';
import Image from '../components/common/Image';
import HomeSvg from '../components/HomeSvg';
import FsLightbox from 'fslightbox-react';

const Home = () => {
    const [lightboxController, setLightboxController] = useState({
        isLightboxOpen: false,
        slide: 1,
    });

    const lightboxImages = [
        'images/Juanluna_SOBLU_Torres0106.png',
        'images/Chapel-protest-students-speaking-to-audience.jpg',
        'images/20181204_145739.png',
        'images/20181204_150625.png',
    ];

    const lightboxCaptions = [
        '',
        '',
        'Morning Sentinel May 1, 1974',
        'Morning Sentinel Month and year coming',
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
            <div id="home-page" className="container">
                <HomeSvg />
                <div className="row soblu-first-section">
                    <div className="col-md-12 d-flex align-items-center">
                        <div>
                            <div className="soblu-desktop-hide">
                                <Image
                                    src={{ main: 'images/Juanluna_SOBLU_Torres0106.png' }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(1)}
                                />
                            </div>
                            <div className="row fgCompressed">
                                <h1
                                    style={{
                                        fontWeight: '600',
                                    }}
                                >
                                    The More Things Change
                                </h1>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-20">
                                    <p className="lead">
                                        Since its inception, SOBLU has evolved while maintaining its
                                        core
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="soblu-mobile-hide">
                            <Image
                                src={{ main: 'images/Juanluna_SOBLU_Torres0106.png' }}
                                altText=""
                                onClick={() => openLightboxOnSlide(1)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="bold-emphasis-text col-lg-22 offset-lg-2">
                        <p>
                            At 8 p.m. sharp, the Students Organized for Black and Latinx Unity
                            (SOBLU) room in the Pugh Center at Cotter Union was bursting at the
                            seams. Students squeezed onto couches. Some found an empty chair or
                            perched on a tabletop. A few preferred standing.
                        </p>
                        <p>It was time for the club’s biweekly meeting to start.</p>
                    </div>
                </div>
                <div className="row mt-md-3 mt-0" id="soblu-vertical-menu">
                    <div className="col-md-2 d-flex justify-content-center position-relative">
                        <div className="soblu-vertical-menu-container soblu-mobile-hide">
                            <div className="soblu-vertical-menu-sticky">
                                <SideNav />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-22">
                        <div className="row">
                            <div className="row mt-4">
                                <div className="col-md-9 d-flex align-items-center">
                                    <div className="soblu-mobile-hide">
                                        <p
                                            className="fgCompressed"
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '1.5rem',
                                            }}
                                        >
                                            “Certainly in the beginning, it was not a club, it was
                                            not a part of Colby culture. It was a radical movement
                                            that became a part of Colby culture, and that’s
                                            something that I think many of us who were involved from
                                            the beginning perhaps couldn’t have imagined.”
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '1.3rem',
                                                marginLeft: '104px',
                                            }}
                                        >
                                            &mdash;Charles Terrell ’70, SOBU’s first president
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-14">
                                    <p>
                                        For a half-century, these Sunday meetings have been a SOBLU
                                        tradition. They have flourished since its beginnings in the
                                        1970s as Students Organized for Black Unity (SOBU), to its
                                        shift to include growing numbers of minority students and
                                        their allies as Students Organized for Black and Hispanic
                                        Unity (SOBHU), to its recent leadership focusing to enrich
                                        the experiences of its members as SOBLU.
                                    </p>
                                    <p>
                                        “Being here in the 1970s versus 2019 is very different in
                                        terms of racial demographics and race relations,” said Kris
                                        de Luna ’20, who presided over Sunday night meetings as this
                                        year’s SOBLU co-president.
                                    </p>
                                    <p>
                                        But throughout its first 50 years, SOBLU, with all its names
                                        and iterations, has served as a refuge for students who have
                                        found themselves in a new and challenging environment, as a
                                        focal point of racial education and cultural firsts, and on
                                        occasion as a nexus for protest to push for change,
                                        beginning with the occupation of Lorimer Chapel in March
                                        1970.
                                    </p>
                                    <div className="soblu-desktop-hide my-4">
                                        <p
                                            className="fgCompressed"
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '1.5rem',
                                            }}
                                        >
                                            “Certainly in the beginning, it was not a club, it was
                                            not a part of Colby culture. It was a radical movement
                                            that became a part of Colby culture, and that’s
                                            something that I think many of us who were involved from
                                            the beginning perhaps couldn’t have imagined.”
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '1.3rem',
                                            }}
                                            className="text-right"
                                        >
                                            &mdash;Charles Terrell ’70, <br />
                                            SOBU’s first president
                                        </p>
                                    </div>
                                    <p>
                                        Over the course of a half-century, from times of nationwide
                                        anti-racism movements, to racist incidents, to birthday
                                        celebrations, to day-to-day student life, SOBLU has provided
                                        a loving and caring family for Colby students. At times it
                                        has served as an important driver of change. This story
                                        travels back to each of those periods and presents this
                                        organization through the eyes of its members, who spent only
                                        four years on Mayflower Hill but took away many memories
                                        that remain powerful, for many, decades later.
                                    </p>
                                    <p>
                                        Over 40 members across the 50-year spectrum, including many
                                        of its former presidents, have contributed to this piece by
                                        sharing their recollections. Some of those alumni, such as
                                        the founding members of the club, have revisited their
                                        memories from five decades earlier, recounting stories that
                                        they have never told anyone—not even their children and
                                        grandchildren. Others had a shorter travel in time, but
                                        equally powerful things to say. Some members opened up their
                                        homes, welcomed us into their workplace, transported us to
                                        events that changed their lives.
                                    </p>
                                    <p>
                                        This is the result—a wide-ranging exploration of an
                                        organization that has influenced hundreds, if not thousands,
                                        of Colby careers, and offers insights into a half-century of
                                        change at Colby and across the country.
                                    </p>
                                    <p>
                                        Once SOBU was founded, the next order of business was to
                                        call attention to its agenda. As their first major action,
                                        SOBU occupied Lorimer Chapel in March 1970, demanding to
                                        have more students and faculty of color, a black studies
                                        program, and an orientation week for incoming black
                                        students.
                                    </p>
                                    <p>
                                        This event put SOBU in the spotlight and left its mark in
                                        Colby’s history, but more importantly, it established a
                                        legacy of activism for generations to come. At times it
                                        manifested itself in the form of a sit-in, an information
                                        session, or an opinion piece in the Echo. Other times
                                        students used silence to amplify their voices. Across SOBU’s
                                        50 years, students have continued to revisit, reshape, and
                                        recreate that event.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                    1970s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-radical-movement"
                                >
                                    A Radical Movement
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    SOBU was built “on the shoulders of the Civil Rights Movement”
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide">
                                    <div className="d-table">
                                        <Image
                                            src={{
                                                main:
                                                    'images/Chapel-protest-students-speaking-to-audience.jpg',
                                            }}
                                            altText=""
                                            onClick={() => openLightboxOnSlide(2)}
                                        />

                                        <div className="mt-2 span-caption">
                                            <Link to="/chapel-takeover-1970">
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
                                                        MORE
                                                    </span>{' '}
                                                    <span style={{ textTransform: 'uppercase' }}>
                                                        1970 Chapel Takeover
                                                    </span>
                                                </div>
                                            </Link>
                                            <div
                                                className="fgCompressed fgCompressed-normal-weight"
                                                style={{
                                                    marginTop: '5px',
                                                    fontSize: '1.1rem',
                                                }}
                                            >
                                                Four of the 17 students who were inside the Lorimer
                                                Chapel in 1970 share their experiences.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <p>
                                    “Certainly in the beginning, it was not a club, it was not a
                                    part of Colby culture,” said Charles Terrell ’70, the
                                    organization’s first president and perhaps its most well-known
                                    member, and a former Colby trustee. “It was a radical movement
                                    that became a part of Colby culture, and that’s something that I
                                    think many of us who were involved from the beginning perhaps
                                    couldn’t have imagined.”
                                </p>
                                <p>
                                    Before becoming SOBLU, it was called Students Organized for
                                    Black Unity (SOBU, pronounced “S” “O” “B” “U”), more commonly
                                    known by its handful of members as “the organization.” It
                                    emerged in 1969 and was part of the Black Revolutionary Movement
                                    that started a few years earlier. “Our time at Colby was
                                    post-civil rights, and we were really a part of [the] Black
                                    Revolutionary Movement that started in the middle-’60s, which
                                    was built upon the shoulders of the Civil Rights Movement,”
                                    Terrell said. “So there was a focus on the cohesiveness of being
                                    Black, and then certainly that expanded into embracing Latino
                                    culture and values.” From the beginning, SOBU was a product of
                                    the unity between African-American and Latinx students, along
                                    with other minority students, who at the time used “Black” as an
                                    umbrella term. “The Latino students who were with us identified
                                    as Black-Latino,” said Terrell.
                                </p>
                                <div className="soblu-desktop-hide my-4">
                                    <Image
                                        src={{
                                            main:
                                                'images/Chapel-protest-students-speaking-to-audience.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(2)}
                                    />

                                    <div className="mt-2">
                                        <Link to="/chapel-takeover-1970">
                                            <div
                                                className="text-center p-2"
                                                style={{
                                                    backgroundColor: '#000',
                                                    color: '#fff',
                                                }}
                                            >
                                                <span
                                                    className="heavy"
                                                    style={{ textTransform: 'uppercase' }}
                                                >
                                                    MORE
                                                </span>{' '}
                                                <span style={{ textTransform: 'uppercase' }}>
                                                    1970 Chapel Takeover
                                                </span>
                                            </div>
                                        </Link>
                                        <div
                                            className="fgCompressed fgCompressed-normal-weight mt-2"
                                            style={{
                                                fontSize: '1.1rem',
                                            }}
                                        >
                                            Four of the 17 students who were inside the Lorimer
                                            Chapel in 1970 share their experiences.
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Terrell’s involvement with SOBU started when his friend Sebsibe
                                    Mamo ’70 told him that the first-year class had the largest
                                    number of Black students yet at Colby. Invited to these
                                    students’ meeting, Terrell walked in thinking he would not get
                                    too involved and walked out as SOBU’s inaugural president. “I
                                    was really being influenced by the new students and the force
                                    [and energy] that they were bringing,” he said. “I think it took
                                    a great deal of courage for members to create SOBU, and it was
                                    certainly a part of a nationwide movement of student activism
                                    and Black student activism.”
                                </p>
                                <p>
                                    Around that time, SOBU-like organizations were popping up on
                                    college campuses across the country. “We were maybe one of the
                                    last ones,” said Mamo, an Olympic runner from Ethiopia, “because
                                    we were checking out how effective it would be.” Of the handful
                                    of Black students who enrolled every fall, only one or two would
                                    return after winter break due to lack of support and activities
                                    outside classes, Mamo explained. He said, “That’s why we decided
                                    to have something where we can talk and gather.”
                                </p>
                                <p>
                                    Once SOBU was founded, the next order of business was to call
                                    attention to its agenda. As their first major action, SOBU
                                    occupied Lorimer Chapel in March 1970, demanding to have more
                                    students and faculty of color, a Black studies program, and an
                                    orientation week for incoming Black students.
                                </p>
                                <p>
                                    This event put SOBU in the spotlight and left its mark in
                                    Colby’s history, but more importantly, it established a legacy
                                    of activism for generations to come. At times it manifested
                                    itself in the form of a sit-in, an information session, or an
                                    opinion piece in the Echo. Other times students used silence to
                                    amplify their voices. Across SOBU’s 50 years, students have
                                    continued to revisit, reshape, and recreate that event.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “Without SOBHU I’m not sure Colby could have been as successful
                                    in retaining the students of color that they’ve been able to
                                    retain.”
                                </span>
                                &mdash;Shaquan Huntt ’13
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think SOBLU, first and foremost, was created as a form of
                                    resistance and though the club has changed over time, that’s
                                    something [that still] remains.”
                                </span>
                                &mdash;Kris de Luna ’20
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://player.vimeo.com/video/239157971?title=0&byline=0&portrait=0"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="video-question">
                                <p
                                    style={{
                                        fontWeight: '600',
                                        display: 'inline-block',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    When was the first time you knew you wanted to be part of SOBLU?
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" style={{ fontSize: '1.6rem' }}>
                                    <div style={{ fontWeight: '600' }}>
                                        “To me, SOBU became my family away from home.”
                                    </div>
                                    <div>&mdash;Doris Ford Mathis ’73</div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    id="pillar-of-support"
                                >
                                    Pillar of Support
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    For minority students, SOBU becomes a vehicle to pass down
                                    knowledge and support one another
                                </p>
                                <p>
                                    From its initial years, SOBU began to serve as a resource, where
                                    its members supported one another through the good and the bad.
                                    “To me, SOBU became my family away from home,” said Doris Ford
                                    Mathis ’73, from Alabama, one of the first-year students
                                    involved in starting SOBU. Through the organization, she got to
                                    talk about transition issues, struggles, classes, and the
                                    student body with others who experienced similar issues. “I
                                    traveled [a] really long way, and just having people that I can
                                    count on and go to was very important.”
                                </p>
                                <div
                                    className="soblu-desktop-hide my-4"
                                    style={{ fontSize: '1.6rem' }}
                                >
                                    <div style={{ fontWeight: '600' }}>
                                        “To me, SOBU became my family away from home.”
                                    </div>
                                    <div>&mdash;Doris Ford Mathis ’73</div>
                                </div>
                                <p>
                                    From Mathis’s years at Colby to the present, the organization
                                    has remained a support system that students turned to for
                                    guidance, whether it be academics, social life, or just life in
                                    general. Upperclassmen have been mentoring younger students,
                                    sharing tips on studying, resources, classes. Younger students
                                    have been turning to them when they run into issues. Peers have
                                    been exchanging ideas, experiences, and advice. One for all, all
                                    for one, the sentiments of home and family grew stronger as
                                    years passed.
                                </p>
                                <p>
                                    “SOBU then, and now, was both a political group and a support
                                    group,” said Earl Smith, a former dean of the College and
                                    College historian. Playing a crucial role at Colby, the
                                    organization, he said, has been a “source of strength for
                                    students and source of change for the community.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “Without SOBLU, I don’t think I would have as much of a support
                                    system and know and meet different people that I would want to
                                    be with. … I feel like without it, I really don’t know what I’d
                                    be doing. Or who I’d talk to.”
                                </span>
                                &mdash;Deanna Perez ’22
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-22 offset-lg-2">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “Do you need a jacket? Do you need books? Do you need to figure
                                    out which resource [there is]? Do you need to talk to a
                                    professor? I felt like if you know something, [if] you have
                                    information, sharing helps someone else underneath you—that was
                                    just the M.O., the mantra of the club. We’re not going to hold
                                    off all this information, we want to make sure everyone is
                                    successful, and no one has to experience the traumas or the
                                    failures that we did because we now know better and now we can
                                    share that information with all.”
                                </span>
                                &mdash;Isadora “Izzy” Alteon ’13
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Newspaper_preview.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(3)}
                                        caption="Morning Sentinel May 1, 1974"
                                    />
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-cultural-outlet"
                                >
                                    A Cultural Outlet
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    With financial resources allocated, SOBU alters the programming
                                    landscape at Mayflower Hill and in Central Maine
                                </p>
                                <p>
                                    After the chapel takeover of 1970, SOBU got a budget of its own
                                    through the College and began to serve as a cultural outlet,
                                    too. “Typically most of us were coming from predominantly Black
                                    or minority communities and were getting away for the first time
                                    from home,” said Ken Melvin ’74 from Virginia, whose high school
                                    was integrated only for a year before he came to Colby. “So to
                                    have an organization that reinforced the culture that we left
                                    behind was extremely important.” Having SOBU as an official
                                    College entity was equally valuable. “That,” Melvin said, ”was
                                    the recognition of the cultural differences that we brought to
                                    that campus and acceptance of it,” especially important in the
                                    early 1970s.
                                </p>
                                <div className="soblu-desktop-hide my-4">
                                    <Image
                                        src={{
                                            main: 'images/Newspaper_preview.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(3)}
                                        caption="Morning Sentinel May 1, 1974"
                                    />
                                </div>
                                <p>
                                    “That was the heyday of the Black Panther Party, student
                                    activism, and Black nationalism across the country,” he said.
                                    “It was a very confrontational period, and we didn’t have that
                                    at Colby. We got along well with the students. But we just
                                    needed [the] comfort of our [own] community. It was a small tiny
                                    community that we had.”
                                </p>
                                <p>
                                    That small community had a large impact on the College. From the
                                    Alvin Ailey Dancers to Muhammad Ali to Rahsaan Roland Kirk to
                                    Roberta Flack, SOBU brought renowned Black performers to campus
                                    and to central Maine. While SOBU members found a piece of their
                                    culture in SOBU’s activities, these events enabled them to share
                                    it with the larger Colby community. “It was a positive
                                    organization that had in its heart the uplifting of the
                                    African-American and Hispanic culture,” Melvin said, who was
                                    SOBU’s spokesperson.
                                </p>
                                <p>
                                    In the 50 years that followed, SOBU has continued to
                                    bring—sometimes in collaboration with others—speakers, artists,
                                    and plays that reflected its members and their culture. For
                                    instance, activist and scholar Cornel West, film director Spike
                                    Lee, the first African-American female pilot in the U.S. Navy,
                                    Brenda Robinson, minister Samuel Proctor, and the play Platanos
                                    and Collard Greens.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-22 offset-lg-2">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “We wanted to provide educational opportunities for ourselves
                                    and the campus at large, like bring speakers to campus and then
                                    have something … to educate people but also [have] things that
                                    we might not find in our curriculum and campus generally. So
                                    we’re able to, in a way, almost augment our education and
                                    provide resources to have more of a multicultural type of
                                    education and make a push for that. … We tried hard to expand
                                    and bring [in] people that otherwise would not have come to
                                    Colby.”
                                </span>
                                &mdash;Kebba Tolbert ’94
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main: 'images/Newspaper_preview2.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(4)}
                                        caption="Morning Sentinel Month and year coming"
                                    />
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    A Space of its Own
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    Over the years, the SOBU room provides a safe haven for students
                                    on a predominantly white campus
                                </p>
                                <p>
                                    It was 1971 or 1972, a few years after the chapel takeover, that
                                    SOBU finally got its own room—on the third floor of Runnals
                                    Union, which then also was home to sorority meeting rooms and
                                    the women’s gymnasium. “Most of the frats and other
                                    organizations had rooms assigned to them or built, and we had no
                                    place to go to gather for cultural reinforcement,” said Sylvia
                                    Hodges ’75 from Virginia. “This room was just symbolic, really,
                                    because it was not a huge place, and we wanted to have a
                                    library, we wanted to have resources that all students could use
                                    to show our place at Colby too.”
                                </p>
                                <div className="soblu-desktop-hide my-4">
                                    <Image
                                        src={{
                                            main: 'images/Newspaper_preview2.png',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(4)}
                                        caption="Morning Sentinel Month and year coming"
                                    />
                                </div>
                                <p>
                                    A room and a budget, combined with more students of color
                                    joining the Colby community, meant change for SOBU. “I think
                                    originally, and obviously, it was to establish [an] identity for
                                    us that we did exist and that we do matter,” said Vincent Guess
                                    ’73, one of the founding members, from Boston. Those goals were
                                    crucial given the racial atmosphere in the late 1960s, Guess
                                    explained. “Whenever we went into town, people would stop their
                                    cars, look at you like they’ve never seen anything like that
                                    before, which was true,” he said. The campus environment wasn’t
                                    much different. “People on campus looked at you like you’re not
                                    nonexistent, something that was strange,” said Guess. Through
                                    SOBU, members pushed for things that would benefit the College
                                    overall, such as bringing more students of color. “As I was
                                    leaving, there was a little bit more of a shift not to be
                                    necessarily as open—but more concentrating on just
                                    self-identity, what’s most important for Black folks,” Guess
                                    said.
                                </p>
                                <p>
                                    For instance, SOBU students, like members of fraternities and
                                    sororities, began to eat together in the dining halls. When the
                                    club moved to a room in the basement of Mary Low in 1975, the
                                    space that was initially used for meetings and studying began to
                                    host Friday dances. From then on, the variety of activities and
                                    occupancy grew exponentially.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think my body is automated to go directly to SOBLU [room] any
                                    time after anything. …I just get out of class, first thing to
                                    do: go to SOBLU, even if 2 seconds later, I remember, ‘oh wait,
                                    I’m supposed to be in a meeting right now’ and then I leave. I
                                    wonder if SOBLU didn’t exist where my body would go
                                    automatically. And I have no idea.”
                                </span>
                                &mdash;Ashley Gissel Olvera ’20
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I remember at times I’d walk by and there would be loud hip-hop
                                    there [playing] from the SOBHU room, and I loved that because it
                                    made me feel like I was back home in New York. But I know a lot
                                    of people were like, ‘why are they doing that?’ It’s not
                                    helpful. It’s a student center. It’s not meant to be raucous.”
                                </span>
                                &mdash;Antonio Mendez ’06
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center"></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="an-organization-for-whom"
                                >
                                    An Organization for Whom?
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    The changing makeup of SOBU raises questions about membership
                                </p>
                                <p>
                                    When Steven Earle ’79 from New York City arrived at Mayflower
                                    Hill, SOBU was his getaway from biases in the classroom, where
                                    he recalled becoming the center of attention or being treated as
                                    the voice of minorities, or in the supermarket, where he
                                    oftentimes was followed.
                                </p>
                                <p>
                                    “We were students trying to make our way in an environment that
                                    was not reflective of us, in a culture that was not reflective
                                    of us, in a classroom experience that was not reflective of us;
                                    we shared a common background,” said Earle, now a Colby trustee.
                                    “The organization was instrumental in helping us as a group, a
                                    small group at the College, to support each other and go for
                                    some sense of refuge.”
                                </p>
                                <p>
                                    But that didn’t mean they always had a consensus on important
                                    questions, including the makeup of SOBU itself. SOBU mostly
                                    consisted of Black and Hispanic students in Earle’s first year,
                                    but by his senior year, there were some Asian and white
                                    students, too. “To this day I can remember some of that debate,”
                                    Earle said. Many felt that if those students understood and
                                    supported what the club was about and its priorities, they were
                                    welcomed. “But,” he said, “it was not an easy lift.”
                                </p>
                                <p>
                                    Reflecting that change, SOBU’s name became Students Organized
                                    for Black and Hispanic Unity (SOBHU) in the student handbook of
                                    1979-80.
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

export default Home;
