# VoteMe Election Dapp
This is a dapp for voting where all of the votes and candidate registration happens on chain. Anyone is allowed to start an election with a registration period, voting period, and ending time. Anyone can sign up as a candidate during the registration period, and anyone can vote once during the voting period. Has a front end where voters can see the results and know how long is left in the election.

Smart Contract is written in solidity
Front End is written in reactjs

## Please follow these steps to run code succesfully
### Changes in deploy.js
-Enter your wallet pneumonic phrase on line 6. remove dummy phrase
-Enter your infura endpoint on line 8.

### Changes in web3.js
-Enter your infura endpoint on line 12.

### Changes in factory.js
**These changes will be done after running command node deploy.js**
-Copy factory contract address
-Place address in factory.js line 6

### Go to project directory in terminal and execute following commands
```
npm init
npm install ganache-cli mocha solc@0.4.17 fs-extra web3
npm install truffle hardware wallet
cd ethereum
node deploy.js
npm run dev
```
