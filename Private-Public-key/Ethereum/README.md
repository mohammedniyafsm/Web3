# 🟠 Ethereum Wallet, Signing & Verification (Node.js)

## 📌 Overview

This project demonstrates the basics of **Ethereum cryptography** using:

- `ethers.js` → Ethereum SDK

It covers:

- 🔑 Creating an Ethereum wallet  
- ✍️ Signing a message using a **Private Key**  
- ✅ Verifying a signature by recovering the **Address**  

---

## 🧠 What I Learned

- How Ethereum wallets are created  
- How **private key → public key → address** works  
- How message signing works using **ECDSA (secp256k1)**  
- How to verify signatures by **recovering address**  
- Difference between **Solana vs Ethereum cryptography**  
- How `ethers.js` abstracts low-level crypto  

---

## 🔑 Key Concepts

### 🔐 Private Key
- Main secret of wallet  
- Used to sign messages and transactions  

---

### 🧾 Public Key
- Derived from private key  
- Not usually exposed directly in Ethereum  

---

### 🪪 Address
- Derived from public key  
- Used as wallet identity  

---

## 🔄 Signing & Verification Flow

### Flow

1. Create wallet  
2. Write message  
3. Sign message using **private key**  
4. Recover address from signature  
5. Compare with original wallet address  

---

## 💻 Example Code

```javascript
import { ethers } from "ethers";

// Create wallet (random)
const wallet = ethers.Wallet.createRandom();

console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);

// Message
const message = "Hello Ethereum";

// Sign message
const signature = await wallet.signMessage(message);

console.log("Signature:", signature);

// Verify (recover address)
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);

// Check validity
console.log("Signature valid:", recoveredAddress === wallet.address);

## 📤 Example Output

- Wallet Address  
- Private Key  
- Signature  
- Recovered Address  
- Verification result (true/false)  

---

## 🚀 Important Concepts

### ⚡ ECDSA (secp256k1)
- Ethereum uses **ECDSA**, not Ed25519  
- Same curve used in Bitcoin  

---

### ✍️ Digital Signatures
- Used to prove **wallet ownership**  
- Every Ethereum transaction is signed  

---

### 🔁 Signature Verification
- Ethereum does **not use public key directly**  
- Instead:
  - Recovers address from signature  

---

## ⚠️ Security Notes

- ❌ Never expose private key  
- ❌ Never commit private keys to GitHub  
- ✅ Use `.env` for secrets  

---

## 🧩 Next Steps

- Connect to Ethereum testnet (Sepolia)  
- Send ETH transaction  
- Integrate MetaMask  
- Build Web3 login system  

---

## 🌍 Real-World Use Cases

- Web3 login (Sign-In with Wallet)  
- Transaction signing  
- Smart contract interaction  
- Wallet authentication  

---

## 👨‍💻 Author

**Mohammed Niyaf**

> 🚀 Learning Ethereum & Web3 fundamentals  
> 🔥 Future me — build real dApps with this