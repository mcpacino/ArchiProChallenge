import React from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';

import {TableDataHoc} from './TableDataHOC';
import {SortButton} from './SortButton';

function App({data, column, direction, toggleSortState}) {
  const getTable = () => {
    return (
      <Table className="App-table">
        <thead>
        <tr>
          <th>
            Name
            &nbsp;
            <SortButton currentColumn={'name'} column={column} direction={direction} toggleSortState={toggleSortState}/>
          </th>
          <th>
            Email
            &nbsp;
            <SortButton currentColumn={'email'} column={column} direction={direction} toggleSortState={toggleSortState}/>
          </th>
          <th>
            Contact Number
            &nbsp;
            <SortButton currentColumn={'phone'} column={column} direction={direction} toggleSortState={toggleSortState}/>
          </th>
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
          <td>{name} </td>
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
