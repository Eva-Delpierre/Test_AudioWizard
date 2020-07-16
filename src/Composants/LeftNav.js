import React, {useContext} from 'react';
import {Nav} from 'react-bootstrap';

import { UserContext } from './UserContext';
 

const LeftNav = () => {
    const user = useContext(UserContext);

    if(user.nomOk === true && user.sexeOk === true) {
        return (
        <div className="sidebar"> 
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/" className="blocMenu">1<sup>ère</sup> visite</Nav.Link>
                <Nav.Link href="/" className="blocMenu">Adaptation</Nav.Link>
                <Nav.Link href="/" className="blocMenu">Patients en attente</Nav.Link>
                <Nav.Link href="/" className="blocMenu">Patients appareillés</Nav.Link>
            </Nav>

            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/" className="blocMenu">Maintenance</Nav.Link>
                <Nav.Link href="/" className="blocMenu">Statistiques</Nav.Link>
            </Nav>
        </div>)
      }
    return (
        <div className="sidebar"> 
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/" className="blocMenu">1<sup>ère</sup> visite</Nav.Link>
                    <Nav.Link href="/" className="blocMenu">Adaptation</Nav.Link>
                    <Nav.Link href="/" className="blocMenu">Patients en attente</Nav.Link>
                </Nav>

                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/" className="blocMenu">Maintenance</Nav.Link>
                    <Nav.Link href="/" className="blocMenu">Statistiques</Nav.Link>
                </Nav>
        </div>
    )
 
}

export default LeftNav;