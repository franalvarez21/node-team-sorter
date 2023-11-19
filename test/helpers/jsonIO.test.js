const path = require("path");
const filePath = path.join(__dirname, "test.json");
const readJSONData = require("../../src/helpers/jsonIO");
const jsonData = JSON.stringify({
    members: [{ alias: "user", level: 0 }],
});

test("Check JSON read function", () => {
    expect(JSON.stringify(readJSONData(filePath))).toEqual(jsonData);
});
