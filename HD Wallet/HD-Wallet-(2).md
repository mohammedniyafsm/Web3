# 🔐 HD Wallet (Hierarchical Deterministic Wallet) — Complete Guide

This guide explains how a crypto wallet is created step-by-step:

**From random bits → seed phrase → master key → child keys → public key → address**

---

# 📌 1. Entropy (Randomness)

A wallet starts with **pure randomness**.

* Typically: **128 bits** (for 12-word mnemonic)
* Total possibilities:

  ```
  2^128 ≈ 3.4 × 10^38
  ```

### Example:

```
Entropy (hex):
a3f9c2d871b04e56c9a12f3807e6b549
```

---

# 📌 2. Mnemonic (BIP-39)

Entropy is converted into **human-readable words**.

### Process:

1. Take entropy (128 bits)
2. Hash with SHA-256
3. Take first **4 bits** as checksum
4. Append checksum → total **132 bits**
5. Split into **11-bit chunks**
6. Map each chunk to wordlist (2048 words)

### Output:

```
12-word seed phrase (mnemonic)
```

### Example:

```
argue tornado inquiry fossil embark cigar
symptom neutral anchor jungle captain ivory
```

⚠️ **IMPORTANT:**

* This is the **only backup you need**
* Never share it

---

# 📌 3. Seed Generation (PBKDF2)

Convert mnemonic → binary seed

### Algorithm:

```
PBKDF2-HMAC-SHA512
Iterations: 2048
Salt: "mnemonic" + passphrase
```

### Output:

```
512-bit seed (64 bytes)
```

---

# 📌 4. Master Key Generation (BIP-32)

Convert seed → master private key + chain code

### Process:

```
HMAC-SHA512(
   key = "Bitcoin seed",
   data = seed
)
```

### Output:

```
Left 32 bytes  → Master Private Key (k_master)
Right 32 bytes → Chain Code (c_master)
```

---

# ❓ Why "Bitcoin seed"?

* Defined by BIP-32 standard
* Ensures compatibility across wallets
* Used by most coins (Bitcoin, Ethereum, etc.)

---

# 📌 5. HD Wallet Tree Structure

Wallets are hierarchical:

```
m
 └── m/44'
      └── m/44'/0'
           └── m/44'/0'/0'
                └── m/44'/0'/0'/0
                     └── m/44'/0'/0'/0/0
```

---

# 📌 6. Derivation Path (BIP-44)

```
m / purpose' / coin_type' / account' / change / address_index
```

### Example (Bitcoin):

```
m/44'/0'/0'/0/0
```

### Example (Ethereum):

```
m/44'/60'/0'/0/0
```

---

# 📌 7. Child Key Derivation

Each level is derived using:

```
HMAC-SHA512(
   key = parent_chain_code,
   data = parent_key + index
)
```

### Output:

* Child Private Key
* Child Chain Code

---

# 📌 8. Hardened vs Non-Hardened Keys

| Type     | Symbol | Description                    |
| -------- | ------ | ------------------------------ |
| Hardened | `'`    | Uses private key only (secure) |
| Normal   | none   | Can derive from public key     |

---

# 📌 9. Public Key Generation

Private key → Public key using Elliptic Curve Cryptography

Curve used:

```
secp256k1
```

### Formula:

```
Public Key = Private Key × G
```

---

# 📌 10. Address Generation

## Bitcoin:

```
1. SHA-256(public key)
2. RIPEMD-160(result)
3. Add version byte
4. Double SHA-256 → checksum
5. Base58 encode
```

### Output:

```
Bitcoin Address
```

---

# 📌 11. Multi-Coin Support

Different coins use different `coin_type`

| Coin     | Path             |
| -------- | ---------------- |
| Bitcoin  | m/44'/0'/0'/0/0  |
| Ethereum | m/44'/60'/0'/0/0 |
| Solana   | m/44'/501'/0'/0  |

---

# 📌 12. What Wallet Actually Stores

Wallets DO NOT store keys.

They store:

```
Mnemonic (seed phrase)
```

Everything else is:

```
Derived when needed
```

---

# 📌 13. Real Flow (Complete Pipeline)

```
Entropy (128 bits)
   ↓
Mnemonic (12 words)
   ↓
PBKDF2 → 512-bit seed
   ↓
HMAC-SHA512 → Master Key + Chain Code
   ↓
HD Derivation (BIP32/44)
   ↓
Private Key
   ↓
Public Key
   ↓
Address
```

---

# 📌 14. Key Concepts Summary

* 🔑 Seed = everything
* 🌳 One seed → infinite wallets
* 🔗 Chain code enables derivation
* 📬 Address is public
* 🔐 Private key must stay secret

---

# ⚠️ Security Best Practices

* Never share seed phrase
* Store offline (paper / hardware wallet)
* Do not take screenshots
* Use passphrase for extra security

---

# 🚀 Bonus: Mental Model

```
Seed = DNA
↓
Master Key = Root
↓
Child Keys = Branches
↓
Addresses = Leaves
```

---

# 📚 Standards Used

* BIP-32 → HD Wallets
* BIP-39 → Mnemonic
* BIP-44 → Multi-account structure

---

# ✅ Conclusion

A crypto wallet is NOT just an address.

It is a deterministic system where:

👉 One seed controls everything
👉 Infinite addresses can be generated
👉 Full control depends on keeping the seed secure

---

⭐ If this helped, consider starring the repo!
