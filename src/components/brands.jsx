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
                    <h1 color="white">{t("ourGroupCompanies")}</h1>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a href="https://www.pomzaexport.com/" target="_blank">
                            <img src="/assets/logos/pomzaexport-logo-white.png" />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a href="https://www.eilepomex.com/" target="_blank">
                            <img src="/assets/logos/eilepomex-logo-white.png" />
                        </a>
                    </div>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a href="http://www.persanyapi.com.tr/" target="_blank">
                            <img src="/assets/logos/persan-logo-white.png" />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a href="http://www.erper.com.tr/" target="_blank">
                            <img src="/assets/logos/erper-logo-white.png" />
                        </a>
                    </div>
                </div>
            </div>
            {!mobile && <div className="content-border"></div>}
            <div className="content">
                <div className="headerContainer">
                    <h1 color="white">{t("ourBrands")}</h1>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/perlit"
                            target="_blank"
                        >
                            <img src="/assets/logos/etiper-logo-white.png" />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/kuvars"
                            target="_blank"
                        >
                            <img src="/assets/logos/sardesquartz-logo-white.png" />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <img src="/assets/logos/emerex-logo-white.png" />
                    </div>
                </div>
                <div className="images">
                    <div className="imgContainer">
                        <img src="/assets/logos/pomexblok-logo-white.png" />
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/garnet"
                            target="_blank"
                        >
                            <img src="/assets/logos/pomexgarnet-logo-white.png" />
                        </a>
                    </div>
                    <div className="imgContainer">
                        <a
                            href="https://www.pomzaexport.com/product/hazir-beton"
                            target="_blank"
                        >
                            <img src="/assets/logos/pomexbeton-logo-white.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;
