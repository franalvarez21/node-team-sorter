const createMember = require("../src/entities/member");
const Sorter = require("../src/sorter");
const path = require("path");
const filePath = path.join(__dirname, "example.json");

test("show level names", () => {
    const sorter = new Sorter(0, []);

    const memberA = createMember("juan", 0);
    const memberB = createMember("fran", 2);
    const memberC = createMember("fran2", 1);
    const memberD = createMember("fran3", 2);
    const memberE = createMember("fran4", 1);
    const memberF = createMember("fran5", 2);
    const memberG = createMember("fran6", 1);
    const memberH = createMember("fran7", 2);
    const memberI = createMember("fran8", 1);

    sorter.setTeamSize(3);
    sorter.executeSorting();
    sorter.addMember(memberA);
    sorter.addMember(memberB);
    sorter.addMember(memberC);
    sorter.addMember(memberD);
    sorter.addMember(memberE);
    sorter.addMember(memberF);
    sorter.addMember(memberG);
    sorter.addMember(memberH);
    sorter.addMember(memberI);
    expect(sorter.getTeams().length).toBe(3);
});

test("Process example.json", () => {
    const sorter = new Sorter(0, []);
    sorter.importMembers(filePath);
    expect(sorter.getMembers().length).toBe(11);
});
