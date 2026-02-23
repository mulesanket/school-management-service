import "./Home.css";

const Home = () => {
  return (
    <main className="home">

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Modern School Management Platform</h1>
            <p>
              Digitally transform your institution with powerful tools to manage
              students, teachers, attendance, exams, and performance analytics.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Explore Features</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="School dashboard"
            />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;