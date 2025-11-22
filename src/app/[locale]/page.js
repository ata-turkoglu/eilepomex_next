import Intro from "@/components/intro";
import Metrics from "@/components/metrics";
import Catalogs from "@/components/catalogs";
import Info from "@/components/info";
import Banner from "@/components/banner";
import Brands from "@/components/brands";
import ProjectSamplesSection from "@/components/projectsGroup/projectSamplesSection";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import siteMetaData from "@/lib/siteMetaData";

export default function Home({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations("Home");

    const getHeader = (locale) => {
        if (locale == "tr") {
            return "Eile Pomex Yapı Kimyasalları";
        } else {
            return "Eile Pomex Construction Chemicals";
        }
    };

    return (
        <main id="home" className="home">
            <h1 style={{ display: "none" }}>{getHeader(locale)}</h1>
            <p style={{ display: "none" }}>
                {siteMetaData.description[locale]}
            </p>
            <Intro />
            <Metrics />
            <Catalogs />
            <Info
                image="/assets/products/pomex_yuzey_sertlestirici.png"
                header={t("highPerformanceSurfaceHardener")}
                text={t("infoThermomex")}
                bg="/assets/info/surfaceHardenerBg.png"
                productId={99}
                textColor="white"
                locale={locale}
                productName={{
                    tr: "POMEX ZEMİN YÜZEY SERTLEŞTİRİCİ",
                    en: "POMEX GROUND SURFACE HARDENER",
                }}
            />
            <Banner image="/assets/info/etiperview.jpg" />
            <Info
                image="/assets/products/thermomex_isi_ve_yalitim_sivasi.png"
                header={t("naturalSolutionsInInsulation")}
                text={t("infoThermomex")}
                productId={23}
                textColor="black"
                locale={locale}
                productName={{
                    tr: "POMEX THERMOMEX SIVA",
                    en: "POMEX THERMOMEX PLASTER",
                }}
            />
            <ProjectSamplesSection />
            <Info
                image={"/assets/pomexblok/bims-blok.png"}
                header="Pomex Blok"
                text={t("infoPomexBlok")}
                to="/pomexblok"
                bg="/assets/pomexblok/cure-room.jpg"
                bgB30={true}
                textColor="white"
                headerInside="true"
                locale={locale}
                productName={{
                    en: "POMEX BLOK",
                    tr: "POMEX BLOK",
                }}
            />
            <Brands />
            <div className="spacerH50"></div>
        </main>
    );
}
