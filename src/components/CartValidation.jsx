import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";

export const CartValidation = (props) => {
  const { cart } = useContext(CartContext);

  return (
    <tr>
      <td>{props.cart.title}</td>
      <td>{props.cart.price}€</td>
    </tr>
  );
};
