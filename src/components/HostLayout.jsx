import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyles = { textDecoration: "underline" };

  return (
    <main>
      <div className="container d-flex align-items-center column-gap-3 py-4">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="income"
        >
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="vans"
        >
          Vans
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </main>
  );
}

export default HostLayout;
