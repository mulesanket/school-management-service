import "./Home.css";

import heroImg from "../assets/images/hero.jpg";
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";

const Home = () => {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Smart School Management Platform</h1>
            <p>
              Simplify administration, enhance collaboration and empower your
              institution with a powerful digital ecosystem.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Explore Platform</button>
              <button className="secondary-btn">Contact Us</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={heroImg} alt="School Dashboard" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h2>Core Features</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <img src={feature1} alt="" />
              <h3>Student Management</h3>
              <p>Comprehensive student records & academic history.</p>
            </div>

            <div className="feature-card">
              <img src={feature2} alt="" />
              <h3>Attendance System</h3>
              <p>Track attendance with accuracy and real-time reports.</p>
            </div>

            <div className="feature-card">
              <img src={feature3} alt="" />
              <h3>Teacher Dashboard</h3>
              <p>Efficient grading and classroom management tools.</p>
            </div>

            <div className="feature-card">
              <img src={feature4} alt="" />
              <h3>Analytics & Reports</h3>
              <p>Data-driven insights for academic performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <h2>1200+</h2>
            <p>Students</p>
          </div>
          <div>
            <h2>80+</h2>
            <p>Teachers</p>
          </div>
          <div>
            <h2>25+</h2>
            <p>Schools</p>
          </div>
          <div>
            <h2>98%</h2>
            <p>Attendance Accuracy</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="container">
          <h2>Campus & Technology</h2>

          <div className="gallery-grid">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Institution?</h2>
          <button className="primary-btn">Get Started Today</button>
        </div>
      </section>

    </main>
  );
};

export default Home;