import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err,result){
    if(err){
        console.error("Erro ao obter os dados do QR Code");
        return
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green.italic("QR Code gerado com sucesso!"));
        console.log(qrcode);
    })
}

export default handle;


