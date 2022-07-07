import React, { useState, useEffect } from "react";
import client from "../../client";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { t } from "i18next";

const Categories = withTranslation()(({ i18n }) => {
  const [categories, setCategories] = useState([]);
  const currentLanguage = i18n.language;
  const getAllCategories = () => {
    client
      .fetch(
        `*[_type == "category"]{
         title,
         title_translation,
         slug
      }`
      )
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="categories">
      <div className="categories_header">
        <h2>{t("blog_category_title")}</h2>
      </div>
      <div className="categories_body">
        <ul className="list">
          {categories.map((category) => (
            <li key={category.title}>
              <Link
                to={`/blog/category/${
                  currentLanguage === "en"
                    ? category.title
                    : category.title_translation
                }`}>
                {currentLanguage === "en"
                  ? category.title
                  : category.title_translation}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Categories;
