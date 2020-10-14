import React from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import InnerSvg from '../components/InnerSvg';

const TheUnity = () => (
    <>
        <Nav />
        <div id="soblu-voices-page" className="container">
            <InnerSvg headline="The Unity Newsletter" />
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <div className="row fgCompressed">
                            <h1
                                style={{
                                    fontWeight: '600',
                                    fontSize: '3.6rem',
                                    lineHeight: '3.6rem',
                                }}
                            >
                                Keeping In Touch
                            </h1>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-20">
                                <p className="lead">
                                    SOBHU members launched a newsletter to document their activities
                                </p>
                            </div>
                        </div>
                    </div>
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
                <div className="col-md-22">
                    <div className="row mb-4">
                        <div className="col-md-22 offset-md-2 ">
                            <p>
                                A growing membership body, robust programming, and generations of
                                alumni—seeking a meaningful way to connect all of these, SOBHU
                                leaders created a newsletter named “The Unity” with the motto: “A
                                newsletter bridging the gap between SOBHU, its members, and alumni”
                                in 2013.
                            </p>
                            <p>
                                “[At that time] Black and Brown SOBHU alums didn&rsquo;t really come
                                back to campus,” said then-president Tionna Haynes ’15 in an email.
                                “We needed them to know the amazing things that the club was doing,
                                try to encourage them to come back into the Colby fold and give
                                back, and to be unique—I don’t think any other club has the network
                                that we had and have.”
                            </p>
                            <p>
                                Shaped in the hands of the subcommittee, “The Unity” has been a
                                vehicle to introduce past and present members to one another, share
                                news and messages from campus, and circulate photos. “It is a way
                                for future generations of SOBHU members and alumni to see our lives
                                and what we find important,” said Katia Licea ’14, in a Q&amp;A
                                published on the first issue of “The Unity” in October 2013.
                            </p>
                            <p>
                                The goal of the newsletter’s former editor and former SOBHU vice
                                president Miriam Valle-Mancilla ’16, currently the Linde Family
                                Foundation Coordinator of Academic Access at Colby, was also to
                                capture fun moments. “For whoever was reading this newsletter, we
                                wanted them to really understand that we still have fun, we enjoyed
                                our college experience, and this is the area that we would really
                                have a good time in,” she said. By capturing moments such as family
                                dinners, dances, and jokes, she tried to show the club as a whole
                                with all of its greatness.
                            </p>
                            <p>
                                But while documenting its current state, this was also an
                                opportunity to reconnect with its past.
                            </p>
                            <p>
                                “A lot of times we didn&rsquo;t know a lot about the collective
                                history of what was going on prior to when we were there,” said
                                Valle-Mancilla. “I think it was us trying to seek out where we can
                                get information about past people, really understanding the history
                                of what SOBHU was.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default TheUnity;
