"use client";
import React, { useLayoutEffect, useState } from "react";
import "./projectCard.scss";
import ProductList from "@/data/productList.json";
//import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils/commonFuncs";

function ProjectCard({ project, locale }) {
    //const navigate = useNavigate();
    //const lang = useSelector((state) => state.language.lang);
    const [isSafari, setIsSafari] = useState(false);
    const [productSlug, setProductSlug] = useState(null);

    const router = useRouter();

    useLayoutEffect(() => {
        setIsSafari(!!window.safari);
        const found = ProductList.find(
            (itm) => itm.id.toString() == project.product
        );
        const slug = project.product + "-" + slugify(found.name[locale]);
        /* found.name[locale]
                .toLocaleLowerCase(findLocale("en"))
                .split(" ")
                .join("-"); */
        setProductSlug(slug);
    }, []);

    return (
        <div className="projectCard">
            <div className="imgContainer">
                <img className="img1" src={project.image1} loading="lazy" />
                <img
                    className="img2"
                    src={project.image2}
                    onClick={() =>
                        router.push(`/${locale}/product-details/${productSlug}`)
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
