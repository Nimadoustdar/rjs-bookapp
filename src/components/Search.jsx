import styles from "./Search.module.css";
import { IoSearchSharp } from "react-icons/io5";
const Search = ({ search, setSearch, searchHandler }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default Search;
