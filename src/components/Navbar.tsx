import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SchoolMS</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Students</li>
        <li>Teachers</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;