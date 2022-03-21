import { ProfilContext } from "../context/profilContext";
import { useContext, useState } from "react";
import { Profil } from "./Profil";
import { CartValidation } from "./CartValidation";
import { CartContext } from "../context/cartContext";

export const Validation = () => {
  const { cart } = useContext(CartContext);
  const { profil } = useContext(ProfilContext);

  const total = () => {
    let total = 0;
    cart.map((cart) => {
      total += cart.price;
    });
    return total;
  };

  return (
    <section className="table_align">
      <br></br>
      <h1>Commande Validé</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cart, index) => {
            return <CartValidation cart={cart} key={index} />;
          })}
          <br></br>
        </tbody>
        <tr>
          <td>Total</td>
          <td>{total()}€</td>
        </tr>
      </table>
      <br></br>
      <hr />
      <br></br>
      <Profil profil={profil} />
    </section>
  );
};
