import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">SchoolMS</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Students</li>
          <li>Teachers</li>
          <li className="login">Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;