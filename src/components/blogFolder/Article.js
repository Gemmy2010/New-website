import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import { withTranslation } from "react-i18next";
import moment from "moment";

const Article = withTranslation()(({ article, i18n }) => {
  const { category } = useParams();

  const currentLanguage = i18n.language;

  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  const getSinglePost = () => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      title_translation,
      body,
      body_translation,
      mainImage {
        asset -> {
            _id,
            url,
        },
        alt
        
      },
      publishedAt,
      "authorName":author -> name,
      "authorBio":author -> bio,
      "authorBioTranslation":author -> bio_translation,
      "authorImage":author -> image {
        asset -> {
              _id,
              url,
            },
      },
    }`
      )
      .then((data) => {
        window.scrollTo(0, 0);
        setPost(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSinglePost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) return <h2>Loading ...</h2>;
  return (
    <section id="sustainability-blog">
      <div class="article_container">
        <div class="row">
          <div class="leftcolumn">
            <div class="blog-card">
              <h2>
                {currentLanguage === "en" ? post.title : post.title_translation}
              </h2>
              <div class="sustainability-img">
                {post.mainImage && post.mainImage.asset.url && (
                  <img src={post.mainImage.asset?.url} alt="" />
                )}
              </div>
              <h4>
                {currentLanguage === "en" ? post.title : post.title_translation}
              </h4>
              <h5>
                by {post.authorName}, {}
                {moment(post.publishedAt).format("MMMM DD YYYY")}
              </h5>
              <div class="sustainability-content">
                <BlockContent
                  blocks={
                    currentLanguage === "en" ? post.body : post.body_translation
                  }
                  projectId="xvhh2esg"
                  dataset="production"
                />
              </div>
              <div class="author-card">
                <div class="img-background">
                  <div class="author-img">
                    {post.authorImage && post.authorImage.asset && (
                      <img
                        class="img-circle"
                        src={post.authorImage.asset.url}
                        alt=""
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <br />
                  <h3>{post.authorName}</h3>
                  <BlockContent
                    blocks={
                      currentLanguage === "en"
                        ? post.authorBio
                        : post.authorBioTranslation
                    }
                    projectId="xvhh2esg"
                    dataset="production"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Article;
