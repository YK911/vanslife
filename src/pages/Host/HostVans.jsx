import React from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansElm = vans.map(({ id, name, price, imageUrl, hostId }) => {
    return (
      <Link
        className="d-flex align-items-center gap-3 px-4 py-3 bg-body rounded-2"
        to={id}
        key={id}
      >
        <div className="col-2 rounded-2 overflow-hidden">
          <img
            className="img-fluid"
            src={imageUrl}
            alt={name}
            width={80}
            height={80}
          />
        </div>
        <div className="col">
          <h2 className="mb-0 fs-4">{name}</h2>
          <p className="mb-0 text-secondary">
            <span>${price}</span>/day
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="container pt-4 pb-5">
      <h1 className="mb-4">Your listed vans</h1>
      {vans.length ? (
        <div className="d-flex flex-column gap-3  ">{hostVansElm}</div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default HostVans;
