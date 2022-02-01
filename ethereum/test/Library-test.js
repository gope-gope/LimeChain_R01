const { expect } = require("chai");
const ganache = require('ganache-cli');
var should = require('chai').should();

describe("Library contract", function() {
  let library;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Library = await ethers.getContractFactory("Library");
    library = await Library.connect(owner).deploy();
    await library.deployed();
  });

  describe("Library tests", function() {
    console.log(owner, addr1, addr2);

    it("The creator of the contract must be its manager", async function () {

      expect(await library.manager()).to.equal(owner.address);

    });

    it("The manager's address should be accessible to anyone", async function () {

      expect(await library.connect(owner).manager()).to.equal(owner.address);

    });

    it("The manager must be able to add new books and copies to the library", async function () {

      // Add a new book, then check the book parameters at index 0 of the book array
      const newBook = await library.connect(owner).addNewBook("Potter", 5);
      await newBook.wait();
      expect(await library.libraryBooks(0)).to.have.property("name", "Potter");
      expect(await library.libraryBooks(0)).to.have.property("totalCopies", 5);
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 5);

      // Add copies to the book, then check the updated parameters at index 0 of the book array
      const newCopies = await library.connect(owner).addCopies(5, 0);
      await newCopies.wait();
      expect(await library.libraryBooks(0)).to.have.property("totalCopies", 10);
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 10);

    });

    it("Must NOT be possible for anyone except the manager to add books", async function () {

      try {
        // Attempting to add a book from an address which is NOT the manager
        await library.connect(addr1).addNewBook("Potter", 5);
        console.log("Test must fail and should NOT display this message.")
      } catch {
        // The console log below indicates that the function above has failed
        // and jumped into the catch, without printing the first console log.
        expect(await library.libraryBooks).to.have.lengthOf(0);
        console.log("The test below failed as it should.");
      }

    });

    it("Must NOT be possible for anyone except the manager to add copies", async function () {

      // First the manager adds a book to the library
      const newBook = await library.connect(owner).addNewBook("Potter", 5);
      await newBook.wait();

      // Then a non-manager address tries to add more copies of it
      try {
        // Attempting to add a copies from an address which is NOT the manager
        await library.connect(addr1).addCopies(5, 0);
        console.log("Test must fail and should NOT display this message.")
      } catch {
        // The console log below indicates that the function above has failed
        // and jumped into the catch, without printing the first console log.
        expect(await library.libraryBooks(0)).to.have.property("totalCopies", 5);
        console.log("The test below failed as it should.");
      }

    });

    it("Must be possible for any address to borrow a book", async function() {

      // First the manager adds a book to the library
      const newBook = await library.connect(owner).addNewBook("Potter", 5);
      await newBook.wait();

      // Then 2 users try to borrow a book
      const borrow1 = await library.connect(addr1).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 4);

      const borrow2 = await library.connect(addr2).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow2.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 3);

    })

    it("The number of available copies must change as they are borrowed and returned", async function() {

      // First the manager adds a book to the library
      const newBook = await library.connect(owner).addNewBook("Potter", 5);
      await newBook.wait();

      // A user borrows a book. Available copies must be 4.
      const borrow1 = await library.connect(addr1).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 4);
      // Another user borrows a book. Available copies must be 3.
      const borrow2 = await library.connect(addr2).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow2.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 3);
      // The first user returns a copy. Available copies must be 4.
      const return1 = await library.connect(addr1).returnBook(0);
      await return1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 4);

    });

    it("Must NOT be possible to borrow a book out of copies", async function() {

      // First the manager adds a book to the library
      const newBook = await library.connect(owner).addNewBook("Potter", 1);
      await newBook.wait();

      // Then a user borrows a book
      const borrow1 = await library.connect(addr1).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 0);
      // Then another user tries to borrow a book out of copies and fails to.
      try {
        const borrow2 = await library.connect(addr2).borrowBook(0, {
          value: ethers.utils.parseEther("0.01")
        });
        await borrow2.wait();
        console.log("Test must fail and should NOT display this message.")
      } catch {
        expect(await library.libraryBooks(0)).to.have.property("availableCopies", 0);
        console.log("The test below failed as it should.")
      }

    });

    it("A user CANNOT borrow more than 1 book/copy at a time", async function() {

      // First the manager adds a book to the library
      const newBook = await library.connect(owner).addNewBook("Potter", 5);
      await newBook.wait();

      // Then a user borrows a book
      const borrow1 = await library.connect(addr1).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 4);
      // Then the user tries to borrow a second copy of the book.
      try {
        const borrow2 = await library.connect(addr1).borrowBook(0, {
          value: ethers.utils.parseEther("0.01")
        });
        await borrow2.wait();
        console.log("Test must fail and should NOT display this message.")
      } catch {
        expect(await library.libraryBooks(0)).to.have.property("availableCopies", 4);
        console.log("The test below failed as it should.")
      }

    });

    it("A user CANNOT return a book, which has all of its copies already available at the library", async function() {

      // First the manager adds a book to the library
      const newBook = await library.connect(owner).addNewBook("Potter", 5);
      await newBook.wait();

      // Then a user borrows a book
      const borrow1 = await library.connect(addr1).borrowBook(0, {
        value: ethers.utils.parseEther("0.01")
      });
      await borrow1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 4);
      // Then the user returns a copy of the book.
      const return1 = await library.connect(addr1).returnBook(0);
      await return1.wait();
      expect(await library.libraryBooks(0)).to.have.property("availableCopies", 5);
      // Then the user attempts to return another copy and fails to.
      try {
        const return1 = await library.connect(addr1).returnBook(0, {
          value: ethers.utils.parseEther("0.01")
        });
        await return1.wait();
        expect(await library.libraryBooks(0)).to.have.property("availableCopies", 5);
      } catch {
        console.log("The test below failed as it should.");
      }

    });

  });

})
