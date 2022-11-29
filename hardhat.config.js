require("@nomiclabs/hardhat-waffle");

const { ethers } = require("ethers/lib");
const { task } = require("hardhat/config");

const { deploy } = require('./tasks/deploy');
const { mint } = require('./tasks/mint');

task('deploy')
  .setDescription('Deploys the contract to the blockchain') 
  .setAction(async (_, hre) => deploy(hre));

task('mint')
  .setDescription('Mints a new NiceReviewTrophyNFT')
  .addParam('contractAddress', 'Contract address at blockchain')
  .addParam('toAddress', 'Address to whom the NFT will be minted to')
  .addParam('ipfsCid', 'IPFS CID which represents the NFT JSON metadata')
  .setAction(async (args, hre) => mint(
      args.contractAddress, 
      args.toAddress, 
      args.ipfsCid, 
      hre
    )
  );

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};
