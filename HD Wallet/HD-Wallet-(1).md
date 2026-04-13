# HD Wallet (Hierarchical Deterministic Wallet)

> **One seed phrase → Infinite wallets.** Everything is derived mathematically — no need to store multiple private keys.

**Standards:** `BIP-32` `BIP-39` `BIP-44`  
**Used in:** MetaMask · Phantom · Trust Wallet · Ledger · Trezor

---

<details>
<summary><strong>💡 What is an HD Wallet?</strong> — core concept</summary>

<br>

An HD Wallet generates **unlimited private/public key pairs** from a single root seed — instead of managing a separate private key for every address.

```
Seed Phrase → Wallet 1 → Address A
           → Wallet 2 → Address B
           → Wallet 3 → Address C
```

All wallets come from the same seed.  
Lose the seed → lose everything. Keep the seed → recover everything.

| Approach | Keys to manage |
|----------|---------------|
| ❌ Traditional wallet | One private key per address |
| ✅ HD Wallet | One seed phrase → all addresses |

</details>

---

<details>
<summary><strong>❓ Why do we need HD Wallets?</strong> — motivation and problems solved</summary>

<br>

**1. Easy backup**  
Only one seed phrase to store. Recover all wallets anytime from that single phrase.

**2. Deterministic**  
Same seed → same wallets, always, in the same order. No randomness after the seed is created.

**3. Multiple accounts**  
Generate as many wallets as you need without storing extra private keys.

**4. Real-world adoption**  
Used in MetaMask, Phantom, Trust Wallet, Ledger, Trezor — virtually every modern wallet.

</details>

---

<details>
<summary><strong>📄 Bitcoin proposals behind HD Wallets</strong> — BIP-32, BIP-39, BIP-44</summary>

<br>

HD Wallets were introduced via **Bitcoin Improvement Proposals (BIPs)** — community standards that evolve the protocol.

| BIP | Name | What it defines |
|-----|------|----------------|
| **BIP-32** | HD Wallets | Tree-based key generation from a master key |
| **BIP-39** | Mnemonic phrases | 12 or 24 word human-readable seed backup |
| **BIP-44** | Derivation paths | Standard path format across all wallets |

> BIP-32 is the foundation. BIP-39 makes the seed human-readable. BIP-44 standardises the path structure.

</details>

---

<details>
<summary><strong>⚙️ How HD Wallet works — step by step</strong> — seed → master key → child keys</summary>

<br>

```
Entropy → Mnemonic → 512-bit Seed → Master Key → Child Keys
```

**Step 1 — Generate entropy**  
Random bits are created (128–256 bits depending on 12 or 24 words).

**Step 2 — Create seed phrase (BIP-39)**  
Entropy is mapped to a human-readable word list.  
Example: `apple tunnel river flame...`

**Step 3 — Derive 512-bit seed**  
The mnemonic is run through **PBKDF2** hashing (with optional passphrase) to produce a 512-bit binary seed.

**Step 4 — Generate master key**  
```
Seed → HMAC-SHA512 → Master Private Key + Chain Code
```

**Step 5 — Derive child keys**  
Child keys are derived at specific paths using the master key + chain code.  
Each path index produces a new unique wallet.

</details>

---

<details>
<summary><strong>🧭 Derivation path explained</strong> — what m/44'/60'/0'/0/0 means</summary>

<br>

**Ethereum example:**
```
m / 44' / 60' / 0' / 0 / 0
```

| Segment | Value | Meaning |
|---------|-------|---------|
| `m` | root | Master key — start of the tree |
| `44'` | purpose | BIP-44 standard |
| `60'` | coin type | Ethereum = 60, Bitcoin = 0, Solana = 501 |
| `0'` | account | First account (increment for account 1, 2…) |
| `0` | change | `0` = external (receiving), `1` = internal (change) |
| `0` | address index | First address — increment to get next wallet |

**Solana example:**
```
m / 44' / 501' / 0' / 0'
```

> The `'` (apostrophe) means **hardened derivation** — extra security; child keys cannot be traced back to the parent even if a child key leaks.

**Getting the next address:**  
Change only the last index:
```
m/44'/60'/0'/0/0  → Address 1
m/44'/60'/0'/0/1  → Address 2
m/44'/60'/0'/0/2  → Address 3
```

</details>

---

<details>
<summary><strong>✅ Key features</strong> — what makes HD Wallets powerful</summary>

<br>

| Feature | Detail |
|---------|--------|
| Single backup | One seed phrase recovers all wallets |
| Deterministic | Same seed = same wallets, every time |
| Unlimited wallets | Generate as many addresses as needed |
| Tree structure | Parent → child key hierarchy (BIP-32) |
| Secure derivation | HMAC-SHA512 used at every level |
| Cross-wallet portability | BIP standards work across all wallets |

</details>

---

<details>
<summary><strong>⚠️ Security rules — never break these</strong></summary>

<br>

> ❌ **Never share your seed phrase** — not with support teams, not with websites, not with apps.  
> Anyone with your seed phrase has full access to every wallet derived from it.

- Write the seed phrase on **paper**, store it **offline**. Screenshots and cloud notes are risky.
- For large amounts, use a **hardware wallet** (Ledger, Trezor) — the seed never leaves the device.
- **Never type** your seed phrase into any website or browser extension you didn't install yourself.

> ✅ You can share your **public key / wallet address** freely — that is safe and necessary for receiving funds.

</details>

---

<details>
<summary><strong>🌍 Real-world usage</strong> — where HD Wallets are used today</summary>

<br>

**Software wallets**
- MetaMask (Ethereum, EVM chains)
- Phantom (Solana)
- Trust Wallet (multi-chain)
- Rainbow (Ethereum)

**Hardware wallets**
- Ledger
- Trezor

**Also used in**
- Web3 authentication systems
- DeFi protocols
- dApps that create wallets per user

</details>

---

## Quick reference

```
Entropy (random bits)
    ↓  BIP-39
Mnemonic (12/24 words)
    ↓  PBKDF2
512-bit Seed
    ↓  HMAC-SHA512
Master Private Key + Chain Code
    ↓  BIP-44 path
m/44'/60'/0'/0/0  →  Wallet address 1
m/44'/60'/0'/0/1  →  Wallet address 2
```

| Term | One-line definition |
|------|-------------------|
| Seed phrase | 12/24 words that represent your master secret |
| Entropy | Random bits used to generate the seed phrase |
| Chain code | Extra random data mixed in during key derivation |
| Hardened key (`'`) | Child key that can't be reverse-traced to parent |
| Derivation path | Address of a key inside the HD tree |

---

> Learning Web3 fundamentals step by step — hashing → encryption → public/private keys → **HD Wallets** ✓