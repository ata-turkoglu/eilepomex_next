// app/components/Preloader.jsx
"use client";

import { useState, useEffect } from "react";
import "./preloader.scss";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide the overlay as soon as the page is ready; keep only a tiny delay for a smooth fade.
        const handleLoad = () => setLoading(false);
        const readyTimer = document.readyState === "complete"
            ? setTimeout(handleLoad, 150)
            : null;

        window.addEventListener("load", handleLoad);

        // Fallback: never keep the overlay longer than 3s (e.g., if JS event misses).
        const safetyTimer = setTimeout(handleLoad, 3000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(readyTimer);
            clearTimeout(safetyTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader">
            <img
                src="/assets/logos/eilepomex-round-original.png"
                alt="Loading..."
                className="preloader__logo"
            />
        </div>
    );
}
