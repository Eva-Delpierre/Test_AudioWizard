import React, {useContext} from 'react';

// Import des composants
import NomPatient from './NomPatient';
import SexePatient from './SexePatient';
import FinalPatient from './FinalPatient';

import { UserContext } from './UserContext';


function MainApp() {
  const user = useContext(UserContext);

  if(user.nomOk === false) {
      return (
      <NomPatient />)
  }

  if(user.nomOk === true && user.sexeOk === false) {
      return <SexePatient />
  }

  if(user.nomOk === true && user.sexeOk === true) {
    return <FinalPatient/>
  }
  
  return (
    <div>
  
 
  </div>
  );
}
export default MainApp;