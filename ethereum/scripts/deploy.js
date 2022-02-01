const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const Library = require('../artifacts/contracts/Library.sol/Library.json');
const mnemonic = 'stock trip nuclear audit purse sick common trash law student chief snap';

const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f9980e1bbc984a83a6c5bb70d49fa1c2");

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy contract from: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(JSON.stringify(Library.abi)))
    .deploy({ data: Library.bytecode })
    .send({ from: accounts[0], gas: '10000000' })

    console.log('Contract has been deployed to', result.options.address);
}

deploy();

// deployed to 0x8bAD18E564118E39D5d53cec9470AEac96ADCF22
