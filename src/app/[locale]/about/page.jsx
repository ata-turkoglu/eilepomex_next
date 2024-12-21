import React from "react";
import "../css/aboutPage.scss";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const metadata = {
    title: "About | Hakkımızda",
    robots: {
        index: false,
        follow: false,
    },
};

function About({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations("About");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        isPublished: true,
        tags: ["Yapı Kimyasalları", "Construction Chemicals"],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="about">
                <div className="banner-area">
                    <h1>{t("whoWeAre")} ?</h1>
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
            </main>
        </>
    );
}

export default About;
