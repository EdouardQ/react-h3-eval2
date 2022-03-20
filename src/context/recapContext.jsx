import { createContext, useState } from "react";

export const RecapContext = createContext();

export const RecapProvider = (props) => {
  const [recap, setRecap] = useState([]);

  return (
    <RecapContext.Provider value={{ recap: recap, setRecap }}>
      {props.children}
    </RecapContext.Provider>
  );
};
