"use client";

import React, { useLayoutEffect, useState } from "react";
import "./footer.scss";
import productData from "@/data/products.json";
//import langTexts from "@/data/langTexts";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

function Footer() {
    const [isSafari, setIsSafari] = useState(false);
    const [lang, setLang] = useState(null);
    const { locale } = useParams();

    const t = useTranslations("Footer");

    useLayoutEffect(() => {
        setLang(locale);
        /* const storagelLang = window.localStorage.getItem("lang");

        if (storagelLang) {
            setLang(storagelLang);
        } else {
            const browserLang = window.navigator.language.slice(0, 2);
            setLang(browserLang);
        } */
        setIsSafari(!!window.safari);
    }, []);

    /* const t = (text) => {
        return langTexts[lang][text] || text;
    }; */

    return (
        <>
            {lang && (
                <footer className="footer">
                    <div className="sb__footer section__padding">
                        <div className="sb__footer-links">
                            <div className="sb__footer-links-div">
                                <span style={{ fontWeight: isSafari && "400" }}>
                                    {t("aboutus")}
                                </span>
                                <a
                                    href={"/" + locale + "/about"}
                                    aria-label="eile pomex about page"
                                >
                                    <p>{t("ourQualityPolicy")}</p>
                                </a>
                                <a
                                    href={"/" + locale + "/about"}
                                    aria-label="eile pomex about page"
                                >
                                    <p>{t("missionVision")}</p>
                                </a>
                            </div>

                            <div className="sb__footer-links-div">
                                <span style={{ fontWeight: isSafari && "400" }}>
                                    {t("products")}
                                </span>
                                {productData.map((product) => (
                                    <a
                                        key={product.key}
                                        href={`/${locale}/products/${product.key}`}
                                        aria-label={product.name[locale]}
                                    >
                                        <p>{product.name[lang]}</p>
                                    </a>
                                ))}
                            </div>

                            <div className="sb__footer-links-div">
                                <span style={{ fontWeight: isSafari && "400" }}>
                                    {t("certificates")}
                                </span>
                                <a
                                    href={"/" + locale + "/docs"}
                                    aria-label="eile pomex documents page"
                                >
                                    <p>{t("companyCertificates")}</p>
                                </a>
                                <a
                                    href={"/" + locale + "/docs"}
                                    aria-label="eile pomex documents page"
                                >
                                    <p>{t("productCertificates")}</p>
                                </a>
                            </div>

                            <div className="sb__footer-address">
                                <span
                                    className="mb-4"
                                    style={{ fontWeight: isSafari && "400" }}
                                >
                                    {t("eilePomexConstructionChemicals")}
                                </span>
                                <p>Yeniköy Mah. Menderes-Orhanlı Yolu Sk.</p>
                                <p>No: 179/26 Menderes/İzmir</p>
                                <p>Tel : 0232 360 16 16</p>
                                <p>Fax : 0232 360 17 77</p>
                            </div>

                            <div className="sb__footer-map-section">
                                <iframe
                                    title="eile pomex location"
                                    width="350"
                                    height="300"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(ET%C4%B0PER%20Perlit%20%C4%B0%C5%9Fletme%20-%20POMZAEXPORT%20MADENC%C4%B0L%C4%B0K%20A.%C5%9E.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                >
                                    <a
                                        href="https://www.maps.ie/population/"
                                        aria-label="eile pomex location"
                                    >
                                        Population calculator map
                                    </a>
                                </iframe>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="sb__footer-below">
                            <div className="sb__footer-copyright">
                                <p>
                                    @{new Date().getFullYear()} {t("copyright")}
                                </p>
                            </div>
                            <div className="sb__footer-below-links">
                                <a
                                    href="public\assets\docs\kvkk.pdf"
                                    target="_blank"
                                    aria-label="eile pomex kvkk"
                                >
                                    <div>
                                        {" "}
                                        <p>{t("kvkk")}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </>
    );
}

export default Footer;
