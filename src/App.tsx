import { useEffect } from "react";
import { ethers } from "ethers";
import { useMetaMaskConnection } from "./hooks/useMetaMaskConnection";
import { useKeyGeneration } from "./hooks/useKeyGeneration";
import { Center } from "./components/Center";

declare global {
  interface Window {
    ethereum?: ethers.Eip1193Provider;
  }
}

function App() {
  const { signer, isMetaMaskConnected, isMetaMaskOpen } =
    useMetaMaskConnection();

  const { keys, generateKeys } = useKeyGeneration(signer);

  useEffect(() => {
    const init = async () => {
      if (isMetaMaskConnected && !isMetaMaskOpen.current) {
        isMetaMaskOpen.current = true;
        await generateKeys();
      }
    };

    init();
  }, [generateKeys, isMetaMaskConnected, isMetaMaskOpen]);

  return (
    <div>
      <Center keys={keys} signer={signer} />
    </div>
  );
}

export default App;
