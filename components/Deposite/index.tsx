import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import contracts from "public/CpcToken.json";

var crypto = require("crypto");

export default function DepositeForm() {
  const [token, setToken]: any = useState("");
  const [totalAmount, setTotalAmount]: any = useState("");
  const [perTokenPrice, setPerTokenPrice] = useState("10");
  const [sendtoken, setSendtoken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    active,
    activate,
    deactivate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  async function execute() {
    if (active) {
      console.log("exicute");
      const signer = provider.getSigner();
      const contractAddress = { account };
      const contract = new ethers.Contract(
        "0xBdfdAc75d450154737ec1C4d8D949884F7B21ae2",
        contracts.abi,
        signer
      );
      try {
        const totalSupply = await contract.totalSupply();
        const balance = await contract.balances(
          "0x7eCe7F5B8a1B13af77ac40BCce96F6a697865d86"
        );
        const tokenPrice = await contract.tokenPrice();
        const totalSale = await contract.totalSale();
        const tokenAmount = await ethers.utils.formatEther(tokenPrice);
        console.log("Total Sale", totalSale.toString());
        console.log("Acount Balance", balance.toString());
        const howManyToken: any = sendtoken;
        const tokenTotalPrice: any = howManyToken * tokenPrice;
        const parshValue = ethers.utils.formatUnits(tokenTotalPrice, "gwei");
        const parshToken = ethers.utils.formatUnits(howManyToken, "ether");
        console.log(
          "TOken Price",
          tokenTotalPrice,
          "parse Valaue",
          tokenTotalPrice,
          "How Many Token",
          parshToken
        );
        const buytoken = await contract.buyToken(
          ethers.utils.parseUnits(howManyToken),
          {
            value: ethers.utils.parseUnits(parshValue, "ether"),
          }
        );
        console.log("Ether Payment", buytoken);
        setSuccessMessage(
          "Successfully purchase " + howManyToken + " tokens to " + account
        );
      } catch (error: any) {
        setErrorMessage(error.message);
        console.log(error.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  const tokenPriceGenerator = () => {
    const getPrice = perTokenPrice * token;
    const totalPrice: any = ethers.utils.formatEther(getPrice.toString());
    setTotalAmount(totalPrice);
    console.log(totalPrice);
  };

  useEffect(() => {
    tokenPriceGenerator();
  }, [token, totalAmount]);

  return (
    <>
      {JSON.stringify(token)}
      <div className="bg-[#f5f8fb] py-[100px]">
        <div>
          <div className="container m-auto w-[450px] bg-white rounded-lg p-6">
            <div>
              <img src="/assets/images/logo.svg" className="w-[100px]" alt="" />
            </div>
            <div>
              <div className="mt-7">
                <p className=" text-gray-300 text-[12px] mb-2">Token</p>
              </div>
              <div className=" relative">
                <div>
                  <input
                    className="bg-[#fafafc] border p-[17px] w-full rounded-full border-[#EFF0FA]"
                    type="text"
                    placeholder="Token"
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-semibold text-center m-auto">
                  Token Price:{" "}
                  <span className="text-[#5f4dbc]">
                    0.001 X {token ? token : 0} = {totalAmount} ETH
                  </span>
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => execute()}
                className="py-[15px] text-white rounded-full mt-7 w-full bg-[#5f4dbc]"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
