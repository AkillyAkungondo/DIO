import prompt from "prompt";
import chalk from "chalk";

const qrCodePrompt= [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link que deseja gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QR Code (1 - Normal) ou (2 - Terminal)"),
        pattern : /^[1-2]+$/,
        message: chalk.red.italic("Escolha somente as opções 1 ou 2"),
        required: true,
    }
]


export default qrCodePrompt;