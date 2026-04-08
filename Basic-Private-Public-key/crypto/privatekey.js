const crypto = require('crypto');
const fs = require('fs');


// ----------- PRIVATE KEY & PUBLIC KEY GENERATIONS -----------------
// -------------ENCRYPT USING PUBLIC KEY and DECYPT USING PRIVATE KEY -----------------
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

// ----------- ENCRYPT DATA USING Public key -----------------

// const message = new TextEncoder().encode("Hello World");
// console.log("message",message)

const message = Buffer.from("Using Public encrypt");
console.log("Buffer message",message.toString("base64"))
console.log(" ");

const encrypt = crypto.publicEncrypt(publicKey,message);
console.log("Encrypted message");
console.log(encrypt.toString("base64"));
console.log(" ");

// ----------- Decrypt DATA USING Public key -----------------

const decrypted1 = crypto.privateDecrypt(privateKey,encrypt);
console.log("Decrypted:");
console.log(decrypted1.toString());
console.log(" ");
