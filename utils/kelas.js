const choice = [
  "63b603eca01aaf76c35e46ce",
  "63b603eca01aaf76c35e46cf",
  "63b603eca01aaf76c35e46d0",
  "63b603eca01aaf76c35e46d1",
  "63b603eca01aaf76c35e46d2",
  "63b603eca01aaf76c35e46d3",
  "63b603eca01aaf76c35e46d4",
  "63b603eca01aaf76c35e46d5",
  "63b603eca01aaf76c35e46d6",
  "63b603eca01aaf76c35e46d7",
  "64b39f64fc389910bc5e58cc",
  "64b39f64fc389910bc5e58cd",
  "64b39f64fc389910bc5e58ce",
  "64b39f64fc389910bc5e58cf",
  "64b39f64fc389910bc5e58d0",
  "64b39f64fc389910bc5e58d1",
  "64b39f64fc389910bc5e58d2",
  "64b39f64fc389910bc5e58d3",
  "64b39f64fc389910bc5e58d4",
  "64b39f64fc389910bc5e58d5",
];

const kelas = () => {
  return choice[Math.round(Math.random() * (choice.length - 1))];
};

module.exports = kelas;
