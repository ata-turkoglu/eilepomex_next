"use client";

import "./intro.scss";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useRouter, useParams } from "next/navigation";
import langTexts from "@/data/langTexts";

function Intro() {
    const [index, setIndex] = useState(0);
    const { locale } = useParams();
    const router = useRouter();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const t = (text) => {
        return langTexts[locale][text] || text;
    };

    return (
        <div className="intro">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            loading="lazy"
                            src="/assets/introCarousel/tile-adhesive.jpeg"
                            alt="tile adhesive"
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
                            loading="lazy"
                            src="/assets/introCarousel/s2.jpg"
                            alt="eile pur 012 022 042"
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
                            loading="lazy"
                            src="/assets/introCarousel/joint-grout.jpeg"
                            alt="joint-grout"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            loading="lazy"
                            src="/assets/introCarousel/thermal-plaster.jpeg"
                            alt="thermal plaster"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            loading="lazy"
                            src="/assets/introCarousel/waterproofing.jpeg"
                            alt="waterproofing"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            loading="lazy"
                            src="/assets/introCarousel/met-zzk.jpg"
                            alt="eile met zzk"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            loading="lazy"
                            src="/assets/introCarousel/th-60.jpg"
                            alt="eile th 60"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100"
                            loading="lazy"
                            src="/assets/introCarousel/bims.jpg"
                            alt="pomex plok"
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
