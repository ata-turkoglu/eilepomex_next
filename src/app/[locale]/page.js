import Intro from "@/components/intro";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }) {
    setRequestLocale(locale);
    const t = useTranslations("Home");

    return (
        <div id="home" className="home">
            <Intro />
            {/* <Metrics />
            <Info
                image={thermomexImg}
                header={t("naturalSolutionsInInsulation")}
                text={t("infoThermomex")}
                to="/product-details/23"
                textColor="black"
            />
            <Banner image={bannerImage} />
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
            <Brands /> */}
            <div className="spacerH50"></div>
        </div>
    );
}
