import "./globals.css";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Play } from "next/font/google";
import siteMetaData from "@/lib/siteMetaData";

const play = Play({
    weight: "400",
    subsets: ["latin"],
});

export async function generateMetadata({ params }) {
    const { locale } = await params;

    return {
        title: {
            template:
                locale == "tr"
                    ? `%s Yapı Kimyasalları`
                    : `%s Construction Chemicals`,
        },
        description: siteMetaData.description[locale],
        keywords: siteMetaData.keywords[locale],
        openGraph: {
            title: siteMetaData.title,
            description: siteMetaData.description[locale],
            url: siteMetaData.siteUrl + locale + "/",
            siteName: siteMetaData.title,
            images: [
                {
                    url: "https://www.eilepomex.com/assets/logos/eile.png",
                    height: "86",
                    width: "86",
                    alt: "eile pomex",
                },
                {
                    url: "https://www.eilepomex.com/assets/logos/eilepomex-round.png",
                    height: "110",
                    width: "300",
                    alt: "eile pomex",
                },
                {
                    url: "https://www.eilepomex.com/assets/logos/eile-logo-tr.png",
                    height: "112",
                    width: "300",
                    alt: "eile pomex tr",
                },
                {
                    url: "https://www.eilepomex.com/assets/logos/eile-logo-en.png",
                    height: "112",
                    width: "300",
                    alt: "eile pomex en",
                },
            ],
            locale,
            type: "website",
        },
        robots: {
            index: true,
            folow: true,
            //noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    if (!routing.locales.includes(locale)) {
        notFound();
    }
    const messages = await getMessages();
    setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body className={play.className}>
                <NextIntlClientProvider messages={messages}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                            position: "relative",
                        }}
                    >
                        <Header />
                        {children}
                        <Footer />
                        <div
                            style={{
                                position: "fixed",
                                bottom: "20px",
                                right: "20px",
                                zIndex: 50,
                                width: "fit-content",
                                height: "fit-content",
                                cursor: "pointer",
                            }}
                        >
                            <a
                                href="https://wa.me/+905306414805"
                                target="_blank"
                                aria-label="Chat on WhatsApp"
                            >
                                <img
                                    src="/assets/logos/whatsapp.png"
                                    alt="Chat on WhatsApp"
                                    width={40}
                                    style={{
                                        filter: "drop-shadow(0 0 8px grey)",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
