import { ethers } from "ethers";
import Swap from "./Swap";
import Orders from "./Orders";

export function Center({
    keys,
    signer,
}: {
    keys: { publicKey: string; privateKey: string };
    signer: ethers.JsonRpcSigner | null;
}) {
    return (
        <div className="font-space-grotesk h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-[#FFF8E8] to-[#FEEBCA]">
                <Swap keys={keys} signer={signer} />
                <Orders signer={signer} keys={keys} />
            </div>
            <footer className="sticky bottom-0 w-full bg-[#057334] text-white text-center py-2 text-sm">
                Made at ETHIndia 2024 by{" "}
                <a href="https://crema.sh/" className="underline" target="_blank">
                    Crema
                </a>
            </footer>
        </div>
    );
}
