import React from "react";
import Categories from "../components/blogFolder/Categories";
import SingleArticle from "../components/blogFolder/Article";
import BlogContact from "../components/blogFolder/BlogContact";
import QuotesHeader from "../components/blogFolder/QuotesHeader";
import FactsHeader from "../components/blogFolder/FactsHeader";
import Search from "../components/blogFolder/Search";
import CounterViews from "../components/blogFolder/CounterViews";

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
          <CounterViews />
        </div>
      </div>
    </>
  );
};

export default Article;
