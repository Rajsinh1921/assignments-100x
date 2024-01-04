const fs = require("fs");

const contenet = fs.readFile("./a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(data);
});

const content = ", Jay Swaminarayan";
fs.appendFile("./a.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
});
