import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import Posts from "../components/blogFolder/Posts";

const SearchByCategory = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  const getPostByCategory = () => {
    client
      .fetch(
        `*[_type == "post" && categories[0]->title == "${category}" || categories[0]->title_translation == "${category}"]{
          title, 
           title_translation,
          slug,
          body,
          body_translation,
          author,
          excerpt,
           excerpt_translation,
          mainImage {
            asset -> {
              _id,
              url,
            },
            alt
          }
          
    }`
      )
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostByCategory();
  }, [category]);

  return (
    <div className="blog_page search_page">
      <Posts posts={posts} loading={isLoading} />
    </div>
  );
};

export default SearchByCategory;
