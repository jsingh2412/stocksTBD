import NewsArticle from "./NewsArticle";

//Dashboard news component to display revelant news
//Add dynamic functionality
const News = () => {
  return (
    <div className="grid grid-cols-1 shadow bg-secondary-green news_max">
      <div>
        <h1 className="basic_text text-2xl p-3">News</h1>
      </div>
      <div className="flex flex-col m-4 max-news">
        <div className="flex-1">
          <NewsArticle
            news_image="/assets/images/news-image.webp"
            news_title="Stock market today: Wall Street closes lower, giving S&P 500 another losing week"
            news_description="The missing article is attributed to Evan Gershkovich, a correspondent for the Journal who was detained by Russian security forces during a reporting trip a year ago today. His imprisonment was made under accusations of espionage—a charge that’s strongly denied by the Journal and the U.S. government. During his 12 months behind bars"
            news_source="AP NEWS"
            news_type="finance"
          />
        </div>
        <div className="flex-1">
          <NewsArticle
            news_image="/assets/images/hugestock.png"
            news_title="The Biggest Stock Market Reversal in History"
            news_description="There are still 6 weeks or so left in the year but as of this moment the massive swing from huge losses to a gain will likely go down as the biggest stock market reversal in history.

            I looked back at the intra-year losses for the S&P 500 from 1928 through 2020. Here are those intra-year losses paired with how the stock market finished the year:"
            news_source="A Wealth of Common Sense"
            news_type="finance "
          />
        </div>
        <div className="flex-1">
          <NewsArticle
            news_image="/assets/images/sp.jpg"
            news_title="Oppenheimer’s Stoltzfus sees stocks bucking drag of high rates"
            news_description="Wall Street’s biggest bull is sticking to his stock-market optimism, even as concerns mount that corporations will eventually buckle under the pressure of higher interest rates."
            news_source="Bloomberg"
            news_type="finance "
          />
        </div>
        <div className="flex-1">
          <NewsArticle
            news_image="/assets/images/guy.webp"
            news_title="Stock market basics: 9 tips for beginners"
            news_description="News shows, Hollywood films, and TV all assume that you know what the stock market is and how it works. Everyone knows that you can make a lot of money in the stock market if you know what you’re doing, but beginners don’t often understand how the market works and exactly why stocks go up and down. Here’s what you need to know about the stock market before you start investing."
            news_source="Bloomberg"
            news_type="finance "
          />
        </div>
      </div>
    </div>
  );
};

export default News;
