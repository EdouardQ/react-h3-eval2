import { createContext, useState } from "react";

export const ProfilContext = createContext();

export const ProfilProvider = (props) => {
  const [profil, setProfil] = useState();

  return (
    <ProfilContext.Provider value={{ profil: profil, setProfil }}>
      {props.children}
    </ProfilContext.Provider>
  );
};
