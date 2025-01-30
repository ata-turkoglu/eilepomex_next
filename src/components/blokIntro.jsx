"use client";
import React from "react";
import "./intro.scss";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

function BlokIntro() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="intro">
            <div className="abslt">
                <h4 className="mb-4">Çevre Dostu ve Sürdürülebilir</h4>
                <p>
                    BIMS bloklar, doğal ve çevre dostu malzemelerden üretildiği
                    için sürdürülebilir yapı malzemeleri arasında yer alır.
                </p>
                <p>
                    Üretim sürecinde az enerji kullanılır ve geri dönüşüme uygun
                    bir malzemedir.
                </p>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100 brightness70"
                            src="/assets/pomexblok/blok-stok.jpg"
                            alt="pomex blok"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="mb-5">Çevre Dostu ve Sürdürülebilir </h4>
                        <p>
                            BIMS bloklar, doğal ve çevre dostu malzemelerden
                            üretildiği için sürdürülebilir yapı malzemeleri
                            arasında yer alır.
                        </p>
                        <p>
                            Üretim sürecinde az enerji kullanılır ve geri
                            dönüşüme uygun bir malzemedir.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100 brightness70"
                            src="/assets/pomexblok/cure-room.jpg"
                            alt="pomex blok"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="mb-5">Isı ve Ses Yalıtımı Sağlar</h4>
                        <p>Binalarda ısı ve ses yalıtımı fazla önem taşır.</p>
                        <p>
                            Agregalar ile kıyaslandığı zaman bimsin doğal
                            yapısından ötürü daha çok gözenek içerdiği görülür.
                        </p>
                        <p>
                            Bu yüzden de ısı ve ses yalıtımı bimslerde
                            yüksektir.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100 brightness70"
                            src="/assets/pomexblok/blokKonveyor.jpg"
                            alt="pomex blok"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="mb-5">Yangın Dayanımı</h4>
                        <p>
                            BIMS bloklar, yüksek ısı dayanımı sağlar ve yangına
                            karşı dirençlidir.
                        </p>
                        <p>
                            Yanmazlık özellikleri nedeniyle yangın güvenliği
                            açısından tercih edilir.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                            className="d-block w-100 brightness70"
                            src="/assets/pomexblok/yeni-tesis.jpg"
                            alt="pomex blok"
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="mb-5">%100 kapasite arttırıyoruz.</h4>
                        <p>Yeni üretim hattımız hazırlanmakta!</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BlokIntro;
