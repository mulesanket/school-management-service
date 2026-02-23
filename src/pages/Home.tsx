import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="container hero">
        <div className="hero-text">
          <h1>Modern School Management System</h1>
          <p>
            Streamline student records, manage teachers, monitor attendance,
            and improve academic performance — all in one platform.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;