App description
=======================
This application is meant to imitate a library. There are two types of addresses which can interact with the library app - the manager and the users. Any wallet address other than manager is considered a user.  

The  users on the Rinkeby test net blockchain can visit to borrow, and later return books. For each borrowed book, the user is required to pay a fee of 0.01ETH + the amount of gas. Users can also verify whether an address (user) is a members of the library, and if they are currently borrowing a book. A user is not allowed to borrow more than 1 book or copy at a time, and must return it before borrowing another one. A user can also check a list of the users that have ever borrowed a given book.

The manager is the address which deployed the contract. In addition to the user available functions, the manager can add new books and copies. Lastly, the manager can also withdraw the fee collected from library members.

Steps for starting up the App
=======================

1.Start the library app with "npm start library".

2.Navigate to http://localhost:3000/ in your preferred browser. The browser must have Metamask installed, in order to interact with the contract.

3.Log in your Metamask account.

4.Set the network through the Metamask app to Rinkeby Test Network. The account must have some ETH on the Rinkeby Test Network.

5.Interact with the contract through the user interface.
