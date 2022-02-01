require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


const RINKEBY_PRIVATE_KEY = "f9980e1bbc984a83a6c5bb70d49fa1c2";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${RINKEBY_PRIVATE_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },

};
