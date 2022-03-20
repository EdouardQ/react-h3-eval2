import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";

export const Cart = (props) => {
  const { cart } = useContext(CartContext);

  return (
    <tr id={props.cart.id}>
      <td>{props.cart.title}</td>
      <td>{props.cart.price}€</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.handleClick(props.cart.id)}
        >
          Supprimer du panier
        </button>
      </td>
    </tr>
  );
};
