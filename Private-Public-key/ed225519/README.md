# 🔐 Ed25519 Digital Signatures (Node.js)

<p align="center">
  <b>Understanding Cryptographic Signatures before diving into Web3</b><br/>
  Learn how messages are signed and verified using Ed25519.
</p>

---

## 📌 Overview

This project demonstrates how **digital signatures** work using the **Ed25519 algorithm** in Node.js.

Before jumping into Web3, this helps you understand the **core cryptography concepts** used in:

* Blockchain
* Wallets
* Secure communication

---

## 🧠 What You Will Learn

* 🔑 Difference between **Private Key** and **Public Key**
* ✍️ How to **sign a message** using a private key
* 🔍 How to **verify a signature** using a public key
* 🔐 Why public key cannot generate private key
* ⚡ How signature ensures:

  * Data integrity
  * Authenticity
* 📦 Working with binary data (`Uint8Array`, `Buffer`)

---

## 🔑 Key Concepts

### 🔐 Private Key

* Secret
* Used to **sign messages**

### 🌐 Public Key

* Shareable
* Used to **verify signatures**

---

## 🔄 Signing & Verification Flow

### ✍️ Step 1: Signing

```text
Message + Private Key → Signature
```

---

### 🔍 Step 2: Verification

```text
Signature + Message + Public Key → true / false
```

---

## ⚠️ Important Rules

* ✅ Private → Public (possible)
* ❌ Public → Private (impossible)
* ✅ Sign with Private Key
* ✅ Verify with Public Key
* ❌ Cannot sign using Public Key
* ❌ No decryption involved

---

## 📁 Project Structure

```
ed25519/
│── index.js        # Sign and verify example
│── README.md       # Documentation
```

---

## ▶️ How to Run

### 1️⃣ Install dependency

```bash
npm install @noble/ed25519
```

### 2️⃣ Run the script

```bash
node index.js
```

---

## 💻 Example Code

```js
const ed = require("@noble/ed25519");

async function main() {
    const privateKey = ed.utils.randomPrivateKey();

    const message = new TextEncoder().encode("Hello Ed25519");

    const publicKey = await ed.getPublicKeyAsync(privateKey);

    const signature = await ed.signAsync(message, privateKey);

    const isValid = await ed.verifyAsync(signature, message, publicKey);

    console.log("Valid Signature:", isValid);
}

main();
```

---

## 📤 Example Output

```text
Valid Signature: true
```

---

## 🔍 Real-World Analogy

* Private Key = ✍️ Signature pen
* Public Key = 👀 Verification tool

You:

* Sign using pen
  Network:
* Verifies using tool

---

## 🚀 Why This Matters (Before Web3)

This is the **foundation** of:

* Blockchain transactions
* Wallet authentication
* Digital identity

---

## 🔗 How This Connects to Web3

In blockchain:

1. You create a transaction (message)
2. You sign it using your private key
3. Network verifies using your public key
4. If valid → transaction accepted

---

## 🧩 Next Steps

* Learn **hashing (SHA-256 / Keccak-256)**
* Understand **Ethereum signatures (r, s, v)**
* Explore wallets using:

  * `ethers.js`
  * `web3.js`

---

## 📸 Future Improvements

* Add UI for signing & verifying
* Visualize signature flow
* Build mini transaction simulator

---

## 👨‍💻 Author

**Mohammed Niyaf**

> Learning Web3 from fundamentals 🚀
> This is the step before real blockchain development.

---

## ⭐ Support

If this helped you:

* ⭐ Star the repo
* 🍴 Fork it
* 🧠 Share with others learning cryptography

---
