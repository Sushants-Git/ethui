import { ethers } from "ethers";
import { BitMix, MockERC20 } from "../../typechain-types";
import { bitMixABI } from "../abi/bitMix";
import { mockWbtcABI } from "../abi/mockWbtcABI";

async function deposit({
    publicKeyString,
    amountString,
    signer,
}: {
    publicKeyString: string;
    amountString: string;
    signer: ethers.JsonRpcSigner;
}) {
    const bitMix = new ethers.Contract(
        "0x8E53eF2Cf6800E209EABf1AC3a8383d16140D029",
        bitMixABI,
        signer
    ) as unknown as BitMix;

    const mockWBTC = new ethers.Contract(
        "0xDeb4C7AB99e46aFEbfE374F6a7BBFB63D309166f",
        mockWbtcABI,
        signer
    ) as unknown as MockERC20;

    await mockWBTC
        .connect(signer)
        .approve(await bitMix.getAddress(), ethers.parseEther(amountString));

    // await mockWBTC.mint(signer.address, ethers.parseEther("999999999999999999999999"));

    // console.log("done");

    const nonce = await bitMix.nonces(signer.address);

    const amount = ethers.parseUnits(amountString, 8);
    // const pubkey = ethers.keccak256(publicKeyString);

    const pX = "0xe040aea347376349c5bd30b51da41c9bba07661b81de8aa2a06e614bba542240";
    const pY = "0xf69737506c75e920f9ec15c40451339d5425424d20313dff2ecc4814bb7454bd";

    const expectedOrderID = ethers.keccak256(
        ethers.solidityPacked(
            ["address", "uint256", "bytes32", "bytes32", "uint256"],
            [signer.address, amount, pX, pY, nonce]
        )
    );

    console.log({ expectedOrderID });

    const tx = await bitMix.deposit(amount, 144, pX, pY);
    await tx.wait();

    return expectedOrderID;
}

export { deposit };
