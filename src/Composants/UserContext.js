import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [nomOk, setNomOk] = useState(false);
  const [sexeOk, setSexeOk] = useState(false);

  return (
    <UserContext.Provider
      value={{
        nom,
        prenom,
        sexe,
        nomOk,
        sexeOk,
        setNom,
        setPrenom,
        setSexe,
        setNomOk,
        setSexeOk,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};