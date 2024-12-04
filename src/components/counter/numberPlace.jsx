"use client";
import { useLayoutEffect, useState } from "react";
import "./numberPlace.scss";

function numberPlace({ number, index, timeout, intvlValue }) {
    const [isSafari, setIsSafari] = useState(false);
    useLayoutEffect(() => {
        setIsSafari(!!window.safari);
        const el = document.getElementById(`placeContainer-${index}`);
        let placeHeight =
            document.getElementsByClassName("placeNumber")[0].clientHeight;
        setTimeout(() => {
            countNumber(el, number, placeHeight);
        }, timeout);
    }, []);

    const countNumber = (el, number, placeHeight) => {
        let count = 0;
        const intrvl = setInterval(() => {
            el.style.transform = `translateY(-${++count * placeHeight}px)`;
            if (count >= number) {
                clearInterval(intrvl);
            }
        }, intvlValue);
    };

    return (
        <div id={`placeContainer-${index}`} className="placeContainer">
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                0
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                1
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                2
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                3
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                4
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                5
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                6
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                7
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                8
            </span>
            <span
                className="placeNumber"
                style={{ fontWeight: isSafari && "400" }}
            >
                9
            </span>
        </div>
    );
}

export default numberPlace;
