# 🔐 Web3 Cryptography Basics (RSA + Solana + Ethereum)

## 📌 Overview

This repository showcases my learning journey into **Web3 cryptography fundamentals**, covering:

- 🔐 RSA (traditional cryptography)
- ☀️ Solana (Ed25519)
- 🟠 Ethereum (ECDSA - secp256k1)

It demonstrates how **keys, signing, and verification** work across different systems.

---

## 🧠 What I Learned

- Difference between **encryption vs signing**
- How **public/private key cryptography** works  
- How different systems use different algorithms:
  - RSA → Encryption  
  - Solana → Ed25519  
  - Ethereum → ECDSA (secp256k1)  
- How to **sign & verify messages**  
- Difference between **high-level SDKs vs low-level crypto libraries**

---

## 🧩 Projects Included

---

### 🔐 1. RSA Encryption (Node.js)

📁 `crypto/`

#### Concepts:
- Public & Private key generation  
- Encryption & Decryption  
- Digital signature concept  

#### Examples:
- Private → Public (signature-like)  
- Public → Private (secure communication)  

#### Flow:

Public Key → Encrypt → Private Key → Decrypt
Private Key → Encrypt → Public Key → Verify



---

### ☀️ 2. Solana Cryptography

📁 `solana/`

#### Technologies:
- `@solana/web3.js`
- `tweetnacl`

#### Concepts:
- Keypair generation  
- Message signing  
- Signature verification  
- Ed25519 algorithm  

#### Flow:

Keypair → Sign (Private Key) → Verify (Public Key)


---

### 🟠 3. Ethereum Cryptography

📁 `ethereum/`

#### Technologies:
- `ethers.js`

#### Concepts:
- Wallet creation  
- Private key usage  
- Message signing  
- Address recovery  

#### Flow:


Private Key → Sign → Recover Address → Verify



---

## ⚔️ Solana vs Ethereum (Key Difference)

| Feature | Solana | Ethereum |
|--------|--------|----------|
| Algorithm | Ed25519 | ECDSA |
| Verification | Uses Public Key | Recovers Address |
| Library | tweetnacl | ethers.js |
| Key format | Uint8Array | Hex string |

---

## 🔑 Core Concepts

### 🔐 Public Key Cryptography
- Public key → shared  
- Private key → secret  

---

### ✍️ Digital Signatures
- Proves ownership of wallet  
- Used in all blockchain transactions  

---

### 🔁 Verification Methods

- **Solana** → verify using public key  
- **Ethereum** → recover address from signature  

---

## 🚀 Why This Matters

- Foundation of **Blockchain & Web3**
- Used in:
  - Wallet authentication  
  - Transactions  
  - Smart contracts  
  - Security systems  

---

## ⚠️ Security Notes

- ❌ Never expose private keys  
- ❌ Never commit secrets to GitHub  
- ✅ Use `.env` or secure storage  

---

## 🧩 Next Steps

- Connect to blockchain networks:
  - Solana Devnet  
  - Ethereum Sepolia  

- Build:
  - Web3 login (Sign-In with Wallet)  
  - Transaction sending  
  - Smart contract interaction  

---

## 🌍 Real-World Use Cases

- Web3 Authentication  
- Transaction Signing  
- Wallet Integration  
- Decentralized Applications (dApps)  

---

## 👨‍💻 Author

**Mohammed Niyaf**

> 🚀 Exploring Web3 & Cryptography  
> 🔥 Building strong blockchain fundamentals