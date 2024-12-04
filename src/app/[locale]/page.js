import Intro from "@/components/intro";
import Metrics from "@/components/metrics";
import Catalogs from "@/components/catalogs";
import Info from "@/components/info";
import Banner from "@/components/banner";
import ProjectSamplesSection from "@/components/projectsGroup/projectSamplesSection";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations("Home");

    return (
        <div id="home" className="home">
            <Intro />
            <Metrics />
            <Catalogs />
            <Info
                image="/assets/products/thermomex_isi_ve_yalitim_sivasi.png"
                header={t("naturalSolutionsInInsulation")}
                text={t("infoThermomex")}
                to={locale + "/product-details/23"}
                textColor="black"
            />
            <Banner image="/assets/info/etiperview.jpg" />
            <Info
                image={"/assets/pomexblok/bims-blok.png"}
                header="Pomex Blok"
                text={t("infoPomexBlok")}
                to="/pomexblok"
                bg="/assets/pomexblok/cure-room.jpg"
                textColor="white"
                headerInside="true"
            />
            <ProjectSamplesSection />
            {/* <Brands /> */}
            <div className="spacerH50"></div>
        </div>
    );
}
