const ed = require("@noble/ed25519");

async function main () {

    // Generate private key
    const privatekey = ed.utils.randomPrivateKey();

    // Convert message to Uint8Array
    const message = new TextEncoder().encode("Hello This is ed25519");

    // Generate public key
    const publickey = await ed.getPublicKeyAsync(privatekey);

    // Sign message
    const signature = await ed.signAsync(message, privatekey);

    // Verify signature
    const valid = await ed.verifyAsync(signature, message, publickey);

    console.log("Is signature valid?", valid);
}

// Call the function
main();