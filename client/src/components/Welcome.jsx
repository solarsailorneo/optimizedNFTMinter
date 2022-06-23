import React, { useContext } from 'react';
import { ERC721aContext } from '../context/ERC721aContext';

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendMint, handleChange  } = useContext(ERC721aContext);

    const handleSubmit = (e) => {
        const { quantity, baseURI } = formData;

        e.preventDefault(); // prevents application from reloading. Can and should do this in react
    
        if(!quantity || !baseURI) return;

        sendMint();
    }

    return (
        <>
            {!currentAccount && 
                (<button
                type="button"
                onClick={connectWallet}>
                    connect to Wallet
                </button>
                )}
            <h1>Welcome</h1>
        </>
    );
}

export default Welcome;