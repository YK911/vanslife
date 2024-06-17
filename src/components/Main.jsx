import { Link } from "react-router-dom";

export default function Main() {
  return (
    <section className="py-5 bg-dark" id="main-home">
      <div className="container">
        <h1 className="text-white fs-1">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white fw-medium mb-5">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          className="d-block w-100 py-2 text-white text-center bg-warning border-0 rounded-1"
          to="/vans"
        >
          Find your van
        </Link>
      </div>
    </section>
  );
}
