// Install first:
// npm install @solana/web3.js tweetnacl

import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

//  Generate a new Solana keypair
const keypair = Keypair.generate();

console.log("Public Key:", keypair.publicKey.toBase58());
console.log("Secret Key (Uint8Array):", keypair.secretKey);

//  Message to sign
const message = new TextEncoder().encode("Hello Solana");

//  Sign the message using secret key
const signature = nacl.sign.detached(message, keypair.secretKey);

console.log("Signature:", Buffer.from(signature).toString("hex"));

//  Verify the signature using public key
const isValid = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log("Signature valid:", isValid);