const createMember = require('../../src/entities/member')

const member = createMember("juan", "junior")

test('create member with name and seniority', () => {
    expect(member.alias).toBe("juan");
    expect(member.level).toBe("junior");
});
