import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';



class CheckMember extends Component {

  state = {
    errMsg: '',
    checkAddress: '',
    member: '',
    borrower: '',
    messageHidden: true,
  };

  checkAddress = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    if(await library.methods.libraryMembers(this.state.checkAddress).call()){
      this.setState({ member: 'is a member of the library '});
      if(await library.methods.currentBorrowers(this.state.checkAddress).call()){
        this.setState({ borrower: 'and currently borrows a book.'});

      }
      if(!await library.methods.currentBorrowers(this.state.checkAddress).call()){
        this.setState({ borrower: 'and currently does not borrow a book.'});
      }

    }
    if(!await library.methods.libraryMembers(this.state.checkAddress).call()){
      this.setState({ member: 'is not a member of the library.'});
      this.setState({ borrower: '' });
    }
    this.setState({ messageHidden: false });
  }

  render(){
    return(
      <Form style={{ marginTop: '40px' }} error={!!this.state.errMsg}>
        <Form.Field>
          <label><h3>Check member/borrower address</h3></label>
          <Input
            style={{ marginTop: '10px'}}
            value = {this.state.checkAddress}
            onChange = {event =>
              this.setState({ checkAddress: event.target.value })}
            placeholder='Address'
          />
        </Form.Field>
        <Button
          onClick={this.checkAddress}
          color="blue">Check address
        </Button>
        <Message hidden={this.state.messageHidden}>
          This address {this.state.member} {this.state.borrower}
        </Message>
        <Message error header="Oops!" content={this.state.errorMsg} />
      </Form>
    )
  }
}

export default CheckMember;
