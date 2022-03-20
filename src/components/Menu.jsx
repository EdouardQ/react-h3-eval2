import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark px-4">
      <Link to="/" className="navbar-brand">
        Mini E-Commerce
      </Link>
      <div className="container-fluid">
        <ul className="navbar-nav ml-auto">
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
    </nav>
  );
};
