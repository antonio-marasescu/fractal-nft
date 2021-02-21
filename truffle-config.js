module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
  },
  mocha: {
    timeout: 100000
  },
  contracts_directory: "./src/app/ethereum/contracts",
  contracts_build_directory: "./src/app/ethereum/abis",
  migrations_directory: "./src/app/ethereum/migrations",
  compilers: {
    solc: {
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      }
    }
  }
};
