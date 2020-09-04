import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        <div className="d-flex">
            <div className="soblu-vertical-menu-bar" onClick={onClick}>
                <h1 style={{ fontSize: '1.2rem' }}>
                    <span style={{ fontWeight: '600' }}>SOBLU</span>
                    <span style={{ fontWeight: '100' }}>AT</span>
                    <span style={{ fontWeight: '600' }}>50</span>
                    <span style={{ fontWeight: '10' }}>TIMELINE</span>
                </h1>
                <p style={{ fontWeight: '100' }}>MENU</p>
            </div>
            <div id="soblu-menu-drawer" className={`${isDrawerOpen ? 'show' : 'hide'}`}>
                <div className="text-right" style={{ cursor: 'pointer' }} onClick={closeDrawer}>
                    <span
                        style={{
                            fontFamily: 'franklin-gothic-compressed, sans-serif',
                            fontSize: '1rem',
                        }}
                    >
                        CLOSE
                    </span>
                </div>
                <div style={{ marginTop: '2rem', padding: '0 20px' }}>
                    <div
                        className="text-center"
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            padding: '5px',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.2rem',
                                marginBottom: '0',
                            }}
                        >
                            <span style={{ fontWeight: '600' }}>SOBLU</span>
                            <span style={{ fontWeight: '100' }}>AT</span>
                            <span style={{ fontWeight: '600' }}>50</span>
                            <span style={{ fontWeight: '100' }}>TIMELINE</span>
                        </h3>
                    </div>
                    <div>
                        <ul className="mt-2">
                            <li>
                                <a
                                    data-toggle="collapse"
                                    href="#soblu-vertical-menu-1970-collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="soblu-vertical-menu-1970-collapse"
                                >
                                    1970s
                                </a>
                                <ul className="collapse" id="soblu-vertical-menu-1970-collapse">
                                    <li>
                                        <a href="#">A Radical Movement</a>
                                    </li>
                                    <li>
                                        <a href="#">Pillar of Support</a>
                                    </li>
                                    <li>
                                        <a href="#">A Cultural Outlet</a>
                                    </li>
                                    <li>
                                        <a href="#">A Space of its Own</a>
                                    </li>
                                    <li>
                                        <a href="#">An Organization for Whom?</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    href="#soblu-vertical-menu-1980-collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="soblu-vertical-menu-1980-collapse"
                                >
                                    1980s
                                </a>
                                <ul>
                                    <div
                                        className="collapse"
                                        id="soblu-vertical-menu-1980-collapse"
                                    >
                                        section links
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    href="#soblu-vertical-menu-1990-collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="soblu-vertical-menu-1990-collapse"
                                >
                                    1990s
                                </a>
                                <ul>
                                    <div
                                        className="collapse"
                                        id="soblu-vertical-menu-1990-collapse"
                                    >
                                        section links
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    href="#soblu-vertical-menu-2000-collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="soblu-vertical-menu-2000-collapse"
                                >
                                    2000s
                                </a>
                                <ul>
                                    <div
                                        className="collapse"
                                        id="soblu-vertical-menu-2000-collapse"
                                    >
                                        section links
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    href="#soblu-vertical-menu-2010-collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="soblu-vertical-menu-2010-collapse"
                                >
                                    2010s
                                </a>
                                <ul>
                                    <div
                                        className="collapse"
                                        id="soblu-vertical-menu-2010-collapse"
                                    >
                                        section links
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a
                                    data-toggle="collapse"
                                    href="#soblu-vertical-menu-2020-collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="soblu-vertical-menu-2020-collapse"
                                >
                                    2020s
                                </a>
                                <ul>
                                    <div
                                        className="collapse"
                                        id="soblu-vertical-menu-2020-collapse"
                                    >
                                        section links
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ padding: '0 20px', marginTop: '2rem' }}>
                    <div
                        className="text-center"
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            padding: '5px',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '1.2rem',
                                marginBottom: '0',
                            }}
                        >
                            <span style={{ fontWeight: '100' }}>ESSAYS AND MORE</span>
                        </h3>
                    </div>
                    <div>
                        <ul className="mt-2">
                            <li>
                                <a href="#">Chapel Takeover 1970</a>
                            </li>
                            <li>
                                <a href="#">Photography Essay by Edwin Torres '12</a>
                            </li>
                            <li>
                                <a href="#">Personal Essays</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SideNav;
