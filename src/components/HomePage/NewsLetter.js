import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://biketrace.us5.list-manage.com/subscribe/post?u=0a477baa6ac2f1a1c8d23f0ce&amp;id=01140e9cb8";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const NewsLetter = () => {
  const { t } = useTranslation();
  return (
    <div id="mc_embed_signup">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div id="mc_embed_signup_scroll">
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div style={{ color: "green" }}>Subscribed !</div>
            )}
          </div>
        )}
      />
    </div>
  );
};

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const initialState = {
    email:" "
  }
  const Signup = () => {
    const[email] = useState(initialState);
  }
  const clearState = () =>{
    setEmail({...initialState})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
    setEmail('');
  };
  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h2 style={{ textAlign: "left", color: "#fff", fontSize: "1.8em" }}>
        {t("newsletter_title")}
      </h2>
      <div className="mc__field-container">
        <label htmlFor="email">{t("email")}</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          name="email"
          required
        />

        {/* <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
          placeholder="Email address"
          required
        /> */}
      </div>
      <input className="subscribe" type="submit" value={t("newsletter_subscribe")} />
    </form>
  );
};

export default NewsLetter;
