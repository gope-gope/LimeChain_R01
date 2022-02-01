import web3 from './web3';

import Library from '../artifacts/contracts/Library.sol/Library.json';

const instance = new web3.eth.Contract(
  JSON.parse(JSON.stringify(Library.abi)),
  '0x8bAD18E564118E39D5d53cec9470AEac96ADCF22'
);

export default instance;
