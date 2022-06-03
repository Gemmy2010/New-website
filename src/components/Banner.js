import React from "react";

import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <section id="lock">
      <div className="lock container">
        <div className="lock-row">
          <div className="lock-column">
            <div className="lock-info">
              <h1 className="lock-header">{t("welcome_title")}</h1>
              <p>{t("welcome")}</p>
              <a
                className="button"
                href="https://buy.stripe.com/3cs3dygsIcVt5sk001">
                {t("welcome_button")}
              </a>
            </div>
            <div className="lock-img">
              <img src="./images/bike-phone1.png" alt="Bicycle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
