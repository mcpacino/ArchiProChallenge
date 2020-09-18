import React from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';

import {TableDataHoc} from './TableDataHOC';

function App({data}) {
  const getTable = () => {
    return (
      <Table className="App-table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
        </tr>
        </thead>
        <tbody>
        {getRow()}
        </tbody>
      </Table>
    );
  }

  const getRow = () => {
    return data.map(
      ({_id, name, email, phone}) => (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      )
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <main className="App-content">
        <Container>
          <Row>
            <Col>
              {getTable()}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default TableDataHoc(App, data);
