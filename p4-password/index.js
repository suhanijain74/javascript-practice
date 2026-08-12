const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercasechar = "abcdefghijklmnopqrstuvwxyz";
const symbolchar = "@#*_!$&%";
const numberschar = "1234567890";

function passwordgenerator(passwordlength, uppercase, lowercase, symbol, numbers) {

    let allowed = "";
    let password = "";

    allowed += uppercase ? uppercasechar : "";
    allowed += lowercase ? lowercasechar : "";
    allowed += symbol ? symbolchar : "";
    allowed += numbers ? numberschar : "";

    console.log(allowed);

    for (let i = 0; i < passwordlength; i++) {
        const randomIndex = Math.floor(Math.random() * allowed.length);
        password += allowed[randomIndex];
    }

    return password;
}

const passwordlength = 12;
const uppercase = true;
const lowercase = true;
const symbol = true;
const numbers = true;

const generatedPassword = passwordgenerator(
    passwordlength,
    uppercase,
    lowercase,
    symbol,
    numbers
);

console.log(`Generated password: ${generatedPassword}`);