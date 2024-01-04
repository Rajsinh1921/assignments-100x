const fs = require("fs").promises;

async function processFile() {
  let content = "";

  try {
    const data = await fs.readFile("./RemoveSpaces.txt", "utf8");
    console.log(data);
    content = data;
  } catch (err) {
    console.error(err);
  }

  const newContent = content.replace(/\s+/g, " ").trim();

  try {
    await fs.writeFile("./RemoveSpaces.txt", newContent);
    console.log("File updated successfully.");
  } catch (err) {
    console.error(err);
  }
}

// Call the async function
processFile();
