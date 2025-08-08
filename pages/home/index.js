import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Isabela eu te amo! ❤️</h1>
      <p>Se você também me ama da um sorriso! 😊</p>
      <div className={styles.emotes}>💕 🥰 😍 💖 🌹</div>
      <span className={styles.brand}>Linda!</span>
    </div>
  );
}

export default Home;
