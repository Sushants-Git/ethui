import { useState } from "react";
import useGlobalStore from "../store/globalStore";
import { deposit } from "../utils/deposit";
import { ethers } from "ethers";
import { ArrowDownUp, Bitcoin, Wallet } from "lucide-react";

export default function Swap({
    keys,
    signer,
}: {
    keys: { publicKey: string; privateKey: string };
    signer: ethers.JsonRpcSigner | null;
}) {
    const [btcAmount, setBtcAmount] = useState("");
    const [ethAmount, setEthAmount] = useState("");

    const addOrder = useGlobalStore((state) => state.addOrder);

    const BTC_TO_WBTC_RATE = 1;

    const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^\d*\.?\d*$/.test(value)) {
            setBtcAmount(value);
            const ethEquivalent =
                value === "" ? "" : (parseFloat(value) * BTC_TO_WBTC_RATE).toFixed(8);
            setEthAmount(ethEquivalent);
        }
    };

    const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^\d*\.?\d*$/.test(value)) {
            setEthAmount(value);
            const btcEquivalent =
                value === "" ? "" : (parseFloat(value) / BTC_TO_WBTC_RATE).toFixed(8);
            setBtcAmount(btcEquivalent);
        }
    };

    const swapAmounts = () => {
        const tempBtc = btcAmount;
        setBtcAmount(ethAmount);
        setEthAmount(tempBtc);
    };

    return (
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#057334] text-white p-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Bitcoin className="w-7 h-7" />
                    BitMix
                </h2>
                <Wallet className="w-6 h-6" />
            </div>

            <div className="p-6 space-y-4">
                <div className="relative">
                    <label className="block text-sm text-gray-600 mb-2">
                        WBTC Amount
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={btcAmount}
                            onChange={handleBtcChange}
                            placeholder="0.00"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#057334]/50 transition-all duration-300"
                        />
                        <span className="ml-3 text-[#057334] font-semibold">WBTC</span>
                    </div>
                </div>

                <div className="flex justify-center my-2">
                    <button 
                        onClick={swapAmounts}
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    >
                        <ArrowDownUp className="text-[#057334] w-5 h-5" />
                    </button>
                </div>

                <div className="relative">
                    <label className="block text-sm text-gray-600 mb-2">
                        BTC Amount
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={ethAmount}
                            onChange={handleEthChange}
                            placeholder="0.00"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#057334]/50 transition-all duration-300"
                        />
                        <span className="ml-3 text-[#057334] font-semibold">BTC</span>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm text-gray-600 mb-2">
                        Deposit Public Key
                    </label>
                    <div className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 truncate">
                        {keys.publicKey || "No public key available"}
                    </div>
                </div>

                <button
                    disabled={!keys.publicKey || !signer}
                    className="w-full mt-4 bg-[#057334] text-white py-3.5 rounded-lg hover:bg-[#05593A] transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    onClick={async () => {
                        if (keys.publicKey && signer) {
                            const orderId = await deposit({
                                publicKeyString: keys.publicKey,
                                amountString: btcAmount,
                                signer,
                            });

                            addOrder(orderId);
                        }
                    }}
                >
                    Initiate Transfer
                </button>
            </div>
        </div>
    );
}
