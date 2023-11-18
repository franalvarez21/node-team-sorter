const level = require('../../src/entities/level')

test('show level names', () => {
    expect(level.getNameLevel(2)).toBe("senior");
    expect(level.getNameLevel(1)).toBe("mid");
    expect(level.getNameLevel(0)).toBe("junior");
});
