function Home() {
  return (
    <div className="container">
      <h1>Isabela eu te amo! ❤️</h1>
      <p>Se você também me ama da um sorriso! 😊</p>
      <div className="emotes">💕 🥰 😍 💖 🌹</div>
      <span className="brand">Linda!</span>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f5f6fa;
        }
        h1 {
          color: #22223b;
          margin-bottom: 0.5em;
        }
        p {
          color: #4a4e69;
          margin-bottom: 1em;
        }
        .emotes {
          font-size: 2em;
          margin: 1em 0;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .brand {
          color: #9a8c98;
          font-weight: bold;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}

export default Home;
