const cerosIzq = (num, totalLength) => {
  var numStr = num.toString();
  var numCeros = totalLength - numStr.length;
  for (var i = 1; i <= numCeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};

module.exports = cerosIzq;
