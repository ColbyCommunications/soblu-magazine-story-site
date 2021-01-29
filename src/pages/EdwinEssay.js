import React from 'react';
// import FsLightbox from 'fslightbox-react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import Image from '../components/common/Image';
import InnerSvg from '../components/InnerSvg';

const EdwinEssay = () => (
    <>
        <Nav />
        <div id="edwin-essay-page" className="container">
            <InnerSvg headline="Photography essay by Edwin J. Torres ’12" />
            <div className="row soblu-first-section-inner">
                <div className="col-md-10 offset-md-2 mb-md-0 mb-4">
                    <div
                        style={{
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '2rem',
                        }}
                        className="mb-4"
                    >
                        The Meaning of Home
                    </div>

                    <Image
                        src={{
                            main: 'images/Colby_SOBLU_Torres0016A.jpg',
                            thumbnail: 'images/Colby_SOBLU_Torres0016A_thumbnail.jpg',
                        }}
                        lightboxSrc="images/Colby_SOBLU_Torres0016A.jpg"
                        altText="Portrait of Edwin Torres ’12"
                        caption="Edwin Torres ’12"
                    />
                </div>
                <div className="col-md-11 offset-md-1">
                    <p>
                        Photographing for <i>Colby Magazine</i> has prompted me to revisit the
                        meaning of home. What is it that best reminds us of home? Is it a porch with
                        a slow rocker? Is it the presence of loved ones? Is it the smell? Or is it
                        the collective feeling that we are all in this together? It’s a combination
                        of all of these things.
                    </p>
                    <p>
                        As I sat on the porch at the home of Doris Ford Mathis ‘73 in Washington,
                        D.C., it clicked. I took photographs of her with a twin-lens reflex camera
                        of the 1970s. She was part of the founding group of students of Students
                        Organized for Black and Latinx Unity (SOBLU). Doris made it clear. The
                        reason the club was created then was simple. To have a sense of home and
                        community in a renowned institution that was far away from home.
                    </p>
                    <p>
                        As a student from the Bronx, N.Y., I traveled to Colby from a high school
                        that was 98 percent Hispanic and Black. There was a certain culture and
                        rhythm to us whenever we hung out or even interacted. I found this same
                        rhythm at SOBLU. The club represented a sense of home and family. In this
                        new home, I would do a variety of things. I would take a nap on the infamous
                        couch after lunch before biology class, listen to some Biggie and Tupac, or
                        vote on strong club initiatives.
                    </p>
                </div>
            </div>
            <div className="row mt-md-5 mt-0" id="soblu-vertical-menu">
                <div className="col-md-2 d-flex justify-content-center position-relative">
                    <div className="soblu-vertical-menu-container soblu-mobile-hide">
                        <div className="soblu-vertical-menu-sticky">
                            <SideNav />
                        </div>
                    </div>
                </div>
                <div className="col-md-22">
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11 d-flex align-items-center">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption">
                                    Doris’s granddaughter checks her makeup and hair before a
                                    portrait session on her porch in Washington, D.C., in February
                                    2020.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0001-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0001.jpg"
                                    altText="Doris’s granddaughter checks her makeup and hair before a
                                    portrait session on her porch in Washington, D.C., in February
                                    2020."
                                />
                            </div>
                            <div className="soblu-desktop-hide my-4 my-md-0">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0001.jpg',
                                        thumbnail: 'images/Colby_SOBLU_Torres0001_thumbnail.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0001.jpg"
                                    altText="Doris’s granddaughter checks her makeup and hair before a
                                    portrait session on her porch in Washington, D.C., in February
                                    2020."
                                    caption="Doris’s granddaughter checks her makeup and hair before a
                                portrait session on her porch in Washington, D.C., in February
                                2020."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11">
                            <div className="mb-4 mb-md-0">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0002-thumb.jpg',
                                        thumbnail: 'images/Colby_SOBLU_Torres0002_thumbnail.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0002.jpg"
                                    altText="A portrait of Doris Ford Mathis ‘73 at her Washington
                                    D.C. home. Doris was a first-year student when SOBLU was
                                    originally founded on Colby’s campus."
                                    caption="A portrait of Doris Ford Mathis ‘73 at her Washington
                                    D.C. home. Doris was a first-year student when SOBLU was
                                    originally founded on Colby’s campus."
                                />
                            </div>
                        </div>
                        <div className="col-md-12 offset-md-1">
                            <p>
                                The sense of comfort in knowing that you all share similar
                                perspectives and are looking out for each other—that was a powerful
                                feeling. Whether it was the 1970s or decades later, the young
                                ambitious faces that filled the room and created a sense of home,
                                now in the present, remained the same. It is this timeless quality
                                that I was looking to instill in my work. Working on this photo
                                essay was a true blessing. I had the opportunity to meet SOBLU
                                members from almost every major era in New York City, Washington,
                                D.C., and Maine. It was a process of sharing stories and catching up
                                on life since Colby. With the students on campus, I felt incredibly
                                humbled to be let into their “era of SOBLU.” I was wholeheartedly
                                impressed with how they fostered community and contributed to the
                                greater campus through their maturity. I listened to their stories,
                                and I embraced them.
                            </p>
                            <p>
                                I made these photographs with the intention of preserving a slice of
                                “home” for a club with an immense history. Many of my photographs
                                were shot on medium-format film and hand developed at my home. This
                                slower process helped my subjects slow down from their usual routine
                                and reflect on the importance of our collective narrative. For me,
                                this process filled my heart with a warm feeling, and I was humbled
                                to be able to listen and see.
                            </p>
                            <p className="text-right">
                                <b>&mdash; Edwin J. Torres ’12</b>
                            </p>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div
                            className="col-md-11 d-flex align-items-center justify-content-center"
                            style={{ flexDirection: 'column' }}
                        >
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption" style={{ marginTop: '2.5rem' }}>
                                    Miller Library on Mayflower Hill in February 2020.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0003-thumb.jpg',
                                        thumbnail: 'images/Colby_SOBLU_Torres0003_thumbnail.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0003.jpg"
                                    altText="Miller Library on Mayflower Hill in February 2020."
                                />
                            </div>
                            <div className="soblu-desktop-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0003-thumb.jpg',
                                        thumbnail: 'images/Colby_SOBLU_Torres0003_thumbnail.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0003.jpg"
                                    altText="Miller Library on Mayflower Hill in February 2020."
                                    caption="Miller Library on Mayflower Hill in February 2020."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-13">
                            <div className="mb-4">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0005-thumb.jpg',
                                        thumbnail: 'images/Colby_SOBLU_Torres0005_thumbnail.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0005.jpg"
                                    altText="Students play card games during a social
                                    night on a wintry Saturday in the SOBLU club room."
                                    caption="Students play card games during a social
                                    night on a wintry Saturday in the SOBLU club room."
                                />
                            </div>
                        </div>
                        <div className="col-md-11 d-flex align-items-center">
                            <div className="soblu-edwin-adjust-left">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0004-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0004.jpg"
                                    altText="Kris de Luna ’20, co-president the SOBLU for the 2019-20 academic year."
                                    caption="Kris de Luna ’20, co-president the SOBLU for the 2019-20 academic year."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11 d-flex align-items-center">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption">
                                    Nereyda Luna ’20, co-president of SOBLU for the 2019-20 academic
                                    year, in front of a mural made to inspire club members.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-edwin-adjust-left">
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main:
                                                'images/Juanluna_SOBLU_Torres0114-retouched-600.jpg',
                                        }}
                                        lightboxSrc="images/Juanluna_SOBLU_Torres0114-retouched-1200.jpg"
                                        altText="Nereyda Luna ’20, co-president, in front of a mural wall made
                                        to inspire club members."
                                        onClick={() => openLightboxOnSlide(7)}
                                    />
                                </div>
                                <div className="soblu-desktop-hide">
                                    <Image
                                        src={{
                                            main:
                                                'images/Juanluna_SOBLU_Torres0114-retouched-600.jpg',
                                        }}
                                        lightboxSrc="images/Juanluna_SOBLU_Torres0114-retouched-1200.jpg"
                                        altText="Nereyda Luna ’20, co-president, in front of a mural wall made
                                        to inspire club members."
                                        caption="Nereyda Luna ’20, co-president, in front of a mural wall made
                                        to inspire club members."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row rohnique-davy mb-4 mb-md-5">
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0007-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0007.jpg"
                                    altText="Rohnique Davy ’22 poses for a portrait on the SOBLU couch."
                                />
                            </div>
                            <div className="soblu-desktop-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0007-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0007.jpg"
                                    altText="Rohnique Davy ’22 poses for a portrait on the SOBLU couch."
                                    caption="Rohnique Davy ’22 poses for a portrait on the SOBLU couch."
                                />
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-1 d-flex align-items-center justify-content-center flex-column">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption mt-5">
                                    Rohnique Davy ’22 poses for a portrait on the SOBLU couch.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11 d-flex align-items-center justify-content-center">
                            <div className="mb-4" style={{ maxWidth: '350px' }}>
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0009-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0009.jpg"
                                    altText="Lorimer Chapel."
                                    caption="Lorimer Chapel."
                                />
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-edwin-adjust-left">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0008-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0008.jpg"
                                    altText="In Harlem, New York City, James Reynolds ’90 works on his artwork in his home studio. James was president of SOBHU and his goal then was to collaborate further with the international club."
                                    caption="In Harlem, New York City, James Reynolds ’90 works on his artwork in his home studio. James was president of SOBHU and his goal then was to collaborate further with the international club."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-0 mb-md-5">
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0011-thumb.jpg',
                                    }}
                                    altText="Reagan Dennis ’23 poses for a portrait by the club computer
                                    in the SOBLU room."
                                    lightboxSrc="images/Colby_SOBLU_Torres0011.jpg"
                                />
                            </div>
                            <div className="soblu-desktop-hide mb-4">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0011-thumb.jpg',
                                    }}
                                    altText="Reagan Dennis ’23 poses for a portrait
                                    in the SOBLU room, located in The Pugh Center."
                                    lightboxSrc="images/Colby_SOBLU_Torres0011.jpg"
                                    caption="Reagan Dennis ’23 poses for a portrait
                                in the SOBLU room, located in The Pugh Center."
                                />
                            </div>
                        </div>
                        <div className="col-md-11 d-flex align-items-center justify-content-center flex-column">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption mt-5">
                                    Reagan Dennis ’23 poses for a portrait in the SOBLU room,
                                    located in The Pugh Center.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11 d-flex align-items-center justify-content-center flex-column">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption mt-5">
                                    Kenny Douyon ’23 by the Colby student mailboxes during his first
                                    year. Douyon traveled from Massachusetts to attend Colby. He was
                                    the first student I met while visiting campus for the story. I
                                    walked into the SOBLU club room unannounced and saw him lying on
                                    the couch bumping hip-hop music and nodding along.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0010-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0010.jpg"
                                    altText="Kenny Douyon ’23 by the Colby student mailboxes during his
                                    first year. Douyon traveled from Massachusetts to attend
                                    Colby. He was the first student I met while visiting campus
                                    for the story. I walked into the SOBLU club room unannounced
                                    and saw him lying on the couch bumping hip-hop music and
                                    nodding along."
                                />
                            </div>
                            <div className="soblu-desktop-hide ">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0010-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0010.jpg"
                                    altText="Kenny Douyon ’23 by the Colby student mailboxes during his
                                    first year. Douyon traveled from Massachusetts to attend
                                    Colby. He was the first student I met while visiting campus
                                    for the story. I walked into the SOBLU club room unannounced
                                    and saw him lying on the couch bumping hip-hop music and
                                    nodding along."
                                    caption="Kenny Douyon ’23 by the Colby student mailboxes during his
                                first year. Douyon traveled from Massachusetts to attend
                                Colby. He was the first student I met while visiting campus
                                for the story. I walked into the SOBLU club room unannounced
                                and saw him lying on the couch bumping hip-hop music and
                                nodding along."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-13">
                            <div className="mb-4 mb-md-0">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0013.jpg',
                                    }}
                                    altText="Sarah Martinez Roth ’11 is a Ph.D. candidate at Georgetown in tumor biology. Sarah was a president of the club in her years and was mentored by one of the original SOBU members Charles Terell of Class of 1970."
                                    lightboxSrc="images/Colby_SOBLU_Torres0013.jpg"
                                    caption="Sarah Martinez Roth ’11 is a Ph.D. candidate at Georgetown in tumor biology. Sarah was a president of the club in her years and was mentored by one of the original SOBU members Charles Terell of Class of 1970."
                                />
                            </div>
                        </div>
                        <div className="col-md-11 d-flex align-items-center">
                            <div className="soblu-edwin-adjust-left">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0012-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0012.jpg"
                                    altText="A candid moment with Reagan Dennis ’23 and other students during a Saturday night at the Pugh Center."
                                    caption="A candid moment with Reagan Dennis ’23 and other students during a Saturday night at the Pugh Center."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11 d-flex align-items-center justify-content-center flex-column">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption mt-5">
                                    Donte Tates ’05 reflects on his SOBLU experience from his home
                                    terrace in Washington D.C. Donte currently teaches literature,
                                    psychology, queer studies, and public speaking. Tates says SOBLU
                                    was where he discovered himself in terms of his identity. Now,
                                    he’s trying to do the same for his students as a teacher.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0014-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0014.jpg"
                                    altText="Donte Tates ’05 reflects on his SOBLU experience from his
                                    home terrace in Washington D.C. Donte currently teaches
                                    literature, psychology, queer studies, and public speaking.
                                    Tates says SOBLU was where he discovered himself in terms of
                                    his identity. Now, he’s trying to do the same for his
                                    students as a teacher."
                                />
                            </div>
                            <div className="soblu-desktop-hide ">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0014-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0014.jpg"
                                    altText="Donte Tates ’05 reflects on his SOBLU experience from his
                                    home terrace in Washington D.C. Donte currently teaches
                                    literature, psychology, queer studies, and public speaking.
                                    Tates says SOBLU was where he discovered himself in terms of
                                    his identity. Now, he’s trying to do the same for his
                                    students as a teacher."
                                    caption="Donte Tates ’05 reflects on his SOBLU experience from his
                                    home terrace in Washington D.C. Donte currently teaches
                                    literature, psychology, queer studies, and public speaking.
                                    Tates says SOBLU was where he discovered himself in terms of
                                    his identity. Now, he’s trying to do the same for his
                                    students as a teacher."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0015-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0015.jpg"
                                    altText="Tate’s desk at the Maret School in Washington, D.C."
                                />
                            </div>
                            <div className="soblu-desktop-hide Z">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0015-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0015.jpg"
                                    altText="Tate’s desk at the Maret School in Washington, D.C."
                                    caption="Tate’s desk at the Maret School in Washington, D.C."
                                />
                            </div>
                        </div>
                        <div className="col-md-11 d-flex align-items-center justify-content-center flex-column">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption mt-5">
                                    Tate’s desk at the Maret School in Washington, D.C.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <div className="col-md-11 d-flex align-items-center justify-content-center flex-column">
                            <div className="soblu-mobile-hide">
                                <p className="soblu-img-caption mt-5s">
                                    Ashley Olvera ’20 in her dorm room in downtown Waterville.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-13">
                            <div className="soblu-mobile-hide">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0016-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0016.jpg"
                                    altText="Ashley Olvera ’20 in her dorm room in downtown Waterville."
                                />
                            </div>
                            <div className="soblu-desktop-hide ">
                                <Image
                                    src={{
                                        main: 'images/Colby_SOBLU_Torres0016-thumb.jpg',
                                    }}
                                    lightboxSrc="images/Colby_SOBLU_Torres0016.jpg"
                                    altText="Ashley Olvera ’20 in her dorm room in downtown Waterville."
                                    caption="Ashley Olvera ’20 in her dorm room in downtown Waterville."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                        <Image
                            src={{
                                main: 'images/Colby_SOBLU_Torres0017-retouched-1200.jpg',
                                thumbnail: 'images/Colby_SOBLU_Torres0017-retouched-thumb.jpg',
                            }}
                            lightboxSrc="images/Colby_SOBLU_Torres0017.jpg"
                            altText="Students sit on a SOBLU couch during one of their Sunday night executive board meetings."
                            caption="Students sit on a SOBLU couch during one of their Sunday night executive board meetings."
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default EdwinEssay;
