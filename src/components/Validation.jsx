import { RecapContext } from "../context/recapContext";
import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";

export const Validation = () => {
  const recapCont = useContext(RecapContext);
  const cartCont = useContext(CartContext);

  console.log(recapCont.recap, cartCont.cart);

  return <></>;
};
