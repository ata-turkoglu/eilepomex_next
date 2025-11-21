/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
const productList = require("./src/data/productList.json");
module.exports = {
    siteUrl: "https://www.eilepomex.com/",
    changefreq: "monthly",
    priority: 0.7,
    outDir: "public",
    autoLastmod: true,
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    exclude: [
        "/tr/products/*",
        "/en/products/*",
        "/tr/projects/",
        "/en/projects/",
        "/tr/docs/",
        "/en/docs/",
        "/tr/product-details/[0-9]*/",
        "/en/product-details/[0-9]*/",
    ],
    transform: async (config, path) => {
        const withBase = (targetPath) => {
            if (targetPath.startsWith("http")) return targetPath;
            const normalizedBase = config.siteUrl.replace(/\/$/, "");
            const normalizedPath = targetPath.startsWith("/")
                ? targetPath
                : `/${targetPath}`;
            return normalizedBase + normalizedPath;
        };

        const locale = getLocaleFromPath(path);
        const alternates =
            locale === "tr" || locale === "en"
                ? buildAlternateRefs(withBase, path, locale)
                : undefined;

        if (path == "/" || path == "/tr" || path == "/en") {
            return {
                loc: withBase(path),
                changefreq: config.changefreq,
                priority: 1.0,
                lastmod: config.autoLastmod
                    ? new Date().toISOString()
                    : undefined,
                images: [
                    {
                        loc: withBase("/assets/logos/eilepomex-round.png"),
                    },
                ],
                alternateRefs: alternates,
            };
        }
        if (path == "/pomexblok") {
            return {
                loc: withBase(path),
                changefreq: config.changefreq,
                priority: 0.9,
                lastmod: config.autoLastmod
                    ? new Date().toISOString()
                    : undefined,
                images: [
                    {
                        loc: withBase("/assets/logos/pomexblok-logo.png"),
                    },
                ],
                alternateRefs: alternates,
            };
        }
        if (checkProductDetail(path)) {
            if (isPlainIdPath(path)) {
                // Skip numeric-only product detail URLs to avoid duplicate entries
                return null;
            }
            const imgUrl = getProductImage(path);
            return {
                loc: withBase(path),
                changefreq: config.changefreq,
                priority: 0.9,
                lastmod: config.autoLastmod
                    ? new Date().toISOString()
                    : undefined,
                images: [{ loc: withBase(imgUrl) }],
                alternateRefs: alternates,
            };
        }
        return {
            loc: withBase(path),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: alternates,
        };
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/tr/projects",
                    "/en/projects",
                    "/tr/products",
                    "/en/products",
                    "/tr/docs",
                    "/en/docs",
                ],
            },
        ],
        additionalSitemaps: ["https://www.eilepomex.com/sitemap.xml"],
    },
};

const checkProductDetail = (path) => {
    return path.includes("product-details");
};

const getLocaleFromPath = (path) => {
    const segments = path.split("/").filter(Boolean);
    const first = segments[0];
    if (first === "tr" || first === "en") return first;
    if (segments.length === 0) return undefined;
    return undefined;
};

const isPlainIdPath = (path) => {
    const last = getLastPathSegment(path);
    return /^\d+$/.test(last);
};

const getLastPathSegment = (path) => {
    const segments = path.split("/").filter(Boolean);
    return segments[segments.length - 1] || "";
};

const getProductImage = (path) => {
    const last = getLastPathSegment(path);
    const id = last.split("-")[0];
    return productList.find((itm) => itm.id == id).img.slice(1);
};

const buildAlternateRefs = (withBase, path, currentLocale) => {
    const otherLocale = currentLocale === "tr" ? "en" : "tr";
    const swapLocale = (targetLocale) =>
        path.replace(/^\/(tr|en)/, `/${targetLocale}`);
    return [
        {
            href: withBase(swapLocale("tr")),
            hreflang: "tr",
        },
        {
            href: withBase(swapLocale("en")),
            hreflang: "en",
        },
    ];
};
