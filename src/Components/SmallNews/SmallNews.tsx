//The goal of this component is to render only once - it is a the side bar news.

import React, { useState, useEffect } from "react";
import "./SmallNews.css";

//declare the types of Article, which is the array inside the State in this component
interface Article {
  image: string;
  title: string;
  description: string;
  content: string;
  url: string;
  publishedAt: string;
}

export default function SmallNews() {
  const [mainArticles, setMainArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getResults() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=example&lang=en&country=uk&max=5&apikey=06a2bd061e16855986385fcc4c9f6f42`
      );
      const data = await response.json();
      setMainArticles(data.articles);
    }
    getResults();
  }, []);

  return (
    <div className="sideBar">
      <h3>Today's News</h3>
      {mainArticles.map((article, index) => (
        <div key={index} className="cardSmallNews">
          <a href={article.url}>
            <div>
              <img src={article.image} alt={article.title} />
              <h2>{article.title}</h2>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
