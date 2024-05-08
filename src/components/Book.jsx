import { useEffect, useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import Search from "./Search";
import SideCard from "./SideCard";
import styles from "./books.module.css";

const Book = () => {

  const [first, setFirst] = useState([]);
  const [liked, setLiked] = useState([]);
  const [books, setBooks] = useState(bookData);
  const [search, setSearch] = useState([]);

  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };

  const handleLikeList = (book, status) => {
    if (status) {
      //unlike
      const newLikeList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikeList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Search
          search={search}
          setSearch={setSearch}
          searchHandler={searchHandler}
        />
        {first.map((f) => (
          <p>{f.title}</p>
        ))}
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikeList={handleLikeList} />
        ))}
      </div>
      <div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
