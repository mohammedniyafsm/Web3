# ☀️ Solana Keypair, Signing & Verification (Node.js)

## 📌 Overview

This project demonstrates the basics of **Solana cryptography** using:

- `@solana/web3.js` (Solana SDK)
- `tweetnacl` (cryptographic library)

It covers core concepts:

- 🔑 Generate a **Solana Keypair (Wallet)**
- ✍️ Sign a message using **Private Key**
- ✅ Verify a signature using **Public Key**

---

## 🧠 What I Learned

- How **Solana wallets (keypairs)** are generated  
- Difference between **Public Key** and **Secret Key**  
- How **message signing** works  
- How **signature verification** works  
- How `tweetnacl` is used for low-level cryptography  
- Difference between **SDK (web3.js)** and **crypto library**

---

## 🔑 Key Concepts

### 🔐 Public Key
- Acts as **wallet address**
- Can be shared publicly  
- Used to verify signatures  

### 🔒 Secret Key (Private Key)
- Must be kept **secure**
- Used to sign messages and transactions  

---

## 🔄 Signing & Verification Flow

### Flow

1. Generate Keypair  
2. Create message  
3. Sign using **Secret Key**  
4. Verify using **Public Key**  

---

## 💻 Example Code

```javascript
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate keypair
const keypair = Keypair.generate();

console.log("Public Key:", keypair.publicKey.toBase58());

// Message
const message = new TextEncoder().encode("Hello Solana");

// Sign message
const signature = nacl.sign.detached(message, keypair.secretKey);

// Verify signature
const isValid = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log("Signature valid:", isValid);



## 📤 Example Output

- Generated Public Key  
- Signed Message  
- Signature (hex/base64)  
- Verification result (true/false)  

---

## 🚀 Important Concepts

### ⚡ Ed25519 Algorithm
- Solana uses **Ed25519** (not RSA)  
- Faster & optimized for blockchain  

---

### ✍️ Digital Signatures
- Used to prove **ownership of wallet**  
- Every Solana transaction is signed  

---

### 💰 Wallet = Keypair
- Public Key → Address  
- Secret Key → Ownership  

---

### 🔌 Role of `tweetnacl`
- Provides low-level cryptographic functions  
- Used internally by Solana  
- Allows manual signing & verification  

---

## ⚠️ Security Notes

- ❌ Never expose secret key  
- ❌ Never commit private keys to GitHub  
- ✅ Always store securely (env / wallet / vault)  

---

## 🧩 Next Steps

- Connect to **Solana Devnet**  
- Request **Airdrop SOL**  
- Send a transaction  
- Load existing wallet  
- Try Phantom Wallet integration  

---

## 🌍 Real-World Use Cases

- Web3 login (Sign-In with Wallet)  
- Transaction signing  
- Smart contract interaction  
- Wallet authentication systems  

---

## 👨‍💻 Author

**Mohammed Niyaf**

> 🚀 Learning Solana & Web3 fundamentals  
> 🔥 Future me — build real dApps with this