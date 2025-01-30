"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import "./projectSamplesSection.scss";
import { useRouter, useParams } from "next/navigation";
import ProjectList from "@/data/productList.json";
import { slugify } from "@/utils/commonFuncs";

function ProjectSampleCard({ image1, image2, text, icon, productId }) {
    const router = useRouter();
    const { locale } = useParams();
    const [mobile, setMobile] = useState(null);
    const [isSafari, setIsSafari] = useState(false);
    const [productUrl, setProductUrl] = useState(null);
    const [product, setProduct] = useState(null);

    useLayoutEffect(() => {
        const found = ProjectList.find((itm) => itm.id == productId);
        setProduct(found);
        const url =
            "product-details/" + productId + "-" + slugify(found.name[locale]);

        setProductUrl(url);
    }, []);

    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
        setIsSafari(!!window.safari);
    }, []);
    return (
        <>
            {product && (
                <div className="groupCard">
                    <div
                        className="imgContainer"
                        onClick={() => {
                            !mobile && router.push(productUrl);
                        }}
                    >
                        <img
                            className="img1"
                            src={image1}
                            loading="lazy"
                            alt={product.name[locale]}
                        />
                        <img
                            className="img2"
                            src={image2}
                            onClick={() => {
                                mobile && router.push(productUrl);
                            }}
                            loading="lazy"
                            alt={product.name[locale]}
                        />
                    </div>
                    <div className="textContainer">
                        <p style={{ fontWeight: isSafari && "400" }}>{text}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectSampleCard;
