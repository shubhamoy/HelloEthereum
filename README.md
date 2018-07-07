# Hello Ethereum
It is the simplest implementation of Smart Contract to get a quick hands-on with the intricacies of ethereum development.
  - Build and interact with a smart contract
  - Test the smart contract
  - Visualise everything using Ganache

# How to begin?
1. Install truffle
```$> npm install -g truffle```
2. Download ganache from (https://truffleframework.com/ganache)
3. Run `Ganache`
4. Clone this repo
```$> git clone https://github.com/shubhamoy/HelloEthereum```
5. ```$> truffle migrate --network ganache```
6. After completion of the above command, switch to `Ganache` and it should show the contract creation and contract calls.

# Interact with the Smart Contract
1. Open Truffle Console and connect it to `Ganache` ```$> truffle console --network ganache```
2. Create instance of the smart contract
```truffle(ganache)> Election.deployed().then((instance) => { app=instance })```
3. Get the vote count ```truffle(ganache)> app.count()```
4. Call the upvote method ```truffle(ganache)> app.upvote({from: web3.eth.accounts[1]})```
5. Call the upvote method ```truffle(ganache)> app.upvote({from: web3.eth.accounts[2]})```
6. Finally, check the vote count value ```truffle(ganache)> app.count()```

# Testing the Smart Contract
1. Test Cases `./test/Election_Test.js`
2. Test the contract ```$>truffle test --network ganache```