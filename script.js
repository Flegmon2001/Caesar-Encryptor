function shiftChar(c, shift) {
    if (c >= 'a' && c <= 'z') {
        return String.fromCharCode((c.charCodeAt(0) - 97 + shift + 26) % 26 + 97);
    }
    if (c >= 'A' && c <= 'Z') {
        return String.fromCharCode((c.charCodeAt(0) - 65 + shift + 26) % 26 + 65);
    }
    return c;
}

function transform(text, shift) {
    let result = "";
    for (let c of text) {
        result += shiftChar(c, shift);
    }
    return result;
}

function encrypt() {
    let shift = parseInt(document.getElementById("shift").value);
    let text = document.getElementById("text").value;

    let encrypted = transform(text, shift);
    let decrypted = transform(encrypted, -shift);

    document.getElementById("encrypted").innerText = encrypted;
    document.getElementById("decrypted").innerText = decrypted;
}
