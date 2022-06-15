import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import contracts from "public/CpcToken.json";
import { ToastContainer, toast } from "react-toastify";
var crypto = require("crypto");

export default function DepositeForm() {
  const [token, setToken]: any = useState("");
  const [totalAmount, setTotalAmount]: any = useState("");
  const [perTokenPrice, setPerTokenPrice]: any = useState("10");
  const [sendtoken, setSendtoken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    active,
    activate,
    deactivate,
    chainId,
    account,
    library: provider,
  } = useWeb3React();

  async function execute() {
    setLoading(true);
    if (active) {
      console.log("exicute");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0xBdfdAc75d450154737ec1C4d8D949884F7B21ae2",
        contracts.abi,
        signer
      );
      try {
        const tokenTotalPrice: any = 10 * token;
        console.log(tokenTotalPrice);
        const buytoken = await contract.buyToken(
          ethers.utils.parseUnits(token),
          {
            value: ethers.utils.parseUnits(tokenTotalPrice.toString(), "gwei"),
          }
        );

        if(buytoken.hash){
          toast.success("Purchase Successfull!");
          setSuccessMessage(
            "Successfully purchase " + token  
          );
          setLoading(false);
        }else{
          toast.error("Oppss! Something is wrong!");
          setLoading(false);
        }
        
      } catch (error: any) {
        setLoading(false);
        setErrorMessage(error.message);
        console.log(error.message);
      }
    } else {
      setLoading(false);
      console.log("Please install MetaMask");
    }
  }

  const tokenPriceGenerator = () => {
    const getPrice: any = perTokenPrice * token;
    const totalPrice: any = ethers.utils.formatEther(getPrice.toString());
    setTotalAmount(totalPrice);
  };

  useEffect(() => {
    tokenPriceGenerator();

  }, [token, totalAmount]);

  return (
    <>
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
                    10 Wei X {token ? token : 0} = {totalAmount} ETH
                  </span>
                </p>
              </div>
            </div>

            <div>
              {isLoading ? (
                <div className="w-16 h-16 mt-8 border-[8px] border-dashed rounded-full animate-spin border-[#5f4dbc] m-auto"></div>
              ) : (
                <button
                  onClick={() => execute()}
                  className="py-[15px] text-white rounded-full mt-7 w-full bg-[#5f4dbc]"
                >
                  Connect Wallet
                </button>
              )}

              {errorMessage && (
                <p className="error text-center mt-3 text-red-500">
                  {errorMessage}dfd
                </p>
              )}
              {successMessage && (
                <p className="success text-center mt-3 text-green-600">
                  {successMessage}dfd
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
