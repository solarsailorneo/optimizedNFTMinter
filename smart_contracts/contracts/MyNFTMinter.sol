// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import './ERC721A.sol';

contract MyNFTMinter is Ownable, ERC721A {
    constructor(string memory name, string memory symbol) ERC721A(name, symbol) {}

    string private _baseTokenURI;

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        /* Solar Sailor: This restriction is necessary to pack the indices of the tokens for the gas savings. 
        /  it is not a major inconvenience. In addition, the URI now points to off-chain
        */
        _mint(msg.sender, quantity);
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
  }
}