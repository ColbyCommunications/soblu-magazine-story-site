import React from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import InnerSvg from '../components/InnerSvg';
import VideoPlayer from '../components/common/Video';

const SobluVoices = () => (
    <>
        <Nav />
        <div id="soblu-voices-page" className="container">
            <InnerSvg headline="SOBLU Voices" />
            <div className="row soblu-first-section-inner">
                <div className="col-md-12">
                    <div>
                        <div className="row fgCompressed">
                            <h1
                                style={{
                                    fontWeight: '600',
                                }}
                            >
                                In Their Words
                            </h1>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-20">
                                <p className="lead">
                                    SOBLU Members from different eras share their reflections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fgCompressed heavy in-their-words-top-quote in-their-words-top-quote-offset mobile-text-center">
                        “... the SOBLU space, it’s the type of space where close to anything can
                        happen.”
                    </div>
                </div>
            </div>
            <div className="row mb-4 mb-md-0">
                <div className="col-md-22 offset-md-2">
                    <div className="fgCompressed heavy in-their-words-top-quote mobile-text-center">
                        “... I wonder, where we are now regarding, social, cultural, academic and
                        economic diversity, inclusion and equity, nationally, and at Colby?
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
                            <div className="mb-4">
                                <p
                                    className="fgCompressed heavy p-no-margin-bottom"
                                    style={{ fontSize: '1.7rem' }}
                                >
                                    A Message from SOBLU’s Co-Presidents
                                </p>
                                <p style={{ fontSize: '1.5rem' }}>
                                    By Kris de Luna ’20 and Nereyda Luna ’20
                                </p>
                            </div>
                            <p style={{ fontSize: '1.5rem' }}>Dear readers, </p>
                            <p>
                                Our names are Kris de Luna and Nereyda Luna, and we’re the
                                co-presidents of SOBLU (Students Organized for Black and Latinx
                                Unity) for the 2019-20 scholastic year. And just in case you’re
                                wondering, no, we are not related. This year, we’re proud to be
                                celebrating SOBLU’s 50th anniversary. For all of those who don’t
                                know too much about SOBLU, this organization was born out of a need
                                for community and space. Much like other movements, SOBLU started as
                                a motion for change in the late 1960s. It began with a group of
                                Black students’ discontent with the norms of Colby (and the greater
                                nation) during that time period. SOBLU has gone through a couple of
                                name changes, but the original spirit of this organization continues
                                to prevail.
                            </p>
                            <p className="p-no-margin-bottom">
                                More than anything, we decided to run as presidents because from the
                                very beginning of our first year, SOBLU has been our home away from
                                home. For the people who haven’t entered the SOBLU space, it’s the
                                type of space where close to anything can happen. You never know
                                what conversations people are going to be having, or what music will
                                be blasting. It’s the type of space where on one couch people will
                                be arguing about whether or not mumble rap is a legitimate form of
                                rap, on another couch someone could be napping, and on our third
                                couch people will be watching Rhythm and Flow on Netflix.
                            </p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col mobile-text-center">
                            <span className="fgCompressed heavy fgCompressed-voices-quote">
                                “Through the ages, SOBLU has seen many chapters of Colby’s history.
                                We have directly challenged our institution for our community. Much
                                of the work we do is for us. by us.”
                            </span>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-22 offset-md-2 ">
                            <div>
                                <p>
                                    Currently the room holds 50-80 student members, but is the home
                                    of many alums. Even though we have been here for a short amount
                                    of time, we know that this organization is more than just the
                                    current students. We are one big family. We stick with each
                                    other through thick and thin. Through the good and the bad.
                                    Through the sunshine and the snow.
                                </p>
                                <p>
                                    Through the ages, SOBLU has seen many chapters of Colby’s
                                    history. We have directly challenged our institution for our
                                    community. Much of the work we do is for us, by us. We wanted to
                                    extend our gratitude and thanks to those who came before us and
                                    paved the path for us to hold the position as one of the most
                                    influential student organizations on campus today. We want to
                                    reassure all alumni that we do not take this position lightly.
                                    We will continue advocating for the Black and Latinx community
                                    on Colby’s campus.
                                </p>
                                <p>
                                    With all this said, SOBLU continues to evolve and change. Our
                                    organization is not stagnant, and we will continue to radically
                                    hold, love, and support the Black and Latinx community of Colby.
                                    SOBLU has changed since its inception 50 years ago, and we are
                                    excited to see it continue its evolution. SOBLU is such an
                                    important part in our lives, and we know SOBLU alums feel the
                                    same. Stay BLU’tiful
                                </p>
                            </div>
                            <div>
                                <p className="p-no-margin-bottom">Warmly,</p>
                                <p className="p-no-margin-bottom">Kris de Luna and Nereyda Luna</p>
                                <p className="p-no-margin-bottom">Co-Presidents of SOBLU</p>
                                <p className="p-no-margin-bottom">
                                    <i>Essay submitted on Nov. 2019</i>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4 mt-6 mb-lg-5">
                        <div className="col">
                            <div className="embed-responsive embed-responsive-16by9">
                                <VideoPlayer
                                    url="videos/SOBLU_Homecoming_Video.mp4"
                                    image="images/davy-22-homecoming-video-thumb.jpg"
                                />
                            </div>
                            <div className="mt-4" style={{ fontSize: '1.4rem' }}>
                                <p
                                    className="d-inline-block"
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    Spencer Gopaul &rsquo;13, Rohnique Davy ’22, Stephanie Rivera
                                    &rsquo;18, and Josue Gonzalez &rsquo;23 talk about SOBLU&rsquo;s
                                    past and present.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-22 offset-md-2">
                            <div className="mb-4">
                                <p
                                    className="fgCompressed heavy p-no-margin-bottom"
                                    style={{ fontSize: '1.7rem' }}
                                >
                                    SOBHU reflection for 50th Anniversary
                                </p>
                                <p style={{ fontSize: '1.5rem' }}>By Kebba Tolbert ’94</p>
                            </div>
                            <p className="p-no-margin-bottom">
                                When I reflect on my time at Colby, one of the things that resonates
                                with me is that it was both challenging and fulfilling. As a young
                                African-American in Waterville—there were times where you just felt
                                out of place. I was a third-generation college student, had gone to
                                a public high school and an elite boarding school, so I’d spent most
                                of my educational career at majority white institutions. I was on
                                the track team as well, so I had a built-in, ready-made community.
                                This all helped ease my transition. But there were still times when
                                it felt like I was in a foreign land. SOBHU—the group, the people,
                                and the room—was a place that felt comfortable, a place that felt
                                like home. It was home in ways big and small. From just being to
                                take off the mask of double consciousness and just be. The people in
                                SOBHU created a space to talk about things particular and familiar.
                                We had conversations about things important (representation in the
                                curriculum) and inane (which rap mc). We created space to laugh
                                about the ridiculous (the local theater explaining that they weren’t
                                showing “Boyz n the Hood” because they were afraid of gang violence
                                in Waterville!) and to support each other through serious trials.
                                And we had the SOBHU room—in the SOBHU room we had dances, we hung
                                out in the SOBHU room, we rented movies that we wanted to see, we
                                had a representative—in a sense extracurricular—library in the SOBHU
                                room. It was a safe space, it was relaxing, it was home.
                            </p>
                            <p>
                                I remember in talking with Jonathan Thomas ’94, a good friend and
                                SOBHU vice president, about our senior year—he recalled that there
                                were several SOBHU members that were part of Stu-A our freshman
                                year. He said, “Let’s make it seem like Black History Month all year
                                long.” So, in addition to being president of SOBHU, I was the
                                student government cultural chair. The Stu-A government that year
                                was very diverse—Marinel Mateo ’94 was president, Kendra King ’94
                                was the parliamentarian, Mike Miller ’95 was the social chair. We
                                worked hard to be more inclusive, be more sensitive to students’
                                needs, and in many ways we were successful. We had vigorous support
                                from people in administration like Tulio Nieman and Dean (Victoria)
                                Hershey.
                            </p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col mobile-text-center">
                            <span className="fgCompressed heavy fgCompressed-voices-quote">
                                “SOBHU—the group, the people, and the room—was a place that felt
                                comfortable, a place that felt like home.”
                            </span>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-22 offset-md-2 ">
                            <div>
                                <p>
                                    When I look back, I was able to play a big part as SOBHU
                                    president and Stu-A cultural chair in bringing a certain type of
                                    diversity to campus—Cornel West, Chuck D, Manning Marable, and
                                    Spike Lee and others. This was a big deal at the time. But in
                                    some areas, I failed—I was shortsighted and not inclusive
                                    enough. One of things I didn’t do was properly appreciate and
                                    include the diversity of Black and Latinx voices—we didn’t
                                    incorporate Caribbean and African speakers and programs much. We
                                    didn’t celebrate and appreciate the Latinx perspective as much
                                    as we should have—even during Hispanic Heritage Month.
                                </p>
                                <p>
                                    Later, in my senior year, SOBHU was asked to make a presentation
                                    about our experience and our concerns at Colby to administration
                                    and trustees. In talking with friends and a few administrators,
                                    we felt it was being pitched as a divide-and-conquer strategy.
                                    We wanted to, and were encouraged to, present a united front of
                                    underrepresented students. People like Hung Bui ’94, Karlene
                                    Burrell-McRae ’94, Cicely Finley Taylor ’94, along with Jon
                                    Thomas ’94 and Kendra King ‘94, were some other people heavily
                                    involved. We partnered with various groups to make a
                                    coalition—this was the genesis of Students of Color United for
                                    Change. While each group had specific needs, we felt we had a
                                    stronger voice if we could speak together. So at the meeting,
                                    where SOBHU was scheduled to talk with the administration, we
                                    all showed up as SOCUFC. What did we express?
                                </p>
                                <p>
                                    We wanted more diverse faculty, we wanted a diverse housing
                                    option similar to what was available at a few other NESCAC
                                    schools, we wanted much more attention paid to the quality of
                                    the student experience (and not just the recruitment) of
                                    underrepresented groups. We wanted serious thought about a more
                                    inclusive curriculum. I learned at Colby, I was pushed at Colby,
                                    and grew at Colby because of many wonderful professors and
                                    administrators who invested in me—from partnering with me to do
                                    several independent study projects in areas that weren’t offered
                                    (i.e., Marcus Garvey and Malcolm X, rap music and language,
                                    Black women and leadership) to simply lending an ear to vent
                                    when things got tough. I learned to lead at Colby because of
                                    SOBHU and the people who were connected and supportive of our
                                    group. For that, for SOBHU, I am extremely grateful.
                                </p>
                            </div>
                            <div>
                                <p>
                                    <i>Essay submitted on Nov. 2019</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-lg-5">
                        <div className="col">
                            <div
                                className="fgCompressed heavy large-quote"
                                style={{
                                    marginBottom: '15px',
                                }}
                            >
                                “SOBLU has changed since its inception 50 years ago, and we are
                                excited to see it continue its evolution. SOBLU is such an important
                                part in our lives, and we know SOBLU alums feel the same.”
                            </div>
                            <div className="text-right heavy fgCompressed-quote kris-juan">
                                <p className="p-no-margin-bottom">Kris de Luna and Nereyda Luna</p>
                                <p className="p-no-margin-bottom">
                                    Co-Presidents of SOBLU for 2019-2020 Academic Year
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mt-6 mb-lg-5">
                        <div className="col">
                            <div className="embed-responsive embed-responsive-16by9">
                                <VideoPlayer
                                    url="videos/SOBLU_Teaser.mp4"
                                    image="images/Teaser-Thumb.jpg"
                                />
                            </div>
                            <div className="mt-4" style={{ fontSize: '1.4rem' }}>
                                <p
                                    className="d-inline-block"
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    Alumni and students reflect on SOBLU&rsquo;s place in their
                                    lives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-lg-5">
                        <div className="col">
                            <div
                                className="fgCompressed heavy large-quote"
                                style={{
                                    marginBottom: '15px',
                                }}
                            >
                                “SOBHU—the group, the people, and the room—was a place that felt
                                comfortable, a place that felt like home.”
                            </div>
                            <div className="text-right heavy fgCompressed-quote kris-juan">
                                <p>Charles Terrell ’70</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4s">
                        <div className="col-md-22 offset-md-2">
                            <div className="mb-4">
                                <p
                                    className="fgCompressed heavy p-no-margin-bottom"
                                    style={{ fontSize: '1.7rem' }}
                                >
                                    Reflections: On the Student Organization for Black Unity (SOBU)
                                </p>
                                <p style={{ fontSize: '1.5rem' }}>By Charles Terrell ’70</p>
                            </div>
                            <p>
                                I believe reflections on the past are most useful relative to issues
                                of the present and future. Hence, I am reflecting on my experiences
                                with SOBU relative to the past, present, and future.
                            </p>
                            <p>
                                It is a challenge to express my thoughts and feelings about SOBU 50
                                years after its inception in 1969, and nearly 50 years after 17
                                Black and Latino SOBU members, now designated the “SOBU 17,” entered
                                Lorimer Chapel at 8:30 a.m. on Monday, March 2, 1970. We were armed
                                with five—in today’s language—diversity, inclusion, and equity
                                demands to improve Colby’s social, cultural, educational, and
                                economic environment and to ensure fairness for first-generation,
                                low-income, and Black and Latino students. Moreover, I am unable to
                                uncouple SOBU from the Lorimer Chapel takeover as they were, and
                                will forever be, for me intrinsically linked; hence my designation
                                “SOBU 17.”
                            </p>
                            <p>
                                I have always felt good about our action and its legacy, and I am
                                proud to have my name associated with it and with my 16 SOBU
                                classmates: Haroldine Bailey, Rodney Brathwaite, Wayne Brown,
                                Dashiell Criegler, Antonio Cruz, Patricia DeBerry, Doris Ford,
                                Margaret Gordon, Anna Graves, Vincent Guess, Roberta Kirby-Nunes,
                                Terrence Knight, Sebsibe Mamo, Gail McKenzie, and Jose Rodrigues.
                                The SOBU 17 were courageous young Black and Latino students from
                                across all four Colby classes representing perhaps 60 percent of
                                Colby students of color. Moreover, it should be noted that not all
                                students of color supported or joined us, and that we planned,
                                organized, and implemented the chapel takeover on our own. There was
                                no professional or adult help, support, or consultation. Actually, I
                                do not recall a single Black, Latino, or Native American faculty or
                                staff member at Colby during this time.
                            </p>
                            <p className="p-no-margin-bottom">
                                We were significantly influenced by attending Colby in revolutionary
                                times in higher education. Racially and ethnically, the Civil Rights
                                Movement transitioned into the Black Power Movement both on and off
                                campuses with strategies of appeasement and accommodation shifting
                                to strategies of risk and action. It feels as though we burned fast
                                and hot, for a single week, returned to campus life as we knew it,
                                and dispersed back into our own lives and futures as the fates would
                                have it. Yet, we did leave a legacy of a club (SOBU) that is well
                                established and supported within the Colby community, a club that
                                provides a safe and welcoming venue for students of color and, I
                                imagine, for all who seek it out. We also left a legacy of things
                                rarely or never seen before at Colby: a coalition of Black and
                                Latino students; the creation of a Black/Latino/white student
                                progressive coalition; an energized tradition of campus and societal
                                protest; a racial, ethnic, progressive challenge to Colby faculty,
                                administration, and student body; an example of forceful, peaceful,
                                responsible student activism; and the establishment of a single
                                standard of academic achievement applied equally to all students
                                regardless of their ability to pay.
                            </p>
                            <p>
                                Interestingly, I have been more loosely connected to SOBU over the
                                past 50 years than I was actually connected to it originally. I
                                think most students interact and participate with college
                                organizations for three to four years or so, mirroring their college
                                tenure. My tenure with SOBU was merely seven months long, from the
                                fall of 1969 to the spring of 1970, from election as SOBU’s first
                                president, to the leadership of the SOBU 17, to leaving campus in
                                May 1970. Consequently, as a student I did not know SOBU as a club
                                or as an accepted organization of the College community. I knew it
                                as a revolutionary, or at the very least, activist organization
                                which challenged the prevailing, limiting, social, cultural,
                                educational, and economic culture of the time for Black, Latino,
                                first-generation, and low-income students at the College. Hence, I
                                will be intrigued to read fellow SOBU reflections on the club over
                                the past 50 years—a club I did not know. I am particularly
                                interested to know whether dominant social factors were as
                                influential on SOBU over the years as they were in the beginning.
                            </p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col mobile-text-center">
                            <span className="fgCompressed heavy fgCompressed-voices-quote">
                                As a student, I did not know SOBU as a club or as an accepted
                                organization of the College community.
                            </span>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-22 offset-md-2 ">
                            <div>
                                <p>
                                    Currently, I find myself with more questions than answers
                                    regarding the history of SOBU and the SOBU 17. I wonder what
                                    happened to the 16 of the SOBU 17 who I have not seen or spoken
                                    to, apart from a few, over the last 50 years? I wonder how they
                                    now view our action and what impact it had on their lives? I
                                    wonder what they think of Colby now? I wonder how many of them
                                    are going through life with a Colby degree? (Haroldine Bailey
                                    and I were two of the 10 then-revolutionary number of Black and
                                    Latino kids entering Colby in 1966. Ultimately, we were the only
                                    two to graduate in 1970.) I wonder about the legacy of Black,
                                    Latino, students of color retention rates on the Hill over the
                                    years? I wonder what my “chapel” colleagues would say about my
                                    having been, still being, the universal spokesperson for an
                                    action of 17, reported by a person of one?
                                </p>
                                <p>
                                    Finally, I wonder, where we are now regarding social, cultural,
                                    academic, and economic diversity, inclusion and equity,
                                    nationally, and at Colby?
                                </p>
                                <p>
                                    Nationally, Paul Tough speaks to this issue in his masterful new
                                    book The Years That Matter Most, How College Makes or Breaks Us.
                                    It is an excellent read for anyone interested in higher
                                    educational access and equity. In his September 15, 2019, New
                                    York Times Magazine article, “The Impossible Math of College
                                    Admissions,” Tough writes: “Colleges say they want more
                                    low-income students, so why are they admitting so many wealthy
                                    ones?” He further reports “a group of economists led by Raj
                                    Chetty indicate that the most selective colleges in America were
                                    the least economically diverse.” Moreover, “at ‘Ivy Plus’
                                    colleges (Chetty’s term for the Ivy League plus Stanford,
                                    M.I.T., Duke, and the University of Chicago), more than
                                    two-thirds of undergraduates, on average, come from families in
                                    the top income quintile, and fewer than 4% of students grew up
                                    in the bottom income quintile” (p.45). I imagine this is the
                                    select institutional company Colby aspires to keep.
                                </p>
                                <p>
                                    So, what about Colby? The Colby Presidential Task Force on
                                    Diversity, Inclusion, and Equity, Final Report (June 30, 2016)
                                    reports: “While Colby has achieved admirable results in
                                    diversifying its community, the historical legacy of privilege
                                    remains so embedded in our campus that it is often hard to see:
                                    it is the norm.” SOBU was created in reaction to this historical
                                    legacy of privilege, “which remains embedded in our campus”
                                    today. Although still “hard to see,” the SOBU 17 saw it, felt
                                    it, lived it, and reacted to it 50 years ago. Yet, 50 years
                                    later, “like many institutions of higher education, Colby’s
                                    on-going goals for diversity, inclusion, and equity are rooted,
                                    in large part, in a history of systematic, cultural, and
                                    economic oppression that has denied certain groups access,
                                    opportunities, and resources necessary to achieve education
                                    access,” the report says.
                                </p>
                                <p>
                                    As this Presidential Task Force report was published three and a
                                    half years ago, the editors asked me to reflect on the progress
                                    the College has made regarding diversity, inclusion, and equity.
                                    I think that progress has been and continues to be made across
                                    much of higher education, and particularly at Colby. I am in
                                    accord with Christina Crosby’s reflection in A Body Undone:
                                    Living on After Great Pain: “All of us are not who we were, but
                                    who we are, who we are becoming” (p.202). I believe the same to
                                    be true for institutions of higher education, hoping Colby’s
                                    Presidential Task Force report is more reflective of what Colby
                                    is and is becoming than what it has been.
                                </p>
                                <p>
                                    Moreover, I respect the transformative truth-telling of this
                                    report as well as the courage to publish it. Still, I am hopeful
                                    that the next 50 years will be kinder to the aspiring goals of
                                    diversity, inclusion, and equity at Colby, first identified by
                                    the SOBU 17, than the last 50 years. In closing, I stand with
                                    Frederick Douglass, reported from Eric Foner’s The Second
                                    Founding: “As history shows, progress is not necessarily linear
                                    or permanent. But neither is regression.”
                                </p>
                            </div>
                            <div className="mt-5">
                                <h3>More Voices to Come</h3>
                                <p>Additional essays will appear here in coming weeks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default SobluVoices;
