require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');  // @notice - Should new module.
const mnemonic = process.env.MNEMONIC;


module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, process.env.RPC_URL_ROPSTEN)
        //return new HDWalletProvider("Replace here with your mnemonic word", process.env.RPC_URL_ROPSTEN)
      },
      network_id: '3',
      //gas:         4600000,      // Gas limit used for deploys
      //gasPrice:    20000000000,
      skipDryRun:  true
    },
    development: {
        host:       "localhost",
        port:       7545,
        network_id: "*",         // Match any network id
        gasPrice:   20000000000, // Gas price used for deploys
        gas:        6721975      // Gas limit used for deploys
    },
    production: {
        host:       "localhost",
        port:       7545,
        network_id: "*",         // Match any network id
        gasPrice:   20000000000, // Gas price used for deploys
        gas:        6721975      // Gas limit used for deploys
    },
    coverage: {     // See <https://www.npmjs.com/package/solidity-coverage#network-configuration>
        host:       "localhost",
        port:       7555,            // Also in .solcover.js
        network_id: "*",             // Match any network id
        gasPrice:   0x1,             // Gas price used for deploys
        gas:        0x1fffffffffffff // Gas limit used for deploys
    }
  },
  mocha: {
      enableTimeouts: false,
      useColors:      true,
      bail:           true,
      reporter:       "list" // See <https://mochajs.org/#reporters>
  },
  compilers: {
      solc: {
          version: "0.4.26", // A version or constraint - Ex. "^0.5.0"

          optimizer: {
              enabled: true,
              runs:    200
          }
      }
  }
}
