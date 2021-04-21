const division = (dividendo, divisor) => {
  if  ( divisor === 0)  {
    return 'No se puede dividir por 0';
  } else  {
    return dividendo / divisor;
  }
}
module.exports = division



