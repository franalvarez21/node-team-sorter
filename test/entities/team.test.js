const members = require('../../src/entities/member')
const Team = require('../../src/entities/team')

const memberA = members.createMember("juan", 0)
const memberB = members.createMember("fran", 2)

const team = new Team();

test('show level names', () => {
    team.addMember(memberA);
    team.addMember(memberB);
    expect(team.getWeight()).toBe(2);
    team.removeMember(0);
    expect(team.getWeight()).toBe(1);
});
