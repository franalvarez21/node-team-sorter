const createMember = require("../entities/member");
const fs = require("fs-extra");

function readJSONData(data) {
    return JSON.parse(fs.readFileSync(data, "utf-8"));
}

module.exports = readJSONData;
