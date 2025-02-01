"use client";
import React from "react";
import "./brands.scss";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function Brands() {
    const [mobile, setMobile] = useState(null);
    const t = useTranslations("Home");
    useEffect(() => {
        window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    }, []);
    return (
        <div className="brands">
            <div className="content">
                <div className="headerContainer">
                    <h2 color="white">{t("ourGroupCompanies")}</h2>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/"
                            target="_blank"
                            aria-label="pomza export"
                        >
                            <img
                                src="/assets/logos/pomzaexport-logo-white.png"
                                loading="lazy"
                                alt="pomza export"
                            />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.eilepomex.com/"
                            target="_blank"
                            aria-label="eile pomex"
                        >
                            <img
                                src="/assets/logos/eilepomex-logo-white.png"
                                loading="lazy"
                                alt="eile pomex"
                            />
                        </a>
                    </div>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a
                            href="http://www.persanyapi.com.tr/"
                            target="_blank"
                            aria-label="persan"
                        >
                            <img
                                src="/assets/logos/persan-logo-white.png"
                                loading="lazy"
                                alt="persan"
                            />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="http://www.erper.com.tr/"
                            target="_blank"
                            aria-label="erper"
                        >
                            <img
                                src="/assets/logos/erper-logo-white.png"
                                loading="lazy"
                                alt="erper"
                            />
                        </a>
                    </div>
                </div>
            </div>
            {!mobile && <div className="content-border"></div>}
            <div className="content">
                <div className="headerContainer">
                    <h2 color="white">{t("ourBrands")}</h2>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/7/"
                            target="_blank"
                            aria-label="etiper"
                        >
                            <img
                                src="/assets/logos/etiper-logo-white.png"
                                loading="lazy"
                                alt="etiper"
                            />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/1/"
                            target="_blank"
                            aria-label="sardes quartz"
                        >
                            <img
                                src="/assets/logos/sardesquartz-logo-white.png"
                                loading="lazy"
                                alt="sardes quartz"
                            />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/9/"
                            target="_blank"
                            aria-label="emerex"
                        >
                            <img
                                src="/assets/logos/emerex-logo-white.png"
                                loading="lazy"
                                alt="emerex"
                            />
                        </a>
                    </div>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a
                            href="https://www.eilepomex.com/pomexblok/"
                            target="_blank"
                            aria-label="pomex blok"
                        >
                            <img
                                src="/assets/logos/pomexblok-logo-white.png"
                                loading="lazy"
                                alt="pomex blok"
                            />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/4/"
                            target="_blank"
                            aria-label="pomex garnet"
                        >
                            <img
                                src="/assets/logos/pomexgarnet-logo-white.png"
                                loading="lazy"
                                alt="pomex garnet"
                            />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/10/"
                            target="_blank"
                            aria-label="pomex beton"
                        >
                            <img
                                src="/assets/logos/pomexbeton-logo-white.png"
                                loading="lazy"
                                alt="pomex beton"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;
