import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App | create by React.js</h1>
      </header>
      {children}
      <footer className={styles.footer}>Develop by Nima with Love </footer>
    </>
  );
};

export default Layout;
