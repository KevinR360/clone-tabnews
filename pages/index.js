function Home() {
  return (
    <div className="container">
      <h1>Welcome to Clone Tab News</h1>
      <p>This is a simple Next.js application.</p>
      <span className="brand">cursor.dev</span>
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