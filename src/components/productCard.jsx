import React, { useLayoutEffect, useState } from "react";
import "./productCard.scss";

function ProductCard({ image, text, onClick, rowList }) {
    const [isSafari, setIsSafari] = useState(false);
    useLayoutEffect(() => {
        setIsSafari(!!window.safari);
    }, []);
    return (
        <div
            className={rowList ? "productRowCard" : "productCard"}
            onClick={onClick}
        >
            <div
                className={
                    rowList
                        ? "productRowCard-imgContainer"
                        : "productCard-imgContainer"
                }
            >
                <img src={image} loading="lazy" />
            </div>
            <div
                className={
                    rowList
                        ? "productRowCard-textContainer"
                        : "productCard-textContainer"
                }
            >
                <p style={{ fontWeight: isSafari && "400" }}>{text}</p>
            </div>
        </div>
    );
}

export default ProductCard;
