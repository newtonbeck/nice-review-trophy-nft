# NiceReview NFT trophies

## Requirements

- node 16
- [hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation)
- An [Alchemy account](https://www.alchemy.com/)

## Running the project

### Locally

First, start a local "Ethereum node" using hardhat.

#### Step 1

```
npx hardhat node
```

The command above will output some local test accounts which will be used later during the NFT creation.

```shell
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
```

#### Step 2

In another tab, deploy the NFT contract to the local node.

```shell
npx hardhat deploy --network localhost
```

The command above will generate an output similar to:

```shell
Creating the contract factory for NiceReviewTrophyNFT 🏃
Deploying the NiceReviewTrophyNFT contract 🚀
Contract successfully deploy to blockchain at 0x5FbDB2315678afecb367f032d93F642f64180aa3 🎉
```

The address `0x5FbDB2315678afecb367f032d93F642f64180aa3` represents the contract's address in the local node, keep it for the next command.

#### Step 4

Finally, create the NFT running the command below. Provide one of the test account's addresses to the `--to-address` argument (from the first step). Use `QmTNi2TeeDkL1r3JPVNWnJAGxUFuQUFVmGpWPE2T5G4Tz3` as `--ipfs-cid` argument for now.

```shell
npx hardhat mint \
--contract-address 0x5FbDB2315678afecb367f032d93F642f64180aa3 \
--to-address 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 \
--ipfs-cid QmTNi2TeeDkL1r3JPVNWnJAGxUFuQUFVmGpWPE2T5G4Tz3 \
--network localhost
```

### Ethereum goerli testnet

> :warning: Never commit your private key, people will certainly steal your Ethereum funds using that key

First, create a `.env` file containing:

```
GOERLI_ALCHEMY_NODE_URL_WITH_API_KEY="https://eth-goerli.g.alchemy.com/v2/<YOUR_ALCHEMY_API_KEY>"
GOERLI_SIGNER_PRIVATE_KEY="<YOUR WALLET PRIVATE KEY>"
```

Then, replace the `--network localhost` by `--network goerli` in the commands shown in the section above to deploy your contract and create your NFTs in the Goerli testnet.

### Ethereum mainnet

> :warning: Never commit your private key, people will certainly steal your Ethereum funds using that key

First, create a `.env` file containing:

```
ALCHEMY_NODE_URL_WITH_API_KEY="https://eth-mainnet.g.alchemy.com/v2/<YOUR_ALCHEMY_API_KEY>"
SIGNER_PRIVATE_KEY="<YOUR WALLET PRIVATE KEY>"
```

Then, replace the `--network localhost` by `--network mainnet` in the commands shown in the section above to deploy your contract and create your NFTs in the Ethereum's mainnet.