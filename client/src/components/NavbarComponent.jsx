import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function NavbarComponent() {
  const EMP_NAME = JSON.parse(localStorage.getItem("EMP_NAME"));

  const Logout = () => {
    Swal.fire("Logout Success", "Logout Success", "success", {
      buttons: false,
      timer: 2000,
    }).then((value) => {
      localStorage.removeItem("EMP_NO");
      localStorage.removeItem("EMP_NAME");
      localStorage.removeItem("GENNUMBER");
      localStorage.removeItem("QUERY");
      localStorage.removeItem("BACKLINK");
      localStorage.removeItem("UPLOAD_API");
      localStorage.removeItem("UPLOADPRO_API");
      localStorage.removeItem("UPLOADEVA_API");
      localStorage.removeItem("UPLOADOTHER_API");
      localStorage.removeItem("UPDATEREV_API");
      localStorage.removeItem("UPDATEREVID_API");
      localStorage.removeItem("ID");
      localStorage.removeItem("DOWNLOADPRO_API");
      localStorage.removeItem("DOWNLOADOTHER_API");
      localStorage.removeItem("DOWNLOADEVA_API");
      localStorage.removeItem("FACTRY_DIVISION");
      localStorage.removeItem("DIVISION_NAME");
      localStorage.removeItem("DIVISION");
      localStorage.removeItem("URL_BACK");
      localStorage.removeItem("CREATE_API");
      localStorage.removeItem("LOCATION");
      localStorage.removeItem("COUNT_API");
      window.location.href = "/";
    });
  };
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {EMP_NAME ? (
              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-info">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
