import { FaHeart } from "react-icons/fa";
import styles from "./BookCard.module.css";
import { useState } from "react";

const BookCard = ({ data ,handleLikeList }) => {
  const { title, author, language, pages, image } = data;
  const [like, setLike] = useState(false);
  
  const likeHandler = () => { 
    handleLikeList(data,like)
    setLike((like) => !like);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button className={styles.button} onClick={likeHandler}>
        <FaHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </div>
  );
};

export default BookCard;
