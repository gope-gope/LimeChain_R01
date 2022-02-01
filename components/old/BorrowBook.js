import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class BorrowBook extends Component {

  state = {
    bookIndex: '',
    loading: false,
    errorMsg: '',
    borrowMsg: false,
    bookName: ''
  };

  borrowBook = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '', borrowMsg: false });

    try {
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .borrowBook(this.state.bookIndex)
      .send({ from: accounts[0], value: 0.01 });
      this.setState({ borrowMsg: true})
      const book = await library.methods.fetchDetails(this.state.bookIndex).call();
      this.setState({ bookName: book[0] });
    }
    catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.borrowBook} style={{ marginTop: '40px'}} error={!!this.state.errorMsg}
      success={this.state.borrowMsg}>
        <Form.Field>
          <label><h3>Borrow a book</h3></label>

          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.bookIndex}
            onChange = {event =>
              this.setState({ bookIndex: event.target.value })}
            placeholder='Index'
          />

        </Form.Field>

        <Button
          size="medium"
          color="blue"
          loading={this.state.loading}
          onClick={this.borrowBook}>Borrow book
        </Button>
        <Message error header="Oops!" content={this.state.errorMsg} />
        <Message success>You have borrowed "{this.state.bookName}"</Message>
      </Form>
    )
  }

}

export default BorrowBook;
