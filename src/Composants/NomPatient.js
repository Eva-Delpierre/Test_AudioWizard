import React, { useContext } from 'react';
import {Button} from 'react-bootstrap';

import { UserContext } from './UserContext';


const NomPatient = () => { 
  const user = useContext(UserContext);

  return (      
    <div className="patient-form">
      <h3> Veuillez entrer le nom du patient</h3>

      <div className="input-item">
        <input className="input" onChange={e => user.setNom(e.target.value)} placeholder="Nom" />
      </div>


      <div className="input-item">
        <input className="input" onChange={e => user.setPrenom(e.target.value)} placeholder="Prénom" />
      </div>

      <div>
        <Button onClick={() => user.setNomOk(true)} variant="outline-info"> Valider </Button>
      </div>

    </div>     
  );
};

export default NomPatient;