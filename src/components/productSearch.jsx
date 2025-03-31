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
                            item.name[locale]
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
