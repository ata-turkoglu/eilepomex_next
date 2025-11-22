"use client";
import { useState } from "react";
import productList from "@/data/productList.json";
import { slugify } from "@/utils/commonFuncs";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import "./productSearch.scss";

export default function ProductSearch({ searchState }) {
    const [searchText, setSearchText] = useState("");
    const { locale } = useParams();
    const t = useTranslations("Header");
    const router = useRouter();

    const FilteredProducts = () => {
        if (searchText == "") {
            return null;
        } else {
            return (
                <ul>
                    {productList
                        .filter((item) =>
                            productSearchText(item, searchText)
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        )
                        .map((item, index) => (
                            <li
                                key={index}
                                onClick={() => filteredProductClick(item)}
                            >
                                {item.name[locale]}
                            </li>
                        ))}
                </ul>
            );
        }
    };

    const productSearchText = (item, searchText) => {
        const searchTxtArr = searchText.toLowerCase().split(" ");
        if (searchTxtArr.length > 1) {
            return [
                item?.name[locale],
                item?.info[locale],
                item.description[locale],
                item?.areasOfUsage[locale],
                item?.featuresOfProduct[locale],
            ].join(" ");
        } else {
            return item.name[locale];
        }
    };

    const filteredProductClick = (product) => {
        const slug =
            product.id.toString() + "-" + slugify(product.name[locale]);
        router.push("/" + locale + "/product-details/" + slug);
        console.log("/" + locale + "/product-details/" + slug);
    };

    return (
        <>
            {searchState && (
                <div className="productSearch">
                    <input
                        id="productSearchInput"
                        placeholder={t("productSearch")}
                        style={
                            searchText != ""
                                ? {
                                      borderBottom:
                                          "1px solid rgb(200, 200, 200)",
                                  }
                                : { borderBottom: "none" }
                        }
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText != "" && <FilteredProducts />}
                </div>
            )}
        </>
    );
}
