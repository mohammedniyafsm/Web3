# 🌱 HD Wallet Mnemonic Generation — BIP-39 Deep Dive

> A step-by-step breakdown of how a 12-word mnemonic phrase is generated from scratch — from raw entropy to final words.

---

## Overview

This note covers the internal mechanics of **BIP-39 mnemonic generation**, the standard used by wallets like MetaMask and Phantom.

**Flow:**
Random Entropy (128 bits)
↓
SHA-256 Hash
↓
Take first 4 bits  ← checksum
↓
Append → 132 bits
↓
Split into 11-bit chunks
↓
Map each chunk → word
↓
12-word mnemonic

---

## Step 1 — Generate random entropy

Start with **128 bits** of true randomness.
10101100 11001010 11100011 01101001 ...  (128 bits total)

> Security depends entirely on this randomness being genuine.

| Entropy size | Word count |
|---|---|
| 128 bits | 12 words |
| 256 bits | 24 words |

---

## Step 2 — Apply SHA-256

Hash the full 128-bit entropy block **all at once**.
SHA256(entropy) → 256-bit hash
Output: 11010110 01101001 10101010 ...

> SHA-256 is NOT applied bit-by-bit — the entire block is hashed in one operation.

---

## Step 3 — Extract checksum

Take the **first N bits** of the SHA-256 hash as the checksum.
Checksum length = ENT / 32
128 / 32 = 4 bits
Hash starts with: 11010110...
Checksum = 1101

---

## Step 4 — Append checksum to entropy
128 bits + 4 bits = 132 bits
[128-bit entropy] + [1101]

**Why?** Without a checksum, any 12 random words would appear valid. The checksum lets wallets detect:
- Typos
- Wrong words
- Wrong word order

---

## Step 5 — Split into 11-bit chunks
132 ÷ 11 = 12 chunks
10101100101
11001010101
00011101010
...

**Why 11 bits?** Because `2^11 = 2048`, which matches the BIP-39 wordlist size exactly.

---

## Step 6 — Convert chunks to decimal

Each 11-bit chunk is read as a binary number:
10101100101 → 1381

---

## Step 7 — Map to BIP-39 wordlist

Each decimal index maps to a word in the official 2048-word list:

| Index | Word |
|---|---|
| 0 | abandon |
| 1 | ability |
| 1381 | (some word) |

---

## Mini example (end-to-end)
Entropy:    101010101010...
SHA-256:    11010110...
Checksum:   1101
Final bits: 1010101010...1101
Split + map:
[10101010101] → 1365 → "orange"
[01101010100] →  852 → "table"
...
Result: "orange table ..."

---

## Key clarifications

| Misconception | Reality |
|---|---|
| Hex is used in the process | Hex is display only — binary is what matters |
| SHA-256 is applied bit-by-bit | SHA-256 hashes the full block at once |
| We extract hex characters | We extract **bits** from the hash |
| Same entropy = different words | Process is **deterministic** — same entropy always → same words |

---

## Summary
Binary → Numbers → Words

The mnemonic is just a human-readable encoding of binary data. The checksum embedded in the final word(s) ensures the phrase is valid and detectable if corrupted.

This is the foundation of:
- HD Wallets (BIP-32/44)
- MetaMask
- Phantom
- Any BIP-39 compliant wallet

---

## References

- [BIP-39 specification](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [BIP-39 wordlist](https://github.com/trezor/python-mnemonic/blob/master/src/mnemonic/wordlist/english.txt)

---

*Part of a Web3 cryptography deep dive series.*