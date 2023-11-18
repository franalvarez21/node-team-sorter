const createMember = require('../../src/entities/member')

const member = createMember("juan", 0)

test('create member with name and seniority', () => {
    expect(member.alias).toEqual("juan");
    expect(member.level).toBe(0);
});
