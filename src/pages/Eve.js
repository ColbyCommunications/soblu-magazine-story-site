import React from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import InnerSvg from '../components/InnerSvg';

const TowerAbove = () => (
    <>
        <Nav />
        <div id="soblu-voices-page" className="container">
            <InnerSvg headline="E.V.E: Ethnic Vocal Ensemble" />
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <div className="row fgCompressed">
                            <h1
                                style={{
                                    fontWeight: '600',
                                }}
                            >
                                Tower Above
                            </h1>
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
                    <div className="row mb-4 top-content">
                        <div className="col-md-22 offset-md-2 ">
                            <p>
                                The Colbyettes, the Megs, Broadway Musical Revenue (BMR)—Amina
                                McIntryre ’04 had auditioned for all of them but hadn’t been
                                selected. In a conversation at the SOBHU room, she discovered she
                                wasn’t the only one in that situation.
                            </p>
                            <p>
                                With that realization came an idea: the friends would start their
                                own group.
                            </p>
                            <p>
                                In March 2002, seven women—Alice-Marie Allen ’04, Nadra Crawford
                                ’05, Rharaka Gilbert ’05, Amina McIntyre ’04, Melissa Minaya ’03,
                                Betsy Ramos ’04, and Chyann Oliver ’04, all but one in SOBHU—started
                                E.V.E., or Ethnic Vocal Ensemble, which is currently called
                                Everything Vocal Ensemble.
                            </p>
                            <p>
                                “We had an open concert in the coffeehouse,” said McIntyre,
                                recalling that they sang four or five songs that night. “We did a
                                mixture of things.” They sang songs in different languages, Alicia
                                Keys songs, and sometimes mixed them with poetry.
                            </p>
                            <p>
                                From there on, the group took off. “We started out with seven
                                people; next year we had like 14,” she said.
                            </p>
                            <p>
                                The Echo reported on their success with a story on 5 September 2002:
                                “These girls blew everyone away, new and returning students alike.
                                They approached a cappella in a new way by incorporating poetry into
                                their performance, which was set to the theme of love. They
                                impressed the audience with their delightful renditions of Maxwell’s
                                ‘Drowndeep’ and Alicia Keys’ ‘Jane Doe.’ They also received the only
                                standing ovation of the night after they performed Nelly Furtado’s
                                ‘I’m Like a Bird.’”
                            </p>
                            <p>
                                In another story from 12 September 2002, the founding members shared
                                details of their formation. “It was a joke at first,” said Oliver to
                                the Echo, adding: “It’s a blessing in disguise that all of us didn’t
                                make the other a cappella groups; though it is kinda strange to
                                think. This way, we wouldn’t have been able to come together like
                                this.” They explained their name choice was because it captured
                                their musical selections and styling. “Ethnic does not mean that it
                                has to be a person of color. Ethnic is just soulful singing,” said
                                another founding member, Ramos.
                            </p>
                            <p>
                                “We literally started out [with] one white woman and all the rest of
                                us were Black and Hispanic,” McIntyre said. “It came out of SOBHU
                                because we weren&rsquo;t seeing our kind of songs, we weren&rsquo;t
                                carrying our voices, and we didn&rsquo;t have a place to sing
                                because we weren&rsquo;t getting accepted into a lot of the groups.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default TowerAbove;
