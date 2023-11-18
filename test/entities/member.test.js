const members = require('../../src/entities/member')

const member = members.createMember(0, "juan", 0)

test('create member with name and seniority', () => {
    expect(member.id).toBe(0);
    expect(member.alias).toBe("juan");
    expect(member.level).toBe(0);
});
