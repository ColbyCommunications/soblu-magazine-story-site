import React, { useState } from 'react';
import Nav from '../components/common/Nav';
import SideNav from '../components/common/SideNav';
import { Link } from 'react-router-dom';
import Image from '../components/common/Image';
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
            <div className="container">
                <div className="row soblu-mobile-hide" id="soblu-title">
                    <div className="col" style={{ marginTop: '5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1184.049 496.628">
                            <title>SOBLU At 50: A Retrospective</title>
                            <path
                                d="M82.557,215.074c6.831,23.149,24.288,31.5,47.438,31.5,10.247,0,30.739-1.518,30.739-15.939,0-15.939-20.113-18.975-31.878-21.252C79.9,199.894,21.837,186.611,21.837,124.752c0-25.426,12.523-50.473,33.4-65.274C76.485,44.678,104.189,39.744,130,39.744c45.161,0,88.8,18.6,104.742,63.756L168.7,123.614c-7.59-19.355-22.011-26.186-42.124-26.186-10.626,0-25.807,3.036-25.807,16.7s18.976,16.319,28.842,18.6c24.668,4.933,50.854,9.108,73.624,20.872,25.426,13.662,38.709,37.95,38.709,66.413,0,62.618-62.239,87.665-116.128,87.665-54.648,0-103.224-22.77-117.265-79.316Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M511.014,174.467c0,74-45.54,133.205-124.476,133.205s-124.477-59.2-124.477-133.205c0-77.8,45.161-134.723,124.477-134.723S511.014,96.669,511.014,174.467Zm-163.565.38c0,25.047,2.656,73.243,39.089,73.243s39.088-48.2,39.088-73.243c0-25.427-3.794-76.28-39.088-76.28S347.449,149.42,347.449,174.847Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M534.927,43.539H662.06c19.734,0,39.847,1.518,56.166,13.283,17.457,12.523,27.7,33.775,27.7,55.027,0,27.324-17.457,50.474-44.023,56.546v.759c29.981,5.313,50.474,28.083,50.474,59.2,0,22.391-7.97,47.438-26.566,60.72-20.113,14.421-48.2,14.8-71.725,14.8H534.927Zm105.5,99.809c7.59,0,16.7.38,22.39-4.933a23.665,23.665,0,0,0,7.59-17.078c0-19.355-15.938-22.011-31.119-22.011H608.17v44.022Zm2.277,102.465c7.97,0,16.7.38,23.149-4.933a22.663,22.663,0,0,0-3.036-38.71c-6.831-3.415-15.938-3.415-23.149-3.415h-31.5v47.058Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M966.04,303.877H783.5V43.539h80.454V240.121H966.04Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M1192.6,210.9c0,30.36-3.416,54.648-28.463,74.762-22.391,17.457-49.715,22.011-77.039,22.011-23.909,0-55.028-5.313-75.141-18.6-27.7-18.216-33.017-42.883-33.017-74V43.539h81.213V205.966c0,8.728-.379,20.492,4.934,28.462,6.072,8.349,18.216,11.765,28.463,11.765,9.107,0,20.493-2.657,27.324-8.729,10.246-8.728,9.107-22.39,9.107-34.534V43.539H1192.6Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M137.36,534.011H116.578l-16.3-47.233H40.3L25.893,534.011h-17L61.317,372.005H84.7ZM71,393.731l-25.034,77.7H95.8Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M193.1,534.011h-20.31V389.717H126.734V372.005H239.146v17.712H193.1Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M294.878,411.916l-2.126,22.907a52.17,52.17,0,0,1,29.285-8.973c13.225,0,27.866,5.668,37.313,14.641,10.391,10.155,15.35,24.089,15.35,38.494,0,36.605-30.465,57.387-64.708,57.387-31.881,0-60.457-16.531-66.124-49.594l41.8-5.195c2.125,11.572,11.808,17.712,23.144,17.712,11.1,0,19.365-8.029,19.365-19.365,0-12.044-8.5-19.837-20.31-19.837-7.793,0-14.878,3.542-18.893,10.154l-37.313-5.195,7.085-93.047H366.907l-4.251,39.911Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M452.156,369.644c48.177,0,64.472,43.689,64.472,84.544,0,40.148-18.185,82.184-64.472,82.184s-64.471-42.036-64.471-82.184C387.685,413.333,403.979,369.644,452.156,369.644Zm0,34.006c-8.029,0-17.712,2.6-17.712,50.775,0,45.579,11.336,47.94,17.712,47.94,6.14,0,17.712-.708,17.712-47.94C469.868,417.584,465.145,403.65,452.156,403.65Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M606.847,370.162l15.34,53.85h-12.03l-2.745-11.061h-15.1l-2.664,11.061h-10.9l16.147-53.85Zm-1.615,33.5-5.409-21.96-5.248,21.96Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M670.949,370.162c5.409,0,10.656,0,14.775,4.6,2.825,3.148,3.875,7.427,3.875,11.707,0,9.526-4.925,12.432-7.589,14.047l9.929,23.494H679.022l-7.185-21.234h-5.975v21.234H654.075v-53.85Zm-5.087,8.719V394.06h5.248c5.086,0,6.944-3.311,6.944-7.751,0-7.428-5.409-7.428-7.428-7.428Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M734.165,370.162v9.284h-20.91V391.88h16.227v9.284H713.255V414.4h20.91v9.608h-32.7v-53.85Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M770.818,370.162v10.092h-10.98v43.758H748.051V380.254H737.313V370.162Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M795.6,370.162c5.41,0,10.657,0,14.775,4.6,2.825,3.148,3.875,7.427,3.875,11.707,0,9.526-4.925,12.432-7.589,14.047l9.93,23.494H803.678l-7.186-21.234h-5.974v21.234H778.73v-53.85Zm-5.086,8.719V394.06h5.248c5.086,0,6.943-3.311,6.943-7.751,0-7.428-5.409-7.428-7.428-7.428Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M861.242,397.127c0,9.85-1.775,27.692-19.537,27.692-17.277,0-19.538-16.874-19.538-27.692,0-10.334,2.019-27.773,19.538-27.773C858.82,369.354,861.242,385.905,861.242,397.127Zm-26.641,0c0,11.545,1.129,18.085,7.1,18.085,6.055,0,7.1-6.7,7.1-18.085,0-11.3-.969-18.165-7.1-18.165C835.73,378.962,834.6,385.421,834.6,397.127Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M895.959,385.663c-.646-1.937-2.18-6.7-7.589-6.7-3.956,0-5.651,2.745-5.651,4.925,0,3.714,3.552,5.006,9.285,7.185,6.055,2.341,14.854,5.652,14.854,16.551,0,9.2-6.459,17.2-19.133,17.2-3.875,0-9.689-.726-14.048-5.651a21.809,21.809,0,0,1-4.6-9.123l10.334-2.906c.646,2.422,2.18,8.073,8.639,8.073,4.036,0,6.862-2.261,6.862-5.814,0-3.794-3.39-5.328-7.428-6.781-7.346-2.664-16.227-5.812-16.227-16.793,0-8.4,5.409-16.47,17.2-16.47,13.4,0,16.228,8.962,17.358,12.514Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M933.1,370.162c5.651,0,11.545,0,15.582,4.117,3.714,3.875,4.521,9.042,4.521,12.756,0,5.329-1.453,10.738-5.651,13.968-4.037,3.148-10.657,3.148-13.968,3.148h-4.2v19.861H917.6v-53.85Zm-3.714,8.719v15.985H933.1c4.118,0,7.589-.887,7.589-8.073,0-7.912-5-7.912-7.589-7.912Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M994.857,370.162v9.284h-20.91V391.88h16.228v9.284H973.947V414.4h20.91v9.608h-32.7v-53.85Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M1041.2,405.12c-.887,10.9-7.023,19.7-18.81,19.7-16.39,0-20.265-15.421-20.265-27.692,0-9.769,2.422-27.773,20.426-27.773,8.154,0,12.191,3.714,14.613,7.267,3.149,4.683,3.552,10.334,3.794,13.563l-10.737.807c-.324-4.278-.808-12.029-7.589-12.029-6.7,0-8.073,8.154-8.073,19.054,0,9.042,1.048,17.2,8.073,17.2,6.378,0,7.265-7.912,7.67-10.818Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M1078.9,370.162v10.092h-10.98v43.758h-11.787V380.254H1045.4V370.162Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M1098.279,370.162v53.85h-11.787v-53.85Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M1118.06,370.162l8.235,41.094,8.558-41.094h10.171l-13.24,54.173-13.24-.242-12.917-53.931Z"
                                transform="translate(-8.555 -39.744)"
                            />
                            <path
                                d="M1185.068,370.162v9.284h-20.91V391.88h16.228v9.284h-16.228V414.4h20.91v9.608h-32.7v-53.85Z"
                                transform="translate(-8.555 -39.744)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="row mb-4 soblu-mobile-hide" style={{ marginTop: '-7px' }}>
                    <div className="col-sm text-right">
                        <p>By Kardelen Koldas '15 | Photography by Edwin Torres '12</p>
                    </div>
                </div>

                <div className="row soblu-desktop-hide" id="soblu-title">
                    <div className="col" style={{ marginTop: '3rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 977.526 591.123">
                            <title>SOBU At 50</title>
                            <path
                                d="M70.849,152.711c5.639,19.11,20.049,26,39.159,26,8.459,0,25.376-1.253,25.376-13.158,0-13.158-16.6-15.663-26.316-17.543-40.412-7.832-88.344-18.8-88.344-69.861,0-20.99,10.338-41.666,27.568-53.884,17.544-12.218,40.414-16.29,61.716-16.29,37.281,0,73.307,15.35,86.465,52.63l-54.51,16.6C135.7,61.234,123.792,55.6,107.189,55.6c-8.772,0-21.3,2.506-21.3,13.784S101.55,82.85,109.7,84.729c20.363,4.073,41.979,7.519,60.776,17.231,20.989,11.278,31.954,31.328,31.954,54.824,0,51.691-51.377,72.367-95.863,72.367-45.112,0-85.211-18.8-96.8-65.475Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M424.533,119.19c0,61.089-37.593,109.961-102.755,109.961S219.023,180.279,219.023,119.19c0-64.222,37.28-111.213,102.755-111.213S424.533,54.968,424.533,119.19ZM289.51,119.5c0,20.677,2.194,60.463,32.268,60.463s32.268-39.786,32.268-60.463c0-20.989-3.133-62.968-32.268-62.968S289.51,98.514,289.51,119.5Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M444.266,11.109H549.214c16.291,0,32.894,1.253,46.366,10.965,14.411,10.338,22.869,27.882,22.869,45.426,0,22.555-14.41,41.666-36.341,46.678v.626c24.75,4.386,41.667,23.183,41.667,48.872,0,18.483-6.579,39.159-21.93,50.124-16.6,11.905-39.786,12.218-59.21,12.218H444.266ZM531.357,93.5c6.266,0,13.785.313,18.484-4.072a19.534,19.534,0,0,0,6.265-14.1c0-15.977-13.157-18.17-25.689-18.17H504.729V93.5Zm1.88,84.585c6.579,0,13.784.314,19.11-4.072a18.708,18.708,0,0,0-2.506-31.954c-5.639-2.82-13.158-2.82-19.11-2.82h-26v38.846Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M800.144,226.018H649.458V11.109h66.415V173.387h84.271Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M987.167,149.265c0,25.062-2.819,45.112-23.5,61.715-18.483,14.412-41.039,18.171-63.6,18.171-19.737,0-45.425-4.386-62.03-15.351-22.869-15.037-27.254-35.4-27.254-61.089V11.109h67.041V145.192c0,7.2-.313,16.917,4.073,23.5,5.012,6.892,15.037,9.712,23.5,9.712,7.518,0,16.917-2.193,22.556-7.206,8.459-7.2,7.518-18.483,7.518-28.508V11.109h51.691Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M257.048,594.553h-40.01l-31.372-90.934H70.181L42.446,594.553H9.71l100.936-311.9h45.012ZM129.287,324.481,81.093,474.066h95.934Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M364.353,594.553h-39.1v-277.8h-88.66v-34.1H453.012v34.1H364.353Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M560.312,359.49l-4.093,44.1A100.439,100.439,0,0,1,612.6,386.315c25.461,0,53.651,10.913,71.837,28.19,20.006,19.551,29.554,46.376,29.554,74.11,0,70.474-58.653,110.485-124.579,110.485-61.38,0-116.394-31.828-127.306-95.481l80.476-10c4.091,22.279,22.733,34.1,44.557,34.1,21.369,0,37.282-15.459,37.282-37.282,0-23.189-16.368-38.193-39.1-38.193-15,0-28.644,6.82-36.373,19.551l-71.838-10,13.641-179.138H698.985L690.8,359.49Z"
                                transform="translate(-9.71 -7.977)"
                            />
                            <path
                                d="M863.112,278.105c92.752,0,124.124,84.114,124.124,162.771,0,77.293-35.009,158.224-124.124,158.224S738.989,518.169,738.989,440.876C738.989,362.219,770.361,278.105,863.112,278.105Zm0,65.472c-15.458,0-34.1,5-34.1,97.753,0,87.751,21.824,92.3,34.1,92.3,11.821,0,34.1-1.364,34.1-92.3C897.212,370.4,888.119,343.577,863.112,343.577Z"
                                transform="translate(-9.71 -7.977)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="row mb-4 soblu-desktop-hide">
                    <div className="col-sm text-center">
                        <h1 className="heavy" style={{ fontSize: '2.4rem', marginTop: '1rem' }}>
                            A RETROSPECTIVE
                        </h1>
                    </div>
                </div>
                <div className="row mb-4 soblu-desktop-hide">
                    <div className="col-sm">
                        <p style={{ fontSize: '1.4rem' }}>
                            By Kardelen Koldas '15 | Photography by Edwin Torres '12
                        </p>
                    </div>
                </div>

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
                            <div
                                className="row fgCompressed"
                                style={{
                                    fontWeight: '600',
                                    fontSize: '2.6rem',
                                }}
                            >
                                <div className="heading1">The More Things Change</div>
                            </div>
                            <div
                                className="row mt-4"
                                style={{
                                    fontSize: '1.3rem',
                                }}
                            >
                                <div className="col-lg-20">
                                    Since its inception, SOBLU has evolved while maintaining its
                                    core
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
                <div
                    className="row "
                    style={{
                        marginTop: '2rem',
                    }}
                >
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
                            <div className="row" style={{ marginTop: '2rem' }}>
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
                                <h2
                                    className="fgCompressed fgCompressed-normal-weight timeline-year"
                                    style={{
                                        fontSize: '5rem',
                                        marginBottom: '0',
                                        display: 'inline-block',
                                        marginRight: '25px',
                                    }}
                                >
                                    1970s
                                </h2>
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    id="a-radical-movement"
                                >
                                    A Radical Movement
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                        marginBottom: '0',
                                    }}
                                >
                                    SOBU was built “on the shoulders of the Civil Rights Movement”
                                </p>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: '2rem' }}>
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="soblu-mobile-hide">
                                    <Image
                                        src={{
                                            main:
                                                'images/Chapel-protest-students-speaking-to-audience.jpg',
                                        }}
                                        altText=""
                                        onClick={() => openLightboxOnSlide(2)}
                                    />

                                    <div
                                        style={{
                                            marginTop: '5px',
                                        }}
                                    >
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

                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
                            <div className="col-lg-20 offset-lg-4">
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “Without SOBHU I’m not sure Colby could have been as successful
                                    in retaining the students of color that they’ve been able to
                                    retain.”
                                </span>
                                &mdash;Shaquan Huntt ’13
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
                            <div>
                                <span className="fgCompressed fgCompressed-normal-weight fgCompressed-quote">
                                    “I think SOBLU, first and foremost, was created as a form of
                                    resistance and though the club has changed over time, that’s
                                    something [that still] remains.”
                                </span>
                                &mdash;Kris de Luna ’20
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
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
                            <div style={{ marginTop: '-50px' }}>
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

                        <div className="row" style={{ marginTop: '5rem' }}>
                            <div className="col-md-9 d-flex align-items-center">
                                <div style={{ fontSize: '1.6rem' }}>
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
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                        marginBottom: '1rem',
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
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
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
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
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
                        <div className="row" style={{ marginTop: '5rem' }}>
                            <div className="col-md-9 d-flex align-items-center">
                                <Image
                                    src={{
                                        main: 'images/Newspaper_preview.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(3)}
                                    caption="Morning Sentinel May 1, 1974"
                                />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    id="a-cultural-outlet"
                                >
                                    A Cultural Outlet
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                        marginBottom: '1rem',
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
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
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

                        <div className="row" style={{ marginTop: '5rem' }}>
                            <div className="col-md-9 d-flex align-items-center">
                                <Image
                                    src={{
                                        main: 'images/Newspaper_preview2.png',
                                    }}
                                    altText=""
                                    onClick={() => openLightboxOnSlide(4)}
                                    caption="Morning Sentinel Month and year coming"
                                />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    id="a-space-of-its-own"
                                >
                                    A Space of its Own
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                        marginBottom: '1rem',
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
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
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
                        <div className="row" style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
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
                        <div className="row" style={{ marginTop: '5rem' }}>
                            <div className="col-md-9 d-flex align-items-center"></div>
                            <div className="col-md-1"></div>
                            <div className="col-md-14">
                                <h3
                                    className="fgCompressed fgCompressed-normal-weight"
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    id="an-organization-for-whom"
                                >
                                    An Organization for Whom?
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1.6rem',
                                        fontStyle: 'normal',
                                        marginBottom: '1rem',
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
