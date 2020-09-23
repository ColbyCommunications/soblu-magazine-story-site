import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import Image from '../components/common/Image';
import HomeSvg from '../components/HomeSvg';

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
                                    src={{
                                        main: 'images/Juanluna_SOBLU_Torres0106.png',
                                        thumbnail: 'images/Juanluna_SOBLU_Torres0106_thumbnail.jpg',
                                    }}
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
                                <div className="col-md-1" />
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
                            <div className="col-md-1" />
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
                                    title="When was the first time you knew you wanted to be part of SOBLU?"
                                    className="embed-responsive-item"
                                    src="https://player.vimeo.com/video/239157971?title=0&byline=0&portrait=0"
                                    allowFullScreen
                                />
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
                            <div className="col-md-1" />
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
                            <div className="col-md-1" />
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
                            <div className="col-md-1" />
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
                                    time after anything. ...I just get out of class, first thing to
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
                            <div className="col-md-9 d-flex align-items-center" />
                            <div className="col-md-1" />
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
                        <div className="row">
                            <div>
                                <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                    1980s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-radical-movement"
                                >
                                    Back to the Old Days
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    New students and changing leadership reenergize SOBHU
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <p>
                                    By 1979 Colby began to enroll more students of color through the
                                    newly established Ralph J. Bunche Scholars Program. Jocelyn
                                    Wooten Giangrande ’88 from Boston was one of those scholars.
                                    When she arrived, she said, SOBHU was losing steam. Her goal as
                                    the SOBHU president was to bring it back to its former
                                    purpose—providing a group and place where students felt at home
                                    and supported one another.
                                </p>

                                <p>
                                    “At times, you get tired of feeling that you&rsquo;re in the
                                    minority, so it [SOBHU] allowed for an opportunity for us to
                                    come together and let our hair down and, in a safe environment,
                                    talk about our fears, our anxieties, our concerns,” she said.
                                    “It gave you a sense that you were not alone in some of the
                                    things that you may have been experiencing.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think the lesson that in the club&rsquo;s founding and what
                                    Charles Terrell and other students at that time did with that
                                    chapel sit-in was it was a point in which they marked ‘we are a
                                    segment of this campus&rsquo; intellectual conscience, we are
                                    your conscience.’ And that&rsquo;s something that I think SOBHU
                                    has done consistently in different ways.”
                                </span>
                                &mdash;Ajima Olaghere ’07
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                    1990s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-radical-movement"
                                >
                                    Branching Out
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    SOBHU leadership tries to bring the club closer with other ones
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <p>
                                    Recruiting more students of color to Colby has remained a
                                    consistent goal throughout the time of James “Jimmy” Reynolds
                                    ’90, a native of Tennessee. “SOBHU was really a way for me to be
                                    rooted in an experience of being an African-American, being from
                                    the South, being in this new experience and just really needing
                                    some type of a safety net, to be able to know that there were
                                    people that always had your back,” he said.
                                </p>

                                <p>
                                    But as the president, Reynolds also had a personal mission: of
                                    trying to connect SOBHU with the International Club, with which
                                    he was equally involved. “I felt like a lot of our concerns were
                                    the same,” he said in his apartment in upper Manhattan, wearing
                                    a T-shirt that said “be human” in several languages and a hat
                                    that a friend brought from Peru. To him, both clubs’ members had
                                    different stories with some commonality. “As people of African
                                    descent, we are all international; being stolen, as it were,
                                    versus emigrating, certainly two very different experiences, but
                                    the reality is that we are all rooted in some otherness.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “Something that&rsquo;s great in general about being in the Pugh
                                    Center, in that set of clubs, is that we attended all the events
                                    of all of the different clubs. I was a member of Hillel and went
                                    to a bunch of events there. The Bridge had a bunch of events we
                                    were part of. We were one piece of this larger space … We
                                    thought it was important to support others as well and show that
                                    this is a good thing. We wanted to celebrate, and we wanted to
                                    learn, and we wanted to have a good time.”
                                </span>
                                &mdash;Katherine “Dell” Perez ’10
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    An Agency of Change
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    SOBHU has been changing the campus and its members for better
                                </p>
                                <p>
                                    As much as it was shaped by its members, SOBHU was also affected
                                    by national events. After the Rodney King verdict in 1992, in
                                    which Los Angeles police officers were acquitted of assault,
                                    SOBHU members started to question their safety, place, and role
                                    at Colby. When a Senior Art Show flyer inappropriately used
                                    King’s image, students of color felt even more invisible, they
                                    said. That alienation prompted SOBHU, along with other clubs, to
                                    propose multicultural housing through a coalition they formed,
                                    Students of Color United for Change.
                                </p>

                                <p>
                                    Consequently, the College established the “Trustee Commission on
                                    Multicultural &amp; Special Interest Housing” to explore this
                                    proposal. In the end, the commission recommended having a
                                    multicultural center instead of a house. The eventual result was
                                    the Pugh Center. “SOBHU was a big big push because we&rsquo;re
                                    very visible, vocal, highly affected by the procedures and
                                    policies of the College,” said Kebba Tolbert ’94, a former SOBHU
                                    president and a leader in Students of Color United for Change
                                    about SOBHU’s role in the process.
                                </p>
                                <p>
                                    In 1996 the Pugh Center opened, and the SOBHU room moved to the
                                    heart of campus, further establishing the organization as a
                                    force on campus.
                                </p>
                                <p>
                                    “Colby is a good place now, still. But having that space [the
                                    room] and that ability to just feel like you&rsquo;ve got
                                    another home, I think is important. And I think it really shows
                                    the purpose,” said Tolbert. “If you look at the state of the
                                    country in 2019, versus the 80s and 90s, some things are very
                                    persistent. I guess some of the misconceptions about wanting to
                                    be secluded—no just wanting space sometimes—it is a very hard
                                    thing to understand if you&rsquo;re not a victim of white
                                    supremacy.”
                                </p>
                                <p>
                                    This wasn’t the only issue where SOBHU played a key role. “We
                                    were able to ... heighten the conversation about the importance
                                    of making Colby welcoming for more people,” Tolbert said. “I
                                    think that pioneered a lot of different areas from social
                                    programming to the types of classes offered to when
                                    they&rsquo;re looking at professors and hiring.”
                                </p>
                                <p>
                                    Mark Tappan, professor of education and human development and a
                                    SOBHU ally since his arrival at Colby in 1991, said the
                                    “activism that SOBHU has represented, and generations of
                                    students who have taken that seriously, have been really really
                                    important,” adding that SOBHU has also been crucial for support
                                    and community building. “I don&rsquo;t think Colby would be
                                    where we are today without SOBHU,” Tappan said.
                                </p>
                                <p>
                                    The same can be said for its members. Over the years, SOBHU has
                                    been a reason for many students to stay at Colby as it served as
                                    a “home away from home” and a springboard for them to flourish
                                    and succeed at the College.
                                </p>
                                <p>
                                    “They [SOBHU members] were the ones that reminded me that I
                                    belong, that reminded me that I was smart, that reminded me I
                                    had value and what was valued for me mattered. It gave me the
                                    confidence to walk across campus with a handful of us and feel
                                    like I could get through each and every day,” said Karlene A.P.
                                    Burrell-McRae ’94, now dean of the College, who found her voice
                                    in SOBHU. “In SOBHU, I got to play out all of my insecurities,
                                    and it helped form who I became.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think the difference [of SOBHU] is understanding that we are
                                    coming from across the diaspora and what that means for folks,
                                    the emphasis on community, holding each other down, and bringing
                                    up aspects of home that [I] didn&rsquo;t really hear from other
                                    clubs on campus at all. I think also the impact that we&rsquo;ve
                                    had on campus, on campus activism, and making change in our
                                    campus, members of SOBHU specifically and SOBHU as a club.”
                                </span>
                                &mdash;Bonnie Maldonado ’16
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “SOBLU is home, it&rsquo;s a place where my people
                                    are—they&rsquo;re just loving ... but they also give you tough
                                    love too when you need it. ... They&rsquo;re helping you become
                                    the best version of yourself.”
                                </span>
                                &mdash;Marnay Avant ’18
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                    2000s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-radical-movement"
                                >
                                    Activism—It’s just one Facet of SOBHU
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    From the outside, SOBHU might only seem to be an activist
                                    organization to some, but in essence, it’s much more than that
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <p>
                                    In 1999, SOBHU members, along with students in Students
                                    Organized Against Racism (SOAR), planned a sit-in at the office
                                    of President William R. Cotter in the SOBHU room at the Pugh
                                    Center. “We connected the sit-in back to [activism] in the
                                    ’70s,” said Coy Dailey ’01, SOBHU’s then programming director
                                    and now a trustee of the College. “We did our research about
                                    what had happened before so that way we knew that our move would
                                    be a good move, a good strategic move.” The protest and the
                                    accompanying 16 demands were a culmination of several things,
                                    including what was seen as unresponsiveness to an open letter by
                                    Mayra Diaz ’98 that talked about racial harassment in her
                                    English class and lack of voting rights in the Student
                                    Government Association (SGA) as the College was looking for its
                                    next president.
                                </p>
                                <p>
                                    But that was only one of the many things that the students in
                                    SOBHU did. “Men in SOBHU—we used to cut hair,” Dailey said. “On
                                    Saturday mornings we&rsquo;d meet in a Foss bathroom. I used to
                                    do the shape-ups, someone else cut the hair. That&rsquo;s how we
                                    took care of each other.”
                                </p>
                                <p>
                                    “They also challenged the administration in other ways that and
                                    so effectively that at one point President Cotter had a weekly
                                    public meeting in Page [Commons] that involved all of the
                                    administrators, and any faculty who were interested, and all the
                                    students who were interested in dealing with issues having to do
                                    with now people of color on campus,” said Cheryl Townsend
                                    Gilkes, the John D. and Catherine T. MacArthur Professor of
                                    Sociology and African-American Studies and director of
                                    African-American Studies. “And it was a weekly meeting with the
                                    president.”
                                </p>
                                <p>
                                    SOBHU had a social, political, and academic side to it, noted
                                    Venola Mason ’01 from Los Angeles, who immediately joined SOBHU
                                    when she came to Colby. “We used SOBHU as a space for us to have
                                    with each other, but we spent a lot of time trying to figure out
                                    how we could integrate ourselves into the main population,” she
                                    said. From joining athletic teams to participating in SGA, they
                                    tried to embed themselves into the school.
                                </p>
                                <p>
                                    “We encouraged each other to do all those things so that
                                    we&rsquo;re not just in our own little world by ourselves,”
                                    Mason said. But the classes after them weren’t following the
                                    same trait. “For my class, Colby was more of an opportunity, and
                                    it seemed for the younger classes after us it was more of a
                                    struggle,” she said.
                                </p>
                                <p>
                                    Melissa Minaya-Wilson ’03 from Lawrence, Mass., was in that next
                                    generation of students. Feeling invisible, Minaya-Wilson and
                                    other SOBHU members protested by going to classes with tape over
                                    their mouths. “We did not feel heard by any administration, by
                                    other students, or sometimes by our professors,” she said. For
                                    Minaya-Wilson, the club and space served as “a safe haven,”
                                    where she could escape protests, microaggressions, and daily
                                    struggles.
                                </p>
                                <p>
                                    “It was the place that when I had a rough day, I could always
                                    come in SOBHU and feel like I was myself,” said Amina McIntyre
                                    ’04, from Atlanta, Ga. It was also a place where she gave and
                                    received support. “I didn’t feel like I had to put on a coat in
                                    SOBHU,” she said, referring to what is known as coat-switching,
                                    meaning changing one’s self to fit into different circumstances.
                                    “I felt like people just could see me for who I was.” In SOBHU,
                                    she found others who shared similar struggles, such as joining a
                                    cappella groups, too. “I knew I was a good enough background
                                    singer to be in the choral, but we had trouble getting into the
                                    groups,” she said, “because our voices were a little heavier
                                    sometimes, [and] they felt like we couldn&rsquo;t blend as
                                    well.” She and other students in SOBHU joined powers and formed
                                    the Ethnic Vocal Ensemble (E.V.E.).
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I would always describe SOBLU as my home away from home,
                                    especially when I needed it the most, which was my first year. I
                                    think it&rsquo;s a place with diverse experiences and
                                    personalities, although not always tied to activism. ...
                                    It&rsquo;s a space of learning. And I think a space of growing
                                    [and] personal growth.”
                                </span>
                                &mdash;Nancy Mateo ’19
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-22 offset-lg-2">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “People associate SOBLU students with being social justice
                                    warriors or being very militant about their Blackness or about
                                    their Latinadad wherever it may be. ... You know what we were
                                    doing in the room yesterday? … We watched this video of
                                    [showing] you can pick people up with two fingers. And
                                    that&rsquo;s what we were doing. It was 2:00 a.m. and ... we
                                    were laughing and just having fun. And that&rsquo;s literally
                                    all we ever do in that space.”
                                </span>
                                &mdash;Juan Luna ’20
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    A Journey of Self Discovery
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    For students coming from diverse backgrounds and experiences,
                                    SOBHU has been a place where they grow close to themselves and
                                    to one another
                                </p>
                                <p>
                                    For former SOBHU parliamentarian Donte Tates ’05, from
                                    Baltimore, SOBHU was where he discovered his identity. “For me,
                                    as someone who identifies as gender-fluid, gay, and Black, my
                                    developmental growth period for falling in love and having
                                    relationships and having a social life was in college,” he said,
                                    rather than in high school. Now he’s a high school teacher at a
                                    private independent school in Washington, D.C., teaching
                                    literature, psychology, queer studies, and public speaking and
                                    supporting his students to have a strong racial identity
                                    awareness and development. He also tells them stories from his
                                    Colby and SOBHU experiences.
                                </p>
                                <p>
                                    “[SOBHU] was a space of resistance and a place of subversion, a
                                    place to have a little bit of power, but also it was a home,”
                                    Tates said. “We would argue like a family, we would fight like
                                    family, we would laugh like family, we would talk it out like
                                    family. … Even in our worst times when there were screams and
                                    fights and arguments, we found ways to make that space a place
                                    for all of us.”
                                </p>
                                <p>
                                    That family also looked out for others too. For instance, SOBHU
                                    came out in support of the Muslim Club after the 9/11 attacks.
                                    “What set us apart was our desires to always be both fighters
                                    for justice, but of lovers of life on campus.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “It was an opportunity for me, once in my life, to really just
                                    be around my people. It was an opportunity for me to really just
                                    be with a group of people who were sharing my same experience
                                    and to openly talk about things that were affecting us
                                    academically, socially, and mentally. So it&rsquo;s kind of like
                                    therapy in a very protective space. And it&rsquo;s probably the
                                    only other time in my life that I&rsquo;ve been in that kind of
                                    protected space.”
                                </span>
                                &mdash;Mieko McKay ’01
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think being in that space [in SOBHU] really allowed me to
                                    learn more about myself, but also learn more about other
                                    communities of color in the U.S. because everyone came from so
                                    many different states. A person living in New York, their
                                    experience is so different for someone who was living in Texas.
                                    I think that&rsquo;s what was really meaningful, is being able
                                    to have those conversations in that space and just being able to
                                    develop really great friendships from that experience.”
                                </span>
                                &mdash;Miriam Valle Mancilla ’16
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    Incredibly Diverse from Within
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    Although SOBHU can successfully form a united front in some
                                    issues, the group has never been a monolith
                                </p>
                                <p>
                                    In the fall of 2002, Colby entered into a relationship with the
                                    Posse Foundation, which brought 10 students per class to campus
                                    from New York’s public schools. Through this initiative, both
                                    Colby and SOBHU have started to change in a new way. Antonio
                                    Mendez ’06 from Washington Heights, in that first group of Posse
                                    Scholars, said it was through SOBHU that he learned that despite
                                    having similar backgrounds or experiences, people could have
                                    very divergent opinions.
                                </p>
                                <p>
                                    “I think for Colby, SOBHU meant ethnic diversity specifically
                                    related to the mainland Black and Hispanic unity,” he said. “But
                                    I think what SOBHU brought was actually diversity of thought,
                                    and that&rsquo;s really important and really understated,
                                    unfortunately.”
                                </p>
                                <p>
                                    When former SOBHU president Ajima Olaghere ’07 realized that
                                    even some students of color at the time didn’t fully grasp what
                                    SOBHU was, she set out on a mission to give the larger Colby
                                    community a deeper understanding of the organization. From
                                    concerts to panels, SOBHU’s programming then focused on piquing
                                    the interest of the broader student body, as well as being
                                    relevant for the core membership. “For me academically, the club
                                    was a distraction from my academic coursework, and I mean not in
                                    a good way,” she said and explained how programming always
                                    competed with her coursework. “But socially it was a wonderful
                                    asset, a wonderful gift to have; I was able to form friendships
                                    that I maintain today.” And SOBHU was a safe space, where
                                    Olaghere felt relaxed in the same way that one feels when they
                                    finally reach home after a long, tiring day. “There was no pound
                                    of flesh to be extracted to receive that,” she said.
                                </p>
                                <p>
                                    During this time of diversification, it wasn’t only students of
                                    color who found refuge at SOBHU. Posse Scholar Rebecca Travis
                                    ’07 from Brooklyn frequented the room in between and after her
                                    classes. “I&rsquo;m a white woman,” she said. “Oftentimes when
                                    I&rsquo;m walking into rooms, I have every right to be there,
                                    and my experiences with Colby, Posse, and SOBHU made me
                                    understand what a privilege that is.”
                                </p>
                                <p>
                                    It was also a learning space for international students. Kenyan
                                    Michael “Kip” Kiprop ’07 was drawn to SOBHU for two reasons: to
                                    bridge the gap between SOBHU and the International Club, and to
                                    understand racial dynamics at Colby and the United States.
                                </p>
                                <p>
                                    “I grew up African, but grew up in a setting where the color of
                                    my [Black] skin never really defined me,” said Kiprop, one of
                                    the students who started the Colby African Students Association
                                    (CASA), now called Colby African Society (CAS), which has been a
                                    close partner of SOBHU ever since. “I recognized that with
                                    African-Americans, they had a very different experience growing
                                    up in the U.S.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “We were a type of club everybody has their own identity,
                                    ...when stuff needed to be done that&rsquo;s when we would band
                                    together.”
                                </span>
                                &mdash;LaWanda Marshall ’89
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I&rsquo;m Nigerian, but ... I had no idea what it meant to
                                    identify as Black American or African-American or what
                                    it&rsquo;s like to be Caribbean-American. I really was impressed
                                    and found a lot of meaning in how diverse we were even just
                                    within the club, and how dedicated everybody was to learning
                                    about other cultures and identity and backgrounds, even though
                                    we all may have looked the same, there was much diversity within
                                    us.”
                                </span>
                                &mdash;Olisa Okoh ’13
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                    2010s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-radical-movement"
                                >
                                    An Extended Family
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    The Posse family blends into the SOBHU family
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <p>
                                    Sarah Martinez Roth ’11 still vividly remembers the spring of
                                    2009, when the community took a big, traumatic scar. On the
                                    night of April 12, there was a campus-wide dance party in Page
                                    Commons. Doing rounds, a security officer saw a student sleeping
                                    on a couch in the SOBHU room and called Colby Emergency Response
                                    (CER). When the CER and a security officer were tending to the
                                    student, a SOBHU member tried to enter the room to check in on
                                    their friend and was forced out. That night, two SOBHU members
                                    were restrained by Security and then arrested by the Waterville
                                    Police. The incident triggered an outcry and was followed by an
                                    official investigation as well as a demonstration.
                                </p>
                                <p>
                                    The resulting protest brought as many as 1,000 students,
                                    faculty, and staff to a protest on Miller Lawn. “I felt support
                                    from faculty and students just when it felt very scary to be a
                                    student of color on campus,” said Roth, former SOBHU vice
                                    president and a Posse Scholar. “That, I think, was really
                                    reassuring.” What was also reassuring was to have her SOBHU
                                    family.
                                </p>
                                <p>
                                    For Roth, SOBHU was just like a bigger, extended Posse. “As soon
                                    as we came to campus, we were welcomed into the existing Posse
                                    that was at Colby, and they all hung out in SOBHU,” she said.
                                    “We all just became like one big family.” But within that
                                    family, the growing number of Latinx students like her also
                                    tried to find their own identity. Over the years, although Colby
                                    had Latinx students, their representation was smaller compared
                                    to African-American students, and not all Latinx students were
                                    involved in SOBHU. Around this time, they started discussions
                                    about changing the name of the club from Hispanic to
                                    Latino/Latina.
                                </p>
                                <p>
                                    Fast-forward many years, when Roth moved to Washington, D.C. to
                                    pursue her Ph.D. in tumor biology at Georgetown University, she
                                    joined the local and national board of Posse National Alumni
                                    Advisory Council, watching other students go through the same
                                    path.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “We were the first Posse there, but a lot of the folks in my
                                    Posse were involved in SOBHU. It wasn&rsquo;t even a matter of
                                    joining—It kind of became a natural second home. … I think that
                                    SOBHU provided a space where we as students who were of color
                                    could talk to each other and share experiences and our
                                    challenges and our successes ... Sometimes people would say
                                    ignorant things, sometimes you would struggle in a class and
                                    need somebody to talk about, that&rsquo;s [what] SOBHU meant for
                                    us. And for me personally, it was a space where you could get
                                    support, where you could feel a little less lonely. A lot of
                                    those folks were from New York, and a lot of us missed New York
                                    very much.”
                                </span>
                                &mdash;Claire Jimenez ’06
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    Developing Leaders
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    Through SOBHU generation of students gain skills that open up
                                    new doors for them
                                </p>
                                <p>
                                    Sometimes a racial incident galvanized support for SOBHU on
                                    campus, and ultimately turned students into leaders. In 2012
                                    Posse Scholar Tionna Haynes ’15 organized a protest march after
                                    a student inappropriately dressed up as Trayvon Martin—the
                                    17-year-old African-American shot dead in Florida in 2012—for
                                    Halloween. “That started it all for me,” Haynes said in an
                                    email. Haynes, who became SOBHU’s president, said her SOBHU
                                    experience solidified her path at Colby, including her decision
                                    to major in African-American Studies and history and to join the
                                    SGA and the presidential search committee for President David
                                    Greene. “SOBHU allowed me to be the leader and human I needed to
                                    be.”
                                </p>
                                <p>
                                    Her legacy included a newsletter called “The Unity” that
                                    connected the club with its past and present, and a senior
                                    farewell party began to celebrate those graduating.
                                </p>
                                <p>
                                    Haynes wasn’t the only one to flourish through SOBHU. “One of
                                    the things I loved about it [SOBHU] was that it gave me space
                                    where I can be myself, grow my confidence, and learn about the
                                    campus so that I can branch outward and meet people,” said
                                    Kadish Hagley ’17, who joined hall staff and became a community
                                    advisor, a group he said became another family.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “What SOBHU did for me personally, first of all, it allowed me
                                    to exert leadership skills … required me to speak out, which
                                    wasn&rsquo;t always very easy, about things that I thought would
                                    help and support the students. It also allowed me to build
                                    relationships with the dean of students, other deans … So it
                                    helped me build a network and relationships that were very
                                    beneficial. It also gave me some exposure on campus.”
                                </span>
                                &mdash;Jocelyn Wooten Giangrande ’88
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “One of the things that I did a junior year abroad, I spent a
                                    semester at Howard University in Washington, D.C., which I
                                    wouldn&rsquo;t have done, I think if I wasn&rsquo;t part of the
                                    club and have those folks as close friends. I wouldn&rsquo;t
                                    have gone for the historically Black college experience. And
                                    that was actually going to that semester abroad was instrumental
                                    to me getting the scholarship to study in Germany after the
                                    school. And so I&rsquo;d say there&rsquo;s a direct line between
                                    being in that club and getting opportunities that were really
                                    important to me.”
                                </span>
                                &mdash;Candace Green Blust ’91
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    A Home and a Family
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    In the absence of your own home and family, SOBHU compensated
                                    for all
                                </p>
                                <p>
                                    Marnay Avant ’18 from St. Louis, came to Colby when her family
                                    and friends were in the front-lines in Ferguson, Mo., where
                                    protests erupted after the killing of 18-year-old Michael Brown
                                    in 2014. At SOBHU, she found a community that understood and
                                    supported her when she had to be away from St. Louis. “It was
                                    just a moment where I felt like ‘oh my God, this is the space
                                    that I know that I can trust people here,’” said Avant, who
                                    later became SOBHU’s president. “Some of the lessons that
                                    I&rsquo;ve learned in SOBHU I&rsquo;m still carrying them with
                                    me today, and one of them is to be confident and comfortable and
                                    grounded in your own skin.”
                                </p>
                                <p>
                                    In 2014, when mass protests were sparked by police brutality
                                    against minorities, SOBHU organized its own demonstrations. In
                                    2015 students led a Black Lives Matter protest, which prompted
                                    anonymous racist posts on an app called Yik Yak. The response
                                    was a campus-wide stance against racism led by SOBHU.
                                </p>
                                <p>
                                    But for many, including Avant, SOBHU was more than protest. She
                                    still fondly remembers memories and relationships formed when
                                    producing Ntozake Shange’s for colored girls for Sounds of
                                    Blackness, the annual Black History Month show that started in
                                    2014. “There were so many different strong messages in there
                                    about Black womanhood in general,” she said. “I felt very
                                    empowered when I did that show and got out there with my SOBHU
                                    sisters.”
                                </p>
                                <p>
                                    SOBHU has been creative in taking initiative in planning events
                                    during Black History Month, said Cheryl Townsend Gilkes, the
                                    John D. and Catherine T. MacArthur Professor of Sociology and
                                    African-American Studies and director of African-American
                                    Studies. Students would invite her to SOBHU events and attend
                                    African-American Studies events. “At particular points in my
                                    time here Colby, the club could be very prominent in its
                                    activities and students would operate as a collective,” she
                                    said, and added an observation: “When the women were running and
                                    were in charge, things would really happen.”
                                </p>
                                <p>
                                    In 2017, to more accurately express the identities it
                                    represented, SOBHU became SOBLU under the presidency of
                                    California native Aremi Tapia-Torres ’17, now an assistant
                                    director of admissions at Colby. Tapia-Torres also started the
                                    annual Latinidad show for Latinx-Hispanic Heritage Month, along
                                    with a dance and music night named “Prendelo!” that began in
                                    2011.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “SOBHU was a family. It was a close family. It was a family
                                    where we loved on each other, where we were supporting and
                                    encouraging each other. It was a place where we could fight
                                    about whatever it was that we might have differences in and that
                                    we could agree to disagree on those things.”
                                </span>
                                &mdash;James “Jimmy” Reynolds ’90
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    The “B” and the “L”
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    By maintaining its core, SOBLU continues to preserve its
                                    uniqueness
                                </p>
                                <p>
                                    Colby’s SOBLU is unique in many ways. But there’s one element
                                    that makes it stand out among other similar organizations on
                                    college campuses. In NESCAC, only Colby and Hamilton link Black
                                    and Latinx organizations under the same umbrella.
                                </p>
                                <p>
                                    “This organization—its inception was around these two groups
                                    that in other spaces historically have not been able to
                                    collaborate or come together,” said Tashia Bradley, former Pugh
                                    Center director and senior associate dean of students and
                                    diversity, inclusion, and equity programs, now executive vice
                                    president and chief innovation officer for Wilberforce
                                    University. “That always made me very excited because it&rsquo;s
                                    an example of what happens when two groups really try to come
                                    together and have to learn from each other.”
                                </p>
                                <p>
                                    One thing that people often forget, Bradley said, is that
                                    students in the Pugh Center, seen as multicultural and diverse,
                                    also learn from one another. “When you think about the
                                    programming that SOBHU did and does, …it adds to the cultural
                                    piece of the [College], the learning piece. It supports the
                                    academic experience, especially as it relates to global studies,
                                    African-American studies, anthropology, all of these different
                                    academic programs,” said Bradley, who has been impressed by
                                    students&rsquo; commitment to learning and willingness to share
                                    that. In the room, she said, students read together, discussed
                                    their reading, and helped each other with their academic work.
                                </p>
                                <p>
                                    Another benefit of the dual identity reveals itself in events
                                    like the diaspora dinner, where members cook something from
                                    their respective cultures and share it with others, including
                                    faculty and staff. “Sometimes there are the same dishes, but we
                                    just have different names for them or we prepare them
                                    differently,” said Nancy Mateo ’19, a former president.
                                </p>
                                <p>
                                    “I think a lot of the things that I learned about myself and
                                    about race and race and identity—a lot of them happened and
                                    sprouted from SOBLU,” said Ashley Gissel Olvera ’20, a Posse
                                    Scholar from Houston, which replaced Posse New York in 2013.
                                    SOBLU also became a source for non-members and non-Black or
                                    -Latinx identifying individuals to learn about issues related to
                                    being a first-generation student, low-income student, or person
                                    of color. In every platform, she said, SOBLU has been at the
                                    forefront, listening, asking questions, sharing its views on
                                    issues at hand. “I think that in addition to providing something
                                    very valuable for students to grow,” Olvera said SOBLU has been
                                    “a big helper in making Colby a better place for people of
                                    color, especially since every year it gets more and more
                                    diverse.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “The conversations we had in SOBHU just to sort of understand
                                    the people from the diaspora, if you will, I don&rsquo;t know
                                    that I would have had that opportunity outside of Colby,
                                    actually. And since then I don&rsquo;t think I&rsquo;ve had that
                                    diverse group of friends from different parts of the U.S. in the
                                    SOBHU community. I don&rsquo;t think I&rsquo;ve had that
                                    opportunity to meet and talk to people from such different
                                    backgrounds.”
                                </span>
                                &mdash;Margaret Martei ’07
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                    2020s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-radical-movement"
                                >
                                    The SOBLU Room
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    After five decades, SOBLU room still is a refuge for students
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <p>
                                    Regardless of its location or era, the SOBLU room has always
                                    been a place where students have intellectual conversations,
                                    debates, and discussions about a wide variety of things ranging
                                    from abortion to colorism to police brutality. The room, one of
                                    the most vibrant spaces on campus, is also the place where
                                    students convene after racist incidents on campus and try to
                                    heal one another. For instance, after the “Akon Day” party in
                                    November 2018, an event named for the singer and rapper and
                                    marked by students dressed as convicts, SOBLU members have
                                    always congregated in the room, which many describe as a safe
                                    space, and decided to stage a silent protest.
                                </p>
                                <p>
                                    Each of the well-used sofas in there has a name, a tradition
                                    that dates back to the mid-to late-2000s. The brown couch is
                                    called “Decadence.” The long white one is “Moby Dick.” The
                                    newest is named “Bourgeoise,” students say, “because she&rsquo;s
                                    made out of leather.” One year, when a member, Kalu Kalu ’15,
                                    went abroad, the students printed a photo of him and hung it
                                    above the couch where he often sat to reserve his spot until his
                                    return.
                                </p>
                                <p>
                                    Another key artifact and a tradition in the room is decorating
                                    the wall.
                                </p>
                                <p>
                                    Posters of SOBLU’s staple events, guest speakers, Story Time—an
                                    SGA event that features seniors—appear alongside quotes from
                                    Audrey Lorde, Laverne Cox, and Margaret Cho. One from Angela
                                    Davis, in block letters, reads: “I am no longer accepting the
                                    things I cannot change. I am changing the things I cannot
                                    accept.” To its right is Martin Luther King Jr.’s full-length “I
                                    Have a Dream” speech. There are also pictures from the 1970
                                    chapel takeover, a sign saying #WeHaveNotForgottenYou, which was
                                    the name of a weeklong demonstration in 2015, and a front page
                                    of the Echo from the event to bring attention to the DREAM Act
                                    and immigration reform in 2014.
                                </p>
                                <p>
                                    In the corner is a large Philly Pride Flag, which has black and
                                    brown stripes representing people of color.
                                </p>
                                <p>
                                    “We made sure to put that up in the club room because prior to
                                    that, I wouldn&rsquo;t say that it was unsafe to talk about
                                    those things, but it was definitely not the norm,” said SOBLU’s
                                    co-president form 2019-2020 academic year Juan Luna ’20, who
                                    decorated the wall with the other co-president, Kris de Luna
                                    ’20, both of whom are queer-identifying individuals. Both made a
                                    concerted effort of “queering the space,” said Luna, a
                                    QuestBridge scholar from Miami.
                                </p>
                                <p>
                                    “I think we have the most programming out of any club on this
                                    campus,” Luna said. But the nature of events has changed within
                                    their four years in SOBLU. In their initial years at Colby, the
                                    club’s program was more outward-facing, they said. “We were
                                    trying to teach white students on this campus, or like students
                                    who don&rsquo;t have the Black or Latino experience, about our
                                    struggles on this campus,” they said. Events are not solely for
                                    SOBLU members, but they are more focused on members as well as
                                    the community, whether it be an information session on STDs or
                                    board game nights. “I think [now] it is looking more inward.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “The room was very important to us because it served as our
                                    escape.”
                                </span>
                                &mdash;Steven Earle ’79
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “It just gave us a safe place to be where you were not the odd
                                    person out. If you were going through a rough time, you knew
                                    where to go.”
                                </span>
                                &mdash;Angela Hansen ’85
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                    id="a-space-of-its-own"
                                >
                                    Still a Critical Organization
                                </h3>
                                <p
                                    className="mb-3"
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                    }}
                                >
                                    Half a century later, SOBLU continues to play an important role
                                    for students and even faculty members
                                </p>
                                <p>
                                    With each cohort of students, SOBLU has gained more prominence
                                    on Mayflower Hill. Five decades later, it still remains to be a
                                    critical organization for students, for faculty, and for Colby.
                                </p>
                                <p>
                                    “I do find SOBLU now, and SOBHU then, to be a space of home for
                                    students,” said Chandra Bhimull, associate professor of
                                    anthropology and African-American studies, and the club’s
                                    advisor since 2008, “but actually also for me.” The SOBLU room
                                    has been a place where she can stop by before leaving campus or
                                    late at night to chat with the students about life in general or
                                    an idea she has for class. “I actually cannot imagine being here
                                    without SOBLU.”
                                </p>
                                <p>
                                    “That room for me is like your living room at your house,
                                    somewhere that I have to stop by at some point in the day,” said
                                    Dennis, a member of Posse Houston. “When I run into an issue at
                                    Colby that might have been problematic or difficult to deal with
                                    ... I always go to SOBLU and ask someone in there because
                                    it&rsquo;s something I feel like they would be able to relate
                                    to.” In SOBLU, Dennis said, she learned to take care of herself,
                                    mentally, physically, and academically.
                                </p>
                                <p>
                                    “I&rsquo;m hoping to hold a leadership position at some point,”
                                    she said, “because I&rsquo;m really passionate about what SOBLU
                                    does for the campus and for students on campus as well students
                                    coming to Colby.”
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think it started with a legacy of activism. And although it
                                    is a club, it is hard for me to speak of it as the club, because
                                    it&rsquo;s so counter-cultural. But I think it&rsquo;s
                                    extraordinary that the organization has not only endured but has
                                    thrived then it has changed with the times over these last 50
                                    years. So that&rsquo;s extraordinary to me.”
                                </span>
                                &mdash;Charles Terrell ’70
                            </div>
                        </div>
                        <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “When we were there, there was no real support system to help us
                                    to deal with whatever changes we were going through, … what
                                    other kinds of academic challenges we were going through,
                                    whatever kind of emotional mental health issues we were going
                                    through. ... It is not enough to get somebody to an environment
                                    if they are not going to make sure they are successful to get
                                    through the environment and graduate. And there are so many
                                    resources in place now that I think it&rsquo;s just awesome.
                                    None of those were there when we were there.”
                                </span>
                                &mdash;Jacquelyn Wynn ’75
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
