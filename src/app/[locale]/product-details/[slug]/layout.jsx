import productList from "@/data/productList.json";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/commonFuncs";

export async function generateStaticParams({ params }) {
    const { locale } = await params;
    let list = [];

    productList.forEach((item) => {
        const langs = Object.keys(item.name);
        langs.forEach((key) => {
            list.push({
                slug: item.id.toString() + "-" + slugify(item.name[key]),
                /* slug:
                    item.id.toString() +
                    "-" +
                    item.name[key]
                        .toLocaleLowerCase(findLocale("en"))
                        .split(" ")
                        .join("-"), */
            });
        });
    });
    return list;
}

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;

    const productId = slug.split("-")[0];
    const product = productList.find((item) => item.id == productId);
    const keywords = product.description["tr"].split(" ");
    return {
        title: product.name[locale],
        description: product.description[locale],
        keywords,
    };
}

export default async function ProductDetailsLayout({ children, params }) {
    const { locale, slug } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <>
            {/*{" "}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />{" "}
            */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    paddingTop: "30px",
                }}
            >
                {children}
            </div>
        </>
    );
}
