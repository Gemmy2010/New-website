import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <NewsLetter />
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Hogdalsvägen 4, 842 71 </span> Ytterhogdal
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+46(0)767825920</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">hello@biketrace.se</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>{t("about_title")}</span>
            {t("about_content")}
          </p>

          <p className="icon-header">{t("follow_us")}</p>
          <div className="footer-icons">
            <a target="_blank" href="https://www.twitter.com/biketracetech/">
              <i className="fab fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/biketracetech/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/biketracetech/">
              <i className="fab fa-instagram"></i>{" "}
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/10929277">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>

      <nav className="navbar navbar-light footer-bottom">
        <div className="container-fluid">
          <ul className="nav mx-auto justify-content-center footer-info2">
            <li className="navitem text-white">
              <small>BikeTrace AB</small> |
            </li>
            <li className="navitem text-white ms-1">
              <small> Hogdalsvägen 4, 842 71 Hogdalsvägen</small> |
            </li>
            <li className="navitem text-white ms-1">
              <small>Organization number: 559282-7892</small> |
            </li>
            <li className="navitem text-white ms-1">
              <small>Registration Number for moms:SE559282789201</small>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Footer;
