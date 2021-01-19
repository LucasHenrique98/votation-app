const formatt = Intl.NumberFormat('pt-BR');

function Formatter(number) {
  return formatt.format(number);
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue.replace('.', ',') + '%';
}

export { Formatter, formatPercentage };
