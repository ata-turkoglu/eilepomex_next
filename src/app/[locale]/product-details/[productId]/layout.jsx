import productList from "@/data/productList.json";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return productList.map((item) => {
        return { productId: item.id.toString() };
    });
}

export async function generateMetadata({ params }) {
    return productList.map((item) => {
        return {
            title: item.name[params.locale],
            description: item.description[params.locale],
            tags: "ataa",
        };
    });
}

export default async function ProductDetailsLayout({ children, params }) {
    const { locale, productId } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const product = productList.find((item) => item.id == productId);

    const jsonLd = {
        title: product.name[locale],
        description: product.description[locale],
        keywords: ["sssa", "ataaa"],
    };

    setRequestLocale(locale);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
