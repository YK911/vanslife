import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components";

const filters = [
  { id: "id-1", title: "Simple" },
  { id: "id-2", title: "Luxury" },
  { id: "id-3", title: "Rugged" },
];

function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansCard = vans.map(
    ({ id, name, price, description, imageUrl, type }) => (
      <article className="card border-0" key={id}>
        <Link to={`/vans/${id}`}>
          <div className="rounded-2 overflow-hidden">
            <img className="card-img-top" src={imageUrl} alt={description} />
          </div>
          <div className="pt-3" id="card-info">
            <h2 className="card-title fs-5">{name}</h2>
            <p className="card-text text-end fw-medium">
              ${price}
              <small className="d-block fw-normal">/day</small>
            </p>
            <p className={`btn m-0 ${type}`}>
              {type[0].toUpperCase() + type.slice(1, type.lenght)}
            </p>
          </div>
        </Link>
      </article>
    )
  );

  return (
    <>
      <Header />
      <main>
        <section className="py-5">
          <div className="container">
            <h1 className="mb-4 fw-bold">Explore our van options</h1>

            <fieldset className="d-flex align-items-center justify-content-between mb-5">
              <legend className="visually-hidden">Vans filter</legend>
              {filters.map(({ id, title }) => {
                return (
                  <Link
                    key={id}
                    className="px-4 py-1 rounded-1 bg-warning"
                    style={{ cursor: "pointer" }}
                  >
                    {title}
                    <input
                      className="visually-hidden"
                      type="radio"
                      name="vansFilter"
                      value={title}
                    />
                  </Link>
                );
              })}
              <button
                className="bg-transparent text-underline border-0"
                style={{ textDecoration: "underline" }}
                type="reset"
              >
                Clear filters
              </button>
            </fieldset>

            <div className="" id="vans-list">
              {vansCard}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Vans;
