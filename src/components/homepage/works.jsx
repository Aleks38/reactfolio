import React from "react";
import {faBriefcase, faSchool} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
    return (
        <div className="experiences">
            <div className="works">
                <Card
                    icon={faBriefcase}
                    title="Travails"
                    body={
                        <div className="works-body">
                            <div className="work">
                                <img
                                    src="./qiis_logo.png"
                                    alt="QIIS logo"
                                    className="work-image"
                                />
                                <div className="work-title">QIIS</div>
                                <div className="work-subtitle">
                                    Alternant développeur mobile
                                </div>
                                <div className="work-duration">sept. 2023 - Maintenant</div>
                            </div>

                            <div className="work">
                                <img
                                    src="./qiis_logo.png"
                                    alt="QIIS logo"
                                    className="work-image"
                                />
                                <div className="work-title">QIIS</div>
                                <div className="work-subtitle">
                                    Stage développeur
                                </div>
                                <div className="work-duration">janv. 2023 - févr. 2023</div>
                            </div>

                            <div className="work">
                                <img
                                    src="./fb_logo.png"
                                    alt="Fitness Boutique logo"
                                    className="work-image"
                                />
                                <div className="work-title">Fitness Boutique</div>
                                <div className="work-subtitle">
                                    Stage développeur web
                                </div>
                                <div className="work-duration">mai 2022 - juin 2022</div>
                            </div>
                        </div>
                    }

                />
            </div>
            <div className="studies">
                <Card
                    icon={faSchool}
                    title="Études"
                    body={
                        <div className="works-body">
                            <div className="work">
                                <img
                                    src="./iut2_logo.png"
                                    alt="facebook"
                                    className="work-image"
                                />
                                <div className="work-title">BUT Informatique Grenoble</div>
                                <div className="work-subtitle">
                                    Alternance
                                </div>
                                <div className="work-duration">2023 - Présent</div>
                            </div>

                            <div className="work">
                                <img
                                    src="./sd_logo.png"
                                    alt="twitter"
                                    className="work-image"
                                />
                                <div className="work-title">BTS SIO Annonay</div>
                                <div className="work-subtitle">
                                    SLAM
                                </div>
                                <div className="work-duration">2021 - 2023</div>
                            </div>

                            <div className="work">
                                <img
                                    src="./nat_logo.png"
                                    alt="twitter"
                                    className="work-image"
                                />
                                <div className="work-title">Lycée Général Voiron</div>
                                <div className="work-subtitle">
                                    Maths-Info
                                </div>
                                <div className="work-duration">2019 - 2021</div>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Works;
