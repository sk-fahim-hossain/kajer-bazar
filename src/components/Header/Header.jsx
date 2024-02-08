import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="mx-auto max-w-5xl  ">
      <div className="flex flex-col sm:fles-col md:flex-row lg:flex-row justify-around items-center">
        <h3 className="logo text-3xl">
          <Link to="/">Kazer Bazar</Link>
        </h3>

        <nav className="nav-link sm:my-4">
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/appliedjobs">Applied Jobs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </nav>
        <button className="gradient-btn  sm:invisible md:visible lg:visible">
          Start Applying
        </button>
      </div>
    </header>
  );
};

export default Header;
