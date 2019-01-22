function cipherMessage(message, key) {
  let secret = "";
  key = key % 95;

  if (message === "") {
    return "Please add message to cipher";
  }

  for (let i = 0; i < message.length; i++) {
    let asciiChar = message[i].charCodeAt(0);
    if (asciiChar < 32 || asciiChar > 126) {
      return "Please input only valid characters";
    }
    let adjustedAscii = asciiChar + parseInt(key, 10);
    if (adjustedAscii > 126) {
      adjustedAscii -= 95;
    }
    if (adjustedAscii < 32) {
      adjustedAscii += 95;
    }
    secret += String.fromCharCode(adjustedAscii);
  }

  return secret;
}

function cipher() {
  const message = document.getElementById("message").value;
  const key = document.getElementById("key").value;
  if (key === "") {
    document.getElementById("keyMessage").textContent =
      "Please input a number to complete cipher";
  } else {
    document.getElementById("keyMessage").textContent = "";
  }

  const msg = cipherMessage(message, key);
  document.getElementById("Encrypted Output").textContent = msg;
}

function deCipher() {
  const message = document.getElementById("secret").value;
  const key = document.getElementById("key").value;

  const msg = cipherMessage(message, -key);
  document.getElementById("Decrypted Output").textContent = msg;
}
