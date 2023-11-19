const fs = require("fs-extra");
const path = require("path");
const filePath = path.join(__dirname, "../example.json");

/* Class that defines a sorter object. This sorter object 
will perform a variety of operations on the registered teams data.*/
class Sorter {
    constructor(size, members) {
        this.teamSize = size;
        this.members = members;
        this.teams = [];
    }

    /*this function sets the custom size that teams might have,
    although this value can change on certain teams depending
    on the demand.*/
    setTeamSize = (size) => (this.teamSize = size);

    executeSorting = () => {
        //First, people will be sorted by experience
        //The array of memebers must be ordered by less to more experience
        this.members.sort((m1, m2) => m1.getWeight() - m2.level.getWeight());

        //Then there will be created as many arrays for teams as the teamSize property indicates
        this.teams = Array.from({ length: this.teamSize }, () => []);

        /*Once the teams are created, this loop will perform a sorting process in 
        which the ordered members will be allocated on the lesser weight team respectively  */
        let listIndex = 0;
        let weights; //this variable will be used to get the array of weights respectively from each array team on teams.
        for (let i = 0; i < this.members.length; i++) {
            weights = this.teams.map((x) => x.reduce((y) => y.getWeight(), 0));
            listIndex = Math.min(...weights); // Obtaining the index value by it's mod operator, indicating the position
            teams[listIndex].push(this.members[i]); // adding the value of the position of the team list for every team.
        }
    };

    getTeams = () => this.teams;
    getTeam = (index) => this.teams[index];
    showTeams = () => console.log(this.teams);
    addMember = (person) => {
        this.members.push(person);
        this.members.sort((m1, m2) => m1.level - m2.level);
    };
    addMembers = (persons) => {
        this.members.push(...persons);
        this.members.sort((m1, m2) => m1.level - m2.level);
    };

    importMember = (filepath, member) => {
        function readJson(filePath) {
            const content = fs.readFileSync(filePath, "utf-8");
            return JSON.parse(content);
        }

        //
        this.addMember(member);
    };

    exportMember = () => {
        // TODO
    };

    // importMember -- le pasamos el nombre del json y que use jsonIO y que vaya haciendo add member de todos los miembros-
    // -- export teams -- pasamos nombre de archivo y nos exporte un json con la estructura del example.
    //
}

module.exports = Sorter;
