import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <Link to="/" className="navbar-brand">
            Mini E-Commerce
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Catalogue
              </Link>
            </li>
            <li className="nav-item">
              <Link to="cart" className="nav-link">
                Panier
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
