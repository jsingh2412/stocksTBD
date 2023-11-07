import Image from "next/image";
const NewsArticle = (props) => {
  return (
    <div className="bg-white m-3 mb-5 flex flex-col items-center">
      <div className="bg-news-green w-full h-1/5 text-7xl basic_text title_container">
        <div className="horizontal_scroll">{props.news_title}</div>
      </div>
      <div className="bg-blue-500">
        <div className="h-full flex justify-start items-center overflow-hidden">
          <Image
            src={props.news_image}
            alt={props.news_title}
            width={450}
            height={350}
          />
        </div>
      </div>
      <div className="text-center basic_text_black">
        <p>{props.news_description}</p>
        <p>source: {props.news_source}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
