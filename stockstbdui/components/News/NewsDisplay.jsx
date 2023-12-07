import React from "react";

const NewsDisplay = (props) => {
  return (
    <div className="bg-primary-gray p-4 m-2">
      <div>
        <h1>{props.news_title}</h1>
        <h2>{props.news_type}</h2>
      </div>
      <p>{props.news_description}</p>
      <img src={props.news_image} className="h-20" />
    </div>
  );
};

export default NewsDisplay;
