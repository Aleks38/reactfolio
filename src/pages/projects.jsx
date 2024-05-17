import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="projects"/>
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46}/>
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="title projects-title">
                            Mes projets
                        </div>

                        <div className="subtitle projects-subtitle">
                            Au fur et à mesure de mes études et de mes expériences professionnelles, j’ai pu réaliser des projets qui sont
                            pour beaucoup open source ou disponible sur les différents stores d’application. Si vous êtes intéressé, vous
                            trouverez le repository GitHub concernant chaque projet ou le site qui présente l’application.
                        </div>

                        <div className="projects-list">
                            <AllProjects/>
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
