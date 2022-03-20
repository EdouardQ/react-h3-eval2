import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecapContext } from "../context/recapContext";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    commentary: "",
  });
  const { recap } = useContext(RecapContext);
  const navigate = useNavigate();

  console.log(recap);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    const { name, email, address, commentary } = form;
    if (
      name.length > 0 &&
      email.length > 0 &&
      address.length > 0 &&
      commentary.length > 0
    ) {
      e.preventDefault();
      console.log(form);
      recap.push(...form);

      navigate("/validation");
    } else {
      e.preventDefault();
      alert("veuillez compléter les champs ");
    }
  }

  return (
    <div className="col-4">
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
