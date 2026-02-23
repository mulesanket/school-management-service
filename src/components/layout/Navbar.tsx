import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">SchoolMS</div>

        <ul className="nav-menu">
          <li>Home</li>
          <li>Pupils</li>
          <li>Students</li>
          <li>Teachers</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;