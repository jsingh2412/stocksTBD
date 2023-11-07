import LineChart from "@components/Chart";

import NewsPage from "@components/News/NewsPage";

const data = [
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1975,
    amount: 0.804,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1976,
    amount: 1.35,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1977,
    amount: 7.928,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1978,
    amount: 15.357,
  },
];

const GenericNewsPage = () => {
  return (
    <div className="h-screen bg-secondary-green">
      <NewsPage />
      <LineChart data={data} height={1000} width={1000} />
    </div>
  );
};

export default GenericNewsPage;
