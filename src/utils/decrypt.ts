import { decrypt, encrypt, PrivateKey } from "eciesjs";
import { Buffer } from "buffer";

globalThis.Buffer = Buffer;

export function decryptCypher(privateKey: string, cypherText: string) {
    const sk = new PrivateKey(new Uint8Array(Buffer.from(privateKey, "hex")));
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // const decrypted = decrypt(sk.secret, encrypt(sk.publicKey.toBytes(), encoder.encode("Hello World!")));

    const encrypted = encrypt(sk.publicKey.toHex(), encoder.encode("Helllllo"));
    const decrypted = decoder.decode(decrypt(sk.secret, encrypted));
    console.log(Buffer.from(decrypted).toString());

    // const decrypted = decrypt(
    //     sk.secret,
    //     new Uint8Array(Buffer.from(cypherText, "hex"))
    // );

    return decrypted;
}
