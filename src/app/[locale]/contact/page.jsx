import "../css/contactPage.scss";
import { MapPinned, Phone, Printer, Mail } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/contactForm";

function Contact({ params: { locale } }) {
    //const { locale } = useParams();
    setRequestLocale(locale);

    const t = useTranslations("Contact");

    return (
        <main className="contact">
            <div className="banner-area">
                <h2>{t("contact")}</h2>
            </div>

            <div className="content-area">
                <div className="wrapper">
                    <h1>{t("contactUs")}</h1>
                    <p>{t("reachUs")}</p>
                </div>

                <div className="content">
                    <div className="contact-info">
                        <div className="box">
                            <div className="icon">
                                <MapPinned size={25} />
                            </div>

                            <div className="text">
                                <h3>{t("address")}</h3>
                                <p>
                                    Yeniköy Mah. Menderes-Orhanlı Yolu Sk.{" "}
                                    <br />
                                    No: 179/26 Menderes/İzmir
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <Phone size={25} />
                            </div>

                            <div className="text">
                                <h3>{t("telephone")}</h3>
                                <p>0232 360 16 16</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <Printer size={25} />
                            </div>
                            <div className="text">
                                <h3>{t("fax")}</h3>
                                <p>0232 360 17 77</p>
                            </div>
                        </div>

                        <div
                            className="box"
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <div className="icon">
                                <Mail size={25} />
                            </div>
                            <div
                                className="text"
                                style={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                <span>info@eilepomex.com</span>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </main>
    );
}

export default Contact;
