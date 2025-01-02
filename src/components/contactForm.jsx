"use client";
import React, { useState, useCallback, useRef } from "react";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";
import "./contactForm.scss";
import { useTranslations } from "next-intl";

export default function ContactForm() {
    const recaptchaRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState(null);

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
            Password: process.env.STMP_PASS,
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
    );
}
