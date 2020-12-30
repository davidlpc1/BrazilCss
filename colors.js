const colorsObject = {
    'transparente':'transparent',
    'preto':'#000',
    'branco':'#fff',
    'cinza-escuro':'#595959',
    'cinza':'grey',
    'cinza-claro':'#d3d3d3',
    'branco-pouco_escuro':'#eee',
    'rosa-claro':'pink',
    'rosa':'#ff1493',
    'rosa-escuro':'#c71585',
    'vermelho-claro':'#dc143c',
    'vermelho':'red',
    'vermelho-escuro':'#8b0000',
    'laranja-claro':'tomato',
    'laranja':'orange',
    'laranja-escuro':'#ff4500',
    'amarelo-claro':'#ffee58',
    'amarelo':'#ff0',
    'amarelo-escuro':'#ffd600',
    'verde-claro':'#7fff00',
    'verde':'#0f0',
    'verde-escuro':'#006400',
    'azul-claro':'#00bfff',
    'azul':'#00f',
    'azul-escuro':'navy',
    'azul-link':'#11f',
    'dourado-claro':'#ffda07b4',
    'dourado-escuro':'#ffda0754',
    'marrom':'#8b4513',
    'marrom-claro':'#af5412'
}
const colorsNames = Object.keys(colorsObject)

const colorsFunction = (callback) => {
    for(let colorIndex = 0;colorIndex < colorsNames.length;colorIndex++){
        const nameOfColor = colorsNames[colorIndex]
        const valueOfColor = colorsObject[nameOfColor]
        callback({ nameOfColor,valueOfColor })
    }
}

module.exports = {
    colorsObject,
    colorsNames,
    colorsFunction
}