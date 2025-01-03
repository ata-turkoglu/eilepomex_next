"use client";
import React from "react";
import "./pomexBlok.scss";
import BlokIntro from "@/components/blokIntro";

function PomexBlokPage() {
    return (
        <div className="pomex_blok_page">
            {/* <div className="intro">
                <img src="/assets/pomexblok/cure-room.jpg" />
                <img className="logo" src="assets/logos/pomexblok-logo.png" />
            </div> */}
            <div className="videoIntro">
                <div className="logoContainer">
                    <img src="/assets/logos/pomexblok-logo-white.png" />
                </div>
                <video autoPlay={true} muted loop={true}>
                    <source
                        src="/assets/pomexblok/bimsvid.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="textContainer">
                    <h1>Otomatize Edilmiş Üretim Hattı</h1>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <div className="info">
                    <h3>Sayfamız Yapım Aşamasındadır.</h3>
                    <p>Detaylı bilgi için iletişime geçebilirsiniz</p>
                    <hr style={{ marginBlock: "3rem" }} />
                    <p>Yeniköy Mah. Menderes-Orhanlı Yolu Sk.</p>
                    <p>No: 179/26 Menderes/İzmir</p>
                    <p>Tel : 0232 360 16 16</p>
                    <p>Fax : 0232 360 17 77</p>
                </div>
                <div className="intro">
                    <BlokIntro />
                </div>
            </div>
            {/* <img src="assets/pomexblok/bims-blok.png" /> */}
        </div>
    );
}

export default PomexBlokPage;
