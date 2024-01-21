import NewsDisplay from "./NewsDisplay";

//News Page, contains a bunch of different news articles
//Add dynamic element to load daily
const NewsPage = () => {
  return (
    <div className="pr-20 pl-20">
      <h1 className="text-size basic_text">News</h1>
      <h2 className="text-lg basic_text">December 7th, 2023</h2>
      <NewsDisplay
        news_image="/assets/images/news-image.webp"
        news_title="Oppenheimer’s Stoltzfus sees stocks bucking drag of high rates"
        news_description="Wall Street’s biggest bull is sticking to his stock-market optimism, even as concerns mount that corporations will eventually buckle under the pressure of higher interest rates."
        news_source="Bloomberg"
        news_type="finance "
      />
      <NewsDisplay
        news_image="/assets/images/news-image.webp"
        news_title="Stock market today: Wall Street closes lower, giving S&P 500 another losing week"
        news_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        news_source="AP NEWS"
        news_type="finance"
      />
      <NewsDisplay
        news_image="/assets/images/hugestock.png"
        news_title="The Biggest Stock Market Reversal in History"
        news_description="There are still 6 weeks or so left in the year but as of this moment the massive swing from huge losses to a gain will likely go down as the biggest stock market reversal in history.

            I looked back at the intra-year losses for the S&P 500 from 1928 through 2020. Here are those intra-year losses paired with how the stock market finished the year:"
        news_source="A Wealth of Common Sense"
        news_type="finance "
      />
      <h2>December 6th, 2023</h2>
      <NewsDisplay />
      <NewsDisplay />
      <NewsDisplay />
    </div>
  );
};

export default NewsPage;
