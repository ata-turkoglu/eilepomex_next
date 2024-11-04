"use client";

import "./intro.scss";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
//import { translateText as t } from "../../store/reducers/language";
import { useRouter } from "next/navigation";
import langTexts from "@/data/langTexts";

function Intro() {
    const [index, setIndex] = useState(0);

    const router = useRouter();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const t = (text) => {
        return langTexts["tr"][text] || text;
    };

    return (
        <div className="intro">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/tile-adhesive.jpeg"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>{t("cementBasedAdhesives")}</h4>
                        <p>{t("rdInfo")}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/s2.jpg"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4>{t("ourHighQualityStandards")}</h4>
                        <p>{t("rdInfo")}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/joint-grout.jpeg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/thermal-plaster.jpeg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/waterproofing.jpeg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/met-zzk.jpg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/th-60.jpg"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            src="/assets/introCarousel/bims.jpg"
                        />
                        <span
                            className="detailButton"
                            onClick={() => router.push("/pomexblok")}
                        >
                            {t("details")}
                        </span>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Intro;
