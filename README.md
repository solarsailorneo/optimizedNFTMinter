# Optimized NFT Minter
For this project, I am using an ERC-721a token. It is an upgraded version of the [NFT Minter](https://github.com/solarsailorneo/minterNFT)
I made previously. The prior version used a Moralis interface, which in this one has been removed in order to minimize dependencies.

The goal of this project was to create a visually appealing frontend while providing optimal functionality on the contract side. I have inherited from the famous [ERC721a Azuki contract](https://www.azuki.com/erc721a) which seems to be the state of the art in terms of gas-savings.

## Tools Used
- Reactjs
- Solidity
- Hardhat

## Use the contract
Disclaimer: Only the deployer of the contract has access to minting new NFTs to prevent unbounded mints.
1. To use the contract access the [website](https://optimizednftminter.netlify.app/) and connect your metamask wallet that you want to use to mint.
2. Set the number of NFTs you want to mint (Setting the `base URI` in the input form is optional).
3. The minted NFT[s] will show up under the transactions section
 once the transaction is done processing.
 
## Milestones
1. Deployed [custom contract](https://goerli.etherscan.io/address/0xc920a9acb898621a1d951bc5ab5d9d81f183d5fb) to the Goerli testnet.
2. Created a front-end to use the existing contract using custom provider using ethersjs.
3. Designed a transaction fetcher to display minted tokens dynamically.

## To Initialize a project like this
1. cd to client folder 
2. npm create vite@latest
3. create name for json
4. npm install
5. npm run dev
6. npm install -D tailwindcss postcss autoprefixer
7. npx tailwindcss init -p

## References
[1] [Front-end design](https://www.youtube.com/watch?v=Wn_Kb3MR_cU&list=WL&index=26) </br>
[2] [Azuki Contract](https://www.azuki.com/erc721a)

