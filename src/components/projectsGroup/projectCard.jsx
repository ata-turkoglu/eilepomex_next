"use client";
import React, { useLayoutEffect, useState } from "react";
import "./projectCard.scss";
//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function ProjectCard({ project, locale }) {
    //const navigate = useNavigate();
    //const lang = useSelector((state) => state.language.lang);
    const [isSafari, setIsSafari] = useState(false);

    const router = useRouter();

    useLayoutEffect(() => {
        setIsSafari(!!window.safari);
    }, []);

    return (
        <div className="projectCard">
            <div className="imgContainer">
                <img className="img1" src={project.image1} loading="lazy" />
                <img
                    className="img2"
                    src={project.image2}
                    onClick={() =>
                        router.push(
                            `/${locale}/product-details/${project.product}`
                        )
                    }
                    loading="lazy"
                />
            </div>
            <div className="textContainer">
                <h5 style={{ fontWeight: isSafari && "400" }}>
                    {project.name[locale]}
                </h5>
                {/* <p>{project.description}</p> */}
            </div>
        </div>
    );
}

export default ProjectCard;
