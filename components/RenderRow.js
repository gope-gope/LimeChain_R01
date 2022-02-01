import React, { Component } from 'react';
import { Table, Row, Cell, Button, Message } from 'semantic-ui-react';
import web3 from '../ethereum/scripts/web3';
import library from '../ethereum/scripts/library';


class RenderRow extends Component {

  state = {
    bookIndex: '',
    loadingReturn: false,
    loadingBorrow: false,
    errorMsg: '',
    notifierMsg: '',
    bookName: '',
    messageHidden: true
  };


  borrowBook = async (event) => {
    event.preventDefault();
    this.setState({ loadingBorrow: true, errorMsg: '', notifierMsg: '', messageHidden: true, bookIndex: this.props.id });

    try {
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .borrowBook(this.state.bookIndex)
      .send({ from: accounts[0], value: '10000000000000000' }); //0.01eth
      const book = await library.methods.fetchDetails(this.state.bookIndex).call();
      this.setState({ bookName: book[0], notifierMsg: 'Successful', messageHidden: false });
    }
    catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loadingBorrow: false });
  };

  returnBook = async (event) => {
    event.preventDefault();
    this.setState({ loadingReturn: true, errorMsg: '', notifierMsg: '', messageHidden: true, bookIndex: this.props.id });

    try {
      const accounts = await web3.eth.getAccounts();
      await library.methods
      .returnBook(this.state.bookIndex)
      .send({ from: accounts[0]});
      const book = await library.methods.fetchDetails(this.state.bookIndex).call();
      this.setState({ bookName: book[0], notifierMsg: 'Successful', messageHidden: false });
    }
    catch (err) {
      this.setState({ errorMsg: err.message })
    }
    this.setState({ loadingReturn: false });
  };

  render(){

    const { Row, Cell } = Table;
    const { id, title, totalCopies, availableCopies, message } = this.props;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{title}</Cell>
        <Cell>{totalCopies}</Cell>
        <Cell>{availableCopies}</Cell>
        <Cell>
          <Button primary
            onClick={this.borrowBook}
            loading={this.state.loadingBorrow}>Borrow
          </Button>
        </Cell>
        <Cell>
          <Button primary
            onClick={this.returnBook}
            loading={this.state.loadingReturn}>Return
          </Button>
        </Cell>
        <Cell>
          <Message color="green" hidden={this.state.messageHidden}>{this.state.notifierMsg}.</Message>
        </Cell>
      </Row>
    )
  }

}

export default RenderRow;
