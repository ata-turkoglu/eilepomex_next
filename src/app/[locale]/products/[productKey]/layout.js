import productData from "@/data/products.json";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import siteMetaData from "@/lib/siteMetaData";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    return {
        title: siteMetaData.productsPage.title[locale],
        description: siteMetaData.productsPage.description[locale],
        keywords: siteMetaData.productsPage.keywords[locale],
    };
}

export function generateStaticParams() {
    let list = [];
    productData.map((item) => {
        list.push({
            productKey: item.key.toString(),
        });
        if (item.subGroups) {
            list.push({
                productKey: item.key.toString() + "-0",
            });
            item.subGroups.forEach((el) => {
                list.push({
                    productKey: el.key.toString(),
                });
            });
        }
    });
    list.unshift({ productKey: "0" });
    return list;
}

export default async function ProductsLayout({ children, params }) {
    const { locale } = await params;
    if (!routing.locales.includes(locale)) {
        notFound();
    }
    setRequestLocale(locale);
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                overflow: "auto",
            }}
        >
            {children}
        </div>
    );
}
