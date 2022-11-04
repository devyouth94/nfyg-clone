import { useCallback, useState } from "react";

const usePagination = (limitItem, startPage = 1, maxPage) => {
  const [page, setPage] = useState(startPage);
  const limit = limitItem;
  const offset = (page - 1) * limit;

  const handleRefresh = () => {
    if (page > maxPage) {
      setPage(startPage);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handleReset = useCallback(() => {
    setPage(startPage);
  }, [startPage]);

  return { limit, offset, handleRefresh, handleReset };
};

export default usePagination;
