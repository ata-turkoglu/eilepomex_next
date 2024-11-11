import React from "react";
import "../css/aboutPage.scss";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

function About({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations("About");
    return (
        <div className="about">
            <div className="banner-area">
                <h2>{t("whoWeAre")} ?</h2>
            </div>

            <div className="wrapper">
                <h2>{t("aboutus")}</h2>

                <p>{t("about1")}</p>
                <p>{t("about2")}</p>
                <p>{t("about3")}</p>
                <p>{t("about4")}</p>

                <h2>{t("ourMission")}</h2>

                <p>{t("ourMission1")}</p>

                <h2>{t("ourVision")}</h2>

                <p>{t("ourVision1")}</p>
            </div>
        </div>
    );
}

export default About;
