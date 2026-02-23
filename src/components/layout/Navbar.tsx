import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo">SchoolMS</div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Students</li>
            <li>Teachers</li>
            <li className="login-btn">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;