import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class ReturnBook extends Component {
  state = {
    bookIndex: '',
    loading: false,
    errorMsg: '',
    returnMsg: false,
    bookName: ''
  };

  returnBook = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .returnBook(this.state.bookIndex)
      .send({ from: accounts[0]});
      this.setState({ returnMsg: true})
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
      <Form onSubmit={this.returnwBook} style={{ marginTop: '40px'}}
      success={this.state.returnMsg}>
        <Form.Field>
          <label><h3>Return a book</h3></label>

          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.bookIndex}
            onChange = {event =>
              this.setState({ bookIndex: event.target.value })}
            placeholder='Index'
          />

        </Form.Field>

        <Button
          size='medium'
          color="blue"
          loading={this.state.loading}
          onClick={this.returnBook}>Return book
        </Button>
        <Message error header="Oops!" content={this.state.errorMsg} />
        <Message success>You have returned "{this.state.bookName}"</Message>
      </Form>
    )
  }

}

export default ReturnBook;
