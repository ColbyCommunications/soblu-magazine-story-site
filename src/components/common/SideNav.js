/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HiddenBlock from '@colbycommunications/colby-hidden-block-component';

import { HashLink } from 'react-router-hash-link';

const SideNav = withRouter(props => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function openDrawer() {
        setIsDrawerOpen(true);
    }

    function closeDrawer() {
        setIsDrawerOpen(false);
    }

    function onClick() {
        if (isDrawerOpen) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }

    return (
        <div
            className="d-flex"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="500"
        >
            <div className="soblu-vertical-menu-bar" onClick={onClick}>
                <div style={{ fontSize: '1rem' }}>
                    <span style={{ fontWeight: '600' }}>SOBLU</span>
                    <span style={{ fontWeight: '100' }}>AT</span>
                    <span style={{ fontWeight: '600' }}>50</span>
                    <span> </span>
                    <span style={{ fontWeight: '10' }}>TIMELINE</span>
                </div>
                <p style={{ fontWeight: '100' }}>MENU</p>
            </div>
            <div id="soblu-menu-drawer" className={`${isDrawerOpen ? 'show' : 'hide'}`}>
                <div className="text-right" style={{ cursor: 'pointer' }} onClick={closeDrawer}>
                    <span style={{ fontSize: '0.7rem' }}>CLOSE</span>
                </div>
                <div className="mt-4 px-3">
                    <div
                        className="text-center p-2"
                        style={{ backgroundColor: '#fff', color: '#000' }}
                    >
                        <h3 className="mb-0" style={{ fontSize: '1rem' }}>
                            <span style={{ fontWeight: '100' }}>TIMELINE</span>
                        </h3>
                    </div>
                    <div>
                        <ul className="mt-2">
                            <li>
                                <HiddenBlock title="1970s">
                                    <ul id="soblu-vertical-menu-1970-collapse">
                                        <li>
                                            <HashLink to="/#a-radical-movement" onClick={onClick}>
                                                A Radical Movement
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#pillar-of-support" onClick={onClick}>
                                                Pillar of Support
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#a-cultural-outlet" onClick={onClick}>
                                                A Cultural Outlet
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#a-space-of-its-own" onClick={onClick}>
                                                A Space of its Own
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to="/#an-organization-for-whom"
                                                onClick={onClick}
                                            >
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
                                            <HashLink to="/#back-to-the-old-days" onClick={onClick}>
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
                                            <HashLink to="/#branching-out" onClick={onClick}>
                                                Branching Out
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#an-agency-of-change" onClick={onClick}>
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
                                            <HashLink
                                                to="/#activism-and-support-in-tandem"
                                                onClick={onClick}
                                            >
                                                Activism and Support in Tandem
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to="/#a-journey-of-self-discovery"
                                                onClick={onClick}
                                            >
                                                A Journey of Self Discovery
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to="/#incredibly-diverse-within"
                                                onClick={onClick}
                                            >
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
                                            <HashLink to="/#an-extended-family" onClick={onClick}>
                                                An Extended Family
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#developing-leaders" onClick={onClick}>
                                                Developing Leaders
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#a-second-home" onClick={onClick}>
                                                A Second Home
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink to="/#the-b-and-the-l" onClick={onClick}>
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
                                            <HashLink to="/#the-soblu-room" onClick={onClick}>
                                                The SOBLU Room
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to="/#still-a-critical-organization"
                                                onClick={onClick}
                                            >
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
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                        }}
                    >
                        <h3
                            className="mb-0"
                            style={{
                                fontSize: '1rem',
                            }}
                        >
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
                                    Photography Essay by Edwin Torres &rsquo;12
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
    );
});

export default SideNav;
