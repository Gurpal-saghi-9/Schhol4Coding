// 5. Simple Password Checker (Fixed Attempts)
let correctPassword = "guru123";
let maxAttempts = 3;
let attempt = 0;

while (attempt < maxAttempts) {
    let input = prompt(`🔐 Enter your password (Attempt ${attempt + 1} of ${maxAttempts}):`);

    if (input === correctPassword) {
        alert("✅ Access Granted. Welcome!");
        break;
    } else {
        alert("❌ Incorrect password.");
        attempt++;
    }

    if (attempt === maxAttempts) {
        alert("🚫 Account locked! Too many failed attempts.");
    }
}
