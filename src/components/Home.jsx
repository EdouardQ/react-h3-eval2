import { useContext, useState } from "react";
import { Product } from "./Product";
import { CartContext } from "../context/cartContext";

export const Home = () => {
  const { cart } = useContext(CartContext);

  const [products, setProducts] = useState([
    { id: 1, title: "Article 1", description: "lorem ipsum", price: 10 },
    { id: 2, title: "Article 2", description: "lorem ipsum", price: 5 },
    { id: 3, title: "Article 3", description: "lorem ipsum", price: 8 },
    { id: 4, title: "Article 4", description: "lorem ipsum", price: 20 },
    { id: 5, title: "Article 5", description: "lorem ipsum", price: 50 },
  ]);

  function handleClick(product) {
    cart.push(product);
  }

  return (
    <section className="row articles">
      {products.map((product, index) => {
        return (
          <Product product={product} key={index} handleClick={handleClick} />
        );
      })}
    </section>
  );
};
