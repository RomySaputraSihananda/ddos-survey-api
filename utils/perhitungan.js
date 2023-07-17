const perhitungan = () => {
  return [
    Math.floor(Math.random() * (80 - 25 + 1) + 25).toString(),
    Math.floor(Math.random() * (80 - 25 + 1) + 25).toString(),
    Math.floor(Math.random() * (80 - 25 + 1) + 25).toString(),
  ];
};

module.exports = perhitungan;
