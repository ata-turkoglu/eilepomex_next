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
        "/tr/products",
        "/tr/products/*",
        "/en/products",
        "/en/products/*",
        "/tr/projects",
        "/tr/projects/*",
        "/en/projects",
        "/en/projects/*",
        "/tr/docs",
        "/tr/docs/*",
        "/en/docs",
        "/en/docs/*",
        "/tr/product-details/[0-9]*/",
        "/en/product-details/[0-9]*/",
    ],
    transform: async (config, path) => {
        const withBase = (targetPath) => {
            if (targetPath.startsWith("http")) return targetPath;
            const base = config.siteUrl.replace(/\/$/, "");
            const normalized = targetPath.startsWith("/")
                ? targetPath
                : `/${targetPath}`;
            return base + normalized;
        };

        const locale = getLocaleFromPath(path);
        const alternates = buildAlternateRefs(path, locale, withBase);

        if (path == "/") {
            // Redirects to /tr, so we skip listing root to avoid 301 in sitemap
            return null;
        }
        if (path == "/tr" || path == "/en") {
            return {
                loc: withBase(path),
                changefreq: config.changefreq,
                priority: 1.0,
                lastmod: config.autoLastmod
                    ? new Date().toISOString()
                    : undefined,
                images: [
                    {
                        loc: toUrl(withBase("/assets/logos/eilepomex-round.png")),
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
                        loc: toUrl(withBase("/assets/logos/pomexblok-logo.png")),
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
            const productLoc = normalizeProductPath(path, locale);
            const imgUrl = getProductImage(productLoc || path);
            const imageLoc = imgUrl ? toUrl(withBase(imgUrl)) : undefined;
            return {
                loc: withBase(productLoc || path),
                changefreq: config.changefreq,
                priority: 0.9,
                lastmod: config.autoLastmod
                    ? new Date().toISOString()
                    : undefined,
                images: imageLoc ? [{ loc: imageLoc }] : [],
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
    const segments = normalizePath(path).split("/").filter(Boolean);
    const first = segments[0];
    if (first === "tr" || first === "en") return first;
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
    const product = productList.find((itm) => itm.id == id);
    if (!product || !product.img) return undefined;
    const imgPath = product.img.startsWith("/")
        ? product.img.slice(1)
        : product.img;
    return imgPath;
};

const buildAlternateRefs = (path, locale, withBase) => {
    const pathname = normalizePath(path);
    const id = getProductId(pathname);
    // product detail: build locale-specific slugs from productList
    if (id && locale) {
        const trPath = buildProductPath("tr", id);
        const enPath = buildProductPath("en", id);
        return [
            {
                href: withBase(trPath),
                hreflang: "tr",
                hrefIsAbsolute: true,
            },
            {
                href: withBase(enPath),
                hreflang: "en",
                hrefIsAbsolute: true,
            },
        ];
    }
    // root: serve both languages
    if (pathname === "/") {
        return [
            { href: withBase("/tr/"), hreflang: "tr", hrefIsAbsolute: true },
            { href: withBase("/en/"), hreflang: "en", hrefIsAbsolute: true },
        ];
    }
    // neutral single-path pages (pomexblok)
    if (pathname === "/pomexblok/") {
        return [
            {
                href: withBase("/pomexblok/"),
                hreflang: "tr",
                hrefIsAbsolute: true,
            },
            {
                href: withBase("/pomexblok/"),
                hreflang: "en",
                hrefIsAbsolute: true,
            },
        ];
    }
    if (locale !== "tr" && locale !== "en") return undefined;
    const target = pathname.replace(/^\/(tr|en)/, "");
    return [
        { href: withBase(`/tr${target}`), hreflang: "tr", hrefIsAbsolute: true },
        { href: withBase(`/en${target}`), hreflang: "en", hrefIsAbsolute: true },
    ];
};

const normalizePath = (path) => {
    if (!path) return "/";
    try {
        const url = new URL(path);
        return url.pathname.endsWith("/")
            ? url.pathname
            : `${url.pathname}/`;
    } catch {
        const p = path.startsWith("/") ? path : `/${path}`;
        return p.endsWith("/") ? p : `${p}/`;
    }
};

const toUrl = (value) => new URL(value);

const getProductId = (pathname) => {
    if (!pathname.includes("product-details")) return undefined;
    const last = getLastPathSegment(pathname);
    const id = last.split("-")[0];
    return /^\d+$/.test(id) ? id : undefined;
};

const normalizeProductPath = (path, locale) => {
    const id = getProductId(path);
    if (!id || !locale) return undefined;
    return buildProductPath(locale, id);
};

const buildProductPath = (locale, id) => {
    const product = productList.find((itm) => `${itm.id}` === `${id}`);
    const name =
        (product && product.name && product.name[locale]) ||
        (product && product.name && (product.name.en || product.name.tr)) ||
        `${id}`;
    const slug = slugify(name);
    return `/${locale}/product-details/${id}-${slug}/`;
};

const slugify = (str = "") =>
    str
        .toString()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();
