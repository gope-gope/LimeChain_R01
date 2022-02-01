import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class AddBook extends Component {
  state = {
    bookTitle: '',
    copiesAmount: '',
    loading: false,
    errorMsg: '',
  };

  addBook = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .addNewBook(this.state.bookTitle, this.state.copiesAmount)
      .send({ from: accounts[0]});

    }
    catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.addBook} style={{ marginTop: '40px'}} error={!!this.state.errorMsg}>
        <Form.Field>
          <label><h3>Add a new book to the library</h3></label>

          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.bookTitle}
            onChange = {event =>
              this.setState({ bookTitle: event.target.value })}
            placeholder='Title'
          />

          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.copiesAmount}
            onChange = {event =>
                this.setState({ copiesAmount: event.target.value })}
            placeholder='Number of copies'
          />
        </Form.Field>

        <Button
          color="blue"
          loading={this.state.loading}
          onClick={this.addBook}>Add book
        </Button>
        <Message error header="Oops!" content={this.state.errorMsg} />
      </Form>
    )
  }

}

export default AddBook;
