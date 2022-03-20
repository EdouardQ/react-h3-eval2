import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Cart } from "./Cart";
import { Form } from "./Form";

export const Checkout = () => {
  const cartContext = useContext(CartContext);

  const total = () => {
    let total = 0;
    cartContext.cart.map((cart) => {
      total += cart.price;
    });
    return total;
  };

  function handleClick(id) {
    cartContext.setCart(
      cartContext.cart.filter((cart) => {
        return cart.id != id;
      })
    );
  }

  return (
    <section>
      <table className="table table-striped w-50">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartContext.cart.map((cart, index) => {
            return <Cart cart={cart} key={index} handleClick={handleClick} />;
          })}
          <br></br>
        </tbody>
        <tr>
          <td>Total</td>
          <td>{total()}€</td>
        </tr>
      </table>
      <hr />
      <Form />
    </section>
  );
};
