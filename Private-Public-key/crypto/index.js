const crypto = require('crypto');
const fs = require('fs');


// ----------- PRIVATE KEY & PUBLIC KEY GENERATIONS -----------------
// -------------ENCRYPT USING PRIVVATE KEY and DECYPT USING PUBLIC KEY -----------------
// ---------------------------------------------------------------------


const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },

  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

console.log("Public key ")
console.log(publicKey);
console.log("Private key");
console.log(privateKey);

// ----------- ENCRYPT DATA USING Private key -----------------

// const message = new TextEncoder().encode("Hello World");
// console.log("message",message)

const message1 = Buffer.from("Hello World");
console.log("Buffer message",message1.toString("base64"))
console.log(" ");

const encrypt = crypto.privateEncrypt(privateKey,message1);
console.log("Encrypted message");
console.log(encrypt.toString("base64"));
console.log(" ");

// ----------- Decrypt DATA USING Public key -----------------

const decrypted = crypto.publicDecrypt(publicKey,encrypt);
console.log("Decrypted:");
console.log(decrypted.toString());
console.log(" ");







