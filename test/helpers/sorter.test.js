const members = require('../../src/entities/member')
const Sorter = require('../../src/helpers/sorter')

const sorter = new Sorter(0, [])

const memberA = members.createMember("juan", 0)
const memberB = members.createMember("fran", 2)
const memberC = members.createMember("fran2", 1)
const memberD = members.createMember("fran3", 2)
const memberE = members.createMember("fran4", 1)
const memberF = members.createMember("fran5", 2)
const memberG = members.createMember("fran6", 1)
const memberH = members.createMember("fran7", 2)
const memberI = members.createMember("fran8", 1)

test('show level names', () => {
    sorter.setTeamSize(3)
    sorter.executeSorting()
    sorter.addMember(memberA)
    sorter.addMember(memberB)
    sorter.addMember(memberC)
    sorter.addMember(memberD)
    sorter.addMember(memberE)
    sorter.addMember(memberF)
    sorter.addMember(memberG)
    sorter.addMember(memberH)
    sorter.addMember(memberI)
    expect(sorter.getTeams().length).toBe(3)
});
