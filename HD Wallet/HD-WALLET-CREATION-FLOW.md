# HD Wallet Creation — Full Workflow with Examples

> How a wallet is built step by step: from random bits → seed phrase → master key → public key → address

---

<details>
<summary><strong>Step 1 — Entropy (random bits)</strong></summary>

<br>

Your wallet starts with **pure randomness**. The device generates 128 bits of random data.

```
Entropy (hex):
a3f9c2d871b04e56c9a12f3807e6b549

Entropy (binary):
10100011 11111001 11000010 11011000
01110001 10110000 01001110 01010110
...
```

> 128 bits = 2¹²⁸ possible combinations = 340,282,366,920,938,463,463,374,607,431,768,211,456 possibilities.  
> No two wallets will ever share the same entropy.

</details>

---

<details>
<summary><strong>Step 2 — Mnemonic seed phrase (BIP-39)</strong></summary>

<br>

The 128 bits of entropy are converted into **12 human-readable words** using the BIP-39 wordlist (2048 words total). Each word encodes 11 bits.

```
128 bits of entropy
        ↓
   BIP-39 wordlist
        ↓
12 words (mnemonic)
```

**Example seed phrase:**
```
argue   tornado   inquiry   fossil
embark  cigar     symptom   neutral
anchor  jungle    captain   ivory
```

| Word # | Word | Bits encoded |
|--------|------|-------------|
| 1 | argue | 11 bits |
| 2 | tornado | 11 bits |
| ... | ... | ... |
| 12 | ivory | 7 bits + 4 checksum |

> **This is the ONLY thing you need to back up.**  
> Write it on paper. Store offline. Never share.

</details>

---

<details>
<summary><strong>Step 3 — 512-bit seed via PBKDF2</strong></summary>

<br>

The 12-word mnemonic is stretched into a **512-bit binary seed** using PBKDF2-HMAC-SHA512 (run 2048 times).

```
Input:   "argue tornado inquiry fossil embark cigar..."
         + optional passphrase (default: empty string)
         + salt: "mnemonic" + passphrase

Process: PBKDF2-HMAC-SHA512
         2048 rounds (makes brute force very slow)

Output:  512-bit seed (128 hex characters)
```

**Example seed (512 bits = 128 hex chars):**
```
5eb00bbddcf069084889a8ab9155568165
f5c453ccb85e70811aaed6f6da5fc19a5a
c40b389cd370d086206dec8aa6c43daea6
290f0acdf4db5d3e08e6efe3e434b7
```

> The seed is never stored. It is re-derived fresh from the mnemonic every time.

</details>

---

<details>
<summary><strong>Step 4 — Master private key + chain code</strong></summary>

<br>

The 512-bit seed is passed through **HMAC-SHA512** (with the key `"Bitcoin seed"`). The 512-bit output is split in half:

```
512-bit seed
     ↓
HMAC-SHA512 ("Bitcoin seed")
     ↓
512-bit output — split in half
```

| Half | Name | Size | Purpose |
|------|------|------|---------|
| Left 256 bits | Master private key | 32 bytes | Signs transactions |
| Right 256 bits | Chain code | 32 bytes | Extra entropy for child key derivation |

**Example:**
```
HMAC output (128 hex chars):
4b03d6fc340455b363f51020ad3ecca4
f0850280cf436c70c727923f6db46c3e

Master private key (left half):
4b03d6fc340455b363f51020ad3ecca4f0850280cf436c70c727923f6db46c3e

Chain code (right half):
f0850280cf436c70c727923f6db46c3e4b03d6fc340455b363f51020ad3ecca4
```

> The chain code prevents child keys from being traced back to their parent,  
> even if one child private key is exposed.

</details>

---

<details>
<summary><strong>Step 5 — Public key + wallet address</strong></summary>

<br>

The master private key is used to derive a public key using **elliptic curve cryptography (secp256k1)**.

```
Master private key (32 bytes)
        ↓
   secp256k1 ECC
        ↓
Public key (65 bytes uncompressed, or 33 bytes compressed)
```

**Ethereum address derivation:**
```
Public key (65 bytes)
        ↓
  Keccak-256 hash (32 bytes)
        ↓
  Take last 20 bytes
        ↓
  Prefix with "0x"
        ↓
  Ethereum address (42 characters)
```

**Example:**
```
Private key:
4b03d6fc340455b363f51020ad3ecca4f0850280cf436c70c727923f6db46c3e

Public key (compressed):
02d0de0aaeaefad02b8bdc8a01a1b8b11c696bd3d66a2c5f10780d95b7df42645c

Ethereum address:
0x71C7656EC7ab88b098defB751B7401B5f6d8976F
```

> The private key must stay secret.  
> The public key and address are safe to share — they are needed to receive funds.

</details>

---

<details>
<summary><strong>Step 6 — Derived child wallets (BIP-44)</strong></summary>

<br>

From the master key, an infinite tree of child keys is derived using **BIP-44 paths**. Each path produces a completely different private key, public key, and address.

**BIP-44 path format:**
```
m / purpose' / coin_type' / account' / change / address_index
```

| Segment | Ethereum | Solana |
|---------|----------|--------|
| `m` | root | root |
| `44'` | BIP-44 | BIP-44 |
| coin type | `60'` | `501'` |
| account | `0'` | `0'` |
| change | `0` | `0'` |
| index | `0, 1, 2...` | `0, 1, 2...` |

**Generated addresses (all from 1 seed phrase):**

```
m/44'/60'/0'/0/0  →  0x71C7656EC7ab88b098defB751B7401B5f6d8976F  (ETH #1)
m/44'/60'/0'/0/1  →  0xDc3f45aC2E08f3F4f7B4D0DEaAF0E2d1D4e8f6b9  (ETH #2)
m/44'/60'/0'/0/2  →  0x8Ba1f109551bD432803012645Ac136ddd64DBA72  (ETH #3)

m/44'/501'/0'/0'  →  7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV  (SOL #1)
```

> To get the next address in MetaMask: increment the last number (0 → 1 → 2...)  
> All addresses share one seed phrase. Seed phrase exposed = all wallets exposed.

</details>

---

## Full flow summary

```
[Random device]
      ↓
  128 bits entropy
  (e.g. a3f9c2d871b04e56...)
      ↓ BIP-39
  12-word mnemonic
  ("argue tornado inquiry fossil...")
      ↓ PBKDF2-HMAC-SHA512 × 2048
  512-bit seed
  (5eb00bbddcf06908...)
      ↓ HMAC-SHA512 ("Bitcoin seed")
  Master private key    +    Chain code
  (256 bits)                 (256 bits)
      ↓ secp256k1
  Master public key
  (65 bytes)
      ↓ Keccak-256 → last 20 bytes → 0x prefix
  Master address
  (0x71C7656EC7...)
      ↓ BIP-44 paths
  m/44'/60'/0'/0/0  →  ETH address 1
  m/44'/60'/0'/0/1  →  ETH address 2
  m/44'/60'/0'/0/2  →  ETH address 3
  m/44'/501'/0'/0'  →  SOL address 1
```

---

## Key terms quick reference

| Term | What it is | Size |
|------|-----------|------|
| Entropy | Random bits, start of everything | 128 bits |
| Mnemonic | 12 words derived from entropy | 12 words |
| Seed | Binary seed from mnemonic via PBKDF2 | 512 bits |
| Master private key | Left half of HMAC output | 256 bits |
| Chain code | Right half of HMAC output | 256 bits |
| Public key | Derived from private key via secp256k1 | 33–65 bytes |
| Address | Last 20 bytes of Keccak-256(public key) | 20 bytes / 42 chars |
| Derivation path | Address in the HD key tree | e.g. `m/44'/60'/0'/0/0` |

---

## Security rules

| Rule | Why |
|------|-----|
| Never share seed phrase | Anyone with it has all your wallets |
| Store seed phrase offline | Screenshots and cloud = hackable |
| Use hardware wallet for large amounts | Seed never leaves the device |
| Sharing a public key is safe | Needed to receive funds |
| Sharing a private key exposes one wallet | Seed exposes all wallets |

---

> Web3 journey: hashing → encryption → public/private keys → **HD wallet creation** ✓