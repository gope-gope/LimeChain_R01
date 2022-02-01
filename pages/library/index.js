import React, { Component } from 'react';
import Layout from '../../components/Layout';
import BackgroundImage from '../../components/BackgroundImage';
import AddBook from '../../components/AddBook';
import AddCopies from '../../components/AddCopies';
import CheckMember from '../../components/CheckMember';
import RenderRow from '../../components/RenderRow';
import WithdrawBalance from '../../components/WithdrawBalance';
import ViewRecords from '../../components/ViewRecords';
import { Router } from '../../routes';
import { Button, Form, Input, Message, Table, Segment } from 'semantic-ui-react';
import library from '../../ethereum/scripts/library';
import web3 from '../../ethereum/scripts/web3';


class LibraryPage extends Component {

  static async getInitialProps(props) {
    const booksCount = await library.methods.getBooksCount().call();
    const books = await Promise.all(
      Array(parseInt(booksCount))
      .fill()
      .map((element, index) => {
        return library.methods.libraryBooks(index).call();
      })
    )

    return { booksCount, books };

  }

  renderRows() {
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
    const { Header, Row, HeaderCell, Body } = Table;
    return (

      <Layout>

        <BackgroundImage />

        <Segment style={{ marginTop: '40px'}}>
        <h3 centered='true'>List of books</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Title</HeaderCell>
              <HeaderCell>Total Copies</HeaderCell>
              <HeaderCell>Available Copies</HeaderCell>
              <HeaderCell>Borrow book</HeaderCell>
              <HeaderCell>Return book</HeaderCell>
              <HeaderCell>Notifier</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <h3>Please note!</h3>
        <h4>Borrowing a book costs 0.01ETH. Returning it only costs covering the transaction gas.</h4>
        </Segment>

        <Segment style={{ marginTop: '40px'}}>
          <h3 centered='true'>User functions</h3>
          <CheckMember />
          <ViewRecords />
        </Segment>

        <Segment style={{ marginTop: '40px'}}>
          <h3 centered='true'>Manager functions</h3>
          <AddBook />
          <AddCopies />
          <WithdrawBalance />
        </Segment>

      </Layout>

    )

  };

};

export default LibraryPage;
