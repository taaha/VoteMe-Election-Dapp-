Changes in deploy.js
Enter your wallet pneumonic phrase on line 6. remove dummy phrase
Enter your infura endpoint on line 8.

Changes in web3.js
Enter your infura endpoint on line 12.

Changes in factory.js
These changes will be done after running command node deploy.js
Copy factory contract address
Place address in factory.js line 6

Commands
npm init
npm install ganache-cli mocha solc@0.4.17 fs-extra web3
npm install truffle hardware wallet
cd ethereum
node deploy.js
npm run dev