"use client";
import React from "react";
import "./pomexBlok.scss";
import BlokIntro from "@/components/blokIntro";

function PomexBlokPage() {
    return (
        <main className="pomex_blok_page">
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
                    <h1 style={{ marginBottom: "3rem" }}>Pomex Blok</h1>
                    <h2 style={{ marginBottom: "2rem" }}>
                        Genleşmiş Perlit Katkılı Pomex Blok: İnşaatta Dayanıklı
                        ve Sürdürülebilir Çözüm
                    </h2>
                    <p>
                        Pomex Blok, Ege’nin bereketli topraklarından çıkarılan
                        doğal perlit mineraliyle güçlendirilmiş, sürdürülebilir
                        yapı teknolojilerinin en yeni temsilcisidir. Genleşmiş
                        perlit katkısı sayesinde hafif, dayanıklı ve çevre dostu
                        bir yapı malzemesi sunuyoruz.
                    </p>
                    <h3 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                        Neden Pomex Blok?
                    </h3>
                    <ul>
                        <li>
                            <strong>Hafif ve Dayanıklı: </strong>Genleşmiş
                            perlit içeriği, Pomex Blok'u hem hafif hem de yüksek
                            mukavemetli bir yapı malzemesi haline getirir. Bu
                            sayede nakliye, uygulama ve inşaat süreçlerinde
                            kolaylık sağlar.
                        </li>
                        <li>
                            <strong>Isı ve Ses Yalıtımı: </strong>Perlitin doğal
                            yalıtım özellikleri sayesinde Pomex Blok, enerji
                            tasarrufu sağlayarak yapıların karbon ayak izini
                            azaltır. Aynı zamanda üstün ses yalıtımı sunar.
                        </li>
                        <li>
                            <strong>Yangın Dayanımı: </strong>Yanmaz özellikteki
                            Pomex Blok, yangına karşı yüksek dayanıklılık
                            sunarak yapılarınızı daha güvenli hale getirir.
                        </li>
                        <li>
                            <strong>Çevre Dostu Üretim: </strong>Sürdürülebilir
                            madencilik anlayışıyla üretilen Pomex Blok, doğadan
                            aldığını doğaya geri verir. Üretim süreçlerimizde
                            enerji tasarrufu ve sıfır atık politikası
                            uygulanmaktadır.
                        </li>
                    </ul>

                    <h3 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                        Kullanım Alanları
                    </h3>
                    <p>
                        Pomex Blok, inşaat sektöründe çok çeşitli alanlarda
                        kullanıma uygundur:
                    </p>

                    <ul>
                        <li>Duvar ve bölme yapımı</li>
                        <li>
                            Yalıtım gerektiren yapılarda dış cephe uygulamaları
                        </li>
                        <li>Yangın koruma gerektiren alanlar</li>
                    </ul>

                    <h3 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                        Pomex Blok ile Yapılarınızı Güçlendirin
                    </h3>
                    <p>
                        Modern yapı teknolojileri, estetik ve dayanıklılığı bir
                        araya getirirken çevreye duyarlı çözümler sunmayı
                        hedefler. Pomex Blok, bu vizyonun bir ürünü olarak, yapı
                        sektörünün dönüşümüne liderlik etmektedir.
                    </p>

                    <p>
                        Pomex Blok hakkında detaylı bilgi almak ve projelerinize
                        özel çözümler sunmamızı istemek için bizimle iletişime
                        geçin. Doğanın gücüyle şekillenen Pomex Blok,
                        yapılarınıza değer katmaya hazır!
                    </p>

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
        </main>
    );
}

export default PomexBlokPage;
