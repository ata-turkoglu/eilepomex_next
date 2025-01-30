"use client";
import React from "react";
import "./info.scss";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductList from "@/data/productList.json";
import { slugify } from "@/utils/commonFuncs";

function Info({
    image,
    header,
    text,
    productId,
    to,
    bg,
    textColor,
    headerInside = false,
    locale,
    productName,
}) {
    const router = useRouter();
    const [mobile, setMobile] = useState(null);
    const [productUrl, setProductUrl] = useState(null);
    useLayoutEffect(() => {
        if (!to) {
            const found = ProductList.find((itm) => itm.id == productId);
            const url =
                "product-details/" +
                productId +
                "-" +
                slugify(found.name[locale]);
            /* found.name[locale]
                    .toLocaleLowerCase(findLocale("en"))
                    .split(" ")
                    .join("-"); */
            setProductUrl(url);
        }
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    }, []);
    return (
        <div
            className="infoContainer"
            style={mobile && bg ? { marginTop: "4rem", paddingBlock: "0" } : {}}
        >
            {(!headerInside || !mobile) && <h2>{header}</h2>}
            <div className="content" style={{ color: textColor }}>
                {headerInside && mobile && (
                    <h2 style={{ marginTop: "2rem" }}>{header}</h2>
                )}
                <div className="imgContainer">
                    <img
                        src={image}
                        loading="lazy"
                        onClick={() => router.push(to ? to : productUrl)}
                        alt={productName[locale]}
                    />
                </div>
                <div className="textContainer">
                    <p>{text}</p>
                </div>
                {bg && (
                    <div className="content-bg">
                        <img src={bg} alt={productName[locale]} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Info;
