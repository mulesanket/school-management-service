import "./Home.css";

import heroImg from "../assets/images/hero.webp";
import feature1 from "../assets/images/feature1.webp";
import feature2 from "../assets/images/feature2.webp";
import feature3 from "../assets/images/feature3.webp";
import feature4 from "../assets/images/feature4.webp";
import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import introVideo from "../assets/videos/intro.mp4";
import demoVideo from "../assets/videos/demo.mp4";

const Home = () => {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Smart School Management Platform</h1>
            <p>
              Simplify administration, enhance collaboration, and empower your
              institution with a powerful digital ecosystem built for modern education.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Explore Platform</button>
              <button className="secondary-btn">Contact Us</button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={heroImg}
              alt="School management dashboard preview"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* VIDEO SECTION 1 */}
      <section className="video-section">
        <div className="container video-grid">

          <div className="video-text">
            <h2>Platform Overview</h2>
            <p>
              Discover how our system streamlines operations and improves academic tracking.
            </p>
          </div>

          <div className="video-wrapper">
            <video
              controls
              muted
              playsInline
              preload="none"
              poster={heroImg}
            >
              <source src={introVideo} type="video/mp4" />
            </video>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h2>Core Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <img src={feature1} alt="Student management system" loading="lazy" />
              <h3>Student Management</h3>
              <p>Comprehensive student records and centralized profile management.</p>
            </div>

            <div className="feature-card">
              <img src={feature2} alt="Attendance system interface" loading="lazy" />
              <h3>Attendance System</h3>
              <p>Accurate real-time attendance tracking and smart reporting.</p>
            </div>

            <div className="feature-card">
              <img src={feature3} alt="Teacher dashboard interface" loading="lazy" />
              <h3>Teacher Dashboard</h3>
              <p>Efficient grading tools and classroom management.</p>
            </div>

            <div className="feature-card">
              <img src={feature4} alt="Analytics dashboard interface" loading="lazy" />
              <h3>Analytics & Reports</h3>
              <p>Data-driven insights for informed academic decisions.</p>
            </div>

          </div>
        </div>
      </section>

      {/* VIDEO SECTION 2 */}
      <section className="video-section alt-video">
        <div className="container video-grid">

          <div className="video-wrapper">
            <video
              controls
              muted
              playsInline
              preload="none"
              poster={heroImg}
            >
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>

          <div className="video-text">
            <h2>Live Dashboard Demo</h2>
            <p>
              Experience powerful analytics, attendance tracking, and real-time reporting.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <h2>1200+</h2>
            <p>Students Managed</p>
          </div>
          <div className="stat-item">
            <h2>80+</h2>
            <p>Teachers Connected</p>
          </div>
          <div className="stat-item">
            <h2>25+</h2>
            <p>Schools Integrated</p>
          </div>
          <div className="stat-item">
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
            <img src={gallery1} alt="School campus exterior" loading="lazy" />
            <img src={gallery2} alt="Computer lab students" loading="lazy" />
            <img src={gallery3} alt="Teacher interacting with students" loading="lazy" />
            <img src={gallery4} alt="Smart classroom technology" loading="lazy" />
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