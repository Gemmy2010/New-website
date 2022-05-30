import React from "react";
import Categories from "../components/Categories";
import SingleArticle from "../components/Article";
import BlogContact from "../components/BlogContact";
import QuotesHeader from "../components/QuotesHeader";
import FactsHeader from "../components/FactsHeader";
import Search from "../components/Search";

const Article = () => {
  return (
    <>
      <div className="posts single_post_page">
        <div className="posts_left">
          <SingleArticle />
          <BlogContact />
        </div>
        <div className="posts_right">
          <Search />
          <Categories />
          <QuotesHeader />
          <FactsHeader />
        </div>
      </div>
    </>
  );
};

export default Article;
