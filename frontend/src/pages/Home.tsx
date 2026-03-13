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
import introVideo from "../assets/videos/intro.mp4";
import demoVideo from "../assets/videos/demo.mp4";

const Home = () => {
  return (
    <main className="home">

      {/* HERO SECTION */}
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


      {/* INTRO VIDEO SECTION */}
      <section className="video-section">
        <div className="container video-grid">

          <div className="video-text">
            <h2>Platform Overview</h2>
            <p>
              Discover how our system streamlines operations, improves academic
              tracking, and enhances collaboration across your institution.
            </p>
          </div>

          <div className="video-wrapper">
            <video
              src={introVideo}
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>

        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="features">
        <div className="container">
          <h2>Core Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <img
                src={feature1}
                alt="Student record management system"
                loading="lazy"
              />
              <h3>Student Management</h3>
              <p>
                Comprehensive student records, academic history,
                and centralized profile management.
              </p>
            </div>

            <div className="feature-card">
              <img
                src={feature2}
                alt="Digital attendance tracking interface"
                loading="lazy"
              />
              <h3>Attendance System</h3>
              <p>
                Accurate, real-time attendance tracking with
                smart reporting and insights.
              </p>
            </div>

            <div className="feature-card">
              <img
                src={feature3}
                alt="Teacher dashboard with grading tools"
                loading="lazy"
              />
              <h3>Teacher Dashboard</h3>
              <p>
                Efficient classroom management, grading tools,
                and streamlined communication.
              </p>
            </div>

            <div className="feature-card">
              <img
                src={feature4}
                alt="Analytics dashboard showing student performance"
                loading="lazy"
              />
              <h3>Analytics & Reports</h3>
              <p>
                Data-driven insights and performance metrics
                to support informed decision-making.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* DEMO VIDEO SECTION */}
      <section className="video-section alt-video">
        <div className="container video-grid">

          <div className="video-wrapper">
            <video
              src={demoVideo}
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>

          <div className="video-text">
            <h2>Live Dashboard Demo</h2>
            <p>
              Experience real-time insights, attendance tracking,
              and powerful analytics designed for modern institutions.
            </p>
          </div>

        </div>
      </section>


      {/* STATISTICS SECTION */}
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


      {/* GALLERY SECTION */}
      <section className="gallery">
        <div className="container">
          <h2>Campus & Technology</h2>

          <div className="gallery-grid">
            <img src={gallery1} alt="Modern school building exterior" loading="lazy" />
            <img src={gallery2} alt="Students using computers in lab" loading="lazy" />
            <img src={gallery3} alt="Teacher interacting with students in classroom" loading="lazy" />
            <img src={gallery4} alt="Smart classroom board technology" loading="lazy" />
          </div>
        </div>
      </section>


      {/* CALL TO ACTION */}
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