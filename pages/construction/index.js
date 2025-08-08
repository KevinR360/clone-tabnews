import styles from "./construction.module.css";

function Construction() {
  return (
    <div className={styles.constructionContainer}>
      <div className={styles.content}>
        <div className={styles.icon}>🚧</div>
        <h1>Página em Construção</h1>
        <p>Esta página está sendo desenvolvida e estará disponível em breve!</p>
        <div className={styles.loadingAnimation}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
}

export default Construction;
