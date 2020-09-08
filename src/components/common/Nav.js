import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HiddenBlock from '@colbycommunications/colby-hidden-block-component';

const Nav = withRouter((props) => {
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

    /*
<li
                                className={`nav-item ${
                                    props.location.pathname === '/soblu-voices' ? 'active' : ''
                                }`}
                            >
                                <Link className="nav-link" to="/chapel-takeover-1970">
                                    Takeover
                                </Link>
                            </li>
    */

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
                        <span className="navbar-toggler-icon"></span>
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
                                    Photography Essay by Edwin Torres '12
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
                    style={{
                        backgroundColor: '#000',
                        padding: '10px 15px 10px 10px',
                        marginBottom: '5px',
                    }}
                >
                    <ul style={{ margin: '0', listStyle: 'none' }}>
                        <li>
                            <a>MENU</a>
                        </li>
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
                        <div style={{ backgroundColor: '#000', color: '#fff', padding: '5px' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0' }}>
                                <span style={{ fontWeight: '600' }}>SOBLU</span>
                                <span style={{ fontWeight: '100' }}>AT</span>
                                <span style={{ fontWeight: '600' }}>50</span>
                            </h3>
                        </div>
                        <div className="d-flex align-items-start">
                            <span
                                onClick={closeDrawer}
                                style={{
                                    fontFamily: 'franklin-gothic-compressed, sans-serif',
                                    fontSize: '1rem',
                                }}
                            >
                                CLOSE
                            </span>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', padding: '0 20px' }}>
                        <div
                            className="text-center"
                            style={{ backgroundColor: '#fff', color: '#000', padding: '5px' }}
                        >
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0' }}>
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
                    <div style={{ padding: '0 20px', marginTop: '2rem' }}>
                        <div
                            className="text-center"
                            style={{ backgroundColor: '#fff', color: '#000', padding: '5px' }}
                        >
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0' }}>
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
                                        Photography Essay by Edwin Torres '12
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
