import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import Image from '../components/common/Image';
import HomeSvg from '../components/HomeSvg';
import VideoPlayer from '../components/common/Video';

const Home = () => (
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
                                    main: 'images/Colby_SOBLU_Torres0017-retouched-600.jpg',
                                    thumbnail: 'images/Colby_SOBLU_Torres0017-retouched-thumb.jpg',
                                }}
                                lightboxSrc="images/Colby_SOBLU_Torres0017-retouched-1200.jpg"
                                altText="Students sit tightly together on a SOBLU couch during one of their executive board club meetings on a Sunday night."
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
                            src={{
                                main: 'images/Colby_SOBLU_Torres0017-retouched-600.jpg',
                                thumbnail: 'images/Colby_SOBLU_Torres0017-retouched-thumb.jpg',
                            }}
                            lightboxSrc="images/Colby_SOBLU_Torres0017-retouched-1200.jpg"
                            altText="Students sit tightly together on a SOBLU couch during one of their executive board club meetings on a Sunday night.s"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="bold-emphasis-text col-lg-22 offset-lg-2">
                    <p>
                        At 8 p.m. sharp, the SOBLU room in the Pugh Center in Cotter Union was
                        bursting at the seams. Students squeezed onto couches. Some found an empty
                        chair or perched on a tabletop. A few preferred standing.
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
                                        “Certainly in the beginning, it was not a club, it was not a
                                        part of Colby culture. It was a radical movement that became
                                        a part of Colby culture, and that’s something that I think
                                        many of us who were involved from the beginning perhaps
                                        couldn’t have imagined.”
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '1.3rem',
                                            marginLeft: '104px',
                                        }}
                                    >
                                        &mdash;Trustee Emeritus Charles Terrell ’70, SOBU’s first
                                        president
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-14">
                                <p>
                                    For a half-century, these Sunday meetings have been a SOBLU
                                    tradition. They have flourished since its beginnings in the
                                    1970s as Students Organized for Black Unity (SOBU), to its shift
                                    to include growing numbers of students of color and their allies
                                    as Students Organized for Black and Hispanic Unity (SOBHU), to
                                    its recent leadership focusing to enrich the experiences of its
                                    members as Students Organized for Black and Latinx Unity
                                    (SOBLU).
                                </p>
                                <p>
                                    “Being here in the 1970s versus 2019 is very different in terms
                                    of racial demographics and race relations,” said Kris de Luna
                                    ’20, who presided over Sunday night meetings as last academic
                                    year’s SOBLU co-president.
                                </p>
                                <p>
                                    But throughout its first 50 years, SOBLU, with all its names and
                                    iterations, has served as both a refuge and a source of
                                    empowerment for students who have found themselves in a new and
                                    sometimes challenging environment, as a focal point of racial
                                    education and cultural firsts, and, on occasion, as a nexus for
                                    protest to push for change.
                                </p>
                                <div className="soblu-desktop-hide my-4">
                                    <p
                                        className="fgCompressed"
                                        style={{
                                            fontWeight: '600',
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        “Certainly in the beginning, it was not a club, it was not a
                                        part of Colby culture. It was a radical movement that became
                                        a part of Colby culture, and that’s something that I think
                                        many of us who were involved from the beginning perhaps
                                        couldn’t have imagined.”
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
                                    Over the course of a half-century SOBLU has provided a loving
                                    and caring family for Colby students.
                                </p>
                                <p>
                                    This story travels back to its founding and presents this
                                    organization through the eyes of its members, who spent only
                                    four years on Mayflower Hill but took away memories that remain,
                                    for many, powerful decades later.
                                </p>
                                <p>
                                    More than 40 members across the 50-year spectrum, including many
                                    of its former presidents, have contributed to this piece by
                                    sharing their recollections.
                                </p>
                                <p>
                                    This is the result&mdash;a wide-ranging exploration of an
                                    organization that has influenced hundreds, if not thousands, of
                                    Colby students, faculty, and staff and offers insights into a
                                    half-century of change at Colby and across the country.
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
                                    <Link to="/chapel-takeover-1970">
                                        <img
                                            src="images/Chapel-protest-students-speaking-to-audience.jpg"
                                            className="img-fluid"
                                            alt="SOBU members, who occupied the Lorimer Chapel in 1970, address the crowd outside the building."
                                        />
                                    </Link>

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
                                “Certainly in the beginning, it was not a club, it was not a part of
                                Colby culture,” said Charles Terrell ’70, the organization’s first
                                president and perhaps its most well-known member, and a Colby
                                trustee emeritus. “It was a radical movement that became a part of
                                Colby culture, and that&rsquo;s something that I think many of us
                                who were involved from the beginning perhaps couldn&rsquo;t have
                                imagined.”
                            </p>
                            <p>
                                Before becoming SOBLU, it was called Students Organized for Black
                                Unity (SOBU, pronounced “S” “O” “B” “U”), more commonly known by its
                                handful of members as “the organization,” which emerged in 1969.
                                “Our time at Colby was post-civil rights, and we were really a part
                                of [the] Black Revolutionary Movement that started in the
                                middle-’60s, which was built upon the shoulders of the Civil Rights
                                Movement,” said Terrell, who went on to found Cross Creek
                                Associates, a pro bono higher-educational advisory service promoting
                                access and equity. “So there was a focus on the cohesiveness of
                                being Black, and then certainly that expanded into embracing Latino
                                culture and values.”
                            </p>
                            <div className="soblu-desktop-hide my-4">
                                <Link to="/chapel-takeover-1970">
                                    <img
                                        src="images/Chapel-protest-students-speaking-to-audience.jpg"
                                        className="img-fluid"
                                        alt="SOBU members, who occupied the Lorimer Chapel in 1970, address the crowd outside the building."
                                    />
                                </Link>

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
                                        Four of the 17 students who were inside the Lorimer Chapel
                                        in 1970 share their experiences.
                                    </div>
                                </div>
                            </div>
                            <p>
                                From the beginning, SOBU was a product of the unity between
                                African-American and Latinx students, along with other students of
                                color, who, at the time, used “Black” as an umbrella term. “The
                                Latino students who were with us identified as Black-Latino,” said
                                Terrell.
                            </p>
                            <p>
                                Terrell’s involvement with SOBU started when his friend Sebsibe Mamo
                                ’70 told him that the first-year class had the largest number of
                                Black students yet at Colby. Invited to these students’ meeting,
                                Terrell walked in thinking he wouldn’t get too involved and walked
                                out as SOBU’s inaugural president. “I was really being influenced by
                                the new students and the force [and energy] that they were
                                bringing,” he said. “I think it took a great deal of courage for
                                members to create SOBU, and it was certainly a part of a nationwide
                                movement of student activism and Black student activism.”
                            </p>
                            <p>
                                Around that time, SOBU-like organizations were popping up on college
                                campuses across the country. “We were maybe one of the last ones,”
                                said Mamo, an Olympic runner from Ethiopia, now retired from the New
                                York Blood Center in Long Island, N.Y., a community-based NGO for
                                blood collection and distribution, “because we were checking out how
                                effective it would be.” Of the handful of Black students who
                                enrolled every fall, only one or two would return after winter break
                                due to lack of support and activities outside classes, Mamo
                                explained. “That’s why we decided to have something where we can
                                talk and gather.”
                            </p>
                            <p>
                                Once SOBU was founded, the next order of business was to call
                                attention to its agenda. As their first major action, SOBU occupied
                                Lorimer Chapel in March 1970, demanding to have more students and
                                faculty of color, elimination of a GPA requirement for maintaining
                                financial aid, a Black studies program, and an orientation week for
                                incoming Black students.
                            </p>
                            <p>
                                The chapel takeover put SOBU in the spotlight and left its mark in
                                Colby’s history, but more importantly, it established a legacy for
                                generations to come.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “Without SOBHU I&rsquo;m not sure Colby could have been as
                                successful in retaining the students of color that they&rsquo;ve
                                been able to retain.”
                            </span>
                            &mdash;Trustee Shaquan Huntt ’13
                        </div>
                    </div>
                    <div className="row mt-6" style={{ fontSize: '1.4rem' }}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <VideoPlayer
                                url="videos/What_did_your_SOBLU_experience_mean_to_you.mp4"
                                image="images/doris-mathis-73-video-thumb.jpg"
                            />
                        </div>
                        <div className="mt-4">
                            <p
                                style={{
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    fontSize: '1.5rem',
                                }}
                            >
                                What did your SOBLU experience mean to you?
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
                                For students of color, SOBU became a vehicle to pass down knowledge
                                and support one another
                            </p>
                            <p>
                                From its initial years, SOBU served as a source of support, where
                                its members relied on each other for everything from academics to
                                social life. “To me, SOBU became my family away from home,” said
                                Doris Ford Mathis ’73, from Alabama, one of the first-year students
                                involved in starting SOBU. Through the organization, she got to talk
                                about transition issues, struggles, and classes with others who
                                experienced similar issues. They also enjoyed each other’s company.
                                “I traveled [a] really long way, and just having people that I can
                                count on and go to was very important,” said Mathis, who earned a
                                law degree from George Washington University and now provides legal
                                guidance to people seeking advice in her community.
                            </p>
                            <div className="soblu-desktop-hide my-4" style={{ fontSize: '1.6rem' }}>
                                <div style={{ fontWeight: '600' }}>
                                    “To me, SOBU became my family away from home.”
                                </div>
                                <div>&mdash;Doris Ford Mathis ’73</div>
                            </div>
                            <p>
                                From Mathis’s years at Colby to the present, the organization has
                                remained a support system that students turned to for guidance,
                                whether it be academics, social life, or just life in general.
                                Upperclassmen mentor younger students and share tips on studying,
                                resources, classes. Peers exchange ideas, experiences, and advice.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “Do you need a jacket? Do you need books? Do you need to figure out
                                which resource [there is]? Do you need to talk to a professor? I
                                felt like if you know something, [if] you have information, sharing
                                helps someone else underneath you—that was just the M.O., the mantra
                                of the club.”
                            </span>
                            &mdash;Isadora “Izzy” Alteon ’13
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 d-flex align-items-center">
                            <div className="soblu-mobile-hide d-none">
                                <Image
                                    src={{
                                        main:
                                            'images/newspaper-01-black-students-urge-colby-headline-crop.png',
                                    }}
                                    lightboxSrc="images/newspaper-01-black-students-urge-colby-act-on-demands--full.png"
                                    altText="Portland Press Herald, March 6, 1970"
                                    caption="Portland Press Herald, March 6, 1970"
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
                                With financial resources allocated, SOBU altered the programming
                                landscape at Mayflower Hill and in Central Maine
                            </p>
                            <p>
                                After the chapel takeover of 1970, SOBU received a budget of its own
                                through the College and began to serve as a cultural outlet, too.
                                “Typically, most of us were coming from predominantly Black or
                                minority communities and were getting away for the first time from
                                home,” said Ken Melvin ’74, who went on to become a state circuit
                                court judge and longtime member of the Virginia House of Delegates
                                and whose high school was integrated only for a year before he came
                                to Colby. “So to have an organization that reinforced the culture
                                that we left behind was extremely important.” Having SOBU as an
                                official College entity was equally valuable. “That,” Melvin said,
                                ”was the recognition of the cultural differences that we brought to
                                that campus and acceptance of it,” especially important in the early
                                1970s.
                            </p>
                            <div className="soblu-desktop-hide my-4 d-none">
                                <Image
                                    src={{
                                        main:
                                            'images/newspaper-01-black-students-urge-colby-headline-crop.png',
                                    }}
                                    lightboxSrc="images/newspaper-01-black-students-urge-colby-act-on-demands--full.png"
                                    altText="Portland Press Herald, March 6, 1970"
                                    caption="Portland Press Herald, March 6, 1970"
                                />
                            </div>
                            <p>
                                “That was the heyday of the Black Panther Party, student activism,
                                and Black nationalism across the country,” he said. “It was a very
                                confrontational period, and we didn&rsquo;t have that at Colby. We
                                got along well with the students. But we just needed [the] comfort
                                of our [own] community. It was a small, tiny community that we had.”
                            </p>
                            <p>
                                That small community had a large impact on the College. From the
                                Alvin Ailey Dancers to Muhammad Ali to Rahsaan Roland Kirk to
                                Roberta Flack, SOBU brought renowned Black performers to campus and
                                to Central Maine. While SOBU members found a piece of their culture
                                in SOBU’s activities, these events enabled them to share it with the
                                larger Colby community. “It was a positive organization that had in
                                its heart the uplifting of the African-American and Hispanic
                                culture,” Melvin said, who was SOBU’s spokesperson.
                            </p>
                            <p>
                                In the 50 years that followed, SOBU has continued to bring—sometimes
                                in collaboration with others—speakers, artists, and plays that
                                reflected its members and their culture. For instance, activist and
                                scholar Cornel West, film director Spike Lee, the first
                                African-American female pilot in the U.S. Navy Brenda Robinson,
                                minister Samuel Proctor, and the play Platanos and Collard Greens.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-22 offset-lg-2">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “We wanted to provide educational opportunities for ourselves and
                                the campus at large, like bringing speakers to campus and then have
                                something ... to educate people but also [have] things that we might
                                not find in our curriculum and campus generally. So we&rsquo;re able
                                to, in a way, almost augment our education.”
                            </span>
                            &mdash;Kebba Tolbert ’94
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 d-flex align-items-center" />
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
                                Over the years, the SOBU room provided a needed space for its
                                members
                            </p>
                            <p>
                                It was 1971 or 1972, a few years after the chapel takeover, SOBU got
                                its own space—on the third floor of Runnals Union, which was also
                                home to sorority meeting rooms and the women’s gymnasium. “Most of
                                the frats and other organizations had rooms assigned to them or
                                built, and we had no place to gather for cultural reinforcement,”
                                said Sylvia Hodges ’75, who now works in secondary education in
                                Virginia. “This room was just symbolic, really, because it was not a
                                huge place, and we wanted to have a library, we wanted to have
                                resources that all students could use to show our place at Colby,
                                too.”
                            </p>
                            <p>
                                A room and a budget, combined with more students of color joining
                                the Colby community, meant change for SOBU. “I think originally, and
                                obviously, it was to establish [an] identity for us that we did
                                exist and that we do matter,” said Vincent Guess ’73, one of the
                                founding members, from Boston, who has a business coaching people
                                with career transition. Those goals were crucial given the racial
                                atmosphere in the late 1960s, Guess explained. “Whenever we went
                                into town, people would stop their cars, look at you like
                                they&rsquo;ve never seen anything like that before,” he said.
                            </p>
                            <p>
                                In response SOBU pushed for change, including bringing more students
                                of color to campus.
                            </p>
                            <p>
                                Like members of fraternities and sororities, SOBU members began to
                                eat together in the dining halls. When the club moved to a room in
                                the basement of Mary Low in 1975, a space that was initially used
                                for meetings and studying, it began to host Friday dances. From then
                                on, the variety of activities and occupancy grew exponentially.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I remember at times I&rsquo;d walk by and there would be loud
                                hip-hop there [playing] from the SOBHU room, and I loved that
                                because it made me feel like I was back home in New York.”
                            </span>
                            &mdash;Antonio Mendez ’06
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I think my body is automated to go directly to SOBLU any time after
                                anything. ... I just get out of class, first thing to do: go to
                                SOBLU, even if 2 seconds later, I remember, ‘Oh wait, I&rsquo;m
                                supposed to be in a meeting right now’ and then I leave. I wonder if
                                SOBLU didn&rsquo;t exist where my body would go automatically.”
                            </span>
                            &mdash;Ashley Gissel Olvera ’20
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
                                The changing makeup of SOBU raised questions about membership
                            </p>
                            <p>
                                When Steven Earle ’79 from New York City arrived on Mayflower Hill,
                                SOBU was his getaway from biases in the classroom, where he recalled
                                becoming the center of attention or being treated as the voice of
                                minorities, or in the supermarket, where he oftentimes was followed.
                            </p>
                            <p>
                                “We were students trying to make our way in an environment that was
                                not reflective of us, in a culture that was not reflective of us, in
                                a classroom experience that was not reflective of us; we shared a
                                common background,” said Earle, now a Colby trustee and director at
                                the Office for Diversity and Access at New York State Education
                                Department. “The organization was instrumental in helping us as a
                                group, a small group at the College, to support each other and go
                                for some sense of refuge.”
                            </p>
                            <p>
                                But that didn’t mean they always had a consensus on important
                                questions, including the makeup of SOBU itself. SOBU mostly
                                consisted of Black and Hispanic students in Earle’s first year, but
                                by his senior year, there were some Asian and white students, too.
                                “To this day I can remember some of that debate,” Earle said. Many
                                felt that if those students understood and supported what the club
                                was about and its priorities, they were welcomed. “But,” he said,
                                “it was not an easy lift.”
                            </p>
                            <p>
                                Reflecting that change, SOBU’s name became Students Organized for
                                Black and Hispanic Unity (SOBHU) in the 1979-80 student handbook.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “You had to befriend people, and get to know people. And we would
                                welcome you with arms wide open.”
                            </span>
                            &mdash;Donte Tates ’05, on nonmembers being welcome in the SOBHU space.
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                1980s
                            </h2>
                            <h3
                                className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                id="back-to-the-old-days"
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
                                New students and changing leadership reenergized SOBHU
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-9 d-flex align-items-center">
                            <div className="soblu-mobile-hide d-none">
                                <div className="mb-0 mb-md-4">
                                    <Image
                                        src={{
                                            main: 'images/Race-Relations-Colby-topic-thumb-600.jpg',
                                        }}
                                        lightboxSrc="images/Race-Relations-Colby-topic-1200.jpg"
                                        altText="A newspaper clip announcing a SOBHU-sponsored event during the Black History Month."
                                        caption="A newspaper clip announcing a SOBHU-sponsored event during the Black History Month."
                                    />
                                </div>
                                <Image
                                    src={{
                                        main: 'images/Black-oppresses-thumb-600.jpg',
                                    }}
                                    lightboxSrc="images/Black-oppresses-1200.jpg"
                                    altText="A piece reporting on the Black History Month event featuring Charles H. King Jr."
                                    caption="A piece reporting on the Black History Month event featuring Charles H. King Jr."
                                />
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-14">
                            <p>
                                By 1979 Colby began to enroll more students of color through the
                                newly established Ralph J. Bunche Scholars Program. Jocelyn Wooten
                                Giangrande ’88 from Boston was one of those scholars. When she
                                arrived, she said, SOBHU was losing steam. Her goal, as SOBHU
                                president, was to bring it back to its former purpose—providing a
                                group and place where students felt at home and supported one
                                another.
                            </p>

                            <p>
                                “At times, you get tired of feeling that you&rsquo;re in the
                                minority, so it [SOBHU] allowed for an opportunity for us to come
                                together and let our hair down and, in a safe environment, talk
                                about our fears, our anxieties, our concerns,” said Giangrande, a
                                career coach based in Michigan. “It gave you a sense that you were
                                not alone in some of the things that you may have been
                                experiencing.”
                            </p>
                            <div className="soblu-desktop-hide my-4 d-none">
                                <div className="my-4 mb-md-4">
                                    <Image
                                        src={{
                                            main: 'images/Race-Relations-Colby-topic-thumb-600.jpg',
                                        }}
                                        lightboxSrc="images/Race-Relations-Colby-topic-1200.jpg"
                                        altText="A newspaper clip announcing a SOBHU-sponsored event during the Black History Month."
                                        caption="A newspaper clip announcing a SOBHU-sponsored event during the Black History Month."
                                    />
                                </div>
                                <Image
                                    src={{
                                        main: 'images/Black-oppresses-thumb-600.jpg',
                                    }}
                                    lightboxSrc="images/Black-oppresses-1200.jpg"
                                    altText=""
                                    caption="A piece reporting on the Black History Month event featuring Charles H. King Jr."
                                />
                            </div>
                            <p>
                                In addition to rejuvenating SOBHU, Giangrande wanted members to be
                                seen as Colby students rather than just students of color. That’s
                                why they brought non-SOBHU friends to all of the club’s events—a
                                coffee chat, Black History Month celebration, or a movie night.
                                SOBHU members also used music as a unifier. Continuing the Friday
                                night dance tradition, they played hip hop, R&amp;B, rap to bring
                                students to the club room. “We taught many Colby students the latest
                                dance moves,” Giangrande said.
                            </p>
                            <p>
                                The student activism that defined the club at its inception also
                                returned. In 1989, SOBHU submitted a set of proposals to the
                                administration called “The Essentials to Colby Diversity,” asking
                                the College to recruit more minority students and faculty,
                                restructure the African-American Studies Program, and establish a
                                support network for the minority community. Those demands were a
                                continuation of the efforts of the 1970s, noted Lisa M. Wright ’90,
                                SOBHU’s secretary at the time, when writing about “Unmasking of the
                                Takeover of Lorimer Chapel,” an event SOBHU held in the chapel to
                                commemorate the 20th anniversary of the chapel takeover.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                1990s
                            </h2>
                            <h3
                                className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                id="branching-out"
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
                                SOBHU leadership tried to reach out to other clubs on campus
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
                                Tennessee native James “Jimmy” Reynolds ’90 said SOBHU was a way for
                                him to be rooted in an experience of being an African American.
                                “Being from the South, being in this new experience, and just really
                                needing some type of a safety net,” involvement with SOBHU gave him
                                the feeling that there were people that always had his back.
                            </p>

                            <p>
                                But as president, Reynolds also had an additional mission: trying to
                                connect SOBHU with the International Club, with which he was equally
                                involved. “I felt like a lot of our concerns were the same,” he said
                                in his apartment in upper Manhattan, where he works as an arts
                                educator in New York City.”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “Something that&rsquo;s great in general about being in the Pugh
                                Center, in that set of clubs, is that we attended all the events of
                                all of the different clubs. I was a member of Hillel and went to a
                                bunch of events there. The Bridge had a bunch of events we were part
                                of. We were one piece of this larger space ... We thought it was
                                important to support others as well and show that this is a good
                                thing. We wanted to celebrate, and we wanted to learn, and we wanted
                                to have a good time.”
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
                                id="an-agency-of-change"
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
                                SOBHU has changed the campus and its members for the better
                            </p>
                            <p>
                                As much as it was shaped by its members, SOBHU was also affected by
                                national events. After the 1992 Rodney King verdict, in which Los
                                Angeles police officers were acquitted of assault, SOBHU members
                                started to question their safety, place, and role at Colby. When a
                                Senior Art Show flyer inappropriately used King’s image, students of
                                color felt even more invisible, they said. That alienation prompted
                                SOBHU, along with other clubs, to propose multicultural housing
                                through a coalition they formed, Students of Color United for
                                Change.
                            </p>

                            <p>
                                Consequently, the College established the “Trustee Commission on
                                Multicultural and Special Interest Housing” to explore this
                                proposal. In the end, the commission recommended having a
                                multicultural center instead of a house. The eventual result was the
                                Pugh Center. “SOBHU was a big <em>big</em> push because we&rsquo;re
                                very visible, vocal, highly affected by the procedures and policies
                                of the College,” said Kebba Tolbert ’94, a former SOBHU president
                                and a leader in Students of Color United for Change about SOBHU’s
                                role in the process.
                            </p>
                            <p>
                                In 1996 the Pugh Center opened, and the SOBHU room moved to the
                                heart of campus, further establishing the organization as a force on
                                campus.
                            </p>
                            <p>
                                “Colby is a good place now, still. But having that space [the room]
                                and that ability to just feel like you&rsquo;ve got another home, I
                                think is important. And I think it really shows the purpose,” said
                                Tolbert, who is an associate track and field head coach and
                                recruiting coordinator at Harvard University.
                            </p>
                            <p>
                                This wasn’t the only issue where SOBHU played a key role. “We were
                                able to ... heighten the conversation about the importance of making
                                Colby welcoming for more people,” Tolbert said. “I think that
                                pioneered a lot of different areas from social programming to the
                                types of classes offered to when they&rsquo;re looking at professors
                                and hiring.”
                            </p>
                            <p>
                                Mark Tappan, professor of education and human development and a
                                SOBHU ally since his arrival at Colby in 1991, said the “activism
                                that SOBHU has represented, and generations of students who have
                                taken that seriously, have been really, really important,” adding
                                that SOBHU has also been crucial for support and community building.
                                “I don&rsquo;t think Colby would be where we are today without
                                SOBHU,” Tappan said.
                            </p>
                            <p>
                                The same can be said for its members. Over the years, SOBHU has been
                                a reason for many students to stay at Colby as it served as a “home
                                away from home” and a springboard for them to flourish and succeed
                                at the College.
                            </p>
                            <p>
                                “They [SOBHU members] were the ones that reminded me that I belong,
                                that reminded me that I was smart, that reminded me I had value and
                                what was valued for me mattered. It gave me the confidence to walk
                                across campus with a handful of us and feel like I could get through
                                each and every day,” said Karlene A.P. Burrell-McRae ’94, now dean
                                of the College, who found her voice in SOBHU. “In SOBHU, I got to
                                play out all of my insecurities, and it helped form who I became.”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I think the difference [of SOBHU] is understanding that we are
                                coming from across the diaspora and what that means for folks, the
                                emphasis on community, holding each other down, and bringing up
                                aspects of home ... I think also the impact that we&rsquo;ve had on
                                campus, on campus activism, and making change in our campus, members
                                of SOBHU specifically and SOBHU as a club.”
                            </span>
                            &mdash;Bonnie Maldonado ’16
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “SOBLU is home, it&rsquo;s a place where my people
                                are&ndash;they&rsquo;re just loving ... but they also give you tough
                                love, too, when you need it. ... They&rsquo;re helping you become
                                the best version of yourself.”
                            </span>
                            &mdash;Marnay Avant ’18
                        </div>
                    </div>
                    <div className="row mt-6" style={{ fontSize: '1.4rem' }}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <VideoPlayer
                                url="videos/What_were_some_of_the_pressing_issues_facing_you_and_SOBLU_at_the_time.mp4"
                                image="images/tates-05-video-thumb.jpg"
                            />
                        </div>
                        <div className="mt-4">
                            <p
                                style={{
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    fontSize: '1.5rem',
                                }}
                            >
                                What were some of the pressing issues during your time?
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                2000s
                            </h2>
                            <h3
                                className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                id="activism-and-support-in-tandem"
                            >
                                Activism and Support in Tandem
                            </h3>
                            <p
                                className="mb-0"
                                style={{
                                    fontSize: '1.6rem',
                                    fontStyle: 'normal',
                                }}
                            >
                                SOBHU was both an activist organization and a place of community
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-9 d-flex align-items-center">
                            <div className="soblu-mobile-hide">
                                <div className="d-table">
                                    <Link to="/ethnic-vocal-ensemble">
                                        <img
                                            src="images/Eve-a-new-sound-thumb-600.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </Link>

                                    <div className="mt-2 span-caption">
                                        <Link to="/ethnic-vocal-ensemble">
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
                                                    The E.V.E
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
                                            Learn how the Ethnic Vocal Ensemble (E.V.E) took roots
                                            in the SOBHU room.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-14">
                            <p>
                                In 1999 SOBHU members, along with students in Students Organized
                                Against Racism (SOAR), planned a sit-in at the office of President
                                William R. Cotter. “We connected the sit-in back to [activism] in
                                the Seventies,” said Coy Dailey ’01, SOBHU’s then programming
                                director and now a trustee of the College and director of diversity
                                and equity at Bank Street School for Children. “We did our research
                                about what had happened before, so that way we knew that our move
                                would be a good move, a good strategic move.”
                            </p>
                            <p>
                                The protest and the accompanying 16 demands were a culmination of
                                several things, including a lack of voting rights in the Student
                                Government Association (SGA) as the College was looking for its next
                                president.
                            </p>
                            <p>
                                SOBHU also challenged the College in other ways so effectively that
                                President Cotter had a weekly public meeting in Page Commons,
                                recalled Cheryl Townsend Gilkes, the John D. and Catherine T.
                                MacArthur Professor of Sociology and African-American Studies and
                                director of African-American Studies. “[The meeting] involved all of
                                the administrators, any faculty who were interested, and all the
                                students who were interested in dealing with issues having to do
                                with people of color on campus,” said Gilkes.
                            </p>
                            <p>
                                SOBHU had a social, political, and academic side to it, noted Venola
                                Mason ’01 from Los Angeles, who immediately joined SOBHU when she
                                came to Colby. “We used SOBHU as a space for us to have with each
                                other, but we spent a lot of time trying to figure out how we could
                                integrate ourselves into the main population,” said Mason, a senior
                                fellow at the International Center for Leadership in Education. From
                                joining athletic teams to participating in SGA, they tried to embed
                                themselves into the school.
                            </p>
                            <p>
                                “We encouraged each other to do all those things so that we&rsquo;re
                                not just in our own little world by ourselves,” Mason said.
                            </p>
                            <div className="soblu-desktop-hide  my-4">
                                <div className="d-table">
                                    <Link to="/ethnic-vocal-ensemble">
                                        <img
                                            src="images/Eve-a-new-sound-thumb-600.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </Link>

                                    <div className="mt-2 span-caption">
                                        <Link to="/ethnic-vocal-ensemble">
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
                                                    The E.V.E.
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
                                            Learn how the Ethnic Vocal Ensemble (E.V.E) took roots
                                            in the SOBHU room.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                “It was the place that when I had a rough day, I could always come
                                in SOBHU and feel like I was myself,” said Amina McIntyre ’04, a
                                playwright, chaplain, and Ph.D. candidate at Vanderbilt University,
                                from Atlanta, Ga. It was also a place where she gave and received
                                support. “I didn’t feel like I had to put on a coat in SOBHU,” she
                                said, referring to “coat-switching,” a term meaning changing one’s
                                self to fit into different circumstances. “I felt like people just
                                could see me for who I was.” In SOBHU, she found others who shared
                                similar struggles, such as trying to join a cappella groups. “I knew
                                I was a good enough background singer to be in the chorale, but we
                                had trouble getting into the groups,” she said, “because our voices
                                were a little heavier sometimes, [and] they felt like we
                                couldn&rsquo;t blend as well.” Subsequently, she and other students
                                in SOBHU joined powers and formed the a cappella group E.V.E, Ethnic
                                Vocal Ensemble.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I would always describe SOBLU as my home away from home, especially
                                when I needed it the most, which was my first year. I think
                                it&rsquo;s a place with diverse experiences and personalities,
                                although not always tied to activism. ... It&rsquo;s a space of
                                learning. And I think a space of growing [and] personal growth.”
                            </span>
                            &mdash;Nancy Mateo ’19
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
                                id="a-journey-of-self-discovery"
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
                                For students coming from diverse backgrounds and experiences, SOBHU
                                has been a place where they grow close to themselves and to one
                                another
                            </p>
                            <p>
                                For former SOBHU parliamentarian Donte Tates ’05 from Baltimore,
                                SOBHU was where he discovered his identity. “For me, as someone who
                                identifies as gender-fluid, gay, and Black, my developmental growth
                                period for falling in love and having relationships and having a
                                social life was in college,” he said, rather than in high school.
                                Now he’s a high school teacher at a private independent school in
                                Washington, D.C., teaching literature, psychology, queer studies,
                                and public speaking and supporting his students to have a strong
                                racial identity awareness and development. He also tells them
                                stories from his Colby and SOBHU experiences.
                            </p>
                            <p>
                                “We would argue like a family, we would fight like family, we would
                                laugh like family, we would talk it out like family. ... Even in our
                                worst times when there were screams and fights and arguments, we
                                found ways to make that space a place for all of us,” Tates said.
                            </p>
                            <p>
                                That family looked out for others, too. They supported other clubs
                                like Hillel, the International Club, and the Colby Muslim Society.
                                “What set us apart was our desire to always be both fighters for
                                justice, but of lovers of life on campus.” Tates said.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “It was an opportunity for me, once in my life, to really just be
                                around my people. It was an opportunity for me to really just be
                                with a group of people who were sharing my same experience and to
                                openly talk about things that were affecting us academically,
                                socially, and mentally. So it&rsquo;s kind of like therapy in a very
                                protective space. And it&rsquo;s probably the only other time in my
                                life that I&rsquo;ve been in that kind of protected space.”
                            </span>
                            &mdash;Mieko McKay ’01
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I think being in that space [in SOBHU] really allowed me to learn
                                more about myself, but also learn more about other communities of
                                color in the U.S. because everyone came from so many different
                                states. A person living in New York, their experience is so
                                different for someone who was living in Texas. I think that&rsquo;s
                                what was really meaningful, is being able to have those
                                conversations in that space and just being able to develop really
                                great friendships from that experience.”
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
                                id="incredibly-diverse-within"
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
                                Although SOBHU can successfully form a united front on some issues,
                                the group has never been a monolith
                            </p>
                            <p>
                                Antonio Mendez ’06 from Washington Heights, N.Y., was in the first
                                group of Posse New York Scholars to come to Colby—and join SOBHU.
                                Mendez, now deputy region director of programming at AmeriCorps
                                NCCC, said through SOBHU he learned that despite having similar
                                backgrounds or experiences, people could have very divergent
                                opinions.
                            </p>
                            <p>
                                “I think what SOBHU brought was actually diversity of thought, and
                                that&rsquo;s really important” said Mendez.
                            </p>
                            <p>
                                When former SOBHU president Ajima Olaghere ’07, assistant professor
                                of criminal justice at Temple University, Penn., realized that even
                                some students of color at the time didn’t fully grasp what SOBHU
                                was, she set out on a mission to give the larger Colby community a
                                deeper understanding of the organization. From concerts to panels,
                                SOBHU’s programming then focused on piquing the interest of the
                                broader student body, as well as being relevant for the core
                                membership. But it was a lot of work, said Olaghere. “But socially,
                                it was a wonderful asset, a wonderful gift to have; I was able to
                                form friendships that I maintain today.” And SOBHU was a space where
                                Olaghere felt relaxed in the same way that one feels when they
                                finally reach home after a long, tiring day.
                            </p>
                            <p>
                                During this time, it wasn’t only students of color who found refuge
                                at SOBHU and came away with lifelong lessons. SOBHU member and Posse
                                Scholar Rebecca Travis ’07 from Brooklyn remembers her time in the
                                club every time she walks into a room as a white woman. “I have
                                every right to be there—and my experiences with Colby, Posse, and
                                SOBHU made me understand what a privilege that is,” said Travis, who
                                draws from that understanding as the director of scholarships and
                                college advisement at the Culinary Arts Program in New York City.
                            </p>
                            <p>
                                It was also a learning space for international students. Kenyan
                                Michael “Kip” Kiprop ’07, now an associate at Barclays Capital in
                                the UK, was drawn to SOBHU for two reasons: to bridge the gap
                                between SOBHU and the International Club and to understand racial
                                dynamics at Colby and the United States.
                            </p>
                            <p>
                                “I grew up African, but grew up in a setting where the color of my
                                [Black] skin never really defined me,” said Kiprop, one of the
                                students who started the Colby African Students Association (CASA),
                                now called Colby African Society (CAS), which has been a close
                                partner of SOBHU ever since. “I recognized that with African
                                Americans, they had a very different experience growing up in the
                                U.S.”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “We were a type of club everybody has their own identity, ...when
                                stuff needed to be done that&rsquo;s when we would band together.”
                            </span>
                            &mdash;LaWanda Marshall ’89
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I&rsquo;m Nigerian, but ... I had no idea what it meant to identify
                                as Black American or African American or what it&rsquo;s like to be
                                Caribbean American. I really was impressed and found a lot of
                                meaning in how diverse we were even just within the club and how
                                dedicated everybody was to learning about other cultures and
                                identity and backgrounds, even though [to some] we may have looked
                                the same, there was much diversity within us.”
                            </span>
                            &mdash;Olisa Okoh ’13
                        </div>
                    </div>
                    <div className="row mt-6" style={{ fontSize: '1.4rem' }}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <VideoPlayer
                                url="videos/How_did_SOBLU_guide_you_through_your_time_at_Colby.mp4"
                                image="images/reynolds-90-video-thumb.jpg"
                            />
                        </div>
                        <div className="mt-4">
                            <p
                                style={{
                                    fontWeight: '600',
                                    display: 'inline-block',
                                    fontSize: '1.5rem',
                                }}
                            >
                                How did the SOBLU community guide you through your time at Colby?
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h2 className="fgCompressed fgCompressed-normal-weight timeline-year">
                                2010s
                            </h2>
                            <h3
                                className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                id="an-extended-family"
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
                                The Posse family blended into the SOBHU family
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
                                For Sarah Martinez Roth ’11, SOBHU was just like a bigger, extended
                                Posse. “As soon as we came to campus, we were welcomed into the
                                existing Posse that was at Colby, and they all hung out in SOBHU,”
                                she said. Roth recalled many of the older Posse Scholars, who were
                                already part of SOBHU, made her want to get involved with the club.
                                “We all just became like one big family.”
                            </p>
                            <p>
                                But within that family, the growing number of Latinx students like
                                her also tried to find their own identity. Over the years, although
                                Colby had Latinx students, their representation was smaller compared
                                to African-American students in SOBHU, and not all Latinx students
                                were involved in the club. Around this time, they started
                                discussions about changing the name of the club from Hispanic to
                                Latino/Latina. The members were “trying to find our identity as a
                                Latinx community at Colby and what that meant within SOBHU,” she
                                explained.
                            </p>
                            <p>
                                Still, SOBHU was where she found a piece of her identity. “I felt
                                very at home when I was in that room in the Pugh Center, just a
                                place where I really feel like a little bit of New York, a little
                                bit of my culture,” she said, “just always felt like a place where I
                                could go when things felt isolating.” Fast-forward many years, when
                                Roth moved to Washington, D.C. to pursue her Ph.D. in tumor biology
                                at Georgetown University, she joined the local and national board of
                                Posse National Alumni Advisory Council, watching other students go
                                through the same path.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “We were the first Posse there, but a lot of the folks in my Posse
                                were involved in SOBHU. It wasn&rsquo;t even a matter of joining—It
                                kind of became a natural second home. … I think that SOBHU provided
                                a space where we as students who were of color could talk to each
                                other and share experiences and our challenges and our successes.
                                ... Sometimes people would say ignorant things, sometimes you would
                                struggle in a class and need somebody to talk about it, that&rsquo;s
                                [what] SOBHU meant for us. And for me personally, it was a space
                                where you could get support, where you could feel a little less
                                lonely. A lot of those folks were from New York, and a lot of us
                                missed New York very much.”
                            </span>
                            &mdash;Claire Jimenez ’06
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 d-flex align-items-center">
                            <div className="soblu-mobile-hide">
                                <div className="d-table">
                                    <Link to="/the-unity">
                                        <img
                                            src="images/The-Unity-de-donde-vengo-yo-1200.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </Link>

                                    <div className="mt-2 span-caption">
                                        <Link to="/the-unity">
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
                                                    “The Unity”
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
                                            SOBHU members tell why they started this newsletter.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-14">
                            <h3
                                className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                id="developing-leaders"
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
                                Through SOBHU, generations of students gained skills that opened new
                                doors for them
                            </p>
                            <p>
                                In 2012 Posse Scholar Tionna Haynes ’15, now a special education
                                teacher in Chicago, Ill., and a candidate for an M.Ed. in
                                educational leadership from Columbia University’s Teachers College,
                                organized a protest march after a student inappropriately dressed up
                                for Halloween as Trayvon Martin, the 17-year-old African American
                                shot dead in Florida in 2012. “That started it all for me,” Haynes
                                said in an email. Haynes, who became SOBHU’s president, said her
                                SOBHU experience solidified her path at Colby, including her
                                decision to major in African-American studies and history and to
                                join the SGA and the presidential search committee that selected
                                President David Greene. “SOBHU allowed me to be the leader and human
                                I needed to be.”
                            </p>
                            <p>
                                Her legacy included a newsletter called “The Unity” that connected
                                the club with its past and present and a senior farewell party to
                                celebrate those graduating.
                            </p>
                            <div className="soblu-desktop-hide my-4">
                                <div className="d-table">
                                    <Link to="/the-unity">
                                        <img
                                            src="images/The-Unity-de-donde-vengo-yo-1200.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </Link>

                                    <div className="mt-2 span-caption">
                                        <Link to="/the-unity">
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
                                                    “The Unity”
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
                                            SOBHU members tell why they started this newsletter.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Haynes wasn’t the only one to flourish through SOBHU. “One of the
                                things I loved about it was that it gave me space where I could be
                                myself, grow my confidence, and learn about the campus so that I
                                could branch outward and meet people,” said Kadish Hagley ’17, who
                                joined hall staff and became a community advisor, a group he said
                                became another family. He’s now an investment banker with Citibank
                                in New York City.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “What SOBHU did for me personally, first of all, it allowed me to
                                exert leadership skills ... required me to speak out, which
                                wasn&rsquo;t always very easy, about things that I thought would
                                help and support the students. It also allowed me to build
                                relationships with the dean of students, other deans. ... So it
                                helped me build a network and relationships that were very
                                beneficial. It also gave me some exposure on campus.”
                            </span>
                            &mdash;Jocelyn Wooten Giangrande ’88
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I spent a semester at Howard University in Washington, D.C., which
                                I wouldn&rsquo;t have done if I wasn&rsquo;t part of the club and
                                had those folks as close friends. I wouldn&rsquo;t have gone for the
                                historically Black college experience. And that was instrumental to
                                me getting the scholarship to study in Germany after Colby. And so
                                I&rsquo;d say there&rsquo;s a direct line between being in that club
                                and getting opportunities that were really important to me.”
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
                                id="a-second-home"
                            >
                                A Second Home
                            </h3>
                            <p
                                className="mb-3"
                                style={{
                                    fontSize: '1.6rem',
                                    fontStyle: 'normal',
                                }}
                            >
                                When students needed a family at difficult moments, SOBHU was there
                            </p>
                            <p>
                                Marnay Avant ’18 from St. Louis came to Colby when her family and
                                friends were on the frontlines in Ferguson, Mo., where protests
                                erupted after the killing of 18-year-old Michael Brown in 2014. At
                                SOBHU, she found a community that understood and supported her when
                                she had to be away from St. Louis. “It was just a moment where I
                                felt like ‘oh my God, this is the space where I know that I can
                                trust people,’” said Avant, who later became SOBHU’s president and
                                is now a teacher in Missouri. “Some of the lessons that I&rsquo;ve
                                learned in SOBHU I&rsquo;m still carrying with me today, and one of
                                them is to be confident and comfortable and grounded in your own
                                skin.”
                            </p>
                            <p>
                                Avant still fondly remembers memories and relationships formed when
                                producing Ntozake Shange’s <em>for colored girls</em> for Sounds of
                                Blackness, a Black History Month show that started in 2014. “There
                                were so many different strong messages in there about Black
                                womanhood in general,” she said. “I felt very empowered when I did
                                that show and got out there with my SOBHU sisters.”
                            </p>
                            <p>
                                SOBHU has been creative in taking initiative in planning events
                                during Black History Month, said Cheryl Townsend Gilkes, the John D.
                                and Catherine T. MacArthur Professor of Sociology and
                                African-American Studies and director of African-American Studies.
                                Students would invite her to SOBHU events and attend
                                African-American studies events. “At particular points in my time
                                here Colby, the club could be very prominent in its activities, and
                                students would operate as a collective,” she said, adding: “When the
                                women were running and were in charge, things would really happen.”
                            </p>
                            <p>
                                In 2017, to more accurately express the identities it represented,
                                SOBHU became SOBLU under the presidency of California native Aremi
                                Tapia-Torres ’17, formerly an assistant director of admissions at
                                Colby. Tapia-Torres also started a “Latinidad” show as an addition
                                to Latinx-Hispanic Heritage Month, which SOBHU began to celebrate in
                                2011 with events, including a dance and music night named
                                “Prendelo!”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “SOBHU was a family. It was a close family. It was a family where we
                                loved on each other, where we were supporting and encouraging each
                                other. It was a place where we could fight about whatever it was
                                that we might have differences in and that we could agree to
                                disagree on those things.”
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
                                id="the-b-and-the-l"
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
                                By maintaining its core, SOBLU continues to preserve its uniqueness
                            </p>
                            <p>
                                Colby’s SOBLU is distinctive in many ways. For instance, in NESCAC,
                                only Colby and Hamilton link Black and Latinx organizations under
                                the same umbrella.
                            </p>
                            <p>
                                “This organization—its inception was around these two groups that in
                                other spaces historically have not been able to collaborate or come
                                together,” said Tashia Bradley, Pugh Center director and senior
                                associate dean of students and diversity, inclusion, and equity
                                programs who worked closely with SOBHU between 2011 and 2015. “That
                                always made me very excited, because it&rsquo;s an example of what
                                happens when two groups really try to come together and have to
                                learn from each other.”
                            </p>
                            <p>
                                Another benefit of the dual identity reveals itself in events like
                                the diaspora dinner. Although many clubs organize dinners, in
                                SOBHu’s case, it often became a vehicle for members to realize their
                                commonalities. When members cook something from their respective
                                cultures, they share it with others, including faculty and staff.
                                “Sometimes there are the same dishes, but we just have different
                                names for them or we prepare them differently,” said Nancy Mateo
                                ’19, a former president of SOBLU, who is now a legal assistant in
                                California.
                            </p>
                            <p>That exploration of identity extended beyond dinners.</p>
                            <p>
                                “I think a lot of the things that I learned about myself and about
                                race and identity—a lot of them happened and sprouted from SOBLU,”
                                said Ashley Gissel Olvera ’20, a Posse Scholar from Houston, which
                                replaced Posse New York in 2013. SOBLU also became a source for
                                non-members and non-Black or -Latinx identifying individuals to
                                learn about issues related to being a first-generation student,
                                low-income student, or person of color. In every platform, she said,
                                SOBLU has been at the forefront, listening, asking questions,
                                sharing its views on issues at hand. “I think that in addition to
                                providing something very valuable for students to grow,” Olvera
                                said, SOBLU has been “a big helper in making Colby a better place,
                                especially since every year it gets more and more diverse.”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “The conversations we had in SOBHU just to sort of understand the
                                people from the diaspora, if you will, I don&rsquo;t know that I
                                would have had that opportunity outside of Colby, actually. And
                                since then, I don&rsquo;t think I&rsquo;ve had that diverse group of
                                friends from different parts of the U.S. in the SOBHU community. I
                                don&rsquo;t think I&rsquo;ve had that opportunity to meet and talk
                                to people from such different backgrounds.”
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
                                id="the-soblu-room"
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
                                Regardless of its location or era, the SOBLU room has always been a
                                place where students have intellectual conversations, debates, and
                                discussions about a wide variety of topics.
                            </p>
                            <p>
                                The subjects of those conversations are documented on the SOBLU
                                room’s ever-evolving signature wall.
                            </p>
                            <p>
                                Posters of SOBLU’s staple events, guest speakers, Story Time—an SGA
                                event that features seniors—appear alongside quotes from Audrey
                                Lorde, Laverne Cox, and Margaret Cho. One from Angela Davis, in
                                block letters, reads: “I am no longer accepting the things I cannot
                                change. I am changing the things I cannot accept.” To its right is
                                Martin Luther King Jr.’s full-length “I Have a Dream” speech. There
                                are also pictures from the 1970 chapel takeover, a sign saying
                                #WeHaveNotForgottenYou, which was the name of a weeklong
                                demonstration in 2015, and a front page of the <em>Echo</em> from an
                                event that brought attention to the DREAM Act and immigration reform
                                in 2014.
                            </p>
                            <p>
                                In the corner is a large Philly Pride Flag, which has black and
                                brown stripes representing people of color.
                            </p>
                            <p>
                                “I think we have the most programming out of any club on this
                                campus,” said SOBLU’s co-president for the 2019-20 academic year
                                Juan Luna ’20, who decorated the wall with their co-president Kris
                                de Luna ’20.
                            </p>
                            <p>
                                {' '}
                                But the nature of events has changed within their four years in
                                SOBLU. In their initial years at Colby, the club’s program was more
                                outward facing, Juan Luna said. “We were trying to teach white
                                students on this campus, or students who don&rsquo;t have the Black
                                or Latinx experience, about our struggles on this campus,” Luna
                                said. Events are not solely for SOBLU members, but they are more
                                focused on members, whether it be an information session on STDs or
                                board game nights. “I think [now] it is looking more inward.”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “The room was very important to us because it served as our escape.”
                            </span>
                            &mdash;Trustee Steven Earle ’79
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “If you were going through a rough time, you knew where to go.”
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
                                id="still-a-critical-organization"
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
                                Half a century later, SOBLU continues to play an important role for
                                students and even faculty
                            </p>
                            <p>
                                With each cohort of students, SOBLU has gained more prominence on
                                Mayflower Hill. Five decades later, it still remains a critical
                                organization for students, for faculty, and for the larger Colby
                                community.
                            </p>
                            <p>
                                “I do find SOBLU now, and SOBHU then, to be a space of home for
                                students,” said Chandra Bhimull, associate professor of anthropology
                                and African-American studies and the club’s advisor since 2008, “but
                                actually also for me.” The SOBLU room has been a place where she can
                                stop by before leaving campus or late at night to chat with the
                                students about life in general or an idea she has for class. “I
                                actually cannot imagine being here without SOBLU.”
                            </p>
                            <p>
                                A new generation of students, such as Reagan Dennis ’23, is eyeing
                                to take the helm and build on the success of the club.
                            </p>
                            <p>
                                “That room for me is like your living room at your house, somewhere
                                that I have to stop by at some point in the day,” said Dennis, a
                                member of Posse Houston. “When I run into an issue at Colby that
                                might have been problematic or difficult to deal with ... I always
                                go to SOBLU and ask someone in there because it&rsquo;s something I
                                feel like they would be able to relate to.” In SOBLU, Dennis said
                                she learned to take care of herself, mentally, physically, and
                                academically.
                            </p>
                            <p>
                                “I&rsquo;m hoping to hold a leadership position at some point,” she
                                said, “because I&rsquo;m really passionate about what SOBLU does for
                                the campus and for students on campus as well students coming to
                                Colby.”
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div className="col-lg-20 offset-lg-4">
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “I think it started with a legacy of activism. And although it is a
                                club, it is hard for me to speak of it as the club, because
                                it&rsquo;s so counter-cultural. But I think it&rsquo;s extraordinary
                                that the organization has not only endured but has thrived, then it
                                has changed with the times over these last 50 years. So that&rsquo;s
                                extraordinary to me.”
                            </span>
                            &mdash;Charles Terrell ’70
                        </div>
                    </div>
                    <div className="row mt-4" style={{ fontSize: '1.4rem' }}>
                        <div>
                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                “When we were there, there was no real support system to help us to
                                deal with whatever changes we were going through, … what other kinds
                                of academic challenges we were going through, whatever kind of
                                emotional mental health issues we were going through. It is not
                                enough to get somebody to an environment if they are not going to
                                make sure they are successful to get through the environment and
                                graduate. And there are so many resources in place now that I think
                                are just awesome. None of those were there when we were there.”
                            </span>
                            &mdash;Jacquelyn Lindsey Wynn ’75
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center my-6 mt-md-7 mb-md-0">
                        <div style={{ borderBottom: '1px solid #676767', width: '100px' }} />
                    </div>
                    <div className="row mb-7">
                        <div>
                            <h3
                                className="fgCompressed fgCompressed-normal-weight d-inline-block"
                                id="kardelens-reflection"
                            >
                                Kardelen&rsquo;s Reflection
                            </h3>
                            <p
                                className="mb-3"
                                style={{
                                    fontSize: '1.3rem',
                                    fontStyle: 'normal',
                                }}
                            >
                                A Months-long Effort to Document SOBLU’s Importance
                            </p>
                            <p>
                                As with almost anything, there’s a backstory to this piece. And
                                knowing that might put this microsite into perspective.
                            </p>
                            <p>
                                This project was one of the first assignments I took on when I
                                returned to Colby as a staff writer in December 2018. I can imagine
                                some of you asking, what took you so long to get it done? Well,
                                that’s a very valid question. I must admit that none of us at{' '}
                                <em>Colby Magazine</em> anticipated it would take this long to
                                complete or be at this length. But one thing I knew from the very
                                beginning was we wanted these stories and images to capture the
                                essence of this organization that has continuously changed and
                                challenged both its members and Colby for the better.
                            </p>
                            <p>
                                I spent over a year tracking down former SOBLU members from early
                                <em>Echo</em> stories and materials from Colby’s Special
                                Collections. Trying to connect with members of the so-called SOBU17,
                                I sometimes called all the numbers listed under that name in online
                                directories until I found the Colby alumnus. One conversation led to
                                another, one event guided me to the next. In the end, I spoke with
                                over 40 members of the club who inevitably and generously shared
                                their time and stories with me. But all of this reporting took place
                                over time. When I finished writing this story, I could still count
                                my quarantine days on all my fingers.
                            </p>
                            <p>
                                If I were to start my reporting last winter instead of two winters
                                ago, its focus would have drastically shifted given COVID-19 and the
                                recent anti-racism protests. Although COVID-19 is indeed novel,
                                racial violence, unfortunately, isn’t. I tried to note those
                                national moments as much as possible in this story to show a
                                pattern. Some might have hoped to see more of those, but one thing
                                that came up in several conversations was that activism is only one
                                component of SOBLU, and I tried to reflect that in my writing.
                            </p>
                            <p>
                                While my conversations shed light on parts of SOBLU’s, Colby’s, and
                                the nation’s history, I know that I only interviewed a small
                                percentage of all those whose lives were touched by SOBLU.
                            </p>
                            <p>
                                To any and all SOBLU members, thank you for making SOBLU and Colby
                                what it was and what it will be. And to all former, current, future
                                residents of Mayflower Hill, I hope you find ways to meaningfully
                                engage with SOBLU.
                            </p>
                            <div>&mdash;Kardelen Koldas ’15, October 2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Home;
