import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";

export const useMetaMaskConnection = () => {
    const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
    const [provider, setProvider] = useState<ethers.AbstractProvider | null>(
        null,
    );
    const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
    const isMetaMaskOpen = useRef(false);

    useEffect(() => {
        const connectToMetaMask = async () => {
            if (!window.ethereum) {
                console.log("MetaMask not installed; using read-only defaults");
                setProvider(ethers.getDefaultProvider());
                return;
            }

            try {
                const browserProvider = new ethers.BrowserProvider(window.ethereum);
                setProvider(browserProvider);

                const connectedSigner = await browserProvider.getSigner();
                setSigner(connectedSigner);
                setIsMetaMaskConnected(true);
            } catch (error) {
                console.error("MetaMask connection error:", error);
            }
        };

        connectToMetaMask();
    }, []);

    return { signer, provider, isMetaMaskConnected, isMetaMaskOpen };
};
