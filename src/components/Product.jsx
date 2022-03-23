export const Product = (props) => {
  return (
    <div className="card col-3">
      <h3 className="card-title">{props.product.title}</h3>
      <p className="card-body">{props.product.description}</p>
      <div className="row">
        <button
          className="btn btn-dark btn-sm col"
          onClick={() => props.handleClick(props.product)}
        >
          Ajouter au panier
        </button>
        <span className="col" />
        <div className="col">
          <b className="price">{props.product.price}€</b>
        </div>
      </div>
    </div>
  );
};
