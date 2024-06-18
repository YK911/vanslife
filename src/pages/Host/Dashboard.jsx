import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main>
      <div className="container">
        <Outlet />
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <h1 className="">Welcome!</h1>
            <h2 className="">Income last 30 days</h2>
            <strong className="">$2,260</strong>
          </div>
          <Link to="#">Details</Link>
        </div>
        <div className="d-flex align-items-center justify-content-between py-4">
          <div>
            <h2>Review score</h2>
            <p>
              icon<span>5.0</span>/5
            </p>
          </div>
          <Link to="#">Details</Link>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h2>Your listed vans</h2>
          <Link to="host/vans">View all</Link>
        </div>
        <ul className="d-flex flex-column">
          <li className="d-flex justify-content-between py-2 px-4">
            <div className="d-flex">
              <img
                src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
                alt=""
                width={65}
                height={65}
              />
              <div className="ms-3">
                <h3>Modest Explorer</h3>
                <p>
                  <span>$60</span>/day
                </p>
              </div>
            </div>
            <Link>Edit</Link>
          </li>
          <li className="d-flex justify-content-between py-2 px-4">
            <div className="d-flex">
              <img
                src="https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                alt=""
                width={65}
                height={65}
              />
              <div className="ms-3">
                <h3>Beach Bum</h3>
                <p>
                  <span>$80</span>/day
                </p>
              </div>
            </div>
            <Link>Edit</Link>
          </li>
          <li className="d-flex justify-content-between py-2 px-4">
            <div className="d-flex">
              <img
                src="https://assets.scrimba.com/advanced-react/react-router/reliable-red.png"
                alt=""
                width={65}
                height={65}
              />
              <div className="ms-3">
                <h3>Green Wonder</h3>
                <p>
                  <span>$70</span>/day
                </p>
              </div>
            </div>
            <Link>Edit</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;
