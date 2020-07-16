import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// This component displays name from Context
const FinalPatient = () => {
  const user = useContext(UserContext);

  return (
    <div className="final">
      <h2> {user.sexe} {user.nom} {user.prenom} </h2>
    </div>
  );
};

export default FinalPatient;