import React, { useState, useEffect } from "react";
import "./projectSamplesSection.scss";
import { useNavigate } from "react-router-dom";

function ProjectSampleCard({ image1, image2, text, icon, product }) {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState(null);
    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
        setIsSafari(!!window.safari);
    }, []);
    return (
        <div className="groupCard">
            {/*<div className="groupIcon">
                <img src={icon} />
            </div>*/}
            <div
                className="imgContainer"
                onClick={() => {
                    !mobile && navigate("/product-details/" + product);
                }}
            >
                <img className="img1" src={image1} loading="lazy" />
                <img
                    className="img2"
                    src={image2}
                    onClick={() => {
                        mobile && navigate("/product-details/" + product);
                    }}
                    loading="lazy"
                />
            </div>
            <div className="textContainer">
                <p style={{ fontWeight: isSafari && "400" }}>{text}</p>
            </div>
        </div>
    );
}

export default ProjectSampleCard;
