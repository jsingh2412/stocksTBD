"use client";

import LineChart from "@components/Chart";

import ParentSize from "@visx/responsive/lib/components/ParentSize";

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

const validData = data.filter((d) => !isNaN(d.year) && !isNaN(d.amount));
const GenericNewsPage = () => {
  return (
    <div className="h-screen bg-secondary-green">
      <ParentSize>
        {({ width, height }) => (
          <LineChart data={validData} width={width} height={height} />
        )}
      </ParentSize>
    </div>
  );
};

export default GenericNewsPage;
