import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "./components/Menu";
import { CartProvider } from "./context/cartContext";
import { ProfilProvider } from "./context/profilContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProfilProvider>
          <Menu></Menu>
          <Outlet />
        </ProfilProvider>
      </CartProvider>
    </div>
  );
}

export default App;
