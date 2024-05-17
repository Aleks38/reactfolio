import React from "react";
import {Link} from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-links">
                    <ul className="footer-nav-link-list">
                        <li className="footer-nav-link-item">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="footer-nav-link-item">
                            <Link to="/about">A propos</Link>
                        </li>
                        <li className="footer-nav-link-item">
                            <Link to="/projects">Projets</Link>
                        </li>
                        <li className="footer-nav-link-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-credits">
                    <div className="footer-credits-text">
                        Da Silva Alexy
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
