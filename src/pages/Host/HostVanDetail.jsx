import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import arrowBack from "/arrow-back.svg";

function HostVanDetail() {
  const activeStyles = { textDecoration: "underline" };

  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  return (
    <div className="container pb-5">
      <NavLink
        to=".."
        relative="path"
        className="d-flex column-gap-2 pt-2 pb-4"
      >
        <img src={arrowBack} alt="" />
        <span className="text-decoration-underline">Back to all vans</span>
      </NavLink>
      {currentVan ? (
        <div className="p-4 bg-white rounded-3">
          <div className="d-flex align-items-center column-gap-4 mb-4">
            <div className="col-4 rounded-2 overflow-hidden">
              <img
                className="img-fluid"
                src={currentVan?.imageUrl}
                alt={currentVan?.name}
              />
            </div>
            <div>
              <p className={`btn ${currentVan?.type}`}>{currentVan?.type}</p>
              <h3>{currentVan?.name}</h3>
              <p>
                <span className="fw-bold">${currentVan?.price}</span>/day
              </p>
            </div>
          </div>
          <nav className="d-flex column-gap-3 mb-4">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="photo"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default HostVanDetail;
