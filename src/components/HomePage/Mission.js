import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="mission">
      <div className="mission container">
        <div className="header-section">
          <h2 className="title">{t("mission_title")}</h2>
        </div>
        <div className="mission-wrapper">
          <div className="mission-items">
            <div className="mission-img">
              <img
                className="img-fluid"
                src="./images/combined-un-new.png"
                alt="UN-goals"
              />
            </div>
            <div className="mission-info">
              <p>
                {showMore
                  ? `${t("mission_content")}`
                  : `${t("mission_content").substring(0, 467)}`}
                <button
                  className="btn_mission"
                  onClick={() => setShowMore((prev) => !prev)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
