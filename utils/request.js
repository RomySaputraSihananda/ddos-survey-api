const axios = require("axios");

const perhitungan = require("./perhitungan");
const nama = require("./nama");
const kelamin = require("./kelamin");
const umur = require("./umur");
const kelas = require("./kelas");

const generateHead = require("./header");

let i = 1;
const request = async (url) => {
  const header = generateHead(
    nama(),
    kelamin(),
    umur(),
    kelas(),
    perhitungan()
  );

  console.log(
    `( ${i} ) try attack with name [==${header.responses[0].text}==]`
  );

  await axios
    .post(url, header)
    .then((response) => {
      if (response.data.status === 200)
        return console.log(
          `response(${response.data.status}) : [==attack=success==]\n`
        );
      return console.log(
        ` response(${response.data.status}) : [==attack=failed==]\n`
      );
    })
    .catch((error) => {
      `connection error : [==attack=failed==]\n`;
    });
  i++;
};

module.exports = request;
