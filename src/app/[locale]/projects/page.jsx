import React from "react";
import "../css/projectsPage.scss";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/projectsGroup/projectCard.jsx";
import { setRequestLocale } from "next-intl/server";

async function Projects({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <main className="projects">
            <div className="projectsContainer">
                {projects.map((item, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            project={item}
                            locale={locale}
                        />
                    );
                })}
            </div>
        </main>
    );
}

export default Projects;
