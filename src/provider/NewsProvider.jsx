import { useState } from "react";
import NewsContext from "../context";

// eslint-disable-next-line react/prop-types
const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <NewsContext.Provider value={{ category, setCategory,searchQuery, setSearchQuery }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
