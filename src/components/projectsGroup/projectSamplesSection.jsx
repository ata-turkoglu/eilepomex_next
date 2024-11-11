import React, { useEffect, useState } from "react";
import "./projectSamplesSection.scss";
import ProjectSampleCard from "./projectSampleCard.jsx";
import Swiper from "../swiper/swiper";
import { translateText as t } from "../../../store/reducers/language.js";
import projects from "../../../data/projects.json";
import { useSelector } from "react-redux";

function ProjectSamplesSection() {
    const [mobileView, setMobileView] = useState(false);
    const lang = useSelector((state) => state.language.lang);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
    });
    return (
        <div className="productGroupSection">
            <h2>{t("projectsWhereOurProductsAreUsed")}</h2>
            {mobileView ? (
                <Swiper>
                    <ProjectSampleCard
                        image1={projects[0].image1}
                        image2={projects[0].image2}
                        text={projects[0].text[lang]}
                        product={projects[0].product}
                    />
                    <ProjectSampleCard
                        image1={projects[1].image1}
                        image2={projects[1].image2}
                        text={projects[1].text[lang]}
                        product={projects[1].product}
                    />
                    <ProjectSampleCard
                        image1={projects[2].image1}
                        image2={projects[2].image2}
                        text={projects[2].text[lang]}
                        product={projects[2].product}
                    />
                    <ProjectSampleCard
                        image1={projects[3].image1}
                        image2={projects[3].image2}
                        text={projects[3].text[lang]}
                        product={projects[3].product}
                    />
                    <ProjectSampleCard
                        image1={projects[4].image1}
                        image2={projects[4].image2}
                        text={projects[4].text[lang]}
                        product={projects[4].product}
                    />
                    <ProjectSampleCard
                        image1={projects[5].image1}
                        image2={projects[5].image2}
                        text={projects[5].text[lang]}
                        product={projects[5].product}
                    />
                </Swiper>
            ) : (
                <div className="content">
                    <ProjectSampleCard
                        image1={projects[0].image1}
                        image2={projects[0].image2}
                        text={projects[0].text[lang]}
                        product={projects[0].product}
                    />
                    <ProjectSampleCard
                        image1={projects[1].image1}
                        image2={projects[1].image2}
                        text={projects[1].text[lang]}
                        product={projects[1].product}
                    />
                    <ProjectSampleCard
                        image1={projects[2].image1}
                        image2={projects[2].image2}
                        text={projects[2].text[lang]}
                        product={projects[2].product}
                    />
                    <ProjectSampleCard
                        image1={projects[3].image1}
                        image2={projects[3].image2}
                        text={projects[3].text[lang]}
                        product={projects[3].product}
                    />
                    <ProjectSampleCard
                        image1={projects[4].image1}
                        image2={projects[4].image2}
                        text={projects[4].text[lang]}
                        product={projects[4].product}
                    />
                    <ProjectSampleCard
                        image1={projects[5].image1}
                        image2={projects[5].image2}
                        text={projects[5].text[lang]}
                        product={projects[5].product}
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectSamplesSection;
