import { Link } from "react-router-dom";
import { useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const hamToggling = useRef(null);

  function handleHamburgerClick() {
    hamToggling.current.classList.toggle("active");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="nav-links" ref={hamToggling}>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/watched">Watched</Link>
        </li>
        <li>
          <Link to="/liked">Liked</Link>
        </li>
        <li>
          <Link to="/recommended">Recommended</Link>
        </li>
        <li>
          <Link to="/more-info">More Info</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;
