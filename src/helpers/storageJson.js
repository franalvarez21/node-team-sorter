const fs = require("fs-extra");
const path = require("path");

const filePath = path.join(__dirname, "members.json");

function 

    writeJSON(filePath, member);



function writeJSON(filePath, members) {
    const content = JSON.stringify(taskList);
    fs.writeFileSync(filePath, content, "utf-8");
}

module.exports = {
    readJSON,
    writeJSON,
};
