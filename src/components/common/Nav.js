/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HiddenBlock from '@colbycommunications/colby-hidden-block-component';

import { HashLink } from 'react-router-hash-link';

const Nav = withRouter(props => {
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    function openDrawer() {
        setIsMobileDrawerOpen(true);
    }

    function closeDrawer() {
        setIsMobileDrawerOpen(false);
    }

    function onClick() {
        if (isMobileDrawerOpen) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light soblu-mobile-hide">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li
                                className={`nav-item ${
                                    props.location.pathname === '/' ? 'active' : ''
                                }`}
                            >
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className={`nav-item ${
                                    props.location.pathname === '/edwin-essay' ? 'active' : ''
                                }`}
                            >
                                <Link className="nav-link" to="/edwin-essay">
                                    Photography Essay by Edwin Torres &lsquo;12
                                </Link>
                            </li>
                            <li
                                className={`nav-item ${
                                    props.location.pathname === '/soblu-voices' ? 'active' : ''
                                }`}
                            >
                                <Link className="nav-link" to="/soblu-voices">
                                    SOBLU Voices
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className="soblu-mobile-nav soblu-desktop-hide text-right"
                style={{
                    color: '#fff',
                    fontFamily: 'franklin-gothic-compressed, sans-serif',
                    position: 'sticky',
                    top: '0',
                    zIndex: '1000',
                    cursor: 'pointer',
                }}
            >
                <div
                    onClick={onClick}
                    className="mb-2"
                    style={{
                        backgroundColor: '#000',
                        padding: '10px 15px 10px 10px',
                    }}
                >
                    <ul className="m-0" style={{ listStyle: 'none' }}>
                        <li>MENU</li>
                    </ul>
                </div>
                <div
                    id="soblu-menu-drawer-mobile"
                    className={`${isMobileDrawerOpen ? 'show' : 'hide'}`}
                    style={{
                        backgroundColor: '#000',
                        padding: '10px 15px 10px 10px',
                    }}
                >
                    <div className="d-flex justify-content-between" style={{ cursor: 'pointer' }}>
                        <div className="p-2" style={{ backgroundColor: '#000', color: '#fff' }}>
                            <h3 className="mb-0" style={{ fontSize: '1.8rem' }}>
                                <span style={{ fontWeight: '600' }}>SOBLU</span>
                                <span style={{ fontWeight: '100' }}>AT</span>
                                <span style={{ fontWeight: '600' }}>50</span>
                            </h3>
                        </div>
                        <div className="d-flex align-items-start">
                            <span onClick={closeDrawer}>CLOSE</span>
                        </div>
                    </div>
                    <div className="mt-4 px-3">
                        <div
                            className="text-center p-2"
                            style={{ backgroundColor: '#fff', color: '#000' }}
                        >
                            <h3 className="mb-0" style={{ fontSize: '1.2rem' }}>
                                <span style={{ fontWeight: '100' }}>TIMELINE</span>
                            </h3>
                        </div>
                        <div>
                            <ul className="mt-2">
                                <li>
                                    <HiddenBlock title="1970s">
                                        <ul id="soblu-vertical-menu-1970-collapse">
                                            <li>
                                                <HashLink to="/#a-radical-movement">
                                                    A Radical Movement
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#pillar-of-support">
                                                    Pillar of Support
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#a-cultural-outlet">
                                                    A Cultural Outlet
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#a-space-of-its-own">
                                                    A Space of its Own
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#an-organization-for-whom">
                                                    An Organization for Whom?
                                                </HashLink>
                                            </li>
                                        </ul>
                                    </HiddenBlock>
                                </li>
                                <li>
                                    <HiddenBlock title="1980s">
                                        <ul id="soblu-vertical-menu-1970-collapse">
                                            <li>
                                                <HashLink to="/#back-to-the-old-days">
                                                    Back to the Old Days
                                                </HashLink>
                                            </li>
                                        </ul>
                                    </HiddenBlock>
                                </li>
                                <li>
                                    <HiddenBlock title="1990s">
                                        <ul id="soblu-vertical-menu-1970-collapse">
                                            <li>
                                                <HashLink to="/#branching-out">
                                                    Branching Out
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#an-agency-of-change">
                                                    An Agency of Change
                                                </HashLink>
                                            </li>
                                        </ul>
                                    </HiddenBlock>
                                </li>
                                <li>
                                    <HiddenBlock title="2000s">
                                        <ul id="soblu-vertical-menu-1970-collapse">
                                            <li>
                                                <HashLink to="/#activism-and-support-in-tandem">
                                                    Activism and Support in Tandem
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#a-journey-of-self-discovery">
                                                    A Journey of Self Discovery
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#incredibly-diverse-within">
                                                    Incredibly Diverse from Within
                                                </HashLink>
                                            </li>
                                        </ul>
                                    </HiddenBlock>
                                </li>
                                <li>
                                    <HiddenBlock title="2010s">
                                        <ul id="soblu-vertical-menu-1970-collapse">
                                            <li>
                                                <HashLink to="/#an-extended-family">
                                                    An Extended Family
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#developing-leaders">
                                                    Developing Leaders
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#a-second-home">
                                                    A Second Home
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#the-b-and-the-l">
                                                    The “B” and the “L”
                                                </HashLink>
                                            </li>
                                        </ul>
                                    </HiddenBlock>
                                </li>
                                <li>
                                    <HiddenBlock title="2020s">
                                        <ul id="soblu-vertical-menu-1970-collapse">
                                            <li>
                                                <HashLink to="/#the-soblu-room">
                                                    The SOBLU Room
                                                </HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/#still-a-critical-organization">
                                                    Still a Critical Organization
                                                </HashLink>
                                            </li>
                                        </ul>
                                    </HiddenBlock>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 px-3">
                        <div
                            className="text-center p-2"
                            style={{ backgroundColor: '#fff', color: '#000' }}
                        >
                            <h3 className="mb-0" style={{ fontSize: '1.2rem' }}>
                                <span style={{ fontWeight: '100' }}>ESSAYS AND MORE</span>
                            </h3>
                        </div>
                        <div>
                            <ul className="mt-2">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/edwin-essay">
                                        Photography Essay by Edwin Torres &lsquo;12
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/soblu-voices">SOBLU Voices</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Nav;
