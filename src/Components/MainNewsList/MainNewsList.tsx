import React from "react";
import MainNews from "../MainNews/MainNews.tsx";
import "./MainNewsList.css";

export default function MainNewsList({ articles }) {
  return (
    <div className="mainNewsList">
      <MainNews articles={articles} />
    </div>
  );
}
