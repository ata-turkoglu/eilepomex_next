"use client";
import React from "react";
import { useEffect, useState } from "react";
import "./banner.scss";
import { useTranslations } from "next-intl";

function Banner({ image }) {
    const [mobileView, setMobileView] = useState(false);
    const [location, setLocation] = useState(null);
    const [showText, setShowText] = useState(false);

    const t = useTranslations("Home");

    function checkScroll() {
        if (window.scrollY > location) {
            setShowText(true);
        }
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
        const el = document.getElementById("banner");
        const loc = el.offsetTop - window.screen.availHeight / 2;
        setLocation(loc);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, [location]);

    return (
        <div id="banner" className="banner">
            <img src={image} loading="lazy" />
            {showText || mobileView ? (
                <div className="banner-content slide-right">
                    <h3 className={mobileView ? "mb-3" : "mb-4"}>
                        {t("weCareAboutTheEnviromentWeLiveInAndYou")}
                    </h3>
                    <p>
                        {t(
                            "weContinueOurZeroWastePrincipleWithTheUnderstandingOfSustainableProductionInNature"
                        )}
                    </p>
                    <p>{t("weUseRenewableEnergySources")}</p>
                </div>
            ) : (
                ""
            )}
            {mobileView && <div className="banner-mobile-shadow"></div>}
        </div>
    );
}

export default Banner;
