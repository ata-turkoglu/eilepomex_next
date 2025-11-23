"use client";
import productList from "@/data/productList.json";
import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Accordion } from "react-bootstrap";
import { ChevronLeft } from "lucide-react";
import "../../css/productDetails.scss";

function ProductDetails({ params: { locale, slug } }) {
    const router = useRouter();
    const t = useTranslations("ProductDetailPage");

    // 🔹 1) ID ve dili direkt props'tan hesapla (SSR'da da çalışır)
    const idFromSlug = slug.split("-")[0];
    const lang = locale;

    // 🔹 2) Ürünü state yerine direkt burada bul
    const product = productList.find(
        (item) => String(item.id) === String(idFromSlug)
    );

    const [mobileView, setMobileView] = useState(false);
    const [isSafari, setIsSafari] = useState(false);

    // 🔹 3) Sadece tarayıcıya bağlı şeyleri effect ile ayarla
    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            setIsSafari(!!window.safari);
            if (window.innerWidth < 768) {
                setMobileView(true);
            }
        }
    }, []);

    const renderInfo = (text) => {
        if (!text) return "";
        const list = text.split(",");
        return list.map((item, index) => (
            <span key={index} style={{ fontWeight: isSafari && "400" }}>
                {item}
            </span>
        ));
    };

    const renderAreasofUsage = (list = []) => {
        if (!list || list.length <= 0) return null;
        return <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    };

    const renderFeatures = (list = []) => {
        if (!list || list.length <= 0) return null;
        return <ul>
            {list.map((item, index) => <li key={index}>{item.trim()}</li>)}
        </ul>
    };

    const renderConsumption = (list = []) => {
        if (!list || list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item.trim()}</li>);
    };

    const renderDocuments = (docs = {}) => {
        const keys = Object.keys(docs || {});
        if (keys.length === 0 || !product) return null;

        let list = [];
        keys.forEach((key, index) => {
            if (typeof docs[key] === "string") {
                list.push(
                    <a
                        key={index}
                        href={docs[key]}
                        target="_blank"
                        style={{
                            marginRight: "20px",
                            textTransform: "uppercase",
                            color: "black",
                        }}
                        aria-label={product.name[locale] + " document"}
                    >
                        {key}
                    </a>
                );
            } else if (docs[key][lang]) {
                list.push(
                    <a
                        key={index}
                        href={docs[key][lang]}
                        target="_blank"
                        style={{
                            marginRight: "20px",
                            textTransform: "uppercase",
                            color: "black",
                        }}
                        aria-label={product.name[locale] + " document"}
                    >
                        {key}
                    </a>
                );
            }
        });

        return list;
    };

    const handleBack = () => {
        router.back();
    };

    // 🔹 4) Ürün bulunamazsa (yanlış slug vs.) basit bir fallback
    if (!product) {
        return (
            <main className="productDetails">
                <div className="headerContainer">
                    <h1>Ürün bulunamadı</h1>
                </div>
            </main>
        );
    }

    return (
        <main className="productDetails">
            <div className="headerContainer">
                {mobileView && (
                    <div className="filter-icon">
                        <ChevronLeft strokeWidth={3} onClick={handleBack} />
                    </div>
                )}
                <div>
                    <nav className="breadcrumbNav" aria-label="breadcrumb">
                        <ol>
                            <li>
                                <Link href="/">
                                    {lang === "en" ? "Home" : "Ana Sayfa"}
                                </Link>
                            </li>
                            <span className="breadcrumbSeparator">/</span>
                            <li>
                                <Link href="/products/0">
                                    {lang === "en" ? "Products" : "Ürünler"}
                                </Link>
                            </li>
                            <span className="breadcrumbSeparator">/</span>
                            <li aria-current="page">{product.name[lang]}</li>
                        </ol>
                    </nav>
                    <h1>{product.name[lang]}</h1>
                </div>
                {mobileView && <div className="filter-icon"></div>}
            </div>
            <div className="firstPart">
                <div className="leftPart">
                    <div className="imgContainer">
                        <img
                            src={product.img}
                            loading="lazy"
                            alt={product.name[locale]}
                        />
                    </div>
                    <div className="tags">{renderInfo(product.info[lang])}</div>
                </div>
                <div className="informationPart">
                    <div className="centerPart">
                        {/* 🔹 Buradaki tüm içerik artık SSR çıktısında da var → SEO görebiliyor */}
                        <div className="description">
                            {product.description[lang]}
                        </div>

                        <div className="areasOfUsage">
                            <h4>{t("areasOfUsage")}</h4>
                            {renderAreasofUsage(product.areasOfUsage[lang])}
                        </div>

                        <div className="featuresOfProduct">
                            <h4>{t("featuresOfProduct")}</h4>
                            {renderFeatures(product.featuresOfProduct[lang])}
                        </div>

                        {product.appImage && (
                            <div className="imgContainer">
                                <img
                                    src={product.appImage}
                                    loading="lazy"
                                    alt={product.name[locale] + " uygulama"}
                                />
                            </div>
                        )}

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h5>{t("surfacePreparation")}</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>{product.beforeApplication[lang]}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            {product.mixing[lang] !== "" && (
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h5>{t("mixing")}</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>{product.mixing[lang]}</p>
                                        <p>
                                            <strong>Karışım Oranı: </strong>
                                            {product.mixture[lang]}
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h5>{t("application")}</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {/* 🔹 Burada senin uzun uygulama metnin var */}
                                    <p>{product.application[lang]}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h5>
                                        {t("pointsToTakeIntoConsideration")}
                                    </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {renderConsumption(
                                            product
                                                .pointsToTakeIntoConsideration[
                                                lang
                                            ]
                                        )}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <h5>{t("package")}</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>{product.package[lang]}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <h5>{t("storage")}</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>{product.storage[lang]}</p>
                                </Accordion.Body>
                            </Accordion.Item>

                            {product.docs && (
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                        <h5>{t("documents")}</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>{renderDocuments(product.docs)}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                        </Accordion>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;
