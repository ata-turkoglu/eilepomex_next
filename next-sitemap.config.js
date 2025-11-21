/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
const productList = require("./src/data/productList.json");
module.exports = {
    siteUrl: "https://www.eilepomex.com/",
    changefreq: "monthly",
    priority: 0.7,
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    exclude: [
        "/tr/products/*",
        "/en/products/*",
        "/tr/projects/",
        "/en/projects/",
        "/tr/docs/",
        "/en/docs/",
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
            };
        }
        if (checkProductDetail(path)) {
            const imgUrl = getProductImage(path);
            return {
                loc: withBase(path),
                changefreq: config.changefreq,
                priority: 0.9,
                lastmod: config.autoLastmod
                    ? new Date().toISOString()
                    : undefined,
                images: [{ loc: withBase(imgUrl) }],
            };
        }
        return {
            loc: withBase(path),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
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

const getProductImage = (path) => {
    const list = path.split("/");
    const last = list[list.length - 1];
    const id = last.split("-")[0];
    return productList.find((itm) => itm.id == id).img.slice(1);
};
