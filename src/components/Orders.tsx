import { useState, useEffect } from "react";
import useGlobalStore from "../store/globalStore";
import { ethers } from "ethers";
import { bitMixABI } from "../abi/bitMix.ts";
import { BitMix } from "../../typechain-types";
import { decryptCypher } from "../utils/decrypt";
import { CheckCircle2, Package, RefreshCcw } from "lucide-react";

export default function Orders({
    signer,
    keys,
}: {
    signer: ethers.JsonRpcSigner | null;
    keys: { privateKey: string; publicKey: string };
}) {
    const orders = useGlobalStore((state) => state.orderIds);
    const [showDoneButtons, setShowDoneButtons] = useState(new Set());
    const [redeemingOrder, setRedeemingOrder] = useState<string | null>(null);

    useEffect(() => {
        const timers = orders.map((orderId) => {
            const timer = setTimeout(() => {
                setShowDoneButtons((prev) => new Set(prev).add(orderId));
            }, 500);
            return timer;
        });
        return () => {
            timers.forEach(clearTimeout);
        };
    }, [orders]);

    const handleRedeem = async (orderId: string) => {
        if (!signer) return;

        try {
            setRedeemingOrder(orderId);
            const bitMix = new ethers.Contract(
                "0x392dB61FFDdd620e5182f477AbB017b9f128124f",
                bitMixABI,
                signer
            ) as unknown as BitMix;

            const res = await bitMix.orderMap(orderId);
            console.log(res);
            const decryptedData = decryptCypher(keys.privateKey, res[2]);
            console.log(decryptedData);
        } catch (error) {
            console.error("Redemption failed:", error);
        } finally {
            setRedeemingOrder(null);
        }
    };

    return (
        <div className="w-full max-w-md ml-10 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#057334] text-white p-5 flex items-center gap-3">
                <Package className="w-6 h-6" />
                <h3 className="text-xl font-bold flex-grow">Recent Orders</h3>
            </div>

            <div className="p-4">
                {orders.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 flex flex-col items-center">
                        <Package className="w-12 h-12 text-gray-300 mb-4" />
                        <p>No orders have been placed yet</p>
                        <p className="text-sm text-gray-400 mt-2">
                            Start by initiating a transfer
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3 max-h-[300px] overflow-y-auto">
                        {orders.map((orderId, index) => (
                            <div
                                key={orderId}
                                className="bg-gray-100 rounded-lg p-4 flex items-center space-x-3 shadow-sm"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-mono text-sm text-gray-700 truncate max-w-[200px]">
                                            {orderId}
                                        </span>
                                        <span className="text-xs text-[#057334] bg-[#057334]/10 px-2 py-0.5 rounded-full">
                                            #{index + 1}
                                        </span>
                                    </div>
                                </div>

                                {showDoneButtons.has(orderId) && (
                                    <button
                                        disabled={redeemingOrder === orderId}
                                        onClick={() => handleRedeem(orderId)}
                                        className="
                                            flex items-center justify-center 
                                            bg-[#057334] text-white 
                                            px-3 py-2 rounded-md 
                                            hover:bg-[#05593A] 
                                            transition-colors 
                                            disabled:opacity-50
                                            disabled:cursor-not-allowed
                                            text-xs
                                            space-x-2
                                        "
                                    >
                                        {redeemingOrder === orderId ? (
                                            <RefreshCcw className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <CheckCircle2 className="w-4 h-4" />
                                        )}
                                        <span>
                                            {redeemingOrder === orderId ? "Redeeming..." : "Redeem"}
                                        </span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
