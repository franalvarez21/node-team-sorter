const createMember = require('../../src/entities/member')
const Team = require('../../src/entities/team')

const memberA = createMember("juan", 0)
const memberB = createMember("fran", 2)

const team = new Team([]);

test('show level names', () => {
    team.addMember(memberA);
    team.addMember(memberB);
    expect(team.getWeight()).toBe(2);
    team.removeMember("juan");
    expect(team.getWeight()).toBe(2);
});
