"use client";
import "./swiper.css";
import { useEffect, useState } from "react";

function Swiper({ children, gap }) {
    const [mobile, setMobile] = useState(null);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseUp, setMouseUp] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const [startX, setStartX] = useState(null);
    const [scroll, setScroll] = useState(null);
    const [moveState, setMoveState] = useState(true);

    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
        const wrappers = document.getElementsByClassName("wrapper");
        for (let i = 0; i < wrappers.length; i++) {
            wrappers[i].style.width = window.innerWidth * 0.8 + "px";
        }
        setDimensions(wrappers);
    }, []);

    const setDimensions = (wrappers) => {
        const gapMatch = gap ? gap.match(/\d+/g) : undefined;
        let margin = gapMatch ? Number(gapMatch[0]) : 10;
        const swiper = document.getElementById("swiper");
        setSwiper(swiper);
        const outerWidth = swiper.clientWidth;
        const space = outerWidth - wrappers[0].clientWidth - margin * 2;
        const restPart = space / 2;
        setScroll(outerWidth - restPart * 2 - margin);
        swiper.style.paddingInline = restPart + margin + "px";
    };

    const handleMouseDown = (e) => {
        if (mobile) {
            e.stopPropagation();
            setStartX(e.changedTouches[0].clientX);
        }
        setMouseDown(true);
        setMouseUp(false);
    };
    const handleMouseUp = (e) => {
        setMouseUp(true);
        setMouseDown(false);
    };
    const handleMouseMove = (e) => {
        if (mouseDown && !mouseUp) {
            if (mobile) {
                e.stopPropagation();
                if (e?.changedTouches) {
                    const touchMove = e.changedTouches[0].clientX - startX;
                    setStartX(e.changedTouches[0].clientX);
                    if (moveState) {
                        setMoveState(false);
                        setTimeout(() => {
                            setMoveState(true);
                        }, 500);
                        if (touchMove < -3) {
                            swiper.scrollLeft = swiper.scrollLeft + scroll;
                        } else if (touchMove > 3) {
                            swiper.scrollLeft = swiper.scrollLeft - scroll;
                        }
                    }
                }
            } else {
            }
        }
    };

    return (
        <div id="swiper" style={gap && { gap }} onTouchMove={handleMouseMove}>
            {children.map((item, index) => (
                <div
                    key={index}
                    className="wrapper"
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Swiper;
