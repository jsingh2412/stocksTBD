import Image from "next/image";
const NewsArticle = (props) => {
  return (
    <div className="bg-white flex flex-col items-center mb-4">
      <div className="bg-news-green w-full text-7xl basic_text title_container pb-2">
        <div className="horizontal_scroll">{props.news_title}</div>
      </div>
      <div className="flex justify-start items-center">
        <Image
          src={props.news_image}
          alt={props.news_title}
          width={450}
          height={250}
        />
      </div>
      <div className="text-center basic_text_black text-sm">
        <p className="description_truncate">{props.news_description}</p>
        <p>source: {props.news_source}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
