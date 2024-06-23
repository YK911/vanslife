import React from "react";
import { useParams, Link } from "react-router-dom";
import arrowBack from "/arrow-back.svg";

function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  return (
    <main className="container">
      {van ? (
        <article className="pt-4 pb-5">
          <Link to="/vans" className="d-flex column-gap-2 mb-4">
            <img src={arrowBack} alt="" />
            Back to all vans
          </Link>
          <div className="rounded-2 overflow-hidden mb-4">
            <img className="img-fluid" src={van.imageUrl} alt={van.title} />
          </div>
          <p className={`btn ${van.type}`}>{van.type}</p>
          <h1 className="fw-bold">{van.name}</h1>
          <p className="fw-medium">
            ${van.price}
            <small className="fw-normal">/day</small>
          </p>
          <p className="mb-3 lh-sm">{van.description}</p>
          <button
            className="w-100 px-4 py-2 text-white rounded border-0"
            style={{ background: "#FF8C38" }}
            type="button"
          >
            Rent this van
          </button>
        </article>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
}

export default VanDetails;
