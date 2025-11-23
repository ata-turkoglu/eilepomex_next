import productList from "@/data/productList.json";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { slugify } from "@/utils/commonFuncs";

const SITE_BASE_URL = "https://www.eilepomex.com";

const buildProductSlug = (product, locale) => {
    if (!product) return "";
    const fallbackLocale = routing.defaultLocale || "tr";
    const localizedName =
        product.name?.[locale] || product.name?.[fallbackLocale] || "";
    return `${product.id}-${slugify(localizedName)}/`;
};

// ------------------------------------------------------
// STATIC PARAMS
// ------------------------------------------------------
export async function generateStaticParams() {
    const locales = routing.locales || ["tr", "en"];
    const fallbackLocale = routing.defaultLocale || "tr";
    let list = [];

    locales.forEach((loc) => {
        productList.forEach((item) => {
            const localizedName = item.name?.[loc] || item.name?.[fallbackLocale];

            // /tr/product-details/99
            list.push({ locale: loc, slug: item.id.toString() });

            // /tr/product-details/99-pomex-zemin-yuzey-sertlestirici (dile göre)
            list.push({
                locale: loc,
                slug: `${item.id}-${slugify(localizedName || "")}`,
            });
        });
    });

    return list;
}

// ------------------------------------------------------
// METADATA
// ------------------------------------------------------
export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    const fallbackLocale = routing.defaultLocale || "tr";

    const parts = slug.split("-");
    const productId = parts[0];

    const product = productList.find((item) => item.id == productId);

    // Ürün bulunamazsa fallback meta
    if (!product) {
        return {
            title: "Ürün bulunamadı | Eile Pomex",
            description: "Aradığınız ürün mevcut değildir.",
            robots: { index: false, follow: true },
        };
    }

    const name = product.name?.[locale] || product.name?.[fallbackLocale];
    const descriptionFull =
        product.description?.[locale] ||
        product.description?.[fallbackLocale] ||
        "Pomex ürünleri endüstriyel zemin ve yapı kimyasalları için geliştirilmiştir.";

    // Google için ideal uzunluk
    const description = descriptionFull.substring(0, 160);

    const keywords = product?.keywords?.[locale] || [];

    const prettySlug = buildProductSlug(product, locale) || `${slug}/`;

    const canonicalUrl =
        SITE_BASE_URL + "/" + locale + "/product-details/" + prettySlug;

    const languageAlternates = routing.locales.reduce((acc, loc) => {
        acc[loc] =
            SITE_BASE_URL +
            "/" +
            loc +
            "/product-details/" +
            buildProductSlug(product, loc);
        return acc;
    }, {});

    const metaObj = {
        title: name,
        description,
        keywords,

        openGraph: {
            title: name,
            description,
            url: canonicalUrl,
            type: "website",
            locale,
            images: [
                {
                    url: "https://www.eilepomex.com" + product.img,
                    alt: name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: name,
            description,
            images: ["https://www.eilepomex.com" + product.img],
        },
        alternates: {
            canonical: canonicalUrl,
            languages: languageAlternates,
        },
    };

    // ID-only slug: /product-details/99 → canonical + noindex
    if (parts.length === 1) {
        metaObj.alternates = {
            canonical: canonicalUrl,
            languages: languageAlternates,
        };
        metaObj.robots = { index: false, follow: true };
    }

    return metaObj;
}


export default async function ProductDetailsLayout({ children, params }) {
    const { locale, slug } = await params;
    const fallbackLocale = routing.defaultLocale || "tr";
    const productId = slug?.split("-")?.[0];
    const product = productList.find((item) => item.id == productId);
    const localizedName =
        product?.name?.[locale] || product?.name?.[fallbackLocale];
    const descriptionFull =
        product?.description?.[locale] ||
        product?.description?.[fallbackLocale] ||
        "Pomex ürünleri endüstriyel zemin ve yapı kimyasalları için geliştirilmiştir.";
    const prettySlug = product ? buildProductSlug(product, locale) : `${slug}/`;
    const canonicalUrl =
        SITE_BASE_URL + "/" + locale + "/product-details/" + prettySlug;

    const productStructuredData =
        product &&
        localizedName && {
            "@context": "https://schema.org",
            "@type": "Product",
            name: localizedName,
            description: descriptionFull,
            image: `${SITE_BASE_URL}${product.img}`,
            sku: String(product.id),
            brand: {
                "@type": "Organization",
                name: "Eile Pomex",
            },
            url: canonicalUrl,
            inLanguage: locale,
        };

    const breadcrumbLabels =
        locale === "en"
            ? {
                  home: "Home",
                  products: "Products",
              }
            : {
                  home: "Ana Sayfa",
                  products: "Ürünler",
              };

    const breadcrumbStructuredData =
        product &&
        localizedName && {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: breadcrumbLabels.home,
                    item: `${SITE_BASE_URL}/${locale}`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: breadcrumbLabels.products,
                    item: `${SITE_BASE_URL}/${locale}/products`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: localizedName,
                    item: canonicalUrl,
                },
            ],
        };

    // Geçersiz locale → 404
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    // next-intl SSR locale ayarı
    setRequestLocale(locale);

    return (
        <>
            {/* JSON-LD for Product + breadcrumbs to help search engines understand the page */}
            {productStructuredData && (
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            [
                                productStructuredData,
                                breadcrumbStructuredData,
                            ].filter(Boolean)
                        ),
                    }}
                />
            )}

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "auto"
                }}
            >
                {children}
            </div>
        </>
    );
}
