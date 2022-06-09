import React from "react";
import { Link, useParams } from "react-router-dom";
import Categories from "./Categories";
import QuotesHeader from "./QuotesHeader";
import FactsHeader from "./FactsHeader";
import CounterViews from "./CounterViews";
import { withTranslation, useTranslation } from "react-i18next";
import "../index.css";
import Search from "./Search";

const Posts = withTranslation()(({ posts, loading, i18n }) => {
  const { category, search } = useParams();

  console.log({ search, category });

  const { t } = useTranslation();

  const currentLanguage = i18n.language;

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="posts">
      <div className="posts_left">
        <div className="posts_container">
          {category !== undefined && (
            <div className="search_header">
              {posts.length === 0 && !loading ? (
                <h2>There are no posts in this {category} yet`</h2>
              ) : (
                <h2>{`${category} posts`} </h2>
              )}
            </div>
          )}
          {search !== undefined && (
            <div className="search_header">
              {posts.length === 0 && !loading ? (
                <h2>
                  There is not search results for: <strong>{search}</strong>{" "}
                </h2>
              ) : (
                <h2>
                  Search results for <strong>{search}</strong>
                </h2>
              )}
            </div>
          )}
          {posts.map((post) => (
            <div className="post_item" key={post.slug.current}>
              <div className="post_item_top">
                <img src={post.mainImage.asset.url} alt={post.title} />
              </div>
              <div className="post_item_bottom">
                <h2 className="post_title">
                  <Link to={`/blog/${post.slug.current}`}>
                    {currentLanguage === "en"
                      ? post.title
                      : post.title_translation}
                  </Link>
                </h2>
                <div
                  style={{
                    overflow: "hidden",
                    height: "150px",
                    marginBottom: "15px",
                  }}>
                  {currentLanguage === "en"
                    ? post.excerpt
                    : post.excerpt_translation}{" "}
                </div>
                <Link className="btn-blog" to={`/blog/${post.slug.current}`}>
                  {t("read_more_text")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="posts_right">
        <Search />
        <Categories />
        <QuotesHeader />
        <FactsHeader />
        <CounterViews />
      </div>
    </div>
  );
});

export default Posts;
