import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';

// Import des composants
import TopNav from './Composants/TopNav';
import LeftNav from './Composants/LeftNav';

import MainApp from './Composants/MainApp';


function App() {

  
  return (    
      <div>
        <TopNav/>

        <Row>
          <Col xs="4" md="3" lg="2">
            <LeftNav/>
          </Col>
          <Col xs="8" md="9" lg="10">
            <MainApp/>
          </Col>
        </Row>      
      </div>
  );
}

export default App;

