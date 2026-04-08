# 🔐 RSA Encryption & Decryption (Node.js)

<p align="center">
  <b>Understanding Public-Key Cryptography using Node.js</b><br/>
  A beginner-friendly project to learn how encryption, decryption, and digital signatures work.
</p>

---

## 🚀 Features

* 🔑 Generate RSA Public & Private Keys
* 🔐 Encrypt & Decrypt messages
* ✍️ Simulate Digital Signatures
* 📦 Base64 encoding for readable output
* ⚡ Built using Node.js native `crypto` module

---

## 🧠 Concepts Covered

* Public-Key Cryptography (RSA)
* Encryption vs Decryption
* Digital Signatures
* Base64 Encoding
* Binary Data using Buffers

---

## 🔄 How It Works

### 🔐 Public → Private (Secure Communication)

```text
Message → Encrypt (Public Key) → Encrypted Data → Decrypt (Private Key) → Original Message
```

✔ Used in:

* HTTPS
* Web3 wallets
* Secure APIs

---

### ✍️ Private → Public (Digital Signature)

```text
Message → Encrypt (Private Key) → Signature → Decrypt (Public Key) → Verified Message
```

✔ Used in:

* Blockchain transactions
* Identity verification
* Signing data

---

## 📁 Project Structure

```
crypto/
│── index.js        # Public encrypt → Private decrypt
│── privatekey.js   # Private encrypt → Public decrypt
│── README.md       # Documentation
```

---

## ▶️ Getting Started

### 1️⃣ Install Node.js

Make sure you have Node.js installed.

### 2️⃣ Run the project

```bash
node index.js
node privatekey.js
```

---

## 📤 Example Output

```bash
Public Key: -----BEGIN PUBLIC KEY-----
Private Key: -----BEGIN PRIVATE KEY-----

Original Message: SGVsbG8gV29ybGQ=
Encrypted Message: <encrypted data>
Decrypted Message: Hello World
```

---

## 🛠 Tech Stack

* Node.js
* Built-in `crypto` module

---

## 🌐 Web3 Relevance

This project connects directly to real-world systems:

* 🪙 Crypto wallets use key pairs
* ✍️ Transactions are signed with private keys
* 🔍 Public keys verify authenticity

Core foundation for:

* Blockchain
* Smart Contracts
* Security Systems

---

## 📚 Next Steps

* 🔹 Learn SHA-256 hashing
* 🔹 Dive deeper into Digital Signatures
* 🔹 Explore Ethereum signing
* 🔹 Try:

  * `ethers.js`
  * `web3.js`

---

## 📸 Future Improvements

* Add UI for encryption/decryption
* Visualize key generation
* Integrate with Web3 wallet simulation

---

## 👨‍💻 Author

**Mohammed Niyaf**

> First step into Web3 cryptography 🚀
> Future me — this is where it all started.

---

## ⭐ Support

If you found this helpful:

* ⭐ Star this repo
* 🍴 Fork it
* 🧠 Share with others learning crypto

---
