const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ElectionFactory.json');

const provider = new HDWalletProvider(
    'alpha beta charlie delta echo falcon gamma horse indy joker kite lamma',
    // remember to replace this with your own phrase!
    'https://rinkeby.infura.io/yourendpoint'
    // remember to change this to your own endpoint!
  );
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  //change or add arguments below
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
