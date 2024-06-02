import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (

      <nav className="navbar">
        <h1 className="logo">Murang&apos;a University Tech Club</h1>
        <ul className="header-nav-list">
          <li className="header-nav-list">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="header-nav-list">
            {" "}
            <Link to="/leadership">Leadership</Link>
          </li>
          <li className="header-nav-list">
            {" "}
            <Link to="/tracks">Tracks</Link>
          </li>
          <li className="header-nav-list">
            {" "}
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
  );
};
export default Header;
