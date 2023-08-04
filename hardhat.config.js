require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();


  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/U8nKjuloYI-3CN4Undlu_1clDm84HCVU",
      accounts: ["0x28de8e51dd74e340f2f946ffb73ceccb5bfd47177a28750dac554c7e8e5bfca7"],
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {

        enabled: true,
        runs: 200
      }
    }
  }
};