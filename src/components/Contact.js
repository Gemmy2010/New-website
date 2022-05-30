import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t94aoha",
        "template_hq3txw8",
        form.current,
        "user_gHigHv3hbMzqYMkJf8pEN"
      )
      .then(
        (result) => {
          let myStatus = document.getElementById("status")
          myStatus.textContent ="Successfully Submitted"; 
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="header-section">
        <h2 className="title">{t("contact_title")}</h2>
      </div>
      <div className="container-contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="fullName">{t("full_name")}</label>
            <input type="text" id="fullName" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("email")}</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("message")}</label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="5"
              required></textarea>
          </div>
          <input className="btn2" type="submit" value={t("contact_submit")} />
          <div id="status"></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
