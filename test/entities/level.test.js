const level = require('../../src/entities/level')

test('show level names', () => {
    expect(level.getNameLevel(2)).toEqual("senior");
    expect(level.getNameLevel(1)).toEqual("mid");
    expect(level.getNameLevel(0)).toEqual("junior");
});
