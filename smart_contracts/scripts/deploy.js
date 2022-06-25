const hre = require("hardhat");

const main = async () => {
  MyNFTMinter = await hre.ethers.getContractFactory("MyNFTMinter");
  myNFTMinter = await MyNFTMinter.deploy("myNFTMinter", "721A");

    await myNFTMinter.deployed();

    console.log("MyNFTMinter deployed to: ", myNFTMinter.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});