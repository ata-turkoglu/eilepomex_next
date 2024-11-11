"use client";
import React, { useState, useCallback, useRef } from "react";
import "../css/contactPage.scss";
import { MapPinned, Phone, Printer, Mail } from "lucide-react";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

function Contact() {
    const recaptchaRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState(null);

    const { locale } = useParams();

    const t = useTranslations("Contact");

    const onVerify = useCallback((token) => {
        setToken(token);
    });

    function Send() {
        var body =
            "Name: " +
            name +
            "<br /> Email: " +
            email +
            "<br /> Message: " +
            message;

        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "info@eilepomex.com",
            Password: import.meta.env.VITE_STMP_PASS,
            To: "info@eilepomex.com",
            From: "info@eilepomex.com",
            Subject: "Email from website",
            Body: body,
        }).then((message) => {
            console.log(message);
            if (message == `OK`) {
                swal(
                    "Success!",
                    "You Message Successfull Received!",
                    "success"
                );
                setName("");
                setEmail("");
                setMessage("");
            } else {
                swal(
                    "Something Wrong",
                    "Your Message is not Received",
                    "error"
                );
            }
            setToken(null);
            recaptchaRef.current.reset();
        });
    }

    return (
        <div className="contact">
            <div className="banner-area">
                <h2>{t("contact")}</h2>
            </div>

            <div className="content-area">
                <div className="wrapper">
                    <h2>{t("contactUs")}</h2>
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

                    <div className="contactForm">
                        <form>
                            <h2>{t("contactForm")}</h2>
                            <div className="inputBox">
                                <input
                                    value={name}
                                    type="text"
                                    required
                                    id="name"
                                    className="input"
                                    placeholder={t("nameSurname") + "..."}
                                    onInput={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    value={email}
                                    type="text"
                                    required
                                    id="email"
                                    className="input"
                                    placeholder={t("email") + "..."}
                                    onInput={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="inputBox">
                                <textarea
                                    value={message}
                                    id="message"
                                    required
                                    className="input"
                                    placeholder={t("yourMessage") + "..."}
                                    onInput={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                />
                            </div>
                            <div id="ata">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6Lf-S8UpAAAAAL58_LEdcdltYiANv69K7ei0K9wP"
                                    onChange={onVerify}
                                    size="normal"
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    style={{
                                        background: !token ? "grey" : "",
                                        textTransform: "capitalize",
                                    }}
                                    type="button"
                                    value={t("send")}
                                    disabled={!token}
                                    onClick={Send}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
