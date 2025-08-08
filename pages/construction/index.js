import styles from "./construction.module.css";

function Construction() {
  return (
    <div className={styles.constructionContainer}>
      <div className={styles.content}>
        <div className={styles.icon}>🚧</div>
        <h1 className={styles.title}>Página em Construção</h1>
        <p className={styles.subtitle}>
          Esta página está sendo desenvolvida e estará disponível em breve!
        </p>
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
