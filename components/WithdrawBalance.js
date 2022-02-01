import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import library from '../ethereum/scripts/library';
import web3 from '../ethereum/scripts/web3';


class WithdrawBalance extends Component {

  state = {
    loading: false,
    errorMsg: '',
  };

  withdraw = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMsg: '' });

    try {
      console.log('asd');
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .withdrawBalance()
      .send({ from: accounts[0]});
    }
    catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loading: false });
  };

  render(){
    return(
      <Form onSubmit={this.withdraw} style={{ marginTop: '40px'}} error={!!this.state.errorMsg}>
        <label><h3>Withdraw the collected fees</h3></label>
        <Button
          primary
          style={{ marginTop: '10px'}}
          loading={this.state.loading}
          onClick={this.withdraw}>Withdraw
        </Button>
      </Form>
    )
  }
}

export default WithdrawBalance;
