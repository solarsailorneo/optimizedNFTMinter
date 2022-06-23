import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const ERC721aContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const ERC721aContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}



export const ERC721aProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');


    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if(accounts.length)
            {
                setCurrentAccount(accounts[0]);
                console.log('Succesfully connected');
                // getAllTransactions
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

    const mint = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            // get data from form

        }
        catch (error) {
            console.log(error);

            throw new Error("No ethereum object");

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

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [currentAccount]);
    
    return (
        <ERC721aContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </ERC721aContext.Provider>
    );
}