import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import siteMetaData from "@/lib/siteMetaData";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    return {
        title: siteMetaData.projectsPage.title[locale],
        description: siteMetaData.projectsPage.description[locale],
        keywords: siteMetaData.projectsPage.keywords[locale],
    };
}

export default async function ProjectsLayout({ children, params }) {
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
