const request = require("./utils/request");

setInterval(async () => {
  await request("https://surveyheart.com/response");
}, 500);
