require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/TyN68ZtJeDM_9HSYgjYQXJ_oVeFeY-BW',
      accounts: ['57aaa8ee13b6e17c9d86ad9caf5cdb113b23740825a53fa97bbab05fc30e1962'],
    },
  },
};

goerli
require("@nomicfoundation/hardhat-toolbox");

import('hardhat/config').HardhatUserConfig;

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/iMo6eVDbCjaniG8oSXTQHj9mcS1G7qP_',
      accounts: ['57aaa8ee13b6e17c9d86ad9caf5cdb113b23740825a53fa97bbab05fc30e1962'],
    },
  },
};