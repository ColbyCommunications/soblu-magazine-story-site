import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = withRouter((props) => {
    console.log(props);

    return (
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
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Chapel Takeover 1970
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/edwin-essay">
                                Photography Essay by Edwin Torres '12
                            </Link>
                        </li>
                        <li
                            className={`nav-item ${
                                props.location.pathname === 'edwin-essay' ? 'active' : ''
                            }`}
                        >
                            <Link className="nav-link" to="#">
                                Personal Essays
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});

export default Nav;
