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

    // 🔐 generate key equation
    // key = shift * 3 + 5
    let key = `(${shift} * 3 + 5)`;

    document.getElementById("encrypted").innerText = encrypted;
    document.getElementById("key").innerText = key;
}

function decodeKey() {
    let keyExpr = document.getElementById("keyInput").value;

    try {
        // evaluate key safely (simple case)
        let keyValue = Function("return " + keyExpr)();

        // reverse equation: shift = (key - 5) / 3
        let shift = (keyValue - 5) / 3;

        document.getElementById("recoveredShift").innerText = shift;
        document.getElementById("shift").value = shift;

    } catch (e) {
        document.getElementById("recoveredShift").innerText = "Invalid key";
    }
}
