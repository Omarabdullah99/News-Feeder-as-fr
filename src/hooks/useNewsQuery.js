import { useState, useEffect, useContext } from "react";

import NewsContext from "../context";
import useDebounce from "./useDebounce";

const useNewsQuery = () => {
  const { category, searchQuery } = useContext(NewsContext);
  const [news, setNews] = useState([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = "http://localhost:8000/v2/top-headlines";
        if (category) {
          url += `?category=${category}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  useEffect(() => {
    // if (debouncedSearchQuery) {

    // }
    fetchSearchResults(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  const fetchSearchResults = async (query) => {
    try {
      console.log("query", query?.length);
      if (query.length >0) {
        const url = `http://localhost:8000/v2/search?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
        setNews(data?.result);
      } else {
        const url = "http://localhost:8000/v2/top-headlines";
        const response = await fetch(url);
        const data = await response.json();
        setNews(data?.articles);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  //     const fetchNews = async () => {
  //       try {
  //         let url = 'http://localhost:8000/v2/top-headlines';
  //         if (searchQuery) {
  //             console.log("useNews",searchQuery)
  //            url= `http://localhost:8000/v2/search?q=${searchQuery}`;

  //         }
  //         const response = await fetch(url);
  //         const data = await response.json();
  //         console.log("data",data)
  //         if(data?.result){
  //             setNews(data?.result)
  //         }else{
  //             setNews(data?.articles)
  //         }

  //       } catch (error) {
  //         console.error('Error fetching news:', error);
  //       }
  //     };

  //     fetchNews();
  //   }, [searchQuery]);

  return news;
};

export default useNewsQuery;
