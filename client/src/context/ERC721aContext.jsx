import React, { useEffect, useState } from 'react';
import { ethers, BigNumber } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const ERC721aContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const ERC721aContract = new ethers.Contract(contractAddress, contractABI, signer);

    return ERC721aContract;
}



export const ERC721aProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({quantity: '', baseURI: ''});
    const [allMints, setAllMints] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
    
    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if(accounts.length)
            {
                setCurrentAccount(accounts[0]);
                console.log('Succesfully connected');
                getAllMints();
            }
            else{
                console.log('No accounts found');
            }
        }
        catch (error)
        {
            console.log(error);

            throw new Error("No ethereum object");

        } 

    }

    const checkIfTransactionExists = async () => {
        try {
            const erc721aContract = getEthereumContract();
        }
        catch (error) {

        }
    }

    const getAllMints = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            
            let listOfOwners = [];

            const erc721aContract = getEthereumContract();
            const allMints = await erc721aContract.totalSupply();
            const totalSupply = allMints.toNumber();

            for(let i = 0; i < totalSupply; ++i)
            {
                const walletAddress = await erc721aContract.ownerOf(BigNumber.from(i));
                listOfOwners.push(walletAddress);
            }

            const structuredMints = listOfOwners.map((mint) => ({
                mintAddress: mint
            }));

            setAllMints(structuredMints);
                

        }
        catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
        
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);

        }
        catch (error) {
            console.log(error);

            throw new Error("No ethereum object");

        }
    }

    const sendMint = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            // get data from form
            const { quantity, baseURI } = formData;

            const erc721aContract = getEthereumContract();

            setIsLoading(true);

            if(baseURI.toString().length > 0)
            {
                const transactionHash1 = await erc721aContract.setBaseURI(baseURI.toString());

                console.log(`Loading - ${transactionHash1.hash}`);
                await transactionHash1.wait();
            }
            




            const transactionHash2 = await erc721aContract.mint(BigNumber.from(quantity));

            console.log(`Loading - ${transactionHash2.hash}`);
            await transactionHash2.wait();

            console.log(`Success - ${transactionHash2.hash}`);
            setIsLoading(false);

        }
        catch (error) {
            console.log(error);

            throw new Error("No ethereum object");

        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [currentAccount]);
    
    return (
        <ERC721aContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendMint, allMints, isLoading }}>
            {children}
        </ERC721aContext.Provider>
    );
}