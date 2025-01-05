import productList from "@/data/productList.json";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/commonFuncs";

export async function generateStaticParams({ params }) {
    const { locale } = await params;
    let list = [];

    productList.forEach((item) => {
        list.push({ slug: item.id.toString() });
        list.push({
            slug: item.id.toString() + "-" + slugify(item.name[locale]),
        });
    });
    return list;
}

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;

    const slugList = slug.split("-");
    const productId = slugList[0];
    const product = productList.find((item) => item.id == productId);
    const keywords = product?.keywords?.[locale] || [];

    const metaObj = {
        title: product.name[locale],
        description: product.description[locale],
        keywords,
    };

    if (slugList.length == 1) {
        const str = product.id.toString() + "-" + slugify(product.name[locale]);
        metaObj.alternates = {
            canonical: "https://wwww.eilepomex.com/product-details/" + str,
        };
        metaObj.robots = {
            index: false,
            folow: true,
        };
    }

    return metaObj;
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
