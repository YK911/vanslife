import { Header, Footer } from "../components";

function Vans() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5">
          <div className="container">
            <h1 className="fw-bold">Explore our van options</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Vans;
