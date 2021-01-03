//Implementando o CSS automatizado
const fs = require('fs');
const contentFilePath = './_implement.scss';
let contentString = ``;

// const directions = { right:'direita',left:'esquerda',top:'topo',bottom:'abaixo' }
// for (let direction of [ 'right','left','top','bottom']){
//     for (let index = 1; index <= 100;index++){
//         contentString += `.p-${directions[direction]}-${index}px{padding-${direction}:${index}px !important;}`;
//         contentString += `.p-${directions[direction]}-${index}rem{padding-${direction}:${index}rem !important;}`;
//     }
// }

for(let index = 0; index <= 100;index++){
    contentString += `.raio_borda-${index}px,.border_radius-${index}px{border-radius:${index}px !important};`
    contentString += `.raio_borda-${index}-relativo-altura,.border_radius-${index}-relativo-altura{border-radius:${index}vh !important};`
    contentString += `.raio_borda-${index}-porcento,.border_radius-${index}-porcento{border-radius:${index}% !important};`
}

function writeFile(filePath,fileContent){
    fs.writeFileSync(contentFilePath, contentString)
}

function readFile(filePath){
    return fs.readFileSync(filePath, 'utf-8');
}

writeFile(contentFilePath, contentString)
const fileBuffer = readFile(contentFilePath);

if(fileBuffer == contentString){
    console.log({ status:200,description:"The content of file is equal to the expected" })
}else{
    console.log({ status:400, description:"The content of file is not equal to the expected" });
}