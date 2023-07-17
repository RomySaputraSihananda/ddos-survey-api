const umur = () => {
  return Math.floor(Math.random() * (20 - 15 + 1) + 15).toString();
};

module.exports = umur;
