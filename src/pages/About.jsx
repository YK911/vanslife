import { Link } from "react-router-dom";
import bgImg from "../assets/about-hero.jpg";

function About() {
  return (
    <main>
      <section className="about-hero pb-5">
        <img className="img-fluid" src={bgImg} alt="" />
        <div className="container">
          <h1 className="pt-5">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>

          <div className="p-4 cta bg-warning-subtle">
            <h2 className="fs-4 mb-4">
              Your destination is waiting. Your van is ready.
            </h2>
            <Link
              to="/vans"
              className="d-block px-4 py-2 bg-dark text-white rounded-2"
              style={{ width: "fit-content" }}
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
