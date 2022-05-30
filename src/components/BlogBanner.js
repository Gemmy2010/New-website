import React from "react";
import { useTranslation } from "react-i18next";

const BlogBanner = () => {
  const { t } = useTranslation();


  return (
    <div
      autoFocus
      className="banner"
      style={{ backgroundImage: `url("./images/blog-bg.jpg")` }}
    >
      <div className="banner_container">
        <div className="inner_container">
          <h2>{t("blog_banner")}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
