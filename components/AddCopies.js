import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class AddCopies extends Component {
  state = {
    bookIndex: '',
    copiesAmount: '',
    loading: false,
    errorMsg: '',
  };

  addCopies = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .addCopies(this.state.copiesAmount, this.state.bookIndex)
      .send({ from: accounts[0]});
    }
    catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.addCopies} style={{ marginTop: '40px'}} error={!!this.state.errorMsg}>
        <Form.Field>
          <label><h3>Add copies of a book</h3></label>

          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.copiesAmount}
            onChange = {event =>
              this.setState({ copiesAmount: event.target.value })}
            placeholder='Number of copies'
          />

          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.bookIndex}
            onChange = {event =>
                this.setState({ bookIndex: event.target.value })}
            placeholder='Index'
          />
        </Form.Field>

        <Button
          color="blue"
          loading={this.state.loading}
          onClick={this.addCopies}>Add book
        </Button>
        <Message error header="Oops!" content={this.state.errorMsg} />
      </Form>
    )
  }

}

export default AddCopies;
