const level = require("../../src/entities/level");

test("show level names", () => {
    expect(level.getNameLevel(3)).toEqual("senior");
    expect(level.getNameLevel(2)).toEqual("mid");
    expect(level.getNameLevel(1)).toEqual("junior");
});
