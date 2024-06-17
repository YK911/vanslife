import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <Link className="fw-bold" to="/">
            #VANLIFE
          </Link>
          <ul className="d-flex m-0 p-0">
            <li className="mx-3">
              <Link className="d-block py-3" to="/about">
                About
              </Link>
            </li>
            <li className="mx-1">
              <Link className="d-block py-3" to="/vans">
                Vans
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
