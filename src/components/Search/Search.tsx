import { IoIosSearch } from "react-icons/io";

import "./Search.scss";

function Search() {
  return (
    <form className="search">
      <input
        type="search"
        placeholder="O que você está buscando?"
        className="search-input"
      />

      <button type="submit" className="search-button">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default Search;
