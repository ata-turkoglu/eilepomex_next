"use client";
import { useEffect, useState } from "react";
import "./metrics.scss";
import MetricCounter from "./counter/metricCounter";
import { BrickWall, PackageSearch, MapPinned, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

function Metrics() {
    const [mobileView, setMobileView] = useState(false);

    const t = useTranslations("Metrics");

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
    }, []);

    return (
        <div className="metrics">
            <div className="metricContainer">
                <BrickWall
                    size={mobileView ? 40 : 90}
                    strokeWidth={1}
                    className="metricIcon"
                />
                <MetricCounter index={0} number={2834} />
                <p>{t("projectsCompleted")}</p>
            </div>
            <div className="metricContainer">
                <PackageSearch
                    size={mobileView ? 40 : 90}
                    strokeWidth={1}
                    className="metricIcon"
                />
                <MetricCounter index={1} number={153} />
                <p>{t("productVariety")}</p>
            </div>
            <div className="metricContainer">
                <MapPinned
                    size={mobileView ? 40 : 90}
                    strokeWidth={1}
                    className="metricIcon"
                />
                <MetricCounter index={2} number={43} />
                <p>{t("dealership")}</p>
            </div>
            <div className="metricContainer">
                <Settings
                    size={mobileView ? 40 : 90}
                    strokeWidth={1}
                    className="metricIcon"
                />
                <MetricCounter index={3} number={36} />
                <p>{t("rawMaterialProduction")}</p>
            </div>
        </div>
    );
}

export default Metrics;
