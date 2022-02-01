import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class ViewRecords extends Component {

  state = {
    bookIndex: '',
    borrowers: [],
    messageHidden: true
  };

  getBorrowers = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const borrowers = await library.methods.viewRecords(this.state.bookIndex).call();
    this.setState({ messageHidden: false });
    this.setState({ borrowers: borrowers });
    console.log(this.state.borrowers);
  };

  renderBorrowers(){
    const borrowers =  this.state.borrowers;
    return (
      <ol>
      {borrowers.map(borrower => (
        <li key={borrower}>{borrower}</li>
      ))}
    </ol>
    )
  }

  render(){
    return(
      <Form onSubmit={this.getBorrowers} style={{ marginTop: '40px' }} error={!!this.state.errorMsg}>
        <label><h3>Check a book's borrowers history</h3></label>
        <Input
          fluid
          style={{ marginTop: '10px'}}
          placeholder='Index'
          value={this.state.bookIndex}
          onChange={event => this.setState({ bookIndex: event.target.value })}
        />

        <Button
          primary
          onClick={this.getBorrowers}
          style={{ marginTop: '10px' }}>Check it!
        </Button>
        <Message hidden={this.state.messageHidden}>{this.renderBorrowers()}</Message>
      </Form>
    )
  }
}

export default ViewRecords;
