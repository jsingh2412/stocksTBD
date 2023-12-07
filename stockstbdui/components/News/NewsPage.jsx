//component used for our news page
import React from "react";
import NewsDisplay from "./NewsDisplay";

const NewsPage = () => {
  return (
    <div>
      <h1 className="text-3xl basic_text">News</h1>
      <h2>December 7th, 2023</h2>
      <NewsDisplay />
      <NewsDisplay />
      <NewsDisplay />
      <h2>December 6th, 2023</h2>
      <NewsDisplay />
      <NewsDisplay />
      <NewsDisplay />
    </div>
  );
};

export default NewsPage;
