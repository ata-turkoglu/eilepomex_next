/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    output: "export",
    async redirects() {
        return [
            // Basic redirect
            {
                source: "/",
                destination: "/tr",
                permanent: true,
            },
        ];
    },
};

export default withNextIntl(nextConfig);
