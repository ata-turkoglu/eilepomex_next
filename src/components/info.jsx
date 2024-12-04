"use client";
import React from "react";
import "./info.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Info({
    image,
    header,
    text,
    to,
    bg,
    textColor,
    headerInside = false,
}) {
    const router = useRouter();
    const [mobile, setMobile] = useState(null);
    useEffect(() => {
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
                    <img src={image} onClick={() => router.push(to)} />
                </div>
                <div className="textContainer">
                    <p>{text}</p>
                </div>
                {bg && (
                    <div className="content-bg">
                        <img src={bg} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Info;
