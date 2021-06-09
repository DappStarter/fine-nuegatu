require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid enter off food trap razor outside company inside light army gesture'; 
let testAccounts = [
"0x68429b50c2747c6153b4e0445c8919c0c11722b473af1eadcc356ab840e16734",
"0xfbb9cb8f0e84e20e4c8159a925c45efd51a044ab40fa2bd901dfaa3fa3c2aaf9",
"0x7c8654126ebc6d40185650a9f44391993b059106947902285ea3aa1cc28e1de1",
"0xb427d516bf8f61649e6bc596fd3cefbab0166de7771f8b91b7362c24f84c8d2f",
"0x73796ac9440e4581ae22bb76d4ab335469a12a740cf77c13fee1d4e63cc4c35e",
"0x3b4ae99172482b7fa10f787131c33f072a837468095c12eab1e477ea2aca2424",
"0xc402860d6c46f7428ebec6463cb449df1496b465641e328a26b10b45b9efa273",
"0x02b8d31953340935b0dc29a76a2bcb71d0cf7379b5f78fe8c5a595317e8e94ea",
"0x23228fb613a33aa1ba29727f9aeb20df3b146752a703371f1164fb92cc4a03af",
"0xec57b16d13e61422c3e680f1f00f0d6c1cd133207b99f1e0cb7f401ae8781abe"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


