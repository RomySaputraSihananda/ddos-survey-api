const generateHead = (nama, kelamin, umur, kelas, [push, sit, back]) => {
  return {
    form_id: "64b39fee9a4f05109558632c",
    email: "",
    responses: [
      {
        question_id: "63b603eca01aaf76c35e46cc",
        type: "LONG_TEXT",
        text: nama,
      },
      {
        question_id: "63bb75b4ab7b5a7633b93ca6",
        type: "MULTIPLE_CHOICE",
        choice: kelamin,
      },
      {
        question_id: "63bb75b4ab7b5a7633b93ca9",
        type: "SHORT_TEXT",
        text: umur,
      },
      {
        question_id: "63b603eca01aaf76c35e46cd",
        type: "MULTIPLE_CHOICE",
        choice: kelas,
      },
      {
        question_id: "63b603eca01aaf76c35e46d8",
        type: "SHORT_TEXT",
        text: push,
      },
      {
        question_id: "63b603eca01aaf76c35e46d9",
        type: "SHORT_TEXT",
        text: sit,
      },
      {
        question_id: "63b603eca01aaf76c35e46da",
        type: "SHORT_TEXT",
        text: back,
      },
    ],
    submit_time: Math.floor(
      Math.random() * (999999999999999 - 111111111111 + 1) + 111111111111
    ),
    storage_used: 0,
  };
};

module.exports = generateHead;
