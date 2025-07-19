
async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTER === "true")
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if (process.env.LOWERCASE_LETTER === "true")
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");

    if (process.env.NUMBER === "true")
        permitted.push(..."0123456789");

    if (process.env.SPECIAL_CHARACTER === "true")
        permitted.push(..."!@#$%^&*()_+[]{}|;:,.<>?");

    return permitted;
}

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH
    characters = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
       
    }

    return password;
}


export default handle;