import { Link, Outlet } from "react-router-dom";
import starIcon from "/star.svg";

const Dashboard = () => {
  return (
    <>
      <Outlet />
      <div
        className="py-4 rounded-3"
        style={{ borderRadius: "5px", background: "#FFEAD0" }}
        id="welcome"
      >
        <article className="container">
          <h1 className="mb-4">Welcome!</h1>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <p className="m-0">
              Income last{" "}
              <strong className="text-decoration-underline">30 days</strong>
            </p>
            <Link to="/host/income">Details</Link>
          </div>
          <strong className="fs-1">$2,260</strong>
        </article>
      </div>
      <div
        className="py-5 rounded-3"
        style={{ background: "#FFDDB2" }}
        id="reviews"
      >
        <article className="container d-flex align-items-center justify-content-between ">
          <div className="d-flex align-items-baseline column-gap-3">
            <h2 className="m-0">Review score</h2>
            <p className="d-flex align-items-center column-gap-1 m-0">
              <img src={starIcon} alt="" />
              <span className="fw-bold">5.0</span>/5
            </p>
          </div>
          <Link to="/host/reviews">Details</Link>
        </article>
      </div>
      <div className="pt-4 pb-5" id="vans">
        <article className="container">
          <div className="d-flex align-items-baseline justify-content-between mb-3">
            <h2 className="m-0">Your listed vans</h2>
            <Link to="/host/vans">View all</Link>
          </div>
          <ul className="d-flex flex-column row-gap-3 m-0">
            <li className="d-flex align-items-center gap-3 px-4 py-3 bg-white rounded-2">
              <div className="col-2 rounded-2 overflow-hidden">
                <img
                  src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h3>Modest Explorer</h3>
                <p className="m-0">
                  $<span>60</span>/day
                </p>
              </div>
              <Link to="" className="ms-auto">
                Edit
              </Link>
            </li>
            <li className="d-flex align-items-center gap-3 px-4 py-3 bg-white rounded-2">
              <div className="col-2 rounded-2 overflow-hidden">
                <img
                  src="https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h3>Beach Bum</h3>
                <p className="m-0">
                  $<span>80</span>/day
                </p>
              </div>
              <Link to="" className="ms-auto">
                Edit
              </Link>
            </li>
            <li className="d-flex align-items-center gap-3 px-4 py-3 bg-white rounded-2">
              <div className="col-2 rounded-2 overflow-hidden">
                <img
                  src="https://assets.scrimba.com/advanced-react/react-router/reliable-red.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h3>Green Wonder</h3>
                <p className="m-0">
                  $<span>70</span>/day
                </p>
              </div>
              <Link to="" className="ms-auto">
                Edit
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default Dashboard;
