import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilContext } from "../context/profilContext";
import { CartContext } from "../context/cartContext";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    commentary: "",
  });
  const profilCont = useContext(ProfilContext);
  const cartCont = useContext(CartContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleSubmit(e) {
    const { name, email, address, commentary } = form;
    if (
      name.length > 0 &&
      email.length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      address.length > 0
    ) {
      profilCont.setProfil({ ...form });
      navigate("/validation");
    } else {
      e.preventDefault();
      alert(
        "veuillez compléter les champs et/ou veillez saisir une adresse email valide."
      );
    }
  }

  return (
    <div>
      <h2>Vos informations</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          name="address"
          placeholder="Adresse"
          value={form.address}
          onChange={handleChange}
        />
        <textarea
          id=""
          cols="30"
          rows="10"
          className="form-control my-3"
          name="commentary"
          placeholder="Commentaire"
          onChange={handleChange}
          value={form.commentary}
        ></textarea>
        <input type="submit" className="btn btn-dark" value="Commander" />
      </form>
    </div>
  );
};
