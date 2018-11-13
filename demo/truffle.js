const HDWalletProvider = require('truffle-hdwallet-provider-privkey');

module.exports = {
    networks: {
        kovan: {
            provider: function() {
                return new HDWalletProvider(["470cb723777b71d9afca2f4148d60ae6e5744abcc324fd48991c7fa691e7f7db"], `https://kovan.decenter.com/`);
            },
            network_id: '42',
            host: 'kovan.decenter.com',
            port: 4443,
            gasPrice: 2000000000 // 2 GWei
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(["fd5f9928f7efc0bb2a2534b9bebdd5d94ad261a920bf1161242b899fce42f8ea"], `https://rinkeby.decenter.com/`);
            },
            network_id: '4',
            host: 'rinkeby.decenter.com',
            port: 4443,
            gasPrice: 10000000000 // 10 GWei
        },
        local: {
            provider: function() {
                return new HDWalletProvider(["24c6587bde13b53654e689d9918d3391b832d5f88741b59166dc978b73557a85"], `http://localhost:9545`);
            },
            network_id: '5777',
            host: 'localhost',
            port: 9545,
            gasPrice: 10000000000 // 10 GWei
        },
        geth: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            gas: 4600000,
            gasPrice: 1000,
        },
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
            gasPrice: 0
        }
    }
};
