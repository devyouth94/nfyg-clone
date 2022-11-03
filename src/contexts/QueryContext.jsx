import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const QueryContext = createContext(null);

const QueryProvider = ({ children }) => {
  const [queryDay, setQueryDay] = useState([]);
  const [queryRegion, setQueryRegion] = useState([]);
  const [queryCategory, setQueryCategory] = useState([]);

  const handleGetQuery = (name, item) => {
    if (name === "요일") {
      setQueryDay((prev) => [...prev, item]);
    } else if (name === "지역") {
      setQueryRegion((prev) => [...prev, item]);
    } else if (name === "카테고리") {
      setQueryCategory((prev) => [...prev, item]);
    }
  };

  const handleDelQuery = (name, item) => {
    if (name === "요일") {
      setQueryDay((prev) => prev.filter((value) => value !== item));
    } else if (name === "지역") {
      setQueryRegion((prev) => prev.filter((value) => value !== item));
    } else if (name === "카테고리") {
      setQueryCategory((prev) => prev.filter((value) => value !== item));
    }
  };

  const value = {
    query: {
      day: queryDay.join(",") || null,
      region: queryRegion.join(",") || null,
      category: queryCategory.join(",") || null,
    },
    handleGetQuery,
    handleDelQuery,
  };

  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

const useQueryContext = () => {
  const state = useContext(QueryContext);
  if (!state) {
    throw new Error("프로파이더가 없습니다.");
  }
  return state;
};

export { useQueryContext, QueryProvider };
