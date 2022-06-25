import React, { useContext } from 'react';

import { ERC721aContext } from '../context/ERC721aContext';
import { shortenAddress } from '../utils/shortenAddress';

const dummyData = [];

const MintCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    return (
        <div className="bg-[#181918] m-4 flex flex-1 
            2x1:min-w-[450px]
            2x1:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2x1
        ">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className="text-white text-base">Amount: {amount} ETH</p>
                </div>
            </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount } = useContext(ERC721aContext);

    return (
       <div className="flex w-full justify-center items-center 2x1:px-20 gradient-bg-transactions">
           <div className="flex flex-col md:p-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2">Latest Mints</h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">Connect Wallet to see Mints</h3>
                )}
           </div>

           <div className="flex flex-wrap justify-center items-center mt-10">
               {dummyData.reverse().map((transaction, i) => (<MintCard key={i} {...transaction}/>))}
           </div>
           
       </div>
    );
}

export default Transactions;