import React from "react";

const NewsDisplay = (props) => {
  return (
    <div className="bg-primary-gray m-2 flex flex-end">
      <div className="p-4 w-2/3 flex-grow">
        <div className="flex pb-4 justify-between sm:flex-row flex-col">
          <h1 className="text-lg font-bold">{props.news_title}</h1>
          <div className="bg-purple-600 pl-10 pr-10 h-1/4">
            <h2 className="basic_text">{props.news_type}</h2>
          </div>
        </div>
        <p>{props.news_description}</p>
      </div>
      <div className="w-1/4 hidden sm:block">
        <img
          src={props.news_image}
          alt="News"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default NewsDisplay;
