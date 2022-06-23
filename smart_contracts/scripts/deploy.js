const hre = require("hardhat");

const main = async () => {
    Erc721a = await hre.ethers.getContractFactory("MyNFTMinter");
    erc721a = await Erc721a.deploy("erc721aSample", "721A");

    await erc721a.deployed();

    console.log("ERC721a deployed to: ", erc721a.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});