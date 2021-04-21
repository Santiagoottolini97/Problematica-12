const tablaMultiplicar = (multiplicando, multiplicador) => {
  if (multiplicador === undefined) return multiplicador = 10;

  for (i = 0; i <= multiplicador; i++)
    return multiplicando + " x", i + " = ", multiplicando * i;
};
module.exports = tablaMultiplicar;