"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./projectSamplesSection.scss";
import ProjectSampleCard from "./projectSampleCard.jsx";
import Swiper from "../swiper/swiper";
import projects from "@/data/projects.json";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

function ProjectSamplesSection() {
    const [mobileView, setMobileView] = useState(false);
    const [lang, setLang] = useState(null);
    const t = useTranslations("Home");
    const { locale } = useParams();

    useLayoutEffect(() => {
        setLang(locale);
    });
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
                        productId={projects[0].product}
                    />
                    <ProjectSampleCard
                        image1={projects[1].image1}
                        image2={projects[1].image2}
                        text={projects[1].text[lang]}
                        productId={projects[1].product}
                    />
                    <ProjectSampleCard
                        image1={projects[2].image1}
                        image2={projects[2].image2}
                        text={projects[2].text[lang]}
                        productId={projects[2].product}
                    />
                    <ProjectSampleCard
                        image1={projects[3].image1}
                        image2={projects[3].image2}
                        text={projects[3].text[lang]}
                        productId={projects[3].product}
                    />
                    <ProjectSampleCard
                        image1={projects[4].image1}
                        image2={projects[4].image2}
                        text={projects[4].text[lang]}
                        productId={projects[4].product}
                    />
                    <ProjectSampleCard
                        image1={projects[5].image1}
                        image2={projects[5].image2}
                        text={projects[5].text[lang]}
                        productId={projects[5].product}
                    />
                </Swiper>
            ) : (
                <div className="content">
                    <ProjectSampleCard
                        image1={projects[0].image1}
                        image2={projects[0].image2}
                        text={projects[0].text[lang]}
                        productId={projects[0].product}
                    />
                    <ProjectSampleCard
                        image1={projects[1].image1}
                        image2={projects[1].image2}
                        text={projects[1].text[lang]}
                        productId={projects[1].product}
                    />
                    <ProjectSampleCard
                        image1={projects[2].image1}
                        image2={projects[2].image2}
                        text={projects[2].text[lang]}
                        productId={projects[2].product}
                    />
                    <ProjectSampleCard
                        image1={projects[3].image1}
                        image2={projects[3].image2}
                        text={projects[3].text[lang]}
                        productId={projects[3].product}
                    />
                    <ProjectSampleCard
                        image1={projects[4].image1}
                        image2={projects[4].image2}
                        text={projects[4].text[lang]}
                        productId={projects[4].product}
                    />
                    <ProjectSampleCard
                        image1={projects[5].image1}
                        image2={projects[5].image2}
                        text={projects[5].text[lang]}
                        productId={projects[5].product}
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectSamplesSection;
