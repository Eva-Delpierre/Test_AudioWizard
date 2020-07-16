import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Image} from 'react-bootstrap';

// import icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'; 

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">

      <Image src="../../images/audio-wizard-logo.png" alt="Logo" rounded className="logo"/>


        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon={faUser} className="icon"/> Mon compte
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Mes informations
                </DropdownItem>
                <DropdownItem>
                  Mes rendez-vous
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;