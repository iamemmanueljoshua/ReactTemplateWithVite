import { Outlet, Link, useLocation } from "react-router-dom";
import HeroPhoto from "../assets/pictures/4.jpg";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <section className="hero is-medium is-link banner">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="subtitle is-4">Welcome to Meneses Law's</p>
            <p className="title is-1">Learning Management System</p>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className={location.pathname === "/Home" ? "is-active" : ""}>
                  <Link to="/Home" >
                    Home
                  </Link>
                </li>
                <li className= {location.pathname === "/NewCourse" ? "is-active" : ""} >
                  <Link to="/NewCourse" >
                    Create
                  </Link>
                </li>
                <li className={location.pathname === "/Dashboard" ? "is-active" : ""}>
                  <a href="/Dashboard" >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default Layout;
