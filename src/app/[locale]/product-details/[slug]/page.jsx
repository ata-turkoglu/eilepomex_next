"use client";
import productList from "@/data/productList.json";
import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Accordion } from "react-bootstrap";
import { ChevronLeft } from "lucide-react";
import "../../css/productDetails.scss";

function ProductDetails({ params: { locale, slug } }) {
    const [lang, setLang] = useState(null);
    const [product, setProduct] = useState(null);
    const [mobileView, setMobileView] = useState(false);
    const [isSafari, setIsSafari] = useState(false);
    const [productId, setProductId] = useState(null);

    const router = useRouter();
    const t = useTranslations("ProductDetailPage");

    useLayoutEffect(() => {
        const id = slug.split("-")[0];
        setProductId(id);
        setLang(locale);
        setIsSafari(!!window.safari);
        if (window.innerWidth < 768) {
            /* document.getElementById("product-categories").style.visibility =
                "hidden"; */
            setMobileView(true);
        }
    }, []);

    useLayoutEffect(() => {
        setProduct(productList.find((item) => item.id == productId));
    }, [productId]);

    const renderInfo = (text) => {
        /* text ??=
        "Two-Component, Adherence Augmenter and Corrosion Preventing Epoxy Resin Based Mortar"; */
        if (text == "") return "";
        const list = text.split(",");
        return list.map((item, index) => (
            <span key={index} style={{ fontWeight: isSafari && "400" }}>
                {item}
            </span>
        ));
    };

    const renderAreasofUsage = (
        list = [
            /* "Woodwork lover, lamp, pipe, satellite dish mounting",
            "Water closet, bathroom armateurs",
            "Reinforcement anchorage, ironstone planting",
            "Advertising sign, road sign, doors, guardrails, hand rails, tent mounting", */
        ]
    ) => {
        if (list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item}</li>);
    };

    const renderFeatures = (
        list = [
            /* "It is rapid curing",
            "It can be used with standard guns",
            "It can be used at low temperatures",
            "Its load carrying capacity is high and consumption is low", */
        ]
    ) => {
        if (list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item.trim()}</li>);
    };

    const renderConsumption = (list = []) => {
        if (list.length <= 0) return null;
        return list.map((item, index) => <li key={index}>{item.trim()}</li>);
    };

    const renderDocuments = (docs) => {
        const keys = Object.keys(docs);
        if (keys.length > 0) {
            let list = [];
            keys.forEach((key, index) => {
                if (typeof docs[key] == "string") {
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
                } else {
                    {
                        docs[key][lang] &&
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
                                    aria-label={
                                        product.name[locale] + "document"
                                    }
                                >
                                    {key}
                                </a>
                            );
                    }
                }
            });

            return list;
        } else {
            return null;
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <>
            {product && (
                <main className="productDetails">
                    <div className="headerContainer">
                        {mobileView && (
                            <div className="filter-icon">
                                <ChevronLeft
                                    strokeWidth={3}
                                    onClick={handleBack}
                                />
                            </div>
                        )}
                        <h1>{product.name[lang]}</h1>
                        {mobileView && <div className="filter-icon"></div>}
                    </div>
                    <div className="firstPart">
                        <div className="leftPart">
                            <div className="imgContainer">
                                <img
                                    src={product.img || img}
                                    loading="lazy"
                                    alt={product.name[locale]}
                                />
                            </div>
                            <div className="tags">
                                {renderInfo(product.info[lang])}
                            </div>
                        </div>
                        <div className="informationPart">
                            <div className="centerPart">
                                <div className="description">
                                    {product.description[lang]}
                                </div>
                                <div className="areasOfUsage">
                                    <h4>{t("areasOfUsage")}</h4>
                                    {renderAreasofUsage(
                                        product.areasOfUsage[lang]
                                    )}
                                </div>
                                <div className="featuresOfProduct">
                                    <h4>{t("featuresOfProduct")}</h4>
                                    {renderFeatures(
                                        product.featuresOfProduct[lang]
                                    )}
                                </div>
                                {product.appImage && (
                                    <div className="imgContainer">
                                        <img
                                            src={product.appImage}
                                            loading="lazy"
                                            alt={
                                                product.name[locale] +
                                                " uygulama"
                                            }
                                        />
                                    </div>
                                )}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <h5>{t("surfacePreparation")}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                {
                                                    product.beforeApplication[
                                                        lang
                                                    ]
                                                }
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    {product.mixing[lang] != "" && (
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <h5>{t("mixing")}</h5>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>{product.mixing[lang]}</p>
                                                <p>
                                                    <strong>
                                                        Karışım Oranı:
                                                    </strong>
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
                                            <p>{product.application[lang]}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            <h5>
                                                {t(
                                                    "pointsToTakeIntoConsideration"
                                                )}
                                            </h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                {renderConsumption(
                                                    product
                                                        .pointsToTakeIntoConsideration[
                                                        lang
                                                    ]
                                                )}
                                            </p>
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
                                                <p>
                                                    {renderDocuments(
                                                        product.docs
                                                    )}
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}

export default ProductDetails;
