import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyles = { textDecoration: "underline" };

  return (
    <main>
      <ul className="d-flex align-items-center column-gap-3">
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/host"
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/host/income"
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/host/vans"
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host/reviews"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </main>
  );
}

export default HostLayout;
