"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "../../css/productsPage.scss";
import productData from "@/data/products.json";
import ProductCard from "@/components/productCard";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ListFilter } from "lucide-react";
import { useTranslations } from "next-intl";
import { slugify } from "@/utils/commonFuncs";

function Products({ params: { locale, productKey } }) {
    const [productCategories, setProductCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedSubGroup, setSelectedSubGroup] = useState(null);
    const [header, setHeader] = useState(null);
    const [mobileView, setMobileView] = useState(false);

    const router = useRouter();
    const initiated = useRef(false);

    const t = useTranslations("ProductsPage");

    useLayoutEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
            document.getElementById("product-categories").style.visibility =
                "hidden";
        }
    }, []);

    useLayoutEffect(() => {
        setData(productKey);
        initiated.current = true;
        handleGroupClick(productKey);
    }, [productKey]);

    // Category List Collapsing
    const handleGroupClick = (key) => {
        let list = JSON.parse(JSON.stringify(selectedGroups));
        const index = list.indexOf(key);
        if (index < 0) {
            list.push(key);
            if (document.getElementById(`sb-${key}`)) {
                document.getElementById(`sb-${key}`).style.display = "block";
            } else {
                setSelectedSubGroup(key);
            }
        } else {
            list.splice(index, 1);
            setTimeout(() => {
                if (document.getElementById(`sb-${key}`)) {
                    document.getElementById(`sb-${key}`).style.display = "none";
                } else {
                    setSelectedSubGroup(key);
                }
            }, 200);
        }
        setSelectedGroups(list);
    };

    //setData
    const setData = (key, fromCategory = true) => {
        const keyList = key.split("-");
        const len = keyList.length;
        if (len == 1) {
            // Ana Gruplar
            if (keyList[0] == 0) {
                if (mobileView) {
                    handleShowCategory();
                }
                setHeader(t("products"));
                setProducts(productData);
                //router.push("/" + locale + "/products/" + key);
            } else {
                const group = productData.find((group) => group.key == key);
                if (group.subGroups) {
                    if (initiated.current && fromCategory) {
                        handleGroupClick(key);
                    } else {
                        const items = group.subGroups.reduce((acc, curr) => {
                            acc.push(...curr.items);
                            return acc;
                        }, []);
                        setHeader(group.name[locale]);
                        setProducts(items);
                        //router.push("/" + locale + "/products/" + key);
                    }
                } else {
                    if (mobileView) {
                        handleShowCategory();
                    }
                    setHeader(group.name[locale]);
                    setProducts(group.items);
                    //router.push("/" + locale + "/products/" + key);
                }
            }
        } else if (len == 2) {
            if (mobileView) {
                handleShowCategory();
            }
            const groupKey = keyList[0];
            const subGroupKey = keyList[1];

            const group = productData.find((group) => group.key == groupKey);

            if (subGroupKey == 0) {
                const items = group.subGroups.reduce((acc, curr) => {
                    acc.push(...curr.items);
                    return acc;
                }, []);
                setHeader(group.name[locale]);
                setProducts(items);
                //router.push("/" + locale + "/products/" + key);
            } else {
                const subGroup = group.subGroups.find((sub) => sub.key == key);
                setHeader(subGroup.name[locale]);
                setProducts(subGroup.items);
                //router.push("/" + locale + "/products/" + key);
            }
        }
    };

    // Category List Clicking
    const handleCategoryItemClick = (key, fromCategory = true) => {
        const keyList = key.split("-");
        const len = keyList.length;
        if (len == 1) {
            // Ana Gruplar
            if (keyList[0] == 0) {
                if (mobileView) {
                    handleShowCategory();
                }
                router.push("/" + locale + "/products/" + key);
            } else {
                const group = productData.find((group) => group.key == key);
                if (group.subGroups) {
                    if (initiated.current && fromCategory) {
                        handleGroupClick(key);
                    } else {
                        router.push("/" + locale + "/products/" + key);
                    }
                } else {
                    if (mobileView) {
                        handleShowCategory();
                    }
                    router.push("/" + locale + "/products/" + key);
                }
            }
        } else if (len == 2) {
            if (mobileView) {
                handleShowCategory();
            }
            const subGroupKey = keyList[1];
            if (subGroupKey == 0) {
                router.push("/" + locale + "/products/" + key);
            } else {
                router.push("/" + locale + "/products/" + key);
            }
        }
    };

    const setSlug = (id, name) => {
        return id.toString() + "-" + slugify(name);
    };

    const handleProductClick = (key, name, productId = false) => {
        if (productId || key.includes("-")) {
            router.push(
                "/" + locale + "/product-details/" + setSlug(key, name)
            );
        } else {
            handleCategoryItemClick(key, false);
            router.push("/" + locale + "/products/" + key);
        }
    };

    // setCategoryList(leftSideBar)
    useLayoutEffect(() => {
        let categoryList = (
            <ul className="group">
                <li key={"0"}>
                    <span onClick={() => handleCategoryItemClick("0")}>
                        {t("mainTitles")}
                    </span>
                </li>
                {productData.map((group) => {
                    return (
                        <li key={group.key}>
                            <span
                                onClick={() =>
                                    handleCategoryItemClick(group.key)
                                }
                                /* className={
                                    selectedGroup == group.key && "bg-slide"
                                } */
                            >
                                {group.name[locale]}{" "}
                                {group.subGroups &&
                                    (selectedGroups.includes(group.key) ? (
                                        <ChevronDown size={14} />
                                    ) : (
                                        <ChevronRight size={14} />
                                    ))}
                            </span>
                            {group.subGroups && (
                                <ul
                                    id={`sb-${group.key}`}
                                    className={
                                        "subGroup " +
                                        (selectedGroups.includes(group.key)
                                            ? "open"
                                            : "close")
                                    }
                                >
                                    <li
                                        onClick={() =>
                                            handleCategoryItemClick(
                                                group.key + "-0"
                                            )
                                        }
                                    >
                                        {t("all")}
                                    </li>
                                    {group.subGroups.map((sub) => {
                                        return (
                                            <li
                                                key={sub.key}
                                                onClick={() =>
                                                    handleCategoryItemClick(
                                                        sub.key
                                                    )
                                                }
                                            >
                                                {sub.name[locale]}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
        setProductCategories(categoryList);
    }, [selectedGroups]);

    // Mobile View
    const handleShowCategory = () => {
        const el = document.getElementById("product-categories");
        if (
            !el.classList.contains("close-categories") &&
            !el.classList.contains("open-categories")
        ) {
            el.classList.add("open-categories");
            el.style.visibility = "visible";
        } else if (el.classList.contains("open-categories")) {
            el.classList.remove("open-categories");
            el.classList.add("close-categories");
            setTimeout(() => {
                el.style.visibility = "hidden";
            }, 400);
        } else if (el.classList.contains("close-categories")) {
            el.classList.remove("close-categories");
            el.classList.add("open-categories");
            el.style.visibility = "visible";
        }
    };

    return (
        <main className="products">
            <div id="product-categories" className="categories">
                {productCategories}
            </div>
            <div className="listContainer">
                <div className="headerContainer">
                    {mobileView && (
                        <div className="filter-icon">
                            <ListFilter onClick={handleShowCategory} />
                        </div>
                    )}
                    <h3>{header}</h3>
                    {mobileView && <div className="filter-icon"></div>}
                </div>
                <div
                    className={
                        mobileView &&
                        (header == "ürünler" || header == "products")
                            ? "productRowList"
                            : "productList"
                    }
                >
                    {products.map((item) => {
                        return (
                            <ProductCard
                                key={item.key}
                                image={
                                    item.img ||
                                    "/assets/products/eile_GROUT_50C.png"
                                }
                                text={item.name[locale]}
                                rowList={
                                    mobileView &&
                                    (header == "ürünler" ||
                                        header == "products")
                                }
                                onClick={() =>
                                    item.id
                                        ? handleProductClick(
                                              item.id,
                                              item.name[locale],
                                              true
                                          )
                                        : handleProductClick(
                                              item.key,
                                              item.name
                                          )
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default Products;
