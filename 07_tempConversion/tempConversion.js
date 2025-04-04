const convertToCelsius = function (temp) {
  const cel = (temp - 32) * (5 / 9);
  if (cel % 1 === 0) {
    return cel;
  } else {
    return Number(cel.toFixed(1));
  }
};

const convertToFahrenheit = function (temp) {
  const fahr = temp * 1.8 + 32;
  if (fahr % 1 === 0) {
    return fahr;
  } else {
    return Number(fahr.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
