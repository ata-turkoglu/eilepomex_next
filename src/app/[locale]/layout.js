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

export const metadata = {
    metadataBase: new URL(siteMetaData.siteUrl),
    alternates: {
        canonical: "/",
        languages: {
            "tr-TR": "/tr",
            "en-US": "/en",
        },
    },
    title: {
        template: `%s | ${siteMetaData.title}`,
        default: siteMetaData.title,
    },
    description: siteMetaData.description,
    openGraph: {
        title: siteMetaData.title,
        description: siteMetaData.description,
        url: siteMetaData.siteUrl,
        siteName: siteMetaData.title,
        images: [siteMetaData.socialBanner],
        locale: "tr",
        type: "website",
    },
    robots: {
        index: true,
        folow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
    },
};

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
                        }}
                    >
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
