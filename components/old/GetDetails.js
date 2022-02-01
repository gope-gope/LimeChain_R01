import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class GetDetails extends Component {

  state = {
    errorMsg: '',
    bookIndex: '',
    fetchedName: '',
    fetchedTotalCopies: '',
    fetchedAvailableCopies: '',
    messageHidden: true
  };

  fetchDetails = async (event) => {
    event.preventDefault();
    const book = await library.methods.fetchDetails(this.state.bookIndex).call();
    this.setState({ fetchedName: book[0] });
    this.setState({ fetchedTotalCopies: book[1] });
    this.setState({ fetchedAvailableCopies: book[2] });
    this.setState({ messageHidden: false });
  }

  render(){
    return (
      <Form style={{ marginTop: '40px'}} error={!!this.state.errorMsg}>
        <Form.Field>
          <label><h3>Get the details of a book</h3></label>
          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.bookIndex}
            onChange = {event =>
              this.setState({ bookIndex: event.target.value })}
            placeholder='Book index'
          />
        </Form.Field>

        <Button
          onClick={this.fetchDetails}
          color="blue">Get details
        </Button>
        <Message
          style={{ marginTop: '15px', marginBot: '20px' }}
          hidden={this.state.messageHidden}>
          {this.state.fetchedName} has {this.state.fetchedTotalCopies} total copies
          and {this.state.fetchedAvailableCopies} available copies.
        </Message>
        <Message error header="Oops!" content={this.state.errorMsg} />
      </Form>
    )
  }
}

export default GetDetails;
