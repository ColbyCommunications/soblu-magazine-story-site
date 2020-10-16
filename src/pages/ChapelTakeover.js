/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Swiper from '@colbycommunications/colby-swiper-component';
import Modal from '@colbycommunications/colby-modal';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import Image from '../components/common/Image';
import Template from '../components/Templates/SwiperTemplate';
import InnerSvg from '../components/InnerSvg';

const ChapelTakeover = () => {
    const slides = [
        {
            content: (
                <img
                    src="images/SOBU-original-demands_chapel-3-2-1970-1.jpg"
                    alt="List of demands (page 1)"
                />
            ),
            type: 'image',
        },
        {
            content: (
                <img
                    src="images/SOBU-original-demands_chapel-3-2-1970-2.jpg"
                    alt="List of demands (page 2)"
                />
            ),
            type: 'image',
        },
    ];

    return (
        <>
            <Nav />
            <div id="takeover-page" className="container">
                <InnerSvg headline="Chapel Takeover | March 1970" />
                <div className="row soblu-first-section-inner mb-4">
                    <div className="col-md-12 d-flex flex-column">
                        <div style={{ flexGrow: '2' }}>
                            <div className="row fgCompressed">
                                <h1
                                    style={{
                                        fontWeight: '600',
                                    }}
                                >
                                    The Insiders
                                </h1>
                            </div>
                            <div className="row mt-4 mb-4">
                                <div className="col-lg-20">
                                    <p className="lead">
                                        Four of the 17 students from the Chapel takeover recount the
                                        landmark event
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ flexGrow: '1' }}>
                            <div className="row mb-4" style={{ fontSize: '1.4rem' }}>
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
                            <div className="row mb-4" style={{ fontSize: '1.4rem' }}>
                                <div
                                    className="col-lg-20 offset-lg-2"
                                    style={{ fontSize: '1.4rem' }}
                                >
                                    <p>
                                        <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                            “It [the takeover] was well thought out. We had some
                                            very, very talented, very smart people who were well
                                            connected with the student community.”
                                        </span>
                                    </p>
                                    <p>&mdash;Vincent Guess ’73</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ flexGrow: '1' }} />
                    </div>
                    <div className="col-md-12">
                        <p>
                            Despite being a shy student from Mobile, Ala., Doris Ford Mathis ’73
                            wasn’t the type to stay silent on issues of injustice. So, on the night
                            of March 2, 1970, Mathis, then a first-year student, packed her class
                            books and bedding and headed over to Lorimer Chapel, where she joined
                            the rest of the SOBU members, later known as SOBU17.
                        </p>
                        <p>
                            SOBU had five demands of the College: have at least 50 Black students in
                            the incoming class; start a Black Sub-Freshman week; eliminate the
                            higher GPA requirement for students receiving financial aid; establish a
                            Black studies program; and ensure 10 percent Black student enrollment in
                            the classes after 1974. These were a continuation of an earlier set of
                            proposals by the students, first called “A Program of Necessary
                            Improvements at Colby College” in March 1969, followed by a “Proposal
                            for a New Colby.”
                        </p>
                        <p>
                            “Hence, the student body has given the committee system a year, and as a
                            result has gained nothing more than more committees,” wrote the SOBU
                            members in a letter published in the Echo March 6, 1970. “The Student
                            Organization for Black Unity is now taking action simply because we feel
                            that our concerns cannot wait another year.”
                        </p>
                    </div>
                </div>
                <div className="row mt-md-4 mt-0" id="soblu-vertical-menu">
                    <div className="col-md-2 d-flex justify-content-center position-relative">
                        <div className="soblu-vertical-menu-container soblu-mobile-hide">
                            <div className="soblu-vertical-menu-sticky">
                                <SideNav />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-22 main-content">
                        <div className="row mb-4">
                            <Image
                                src={{
                                    main:
                                        'images/Long-view-of-chapel-gathering-students-speakers-on-balcony.png',
                                    thumbnail:
                                        'images/Long-view-of-chapel-gathering-students-speakers-on-balcony-thumbnail.jpg',
                                }}
                                lightboxSrc="images/Long-view-of-chapel-gathering-students-speakers-on-balcony.png"
                                altText="tudents gathered in front of Lorimer Chapel to hear SOBU17’s speech on March 1970."
                                caption="Students gathered in front of Lorimer Chapel to hear SOBU17’s speech on March 1970."
                            />
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row mb-4" style={{ fontSize: '1.4rem' }}>
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
                                    “To say that if you can&rsquo;t keep up the average, you lose
                                    your financial aid—that would have left me nowhere,” said Mathis
                                    in an interview at a public library close to her home in
                                    Washington, D.C. Mathis came to Colby on a full scholarship and
                                    was one of the first in her immediate family to attend college.
                                    “I didn&rsquo;t want to drop out of school because I got a ‘C’
                                    instead of a ‘B.’”
                                </p>
                                <p>
                                    SOBU decided to organize a sit-in—fitting for the spirit of the
                                    era. “The atmosphere in the country was [Black] civil rights,
                                    and gay needs, and acceptance,” explained Mathis. “In my mind, I
                                    was ready.”
                                </p>
                                <p>
                                    The chapel, used mostly on Sundays and for occasional activities
                                    like jazz band practice, was chosen as the takeover location
                                    because it would allow for the protest but wouldn’t disrupt the
                                    campus.
                                </p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <Image
                                    src={{
                                        main: 'images/chapel-takover-slide-wide-at-podium.jpg',
                                    }}
                                    lightboxSrc="images/Black-student-strike-in-March-1970-chapel-takeover-student-speakers-and-audience.jpg"
                                    altText="SOBU17 and the student government representatives addressed the crowd and reiterated SOBU’s demands."
                                    caption="SOBU17 and the student government representatives addressed the crowd and reiterated SOBU’s demands."
                                />
                            </div>
                            <div className="col-md-12 d-flex align-items-center">
                                <div>
                                    <div className="col-lg-20 offset-lg-2 my-4">
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “Coming to Colby was a huge cultural shock for me.”
                                            </span>
                                        </p>
                                        <p className="mb-0" style={{ fontSize: '1.4rem' }}>
                                            &mdash;Charles Terrell ’70
                                        </p>
                                        <div className="d-flex">
                                            <div
                                                className="p-2 mr-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    color: '#000',
                                                    flex: '1',
                                                }}
                                            >
                                                More on Terrell’s journey to and from Colby
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
                                                title="Journey of Charles Terrell ’70"
                                                scrollable
                                            >
                                                <div>
                                                    <p>
                                                        Growing up with a single mother, Terrell had
                                                        never left Washington, D.C. “But for some
                                                        reason, and I don&rsquo;t know where I
                                                        picked this up, I had a fascination for
                                                        Maine,” he said. When the time came for
                                                        college, he knew where to look. “I knew that
                                                        the only way I was going to fulfill this
                                                        dream I had of getting to Maine was to go to
                                                        college in Maine,” he said.
                                                    </p>

                                                    <p>
                                                        When he came to Colby, he found a different
                                                        world from the one he’d experienced in
                                                        Washington, D.C., where white people were
                                                        mostly seen on TV screens. “Coming to Colby
                                                        was a huge cultural shock for me,” he said,
                                                        from the moment he got out of a cab on
                                                        campus and saw people playing Frisbee. He
                                                        recalled asking the driver what they were
                                                        doing. “He said, ‘Son, haven&rsquo;t you
                                                        ever seen a Frisbee before?’ And, I said no,
                                                        because nobody in the Black world plays
                                                        Frisbee.”
                                                    </p>

                                                    <p>
                                                        At Colby, Terrell was very involved. On top
                                                        of having a 10-hour-a-week on-campus job, he
                                                        was the vice president of his freshman class
                                                        and then class president in his sophomore
                                                        and junior years.
                                                    </p>

                                                    <p>
                                                        His career has been devoted to educational
                                                        access, diversity in higher and medical
                                                        education, and student financial assistance.
                                                        He was the associate dean for student
                                                        affairs at Boston University Medical Center
                                                        and vice president for diversity policy and
                                                        programs at the Association of American
                                                        Medical Colleges. Later, he founded Cross
                                                        Creek Associates, a pro bono
                                                        higher-educational advisory service devoted
                                                        to promoting higher educational access and
                                                        equity. A trustee emeritus, he frequently
                                                        returns to Colby, attending events marking
                                                        the chapel takeover, including its 25th
                                                        anniversary, when he delivered the 2013
                                                        S.H.O.U.T! keynote address. “I think SOBU
                                                        has become such an institution at Colby and
                                                        has had an impact on Colby culture and Colby
                                                        life,” he said.
                                                    </p>

                                                    <p>
                                                        Terrell has mentored many generations of
                                                        students, including through DavisConnects.
                                                        “I&rsquo;ve always felt it important to be
                                                        involved in whatever community that
                                                        I&rsquo;m in.”
                                                    </p>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
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
                        <div className="row mb-4">
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row mb-4">
                                    <div className="col-lg-20 offset-lg-2">
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “One of the things that is interesting about Colby
                                                is that the minority population was pretty scarce
                                                and that didn’t bother me that much because I’d gone
                                                to prep school.”
                                            </span>
                                        </p>
                                        <p style={{ fontSize: '1.4rem' }}>
                                            &mdash;Vincent Guess ’73
                                        </p>
                                        <div className="d-flex">
                                            <div
                                                className="p-2 mr-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    color: '#000',
                                                    flex: '1',
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
                                                title="Journey of Vincent Guess ’73"
                                                scrollable
                                            >
                                                <div>
                                                    Guess came to Colby because of its close
                                                    proximity to his home city, Boston. “One of the
                                                    things that is interesting about Colby is that
                                                    the minority population was pretty scarce and
                                                    that didn&rsquo;t bother me that much because
                                                    I&rsquo;d gone to prep school,” where he was one
                                                    of the few students of color. He started as a
                                                    chemistry major but then switched to psychology
                                                    due to missing coursework during the takeover,
                                                    followed by the early school closing because of
                                                    the Kent State shootings in the spring of 1970.
                                                    For more than 40 years, he was with United
                                                    Healthcare, working across many roles from sales
                                                    to information technologies with colleagues from
                                                    various nationalities and leading international
                                                    teams. Now Guess has his own business in
                                                    Connecticut as a career transition coach.
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    “Some schools took over the administration, but that was too
                                    much for us; we didn&rsquo;t feel like we should interfere with
                                    the activity of the school,” said Sebsibe Mamo ’70, an Ethiopian
                                    student and an Olympic team track athlete who boycotted the 1968
                                    Olympics to protest South Africa’s participation during
                                    apartheid.
                                </p>
                                <p>
                                    “In those days … nobody would pay attention to you, nobody would
                                    create any solution or understanding if you didn’t do something
                                    like that,” he said. “We decided to just have a sit-in at the
                                    chapel, and they made a big deal about it. But we ... just
                                    wanted to get attention to the problem, and we wanted Colby to
                                    address the problem because it was a nice school.”
                                </p>
                                <p>
                                    The occupiers said they passed the time studying, reading—and
                                    discussing SOBU and its structure. What should it be like? Who
                                    could join? What would it do?
                                </p>
                                <p>
                                    Music was the backdrop to their conversations, they recalled,
                                    and they blared their tunes across campus during class hours and
                                    evenings from loudspeakers facing out from Lorimer Chapel. That
                                    week, students in classes could hear, “Yes, my skin is Black.
                                    But that&rsquo;s no reason to hold me back,” from “Message from
                                    a Black Man” by the Temptations. This song particularly
                                    expressed the feelings of the SOBU17. The lyrics went, “This is
                                    a message. A message to y&rsquo;all: Together we stand, Divided
                                    we fall.”
                                </p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <Image
                                src={{
                                    main: 'images/chapel-takover-slide-at-podium.jpg',
                                }}
                                lightboxSrc="images/chapel-takover-slide-at-podium.jpg"
                                altText="Charles Terrell ’70 (in glasses) alongside SOBU17 and student government leaders in front of Lorimer Chapel."
                                caption="Charles Terrell ’70 (in glasses) alongside SOBU17 and student government leaders in front of Lorimer Chapel."
                            />
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row mb-5">
                                    <div className="col-lg-20 offset-lg-2">
                                        <p>
                                            <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                “I had [a] scholarship to go to Moscow University
                                                and Stockholm University but I had to study strictly
                                                sports [there].”
                                            </span>
                                        </p>
                                        <p className="mb-0" style={{ fontSize: '1.4rem' }}>
                                            &mdash;Sebsibe Mamo ’70
                                        </p>
                                        <div className="d-flex">
                                            <div
                                                className="p-2 mr-2"
                                                style={{
                                                    backgroundColor: '#fff',
                                                    color: '#000',
                                                    flex: '1',
                                                }}
                                            >
                                                More on Mamo’s journey to and from Colby
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
                                                title="Journey of Sebsibe Mamo ’70"
                                                scrollable
                                            >
                                                <div>
                                                    <p>
                                                        Just before coming to the College, Mamo
                                                        attended Biddeford High School in Maine for
                                                        half a semester. “I had [a] scholarship to
                                                        go to Moscow University and Stockholm
                                                        University, but I had to study strictly
                                                        sports [there],” he said. Not wanting to
                                                        make a career out of that, he explored
                                                        possibilities around Maine, found Colby, and
                                                        enrolled in January with a scholarship.
                                                    </p>

                                                    <p>
                                                        “I fell in love with Colby,” he said. Mamo
                                                        was vice president of the student
                                                        government, a political science major, and
                                                        ran track. He worked at the Spa, which then
                                                        was in Miller Library, and also at the
                                                        College telephone switchboard. Following
                                                        graduation, Mamo studied health science at
                                                        the University of New York at Old Westbury.
                                                        For more than 25 years, he worked at the New
                                                        York Blood Center in Long Island, N.Y. Now
                                                        retired, he often travels back to Ethiopia,
                                                        where he helps with the needs of the
                                                        community, ranging from libraries to
                                                        clinics.
                                                    </p>
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
                                            'images/chapel-takover-slide-group-inside-three-people.jpg',
                                    }}
                                    lightboxSrc="images/chapel-takover-slide-group-inside-three-people.jpg"
                                    altText="SOBU members, including Doris Ford ’73 (right), inside the chapel."
                                    caption="SOBU members, including Doris Ford ’73 (right), inside the chapel."
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row mb-4">
                                    <div className="col-lg-20 offset-lg-2">
                                        <div className="mb-5">
                                            <div className="d-none">
                                                <img
                                                    src="images/Echo-blacks-in-chapel-composit.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                    onClick={() =>
                                                        window.open(
                                                            'pdfs/Blacks-in-chapel_CBO_1970_03_06.pdf',
                                                            '_blank'
                                                        )
                                                    }
                                                />
                                                <div className="mt-2">
                                                    <div
                                                        className="text-center p-2"
                                                        style={{
                                                            backgroundColor: '#000',
                                                            color: '#fff',
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() =>
                                                            window.open(
                                                                'pdfs/Blacks-in-chapel_CBO_1970_03_06.pdf',
                                                                '_blank'
                                                            )
                                                        }
                                                    >
                                                        <span
                                                            className="heavy"
                                                            style={{ textTransform: 'uppercase' }}
                                                        >
                                                            <i>Echo</i>
                                                        </span>{' '}
                                                        <span
                                                            style={{
                                                                textTransform: 'uppercase',
                                                                marginRight: '5px',
                                                            }}
                                                        >
                                                            The Debate Begins
                                                        </span>{' '}
                                                        <span style={{ verticalAlign: 'top' }}>
                                                            <svg
                                                                version="1.1"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 16 16"
                                                                style={{ marginTop: '-2px' }}
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M11 13h-8v-8h4.5l2-2h-8.5v12h12v-8.5l-2 2v4.5z"
                                                                />
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M16 0h-6.5l2.5 2.5-7.5 7.5 1.5 1.5 7.5-7.5 2.5 2.5v-6.5z"
                                                                />
                                                            </svg>
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
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-none">
                                                <Image
                                                    src={{
                                                        main:
                                                            'images/newspaper-01-black-students-urge-colby-act-on-demands--thumb.png',
                                                    }}
                                                    lightboxSrc="images/newspaper-01-black-students-urge-colby-act-on-demands--full.png"
                                                    alt="Portland Press Herald, March 6, 1970"
                                                    caption="Portland Press Herald, March 6, 1970"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    Over the one week period inside the chapel, letters traveled
                                    back and forth between SOBU17 and the College’s president at the
                                    time, Robert Edward Lee Strider II. On March 3, President
                                    Strider wrote: “Valid and workable decisions on complex problems
                                    are reached, especially in an academic community, through
                                    rational discussion and in an atmosphere of cooperation and
                                    mutual respect among those involved in making decisions.”
                                </p>
                                <p>
                                    SOBU responded: “Obviously, we would not now be in the CHAPEL if
                                    we were confident in the administrative mechanism that you have
                                    instituted to bring about change.”
                                </p>
                                <p>More exchanges followed between the two camps.</p>
                                <p>
                                    “We had a very good response to the pushback,” Boston native
                                    Vincent Guess ’73 said in a coffee shop in Connecticut, where he
                                    now lives. In addition, the group had been supported by the
                                    Student Government, which tabled at Roberts Union to inform the
                                    community about SOBU17’s mission and how the community could
                                    help them.
                                </p>
                                <p>
                                    On March 5, the group’s leader, Charles Terrell ’70, gave a
                                    30-minute speech outside the chapel&rsquo;s main entrance. He
                                    reiterated that the group wouldn’t leave until its demands were
                                    met, highlighting the support they were receiving from Colby
                                    students, alumni, and faculty, along with students at Unity and
                                    Bowdoin colleges and the NAACP Central Maine Chapter. Asking
                                    supporters to continue boycotting classes, Terrell thanked the
                                    white Colby students who were running errands for the protesters
                                    while they were in the chapel and the McDonald’s restaurant
                                    manager who sent them food, which, to this day, Terrell fondly
                                    remembers.
                                </p>
                                <p>
                                    Local newspapers reported at the time that 350 faculty and
                                    students were listening to the speech, and around 50 students
                                    came with placards saying things like “I support Black Demands.”
                                    The news made the Portland Evening Express, Waterville Sentinel,
                                    Bangor Daily News, and several other outlets. “It’s useless to
                                    ask us to leave; we are not leaving until our demands are met,”
                                    Terrell told reporters.
                                </p>
                                <p>
                                    “Charles was the man. He&rsquo;s articulate and he&rsquo;s
                                    well-known there. And he was our leader,” said Guess, who was
                                    holding a red, black, and green Pan-African flag behind Terrell
                                    that day.
                                </p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <Image
                                src={{
                                    main: 'images/Serving-injunction-900-wide.png',
                                }}
                                lightboxSrc="images/Serving-injunction-900-wide.png"
                                altText="Terrell (center) and SOBU17 served with a restraining order on March 9."
                                caption="Terrell (center) and SOBU17 served with a restraining order on March 9."
                            />
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="row mb-4">
                                    <div className="col-lg-20 offset-lg-2 d-flex justify-content-around flex-column h-100">
                                        <div className="mb-4">
                                            <p>
                                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                                    “... I had gone onto segregated schools in the
                                                    South all my life.”
                                                </span>
                                            </p>
                                            <p className="mb-0" style={{ fontSize: '1.4rem' }}>
                                                &mdash;Doris Ford Mathis ’73
                                            </p>
                                            <div className="d-flex">
                                                <div
                                                    className="p-2 mr-2"
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        color: '#000',
                                                        flex: '1',
                                                    }}
                                                >
                                                    More on Ford Mathis’s journey to and from Colby
                                                </div>
                                                <Modal
                                                    trigger={
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
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
                                                    title="Journey of Doris Ford Mathis ’73"
                                                    scrollable
                                                >
                                                    <div>
                                                        In high school in Mobile, Ala., Mathis had
                                                        several options for college, but when she
                                                        saw clips of Waterville, the snow, and the
                                                        campus, she made her decision. “Just the
                                                        idea that there was something different to
                                                        do because I had gone to segregated schools
                                                        in the South all my life,” she said. When
                                                        she came to Colby, she found a community
                                                        that was the complete opposite of the one
                                                        she left. “It was a shocker to come
                                                        downstairs for breakfast the first day,” she
                                                        said. “It took me several days to see any
                                                        other minority students.” At Colby, she
                                                        majored in American studies and worked at
                                                        the switchboard in Eustis, in the library,
                                                        and at a dorm reception desk, where guests
                                                        checked in and out. Following Colby, she
                                                        earned a law degree from George Washington
                                                        University. A year later, she found out she
                                                        had breast cancer. In addition being an
                                                        activist for various causes, she offers
                                                        legal guidance to those in need in her
                                                        community or family.
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-none">
                                                <div className="d-table">
                                                    <img
                                                        src="images/Echo-blacks-OUT-chapel-composit-thumb.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                        onClick={() =>
                                                            window.open(
                                                                'pdfs/Blacks-out-of-chapel_CBO_1970_03_13.pdf',
                                                                '_blank'
                                                            )
                                                        }
                                                    />
                                                    <div className="span-caption">
                                                        <div className="mt-2">
                                                            <div
                                                                className="text-center p-2"
                                                                style={{
                                                                    backgroundColor: '#000',
                                                                    color: '#fff',
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={() =>
                                                                    window.open(
                                                                        'pdfs/Blacks-out-of-chapel_CBO_1970_03_13.pdf',
                                                                        '_blank'
                                                                    )
                                                                }
                                                            >
                                                                <span
                                                                    className="heavy"
                                                                    style={{
                                                                        textTransform: 'uppercase',
                                                                    }}
                                                                >
                                                                    <i>ECHO</i>
                                                                </span>{' '}
                                                                <span
                                                                    style={{
                                                                        textTransform: 'uppercase',
                                                                    }}
                                                                >
                                                                    Reaction
                                                                </span>{' '}
                                                                <span
                                                                    style={{ verticalAlign: 'top' }}
                                                                >
                                                                    <svg
                                                                        version="1.1"
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        style={{
                                                                            marginTop: '-2px',
                                                                        }}
                                                                    >
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M11 13h-8v-8h4.5l2-2h-8.5v12h12v-8.5l-2 2v4.5z"
                                                                        />
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M16 0h-6.5l2.5 2.5-7.5 7.5 1.5 1.5 7.5-7.5 2.5 2.5v-6.5z"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-2">
                                                            Colby Echo, March 13, 1970
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    In the coming days, the administration visited the chapel to
                                    talk with the occupying students. “They [the College] said, ‘We
                                    can&rsquo;t do this, we can&rsquo;t do that.’ And we basically
                                    said, ‘Well, we&rsquo;re not asking you to do this that
                                    particular way. You can do it this way or do it that way.
                                    We&rsquo;ll help you out,’” Guess said. “Our demands really were
                                    not that outrageous in terms of the ability to meet them.”
                                </p>
                                <p>
                                    Amidst the exchange, the world was experiencing a unique moment
                                    on March 7: a total solar eclipse. The group wasn’t going to
                                    miss it. “We were trying to watch it through various unsafe
                                    means,” recalled Guess. “I do remember going upstairs up to the
                                    tower.” The next day, a Sunday, a religious service was held in
                                    Bixler Auditorium.
                                </p>
                                <p>
                                    On March 9, President Strider wrote, “Your idealism and your
                                    persistence are commendable, and the articulate manner in which
                                    you have argued is impressive. But the occupation of the chapel
                                    cannot be justified, whatever your motives.” A few hours later,
                                    a sheriff’s deputy delivered a court order, telling the group to
                                    vacate the chapel within two hours.
                                </p>
                                <p>
                                    “We decided it would be more effective for us to leave and
                                    protest on the outside instead of spending our time in jail,”
                                    said Guess. But they weren’t going to leave quietly. “Once we
                                    got out of the chapel, we ended up marching around the
                                    administration building,” referring to the Eustis Building. The
                                    students chanted: What do we want? The five demands. When do we
                                    want it? Now. “We did that for a long time,” he said, noting
                                    that they were joined by others in their march.
                                </p>
                                <p>
                                    SOBU [and SOBU-like activism] was probably the equivalent of a
                                    #MeToo Movement of years ago,” Terrell said, because it stood up
                                    for people whose voices weren’t being heard before. “If you read
                                    about the activism in this era—we were ready to stay there until
                                    our demands were met. That&rsquo;s who we were, but it was
                                    difficult because we were missing class.”
                                </p>
                                <p>
                                    It was also emotionally taxing. “We were getting all kinds of
                                    calls and inquiries from the press,” he said. “Our families were
                                    wary. It was a really difficult, stressful time.”
                                </p>
                                <p>
                                    The concern was understandable given the climate across college
                                    campuses at the time when student takeovers at other colleges
                                    and universities involved violence. “In our action, no weapons
                                    were used or considered,” Terrell said. “No property was
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
                                    multicultural tradition was established, a Black-white student
                                    coalition was established, and a campus tradition of protest was
                                    energized, if not created,” said Terrell. “I think the world of
                                    social activism, responsibility, and awareness at that time was
                                    brought to Central Maine.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChapelTakeover;
