import React, { useState, useEffect } from "react";
import client from "../client";
import { useParams } from "react-router-dom";

import Posts from "../components/Posts";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const { search } = useParams();

  const searchBlogTitle = () => {
    client
      .fetch(
        `*[_type == "post" && title match "${search}" || title_translation match "${search}"]{
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

  const getAllPosts = () => {
    client
      .fetch(
        `*[_type == "post"][0..5] | order(publishedAt asc){
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
    if (search) {
      searchBlogTitle();
      return;
    }
    getAllPosts();
  }, [search]);
  return (
    <div className="blog_page">
      <Posts posts={posts} loading={isLoading} />
    </div>
  );
};

export default Blog;
