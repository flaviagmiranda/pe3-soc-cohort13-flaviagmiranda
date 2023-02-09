//The goal of this component is to render everytime the user inputs something in the searchbar, and show the news information

import React from "react";
import "./MainNews.css";

function MainNews({ articles }) {
  if (!articles || articles.length === 0) {
    return <div>No articles found</div>;
  }

  return (
    <div className="container">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <a href={article.url}>
            <div className="image">
              <img src={article.image} alt={article.title} />
            </div>
          </a>
          <div className="text">
            <a href={article.url}>
              <h2>{article.title}</h2>
            </a>
            <p className="articleDescription">{article.description}</p>
            <p className="publishedTag">Published at: {article.publishedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainNews;
