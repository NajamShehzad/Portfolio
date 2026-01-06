import React, { FC } from "react";
import "./BlogCard.css";

interface Blog {
  url: string;
  title: string;
  description: string;
}

interface BlogCardProps {
  blog: Blog;
  isDark: boolean;
}

const BlogCard: FC<BlogCardProps> = ({ blog, isDark }) => {
  function openUrlInNewTab(url: string): void {
    if (url !== undefined) {
      const win = window.open(url, "_blank");
      win?.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a className={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"} href="#blog">
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>{blog.title}</h3>
          <p className={isDark ? "small-dark small" : "small"}>{blog.description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
