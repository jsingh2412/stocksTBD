import Image from "next/image";
const NewsArticle = (props) => {
  return (
    <div className="h-2/5 bg-white m-3 mb-5 flex flex-col items-center">
      <div className="bg-news-green w-full h-1/5 text-7xl basic_text title_container">
        <div className="horizontal_scroll">{props.news_title}</div>
      </div>
      <div className="bg-blue-500 w-full h-1/3">
        <div className="w-full h-full flex justify-start items-center overflow-hidden">
          <Image
            src={props.news_image}
            alt={props.news_title}
            width={500}
            height={550}
          />
        </div>
      </div>
      <div>
        <p>{props.news_description}</p>
        <p>source: {props.news_source}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
