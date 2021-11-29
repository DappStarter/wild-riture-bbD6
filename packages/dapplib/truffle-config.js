require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot charge riot still erosion coral light army gate'; 
let testAccounts = [
"0xe5979dbd72c047e84defd49a536219ce135223c32519233a6c89475ae50c2475",
"0xcd25cf9ed72403e6ee6936f5629796b75f9ff901ce65d749f72ef9804d98abb9",
"0x1922e8d521c6670d9889968e73d2dd50f59e081691ecf56f0ea5515936487be2",
"0xd20a7bd2afd9ac2547912aed2d0e526d5c1cf7c753563c7ae6803670cf04a23e",
"0x74963ac39428398b7bba022f50e242f713f02db8ec7842a3b5f2a02d6ce83bc6",
"0xbb378581b03168ae17959daba060cc07ed3647bc816cc1eae7309df893d8d966",
"0x61fac6f2702bd3e04af646f3d5b7ec145cb3666860abfa96b45fe9085ca9a48e",
"0x3503e17f94234a573828a4c9bcf64e823a7d387318bbcb81f957d0ec72786907",
"0x0d301656f7b12beb734b7e1fdcc4d97316492b626bac6e0260bb5a5c8fe02e69",
"0x04dcc1d0695c7a88ab7d5ec28bf8cc4481ca9f82054887525169c1c6889f5770"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

