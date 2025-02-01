import { redirect } from "next/navigation";

export default async function Main() {
    redirect("/tr");
    return (
        <main style={{ display: "none" }}>
            <h1>Eile Pomex</h1>
            <p>Eile Pomex Yapı Kimyasalları</p>
            <p>Eile Pomex Construction Chemicals</p>
        </main>
    );
}
