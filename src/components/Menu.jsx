import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <Link to="/" className="navbar-brand">
            Mini E-Commerce
          </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Catalogue
              </Link>
            </li>
            <li class="nav-item">
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
