import React from "react";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();
  return (
    <section id="vision">
      <div className="vision container">
        <div className="header-section">
          <h2 className="title">{t("vision_title")}</h2>
        </div>
        <div className="all-items">
          <div className="item">
            <div className="item-info">
              <p>{t("vision_content")}</p>
            </div>
            <div className="item-img">
              <img
                className="img-fluid"
                src="./images/cycling.png"
                alt="internet of bicycles"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
