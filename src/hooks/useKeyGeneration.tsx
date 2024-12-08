import { Wallet } from "ethers";
import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { bitMixABI } from "../abi/bitMix";
import { BitMix } from "../../typechain-types";

function createPublicKey(privateKey: string) {
    const wallet = new Wallet(privateKey);

    return wallet.signingKey.publicKey;
}

const getNonce = async (signer: ethers.JsonRpcSigner) => {
    const bitMix = new ethers.Contract(
        "0x8E53eF2Cf6800E209EABf1AC3a8383d16140D029",
        bitMixABI,
        signer
    ) as unknown as BitMix;

    const nonce = await bitMix.nonces(signer.getAddress());

    return nonce;
};

async function hash(signature: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(signature);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;
}

export const useKeyGeneration = (signer: ethers.JsonRpcSigner | null) => {
    const [keys, setKeys] = useState({
        privateKey: "",
        publicKey: "",
    });

    const sign = useCallback(
        async (message: string) => {
            if (!signer) return null;
            return await signer.signMessage(message);
        },
        [signer]
    );

    const generateKeys = useCallback(async () => {
        try {
            if (!signer) return;
            const nonce = await getNonce(signer);
            const message = `crema${nonce}`;
            const signature = await sign(message);

            if (!signature) return;

            const privateKey = await hash(signature);
            const publicKey = createPublicKey(privateKey);

            setKeys({
                privateKey:
                    "4e33893e84ca483e80d1bbb7c0000002a8d7dd7be094e33893e84ca483121034",
                publicKey:
                    "e040aea347376349c5bd30b51da41c9bba07661b81de8aa2a06e614bba542240f69737506c75e920f9ec15c40451339d5425424d20313dff2ecc4814bb7454bd",
            });
        } catch (error) {
            console.error("Error generating keys:", error);
        }
    }, [sign, signer]);

    return { keys, generateKeys };
};
