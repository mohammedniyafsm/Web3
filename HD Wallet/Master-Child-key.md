# 🔑 Master Key & Child Keys in HD Wallets (BIP-32) — Complete Guide

This README focuses **only on Master Key and Child Key concepts** — how they are created, why they exist, and how they generate everything (accounts, wallets, addresses).

---

# 📌 1. What Problem Are We Solving?

Before HD wallets:

* Every new address = new random private key ❌
* Hard to back up many keys ❌

### Solution:

👉 Use **one root (Master Key)** to generate **infinite keys**

---

# 🧬 2. Starting Point (Seed)

We assume you already have:

```text
512-bit seed (from BIP-39 mnemonic)
```

Example (shortened):

```text
5eb00bbddcf069084889a8ab91555681...
```

---

# 🔑 3. Master Key Generation (Root of Everything)

We convert seed → master key using:

```text
HMAC-SHA512(
   key = "Bitcoin seed",
   data = seed
)
```

---

## 🔍 Output Split

```text
64 bytes total
```

Split into:

```text
Left 32 bytes  → Master Private Key (k_master)
Right 32 bytes → Chain Code (c_master)
```

---

## ✅ Example (simplified)

```text
k_master:
xprv9s21ZrQH143K...

c_master:
873dff81c02f5256...
```

---

# ❓ Why Do We Need Chain Code?

Private key alone is NOT enough.

👉 Chain code acts like:

* Extra randomness
* A "derivation engine input"

Without it:

* You cannot safely generate child keys

---

# 🌳 4. Master Key = Root of Tree

```text
m  ← master node
```

Everything starts here:

```text
m
 ├── child 0
 ├── child 1
 ├── child 2
```

---

# 🔄 5. Child Key Derivation (CKD Function)

To create child keys:

```text
HMAC-SHA512(
   key = parent_chain_code,
   data = parent_key + index
)
```

---

## 📦 Output:

```text
Left 32 bytes  → Child Private Key
Right 32 bytes → Child Chain Code
```

---

# 🧪 6. Real Example (Step-by-Step)

## Step 1 — Start with Master:

```text
k_master = ABC123...
c_master = XYZ789...
```

---

## Step 2 — Generate First Child (index = 0)

```text
Child 0:
HMAC-SHA512(
   key = c_master,
   data = k_master + 0
)
```

---

## Output:

```text
k_0 = new_private_key_0
c_0 = new_chain_code_0
```

---

## Step 3 — Generate Next Child

```text
Child 1:
HMAC-SHA512(
   key = c_master,
   data = k_master + 1
)
```

---

## Output:

```text
k_1 = new_private_key_1
c_1 = new_chain_code_1
```

---

# 🔁 7. Recursive Tree (Important)

Each child can generate more children:

```text
m
 ├── m/0
 │     ├── m/0/0
 │     ├── m/0/1
 │
 ├── m/1
       ├── m/1/0
```

👉 This is why it's called **Hierarchical Deterministic**

---

# 📌 8. Derivation Paths (How Wallets Organize Keys)

Standard format:

```text
m / purpose' / coin_type' / account' / change / address_index
```

---

## 🔥 Example:

```text
m/44'/0'/0'/0/0
```

| Level | Meaning       |
| ----- | ------------- |
| m     | master        |
| 44'   | standard      |
| 0'    | Bitcoin       |
| 0'    | account       |
| 0     | receiving     |
| 0     | first address |

---

# 🪙 9. Multi-Coin Wallets

Same master key → multiple coins

| Coin     | Path             |
| -------- | ---------------- |
| Bitcoin  | m/44'/0'/0'/0/0  |
| Ethereum | m/44'/60'/0'/0/0 |
| Solana   | m/44'/501'/0'/0  |

👉 Only `coin_type` changes

---

# 🔐 10. Hardened vs Non-Hardened Keys

## Hardened (with `'`)

```text
m/44'
```

* Uses private key only
* More secure
* Cannot derive from public key

---

## Non-Hardened

```text
m/44/0
```

* Can derive from public key
* Useful for watch-only wallets

---

# ⚙️ 11. Extended Keys (xprv / xpub)

Master and child keys are stored as:

```text
xprv → extended private key
xpub → extended public key
```

---

## Example:

```text
xprv9s21ZrQH143K...
xpub661MyMwAqRbc...
```

---

## Why useful?

* xpub → generate addresses without private key
* Used in:

  * wallets
  * explorers
  * watch-only apps

---

# 🏦 12. How Wallet Uses Master & Child Keys

### Wallet stores ONLY:

```text
Seed phrase
```

---

### Internally it does:

```text
Seed
 ↓
Master Key (k_master, c_master)
 ↓
Derivation Path
 ↓
Child Private Key
 ↓
Public Key
 ↓
Address
```

---

# 📬 13. Real End-to-End Flow

```text
Seed
 ↓
HMAC-SHA512 → Master Key + Chain Code
 ↓
m/44'/60'/0'/0/0
 ↓
Child Private Key
 ↓
Public Key (ECC)
 ↓
Address (Ethereum / Bitcoin)
```

---

# 🧠 14. Mental Model

```text
Master Key = Root of tree
Chain Code = Growth rule
Child Keys = Branches
Addresses = Leaves
```

---

# ⚠️ 15. Security Insights

* 🔥 Master key must NEVER be exposed
* 🔥 Chain code is equally important
* 🔥 Seed = controls everything
* 🔥 Anyone with seed → full wallet access

---

# 🚀 16. Why This System is Powerful

* One seed → infinite wallets
* Easy backup (only 12 words)
* Multi-coin support
* Deterministic (same seed → same wallet)

---

# 📚 Standards

* BIP-32 → Master & Child Keys
* BIP-39 → Seed generation
* BIP-44 → Path structure

---

# ✅ Final Summary

* Master key is created from seed using HMAC-SHA512
* Chain code enables secure child derivation
* Child keys are generated recursively
* Entire wallet system is built from this structure

👉 Everything comes from ONE root

---

⭐ If this helped, consider starring the repo!
