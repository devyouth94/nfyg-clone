import { useState } from "react";

const usePagination = (limitItem, maxPage = 99) => {
  const [page, setPage] = useState(1);
  const limit = limitItem;
  const offset = (page - 1) * limit;

  const handleRefresh = () => {
    if (page > maxPage) {
      setPage(1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  return { limit, offset, handleRefresh };
};

export default usePagination;
