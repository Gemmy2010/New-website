import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  return (
    <section id="app">
      <div className="section-app">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">{t("app_title")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="single-app">
                <div className="part-1">
                  <img
                    className="app-img"
                    src="./images/smartphone.png"
                    alt="smart phone"
                  />
                  <h3 className="title">{t("keyless")}</h3>
                </div>
                <div className="part-2">
                  <p className="description">{t("keyless_content")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="single-app">
                <div className="part-1">
                  <img
                    className="app-img"
                    src="./images/padlock.png"
                    alt="padlock"
                  />
                  <h3 className="title">{t("smart")}</h3>
                </div>
                <div className="part-2">
                  <p className="description">{t("smart_content")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="single-app">
                <div className="part-1">
                  <img
                    className="app-img"
                    src="./images/sharing.png"
                    alt="Sharing icon"
                  />
                  <h3 className="title">{t("share")}</h3>
                </div>
                <div className="part-2">
                  <p className="description">{t("share_content")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
