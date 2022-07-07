import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../../index.css";
import emailjs from "@emailjs/browser";

const BlogContact = () => {
  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t94aoha",
        "template_lvmp2ur",
        form.current,
        "user_gHigHv3hbMzqYMkJf8pEN"
      )
      .then(
        (result) => {
          let myMessage = document.getElementById("blog-status");
          myMessage.textContent = "Your Comment has been Successfully Posted";
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="blog_title">
        <h2>{t("blog_contact_title")}</h2>
      </div>
      <div className="container-contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="comment">{t("blog_contact_comment")}</label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fullName">{t("full_name")}</label>
            <input type="text" id="fullName" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("email")}</label>
            <input type="email" id="email" name="email" required />
          </div>

          <button
            name="submit"
            type="submit"
            id="blog-submit"
            data-submit="...Sending"
          >
            {t("blog_contact_button")}
          </button>

          <p id="blog-status"></p>
        </form>
      </div>
    </section>
    
  );
};

export default BlogContact;
