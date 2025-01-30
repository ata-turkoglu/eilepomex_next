"use client";

import React, { useEffect, useState, useLayoutEffect } from "react";
import "./header.scss";
import productsJSON from "@/data/products.json";
import productList from "@/data/productList.json";
import { slugify } from "@/utils/commonFuncs";
//import langTexts from "@/data/langTexts";
import {
    Instagram,
    Facebook,
    Linkedin,
    Phone,
    MapPin,
    Search,
} from "lucide-react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

function Header() {
    const [narrowHeader, setNarrowHeader] = useState(false);
    const [products, setProducts] = useState([]);
    const [hoverProducts, setHoverProducts] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [langState, setLangState] = useState("");
    const [activeTab, setActiveTab] = useState("");
    const [isSafari, setIsSafari] = useState(false);
    const [lang, setLang] = useState(null);

    const route = usePathname();
    const router = useRouter();
    const { locale } = useParams();
    const pathname = usePathname();
    const t = useTranslations("Header");

    const getLogo = (lng) => {
        if (lng == "en") {
            return "/assets/logos/eile-logo-en.png";
        } else if (lng == "tr") {
            return "/assets/logos/eile-logo-tr.png";
        }
    };

    /* const t = (text) => {
        return langTexts[lang][text] || text;
    }; */

    useLayoutEffect(() => {
        setLang(locale);
    }, []);

    useEffect(() => {
        setActiveTab(route.split("/")[1]);
    }, [route]);

    useEffect(() => {
        setIsSafari(!!window.safari);
        function setHeaderHeight() {
            if (window.scrollY > 200) {
                setNarrowHeader(true);
            } else {
                setNarrowHeader(false);
            }
        }
        window.addEventListener("scroll", setHeaderHeight);
        return () => {
            window.removeEventListener("scroll", setHeaderHeight);
        };
    }, []);

    useEffect(() => {
        const res = (
            <div id="productListContainer" className="productListContainer">
                {productsJSON.map((item) => {
                    return (
                        <div key={item.key} className="productListItem1">
                            <Link
                                className="productGroup1"
                                onClick={handleListItemClick}
                                href={"/" + locale + "/products/" + item.key}
                            >
                                <p>{item.name[lang]}</p>
                            </Link>
                            {item.subGroups && (
                                <div className="productSubGroups1">
                                    {item.subGroups.map((subGroup) => {
                                        return (
                                            <Link
                                                key={subGroup.key}
                                                className="subGroupLink"
                                                onClick={handleListItemClick}
                                                href={
                                                    "/" +
                                                    locale +
                                                    "/products/" +
                                                    subGroup.key
                                                }
                                            >
                                                {subGroup.name[lang]}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
                <Link className="pomexblok-link" href="/pomexblok">
                    <img
                        src="/assets/logos/pomexblok-logo.png"
                        alt="pomex blok"
                    ></img>
                </Link>
            </div>
        );
        setProducts(res);
    }, [lang]);

    const handleListItemClick = () => {
        const el = document.getElementById("productListContainer");
        if (el) {
            el.style.display = "none";
        }
    };

    const menuChange = () => {
        const elem = document.getElementById("menu-btn");
        const nav = document.getElementById("mobileNavigation");
        const social = document.getElementById("toSocial");
        if (!mobileNav) {
            elem.classList.add("open");
            nav.classList.add("sdown");
            social.classList.add("sleft");
            setMobileNav(true);
            setTimeout(() => {
                social.classList.remove("sleft");
                nav.classList.remove("sdown");
            }, 400);
        } else {
            elem.classList.remove("open");
            nav.classList.add("sup");
            social.classList.add("sright");
            setTimeout(() => {
                nav.classList.remove("sup");
                social.classList.remove("sright");
            }, 400);
            setTimeout(() => {
                setMobileNav(false);
            }, 390);
        }
    };
    const menuClose = () => {
        const elem = document.getElementById("menu-btn");
        const nav = document.getElementById("mobileNavigation");
        const social = document.getElementById("toSocial");
        nav.classList.add("sup");
        elem.classList.remove("open");
        social.classList.add("sright");
        setTimeout(() => {
            nav.classList.remove("sup");
            social.classList.remove("sright");
        }, 400);
        setTimeout(() => {
            setMobileNav(false);
        }, 390);
    };

    const changeLanguage = (language) => {
        setLang(language);
        setLangState(language);
        window.localStorage.setItem("lang", language);

        const realPath = pathname.split("/").splice(2).join("/");
        const pathList = pathname.split("/").splice(2);
        const index = pathList.indexOf("product-details");
        if (index >= 0) {
            const product = productList.find(
                (item) => item.id == pathList[index + 1].split("-")[0]
            );
            const slug =
                product.id.toString() + "-" + slugify(product.name[language]);
            pathList[index + 1] = slug;
            const path = pathList.join("/");
            router.push("/" + language + "/" + path);
        } else {
            router.push("/" + language + "/" + realPath);
        }
    };

    return (
        <>
            {lang && (
                <div
                    className="header"
                    style={{
                        height: narrowHeader ? "50px" : "100px",
                        paddingLeft: narrowHeader ? "2rem" : "0",
                        borderImage: narrowHeader
                            ? "linear-gradient(to right,white, rgb(1,90,170), white) 30"
                            : "",
                        borderWidth: narrowHeader ? 3 : "",
                    }}
                >
                    {/* logo container */}
                    <Link
                        className={
                            narrowHeader
                                ? "logo-container-narrow"
                                : "logo-container"
                        }
                        href={"/" + locale}
                        /* style={{ paddingBlock: narrowHeader ? "0" : "1rem" }} */
                        onClick={menuClose}
                    >
                        <img
                            src={
                                narrowHeader
                                    ? "/assets/logos/eilepomex-round.png"
                                    : getLogo(lang)
                            }
                            alt="eile pomex"
                        />
                    </Link>
                    <div
                        className="nav-container"
                        style={{
                            alignItems: narrowHeader ? "center" : "flex-end",
                        }}
                    >
                        {/* address bar */}
                        {!narrowHeader && (
                            <div className="nav-container-top">
                                <div className="address-bar">
                                    <MapPin color="rgb(1,90,170)" size={18} />
                                    <span
                                        style={{
                                            marginLeft: "1rem",
                                            marginRight: "3rem",
                                            fontSize: ".9rem",
                                        }}
                                    >
                                        Yeniköy Mah. Menderes-Orhanlı Yolu Sk.
                                        No: 179/26 Menderes/İzmir
                                    </span>
                                    <Phone color="rgb(1,90,170)" size={18} />
                                    <span style={{ marginInline: "1rem" }}>
                                        0 232 360 16 16
                                    </span>
                                </div>
                                <a
                                    href="https://tr.linkedin.com/company/eile-pomex-yap%C4%B1-kimyasallar%C4%B1"
                                    target="_blank"
                                    aria-label="eile pomex linkedin page"
                                >
                                    <Linkedin
                                        color="rgb(1,90,170)"
                                        style={{
                                            cursor: "pointer",
                                            marginRight: "10px",
                                            marginLeft: "2rem",
                                        }}
                                        size={18}
                                    />
                                </a>

                                <a
                                    href="https://www.instagram.com/eilepomex/"
                                    target="_blank"
                                    aria-label="eile pomex instagram page"
                                >
                                    <Instagram
                                        color="rgb(1,90,170)"
                                        style={{
                                            cursor: "pointer",
                                            marginRight: "10px",
                                        }}
                                        size={18}
                                    />
                                </a>

                                <a
                                    href="https://www.facebook.com/eilepomex"
                                    target="_blank"
                                    aria-label="eile pomex facebook page"
                                >
                                    <Facebook
                                        color="rgb(1,90,170)"
                                        style={{
                                            cursor: "pointer",
                                            marginRight: "10px",
                                        }}
                                        size={18}
                                    />
                                </a>
                            </div>
                        )}
                        {/* nav links bar */}
                        <div
                            className="nav-container-bottom"
                            style={{
                                height: narrowHeader ? "100%" : "70%",
                            }}
                        >
                            {/* web view navigation */}
                            <div className="nav-container-links">
                                <Link
                                    className={`nav-item ${
                                        activeTab == "products" && "active-nav"
                                    }`}
                                    href={"/" + locale + "/products/0"}
                                    style={{
                                        paddingBlock: narrowHeader
                                            ? "0"
                                            : "1rem",
                                        alignItems: narrowHeader
                                            ? "center"
                                            : "flex-end",
                                        fontWeight: isSafari && "400",
                                    }}
                                    onMouseOver={() => setHoverProducts(true)}
                                    onMouseLeave={() => setHoverProducts(false)}
                                >
                                    <span>{t("products")}</span>
                                </Link>
                                <Link
                                    className={`nav-item ${
                                        activeTab == "projects" && "active-nav"
                                    }`}
                                    href={"/" + locale + "/projects"}
                                    style={{
                                        paddingBlock: narrowHeader
                                            ? "0"
                                            : "1rem",
                                        alignItems: narrowHeader
                                            ? "center"
                                            : "flex-end",
                                        fontWeight: isSafari && "400",
                                    }}
                                >
                                    <span>{t("projects")}</span>
                                </Link>
                                <Link
                                    className={`nav-item ${
                                        activeTab == "about" && "active-nav"
                                    }`}
                                    href={"/" + locale + "/about"}
                                    style={{
                                        paddingBlock: narrowHeader
                                            ? "0"
                                            : "1rem",
                                        alignItems: narrowHeader
                                            ? "center"
                                            : "flex-end",
                                        fontWeight: isSafari && "400",
                                    }}
                                >
                                    <span>{t("aboutus")}</span>
                                </Link>
                                <Link
                                    className={`nav-item ${
                                        activeTab == "docs" && "active-nav"
                                    }`}
                                    href={"/" + locale + "/docs"}
                                    style={{
                                        paddingBlock: narrowHeader
                                            ? "0"
                                            : "1rem",
                                        alignItems: narrowHeader
                                            ? "center"
                                            : "flex-end",
                                        fontWeight: isSafari && "400",
                                    }}
                                >
                                    <span>{t("certificates")}</span>
                                </Link>

                                <Link
                                    className={`nav-item ${
                                        activeTab == "contact" && "active-nav"
                                    }`}
                                    href={"/" + locale + "/contact"}
                                    style={{
                                        paddingBlock: narrowHeader
                                            ? "0"
                                            : "1rem",
                                        alignItems: narrowHeader
                                            ? "center"
                                            : "flex-end",
                                        fontWeight: isSafari && "400",
                                    }}
                                >
                                    <span>{t("contact")}</span>
                                </Link>
                                {langState}
                            </div>
                            <div
                                className="searchContainer"
                                style={{
                                    alignItems: narrowHeader ? "center" : "",
                                }}
                            >
                                <Search
                                    color="rgb(16,16,89)"
                                    style={{
                                        cursor: "pointer",
                                        marginRight: "10px",
                                    }}
                                    size={24}
                                />
                                <Dropdown className="langText">
                                    <Dropdown.Toggle
                                        size="sm"
                                        as="span"
                                        className="langToggle"
                                        aria-label="language"
                                    >
                                        {lang}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={() => changeLanguage("tr")}
                                        >
                                            tr
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => changeLanguage("en")}
                                        >
                                            en
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div
                        id="toSocial"
                        style={
                            mobileNav
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                    >
                        <a
                            href="https://tr.linkedin.com/company/eile-pomex-yap%C4%B1-kimyasallar%C4%B1"
                            target="_blank"
                            aria-label="eile pomex linkedin page"
                        >
                            <Linkedin
                                color="rgb(1,90,170)"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "10px",
                                    marginLeft: "2rem",
                                }}
                                size={18}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/eilepomex/"
                            target="_blank"
                            aria-label="eile pomex instagram page"
                        >
                            <Instagram
                                color="rgb(1,90,170)"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                size={18}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/eilepomex"
                            target="_blank"
                            aria-label="eile pomex facebook page"
                        >
                            <Facebook
                                color="rgb(1,90,170)"
                                style={{
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                size={18}
                            />
                        </a>
                    </div>

                    {/* mobile view hamburger menu */}
                    <div id="menu-btn" onClick={menuChange}>
                        <div className="menu-btn-burger"></div>
                    </div>

                    {/* product categories */}

                    {hoverProducts && (
                        <div
                            className="headerBelowPart"
                            onMouseOver={() => setHoverProducts(true)}
                            onMouseLeave={() => setHoverProducts(false)}
                        >
                            {products}
                        </div>
                    )}

                    {/* mobile view navigation */}
                    <div
                        id="mobileNavigation"
                        className="mobileNavigation"
                        style={
                            mobileNav
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                    >
                        <Link
                            className="nav-item"
                            href={"/" + locale + "/products/0"}
                            onClick={() => menuClose()}
                        >
                            <span>{t("products")}</span>
                        </Link>
                        <Link
                            className="nav-item"
                            href={"/" + locale + "/projects"}
                            onClick={() => menuClose()}
                        >
                            <span>{t("projects")}</span>
                        </Link>
                        <Link
                            className="nav-item"
                            href={"/" + locale + "/about"}
                            onClick={() => menuClose()}
                        >
                            <span>{t("aboutus")}</span>
                        </Link>
                        <Link
                            className="nav-item"
                            href={"/" + locale + "/docs"}
                            onClick={() => menuClose()}
                        >
                            <span>{t("certificates")}</span>
                        </Link>
                        <Link
                            className="nav-item"
                            href={"/" + locale + "/contact"}
                            onClick={() => menuClose()}
                        >
                            <span>{t("contact")}</span>
                        </Link>
                        <hr />
                        <Dropdown className="langText">
                            <Dropdown.Toggle
                                size="lg"
                                as="span"
                                className="langToggle"
                                aria-label="language"
                            >
                                {lang}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    className="langItem"
                                    onClick={() => changeLanguage("tr")}
                                >
                                    tr
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="langItem"
                                    onClick={() => changeLanguage("en")}
                                >
                                    en
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
