"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import "../css/docsPage.scss";
import { useTranslations } from "next-intl";
// import Button from "../components/button/button"
//import { translateText as t } from "../../store/reducers/language";

function Docs() {
    const t = useTranslations("Docs");

    const handleClick = (e) => {
        e.preventDefault();

        let overlay = document.createElement("span");
        overlay.classList.add("overlay");

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        overlay.style.left = x + "px";
        overlay.style.top = y + "px";

        e.target.appendChild(overlay);

        setTimeout(() => {
            window.open(e.target.href);
            overlay.remove();
        }, 500);
    };

    return (
        <div className="docs">
            <div className="container">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h5>{t("companyCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>Eile Pomex Firmamıza Ait Belgeler</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="assets/docs/firma_belgesi.pdf"
                                            target="_blank"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            ISO 9001
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h5>{t("chemicalAnchorCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile EPOX</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_epox_epx100_epx240g.pdf"
                                            onClick={(e)=>handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item> */}

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <h5>{t("cementBasedReinforcementCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile GROUT 50C</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile GROUT 60C</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="content">
                                    <h4>eile GROUT TH60</h4>

                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={(e)=>handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div> */}

                                <div className="content">
                                    <h4>eile GROUT TH70</h4>

                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EILE_TH_70.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="content">
                                    <h4>eile AK 8</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={(e)=>handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div> */}

                                <div className="content">
                                    <h4>Pomex Brüt Beton Tamir Harcı</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/eile_brut_beton_siva.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <h5>{t("epoxyBasedReinforcementCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile EPX 100</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_epox_epx100_epx240g.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile EPX 240</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_epox_epx100_epx240g.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <h5>{t("cementBasedWaterproofingCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile A SEAL</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile MAX SEAL ELASTİK</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile MAX SEAL</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>KAPİLER</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_aseal_kapiler_maxseal_maxsealelas.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="content">
                                    <h4>Water Bond</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_ak8_50c_60c_th60_th70_watbon.pdf"
                                            onClick={(e)=>handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            <h5>
                                {t("acrylicBasedWaterproofingCertificates")}
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile LİKİT AKRİLİK</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EILE_LIKIT_AKRILIK.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>
                            <h5>
                                {t("bitumenBasedWaterproofingCertificates")}
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>elie BİTU-ÇİM ELASTİK</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_bitucim_per_bey_rap.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>
                            <h5>{t("surfaceHardeners")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>elie TOP 110 S</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/tse_eile_yuzey_sertlestiriciler.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_eile_top_110_s.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>elie KORUND 120 F</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/tse_eile_yuzey_sertlestiriciler.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_eile_korund_120_f.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX ZEMİN YÜZEY SERTLEŞTİRİCİ</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX_ZEMIN_YUZEY_SERTLESTIRICISI.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_zemin_yuzey_sertlestiricisi.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>EİLE LEVEL</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EILE_LEVEL.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_level.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>
                            <h5>{t("thermalInsulationSystemCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>THERMOMEX ISI YALITIM SIVASI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button three"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN_SIVA-INCE_SIVA.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            UTO
                                        </a>
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN_SIVA-INCE_SIVA.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_thermomex.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>THERMOMEX ISI YALITIM ŞAPI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_thermomex.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile PLY 2100</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EILE_PLY_2100.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>eile PLS 2000</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN_SIVA-INCE_SIVA.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>
                            <h5>{t("plasterCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile GBS 5000</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/CE_eile_gbs_5000.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>DS 40</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_ds_40.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>SON KAT ELYAFLI SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_eile_son_kat_elyafli_siva.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>İNCE SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN_SIVA-INCE_SIVA.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_ince_siva.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>KALIN SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_THERMOMEX-KALIN_SIVA-INCE_SIVA.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_kalin_siva.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX SATEN SIVA</h4>
                                    <div className="buttons">
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_saten_siva.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                        <Accordion.Header>
                            <h5>{t("cementBasedAdhesiveCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>eile SPY 1000</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_EILE_SYP_1000.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_SYP_1000_BELGESİ.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX SERAMİK YAPIŞTIRICI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX_SERAMIK_YAPISTIRICISI.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                        <a
                                            className="button"
                                            href="/assets/docs/ce_pomex_seramik_belgesi.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            CE
                                        </a>
                                    </div>
                                </div>

                                <div className="content">
                                    <h4>POMEX GRANİT YAPIŞTIRICI</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX_GRANIT_YAPISTIRICISI.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="11">
                        <Accordion.Header>
                            <h5>{t("cementBasedGroutingsCertificates")}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="container_body">
                                <div className="content">
                                    <h4>POMEX DERZ DOLGU</h4>
                                    <div className="buttons">
                                        <a
                                            className="button two"
                                            href="/assets/docs/TSE_POMEX_DERZ_DOLGU.pdf"
                                            onClick={(e) => handleClick(e)}
                                        >
                                            TSE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Docs;
