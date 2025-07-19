import chalk from "chalk";
import prompt from "prompt";
import qrCodePrompt from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode(){
 prompt.get(qrCodePrompt, handle)

 prompt.start();
}

export default createQRCode;