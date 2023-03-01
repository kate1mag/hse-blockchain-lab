const Web3 = require('web3');

const rpcUrl = 'https://mainnet.infura.io/v3/0bfd73115c9440fa99f829a58c1018bc';

const web3 = new Web3(rpcUrl);

module.exports = web3;