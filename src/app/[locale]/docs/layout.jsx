import productData from "@/data/products.json";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function DocsLayout({ children, params }) {
    const { locale, productKey } = await params;
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