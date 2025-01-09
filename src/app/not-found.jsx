"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <html>
            <body>
                <main
                    style={{
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "5rem",
                            fontWeight: "bold",
                            marginBottom: "3rem",
                        }}
                    >
                        404
                    </h1>

                    <h2
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "3rem",
                        }}
                    >
                        Page Not Found
                    </h2>

                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Spinner animation="border" />
                        <p style={{ margin: "0 0 0 1rem" }}>
                            Redirecting Home Page ...
                        </p>
                    </div>
                </main>
            </body>
        </html>
    );
}
