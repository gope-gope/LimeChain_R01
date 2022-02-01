import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import RenderRow from './RenderRow';
import web3 from '../ethereum/scripts/web3';
import library from '../ethereum/scripts/library';


class BookList extends Component {

  renderRows() {
    console.log(this.props.books)
    return  (this.props.books.map((book, index) => {
      return (
        <RenderRow
          key={index}
          id={index}
          title={book.name}
          totalCopies={book.totalCopies}
          availableCopies={book.availableCopies}
        />
      )})
    )
  }

  render() {
    const { Row, Header, HeaderCell, Body } = Table;
    return (
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Title</HeaderCell>
            <HeaderCell>Total Copies</HeaderCell>
            <HeaderCell>Available Copies</HeaderCell>
            <HeaderCell>Borrow</HeaderCell>
            <HeaderCell>Return</HeaderCell>
          </Row>
        </Header>
        <Body>{this.renderRows()}</Body>
      </Table>
    )
  }

}

export default BookList
