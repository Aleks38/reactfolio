import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "contact");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Contact | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="contact"/>
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46}/>
                        </div>
                    </div>

                    <div className="about-container">

                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="title about-title">
                                    Contactez moi
                                </div>

                                <div className="subtitle about-subtitle">
                                    Pour me contacter veuillez le faire avec cette adresse :
                                    &nbsp;{" "}
                                    <a href={`mailto:${INFO.main.email}`}>
                                        {INFO.main.email}
                                    </a>
                                    .
                                </div>
                                <div className="subtitle about-subtitle">

                                    Vous pouvez aussi me contacter via mes réseaux ci-dessous :
                                </div>
                                <div className="socials-container">
                                    <div className="contact-socials">
                                        <Socials/>
                                    </div>
                                </div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="/reactfolio/contact.jpg"
                                            alt="about"
                                            className="about-image"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="page-footer page-footer-fixed">
                        <Footer/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;
