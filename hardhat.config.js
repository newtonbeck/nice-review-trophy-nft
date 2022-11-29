require("@nomiclabs/hardhat-waffle");

const { ethers } = require("ethers/lib");
const { task } = require("hardhat/config");

const { deploy } = require('./tasks/deploy');

task('deploy')
  .setDescription('Deploys the contract to the blockchain') 
  .setAction(async (args, hre) => deploy(hre));

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};
