const choice = ["63bb75b4ab7b5a7633b93ca7", "63bb75b4ab7b5a7633b93ca8"];

const kelamin = () => {
  return choice[Math.round(Math.random() * (choice.length - 1))];
};

module.exports = kelamin;
