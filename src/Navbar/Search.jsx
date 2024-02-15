import  { useContext, useState } from 'react';
import NewsContext from '../context';


const Search = () => {
  const { setSearchQuery } = useContext(NewsContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form >
        <input
        onChange={handleSubmit}
          type="text"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
