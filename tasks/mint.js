const contractJSON = require('../artifacts/contracts/NiceReviewTrophyNFT.sol/NiceReviewTrophyNFT.json');

const mint = async (contractAddress, toAddress, ipfsCid, { ethers }) => {
    const [ myAccount ] = await ethers.getSigners();
    
    console.log(`Connecting to the contract at ${contractAddress} 🏃`);
    const contract = new ethers.Contract(contractAddress, contractJSON.abi, myAccount);

    console.log(`Minting the trophy to ${toAddress} with IPFS CID ${ipfsCid} 🏆`);
    const transaction = await contract.safeMint(
        toAddress,
        `ipfs://${ipfsCid}`
    );
    await transaction.wait();

    console.log(`Trophy successfully minted at block ${transaction.blockNumber} 🎉`);
};

exports.mint = mint;
