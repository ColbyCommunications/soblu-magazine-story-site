import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HiddenBlock from '@colbycommunications/colby-hidden-block-component';

const SideNav = withRouter((props) => {
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
                <div style={{ fontSize: '1.2rem' }}>
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
                    <span>CLOSE</span>
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
                                            <a href="#a-radical-movement">A Radical Movement</a>
                                        </li>
                                        <li>
                                            <a href="#pillar-of-support">Pillar of Support</a>
                                        </li>
                                        <li>
                                            <a href="#a-cultural-outlet">A Cultural Outlet</a>
                                        </li>
                                        <li>
                                            <a href="#a-space-of-its-own">A Space of its Own</a>
                                        </li>
                                        <li>
                                            <a href="#an-organization-for-whom">
                                                An Organization for Whom?
                                            </a>
                                        </li>
                                    </ul>
                                </HiddenBlock>
                            </li>
                            <li>
                                <HiddenBlock title="1980s">
                                    <ul id="soblu-vertical-menu-1970-collapse">
                                        <li>
                                            <a href="#">Section</a>
                                        </li>
                                    </ul>
                                </HiddenBlock>
                            </li>
                            <li>
                                <HiddenBlock title="1990s">
                                    <ul id="soblu-vertical-menu-1970-collapse">
                                        <li>
                                            <a href="#">Section</a>
                                        </li>
                                    </ul>
                                </HiddenBlock>
                            </li>
                            <li>
                                <HiddenBlock title="2000s">
                                    <ul id="soblu-vertical-menu-1970-collapse">
                                        <li>
                                            <a href="#">Section</a>
                                        </li>
                                    </ul>
                                </HiddenBlock>
                            </li>
                            <li>
                                <HiddenBlock title="2010s">
                                    <ul id="soblu-vertical-menu-1970-collapse">
                                        <li>
                                            <a href="#">Section</a>
                                        </li>
                                    </ul>
                                </HiddenBlock>
                            </li>
                            <li>
                                <HiddenBlock title="2020s">
                                    <ul id="soblu-vertical-menu-1970-collapse">
                                        <li>
                                            <a href="#">Section</a>
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
                                fontSize: '1.2rem',
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
                                <Link to="/edwin-essay">Photography Essay by Edwin Torres '12</Link>
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
