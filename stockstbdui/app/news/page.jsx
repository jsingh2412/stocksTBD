"use client";

import NewsPage from "@components/News/NewsPage";

//Page routing that displays NewsPage component
const GenericNewsPage = () => {
  return (
    <div className="bg-secondary-green">
      <NewsPage />
    </div>
  );
};

export default GenericNewsPage;
