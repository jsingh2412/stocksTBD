//News component on dashboard

import NewsArticle from "./NewsArticle";

const News = () => {
  return (
    <div className="bg-secondary-green">
      <h1 className="basic_text text-2xl p-3">News</h1>
      <NewsArticle
        news_image="/assets/images/news-image.webp"
        news_title="Stock market today: Wall Street closes lower, giving S&P 500 another losing week"
        news_description="The market posted some gains earlier this week following several healthy indicators on the economy. Wall Street has been watching economic updates ahead of the Federal Reserve’s interest rate policy meeting next week. The central bank is expected to hold interest rates steady after spending much of the last two years pushing rates higher in its bid to tame inflation."
        news_source="AP NEWS"
        news_type="finance"
      />
      <NewsArticle
        news_image="/assets/images/news-image.webp"
        news_title="Stock market today: Wall Street closes lower"
        news_description="The market posted some gains earlier this week" //following several healthy indicators on the economy. Wall Street has been watching economic updates ahead of the Federal Reserve’s interest rate policy meeting next week. The central bank is expected to hold interest rates steady after spending much of the last two years pushing rates higher in its bid to tame inflation."
        news_source="AP NEWS"
        news_type="finance "
      />
    </div>
  );
};

export default News;
