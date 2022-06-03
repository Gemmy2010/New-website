import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <section id="team">
      <div className="container-fluid header-section">
        <h2 className="title">{t("team_title")}</h2>
        <div className="col d-lg-none d-block more-info ">
          <p className="text-center">{t("team_subtitle")}</p>
        </div>

        <div className="row team-row">
        
           <div className="col team__column mb-4">
            <div className="team__card">
              <div className="team__card-infront">
                <img
                  className="picture-profile"
                  src="./images/newMauro.png"
                  alt="Mauro"
                />
                <div className="team__container">
                  <h3>{t("ceo_name")}</h3>
                  <h4 className="team__title">{t("ceo_title")}</h4>
                </div>
              </div>
              <div className="team__card-back">
                <p>{t("ceo_content")}</p>
                <div className="teams-socialmedia__icons">
                  <a
                    target="_blank"
                    href="https://uk.linkedin.com/in/mauroramospereira">
                    <img src="./images/linkedin.png" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.mail.com/mauropereira@biketrace.se/">
                    <img src="./images/mail.png" />
                  </a>
                </div>
              </div>
            </div>
          </div> 
          <div className="team__column col">
            <div className="team__card">
              <div className="team__card-infront">
                <img
                  className="picture-profile"
                  src="./images/newJonathan.png"
                  alt="Jonathan"
                />
                <div className="team__container">
                  <h3>{t("board_member_name")}</h3>
                  <h4 className="team__title">{t("board_member_title")}</h4>
                </div>
              </div>
              <div className="team__card-back">
                <p>{t("board_member_content")}</p>
                <div className="teams-socialmedia__icons">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jonathanrutland/">
                    <img src="./images/linkedin.png" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.mail.com/jonathan.rutland@biketrace.se/">
                    <img src="./images/mail.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team__column tablet__margin-top team-bottom">
            <div className="team__card">
              <div className="team__card-infront">
                <img
                  className="picture-profile"
                  src="./images/newJemima.png"
                  alt="Jemima"
                />
                <div className="team__container">
                  <h3>{t("web_developer_name")}</h3>
                  <h4 className="team__title">{t("web_developer_title")}</h4>
                </div>
              </div>
              <div className="team__card-back">
                <p>{t("web_developer_content")}</p>
                <div className="teams-socialmedia__icons">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jemima-nyambura-osoro-153986206">
                    <img src="./images/linkedin.png" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.mail.com/jemima.nyambura@biketrace.se/">
                    <img src="./images/mail.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team__column tablet__margin-top team-bottom ">
            <div className="team__card">
              <div className="team__card-infront">
                <img
                  className="picture-profile"
                  src="./images/newHeta.png"
                  alt="Heta"
                />
                <div className="team__container">
                  <h3>{t("web_designer_name")}</h3>
                  <h4 className="team__title">{t("web_designer_title")}</h4>
                </div>
              </div>
              <div className="team__card-back">
                <p>{t("web_designer_content")}</p>
                <div className="teams-socialmedia__icons">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/heta-penttinen-6b5942183/">
                    <img src="./images/linkedin.png" />
                  </a>
                  <a
                    target="_blank"
                    href="https:/www.mail.com/heta.penttinen@biketrace.se/">
                    <img src="./images/mail.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
