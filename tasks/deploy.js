const deploy = async ({ ethers }) => {
    console.log("Creating the contract factory for NiceReviewTrophyNFT 🏃");
    const contractFactory = await ethers.getContractFactory('NiceReviewTrophyNFT');

    console.log("Deploying the NiceReviewTrophyNFT contract 🚀");
    const contract = await contractFactory.deploy();
    // Blocks the script execution until the contract is deployed
    await contract.deployed();

    console.log(`Contract successfully deploy to blockchain at ${contract.address} 🎉`);
};

exports.deploy = deploy;
