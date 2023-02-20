import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogonComponent from './LogonComponent.js'

import { Card, Container } from 'react-bootstrap'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <h1>Login Component</h1>
      <Card>

        <LogonComponent />

      </Card>

    </Container>

  </React.StrictMode >
);