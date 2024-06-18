import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const activeStyles = { textDecoration: "underline" };

  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <Link className="fw-bold" to="/">
            #VANLIFE
          </Link>
          <ul className="d-flex m-0 p-0">
            <li className="mx-3">
              <NavLink
                className="d-block py-3"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="/host"
              >
                Host
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink
                className="d-block py-3"
                to="/about"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                About
              </NavLink>
            </li>
            <li className="mx-1">
              <NavLink
                className="d-block py-3"
                to="/vans"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
