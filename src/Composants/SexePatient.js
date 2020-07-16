import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import {Button} from 'react-bootstrap';

const SexePatient = () => {
  const user = useContext(UserContext);

  return (
    <div className="patient-form">
          <h3> Quel est le sexe du patient ?</h3>

      <div className="input-item">
        <Button onClick={() => user.setSexe("Monsieur")} color="primary" type="radio"> Homme </Button>
        <Button onClick={() => user.setSexe("Madame")} color="primary" type="radio"> Femme </Button>
      </div>

      <div>
        <Button onClick={() => user.setSexeOk(true)} variant="outline-info"> Valider </Button>
      </div>

    </div>
  );
};

export default SexePatient;