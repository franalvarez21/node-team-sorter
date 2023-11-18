const members = require('../../src/entities/member')

const member = members.createMember("juan", 0)

test('create member with name and seniority', () => {
    expect(member.alias).toBe("juan");
    expect(member.level).toBe(0);
});
