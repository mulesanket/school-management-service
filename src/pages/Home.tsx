import "./Home.css";

const Home = () => {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Smart School Management Platform</h1>
            <p>
              Digitally transform your institution with powerful tools for
              students, teachers, attendance, exams and analytics.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="School"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h2>Core Features</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1584697964190-6c3fbcfbd2f4" />
              <h3>Student Records</h3>
              <p>Complete academic and personal student data management.</p>
            </div>

            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350" />
              <h3>Attendance Tracking</h3>
              <p>Monitor attendance in real-time with smart analytics.</p>
            </div>

            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b" />
              <h3>Teacher Portal</h3>
              <p>Empower teachers with grading and classroom tools.</p>
            </div>

            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" />
              <h3>Analytics Dashboard</h3>
              <p>Advanced performance insights and reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <h2>1200+</h2>
            <p>Students Managed</p>
          </div>
          <div>
            <h2>80+</h2>
            <p>Teachers Connected</p>
          </div>
          <div>
            <h2>98%</h2>
            <p>Attendance Accuracy</p>
          </div>
          <div>
            <h2>25+</h2>
            <p>Schools Integrated</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="container">
          <h2>Our Campus & Technology</h2>

          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" />
            <img src="https://images.unsplash.com/photo-1588072432904-843af37f03c0" />
            <img src="https://images.unsplash.com/photo-1584697964403-4a6e6f1a79b8" />
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <div className="container">
          <h2>See Our System In Action</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/9No-FiEInLA"
              title="Demo Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="container">
          <h2>What Schools Say</h2>
          <p className="testimonial-text">
            "This platform transformed our school operations completely.
            Attendance and academic tracking have never been easier."
          </p>
          <h4>— Principal, ABC International School</h4>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to modernize your institution?</h2>
          <button className="primary-btn">Start Today</button>
        </div>
      </section>

    </main>
  );
};

export default Home;