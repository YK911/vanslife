import React from "react";
import { useParams, Link } from "react-router-dom";
import { Header, Footer } from "../components";

function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = React.useState([]);
  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  return (
    <>
      <Header />
      <main>
        <article>
          <Link to="/vans">Back to all vans</Link>
          <img className="img-fluid" src={van.imageUrl} alt={van.title} />
          <p className={`btn m-0 ${van.type}`}>
            {/* {van.type[0].toUpperCase() + van.type.slice(1, van.type.lenght)} */}
          </p>
          <h1>{van.name}</h1>
          <p className="fw-medium">
            ${van.price}
            <small className="fw-normal">/day</small>
          </p>
          <p>{van.description}</p>
          <button type="button">Rent this van</button>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default VanDetails;
