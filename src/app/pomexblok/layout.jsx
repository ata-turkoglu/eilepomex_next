import { Play } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const play = Play({
    weight: "400",
    subsets: ["latin"],
});

export const metadata = {
    title: "Pomex Blok",
    description: "Pomex Blok Bims Blok",
};

export default async function BlokLayout({ children }) {
    return (
        <html>
            <body className={play.className} style={{ margin: 0 }}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                    }}
                >
                    {children}
                </div>
            </body>
        </html>
    );
}
