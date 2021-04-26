const tablaMultiplicar = (multiplicando, multiplicador) => {
    if (multiplicador === undefined) multiplicador = 10;
    let table = [];
    for (let i = 0; i <= multiplicador; i++) {
        table.push(multiplicando * i);
    }
    return table;
};
module.exports = tablaMultiplicar;
