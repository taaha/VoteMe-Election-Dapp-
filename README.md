# VoteMe Election Dapp
This is a dapp for voting where all of the votes and candidate registration happens on chain. Anyone is allowed to start an election with a registration period, voting period, and ending time. Anyone can sign up as a candidate during the registration period, and anyone can vote once during the voting period. Has a front end where voters can see the results and know how long is left in the election.  
  
-Smart Contract is written in solidity  
-Front End is written in reactjs (using semantic-ui-react)
  
  
## Please follow these steps to run code succesfully
### Changes in deploy.js
-Enter your wallet pneumonic phrase on line 6. remove dummy phrase  
-Enter your infura endpoint on line 8.  
  
### Changes in web3.js
-Enter your infura endpoint on line 12.  

### Changes in factory.js
**These changes will be done after running command node deploy.js**  
-Copy factory contract address.  
-Place address in factory.js line 6.  
  
  
### Go to project directory in terminal and execute following commands
```
npm init
npm install ganache-cli mocha solc@0.4.17 fs-extra web3
npm install truffle hardware wallet
cd ethereum
node deploy.js
npm run dev
```
## Few Screenshots of frontend
![Main Page](https://user-images.githubusercontent.com/5251294/185807134-39717951-d91d-4035-a6d3-91573ec61c71.png)
![Candidate Registration Page](https://user-images.githubusercontent.com/5251294/185807143-4f5629ef-0c56-45f7-974c-b53270320ca6.png)
![Result page](https://user-images.githubusercontent.com/5251294/185807146-58ee0de8-9d19-426b-a8aa-32e217052a61.png)

## Feel free to build and improve this code
May the fork be with you - Darth Panda :panda_face:
