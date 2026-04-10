import { ethers } from "ethers";

// 🔑 Create wallet (random like Solana Keypair.generate())
const wallet = ethers.Wallet.createRandom();

console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);

// ✉️ Message
const message = "Hello Ethereum";

// ✍️ Sign message using private key
const signature = await wallet.signMessage(message);

console.log("Signature:", signature);

// ✅ Verify (recover address from signature)
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);

// Check validity
console.log("Signature valid:", recoveredAddress === wallet.address);