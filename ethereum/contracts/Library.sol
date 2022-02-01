//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma abicoder v2;

import "hardhat/console.sol";

contract Library {

  address public manager;
  Book[] public libraryBooks;

  mapping(address => bool) public libraryMembers;
  mapping(address => bool) public currentBorrowers;

  struct Book {
    string name;
    uint8 totalCopies;
    uint8 availableCopies;
    address[] borrowersHistory;
  }

  constructor() {
    manager = msg.sender;
  }

  function addNewBook(string calldata name, uint8 totalCopies) public {
    require(msg.sender == manager);
    Book memory newBook = Book ({
      name: name,
      totalCopies: totalCopies,
      availableCopies: totalCopies,
      borrowersHistory: new address[](0)
    });
    libraryBooks.push(newBook);
  }

  function addCopies(uint8 copiesAmount, uint8 index) public {
    require(msg.sender == manager);
    libraryBooks[index].totalCopies += copiesAmount;
    libraryBooks[index].availableCopies += copiesAmount;
  }

  function borrowBook(uint8 index) public payable {
    require(!currentBorrowers[msg.sender]);
    require(libraryBooks[index].availableCopies > 0);
    require(msg.value >= 10000000000000000); // 0.01 eth
    if(!libraryMembers[msg.sender]){
        libraryMembers[msg.sender] = true;
    }
    Book storage borrowedBook = libraryBooks[index];
    borrowedBook.availableCopies--;
    borrowedBook.borrowersHistory.push(msg.sender);
    currentBorrowers[msg.sender] = true;
  }

  function returnBook(uint8 index) public {
    require(currentBorrowers[msg.sender]);
    require(libraryBooks[index].availableCopies < libraryBooks[index].totalCopies);
    libraryBooks[index].availableCopies++;
    currentBorrowers[msg.sender] = false;
  }

  function fetchDetails(uint index) public view returns (string memory, uint8, uint8){
    return (libraryBooks[index].name, libraryBooks[index].totalCopies, libraryBooks[index].availableCopies);
  }

  function getBooksCount() public view returns (uint) {
    return libraryBooks.length;
  }

  function viewRecords(uint index) public view returns(address[] memory){
    Book storage thisBook = libraryBooks[index];
    return thisBook.borrowersHistory;
  }

  function getRecordsCount(uint index) public view returns(uint){
    Book storage thisBook = libraryBooks[index];
    return thisBook.borrowersHistory.length;
  }

  function withdrawBalance() public payable {
    require(msg.sender == manager);
    payable(manager).transfer(address(this).balance);
  }

    // MANAGER
    // the address which deploys the contract must be the Manager
    // the manager must be able to add new books and the amount of copies per books
     // the manager must be able to add more copies of a book

    // USER
    // The user must be able to see the available books and copies per books
    // The user must be able to return a book
    // The user cannot borrow more than 1 book at a time
    // The user cannot borrow a book, if no copies are available
    // The user must be able to check all users who have ver borrowed a specific book



}
