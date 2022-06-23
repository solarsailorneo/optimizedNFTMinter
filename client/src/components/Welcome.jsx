import React, { useContext } from 'react';
import { ERC721aContext } from '../context/ERC721aContext';

const Welcome = () => {
    const { connectWallet } = useContext(ERC721aContext);

    return (
        <>
            <button
            type="button"
            onClick={connectWallet}>
                connect to Wallet
            </button>
            <h1>Welcome</h1>
        </>
    );
}

export default Welcome;