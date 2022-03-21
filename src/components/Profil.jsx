import { ProfilContext } from "../context/profilContext";
import { useContext } from "react";

export const Profil = (props) => {
  const { profil } = useContext(ProfilContext);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Commentaire</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.profil.name}</td>
          <td>{props.profil.email}</td>
          <td>{props.profil.address}</td>
          <td>{props.profil.commentary}</td>
        </tr>
      </tbody>
    </table>
  );
};
