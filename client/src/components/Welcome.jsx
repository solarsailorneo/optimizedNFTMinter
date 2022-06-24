import React, { useContext } from 'react';
import { ERC721aContext } from '../context/ERC721aContext';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm-min-w-[120px] flex justify-center items-center border-[0.5px] border-gradient"

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendMint, handleChange  } = useContext(ERC721aContext);

    const handleSubmit = (e) => {
        const { quantity, baseURI } = formData;

        e.preventDefault(); // prevents application from reloading. Can and should do this in react
        console.log(baseURI);
        if(!quantity || !baseURI) return;

        sendMint();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Mint a gas-efficient <br /> NFT collection
                    </h1>
                    <p className="text-left mt-5 text-white font-light md-w9/12 w-11/12 text-base">
                        Make your customers' minting and transaction experience as low friction as possible
                    </p>
                    {!currentAccount && 
                        (<button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            connect to Wallet
                        </button>
                    )}
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                    <div className="flex justify-between flex-col w-full h-full">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color="#fff" />
                            </div>
                            <BsInfoCircle fontSize={17} color="#fff" />
                        </div>
                        <div>
                            <p className="text-white font-light text-sm">
                                {shortenAddress(currentAccount)}
                            </p>
                            <p className="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input placeholder="Quantity" name="quantity" type="text" handleChange={handleChange} />
                    <Input placeholder="Base URI" name="baseURI" type="text" handleChange={handleChange} />
                    
                    <div className="h-[1px] w-full bg-gray-400 my-2" />
                
                    {false ? (
                        <Loader />
                    ) : (
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                        >
                            Mint Now
                        </button>
                    )}        
                </div>

            </div>
        </div>
    );
}

export default Welcome;