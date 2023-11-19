const createMember = require("../src/entities/member");
const Team = require('../src/entities/team');

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
        this.members.sort((m1, m2) => m1.level - m2.level);

        //Then there will be created as many arrays for teams as the teamSize property indicates
        this.teams = Array.from({ length: this.teamSize }, () => new Team([]));

        /*Once the teams are created, this loop will perform a sorting process in 
        which the ordered members will be allocated on the lesser weight team respectively  */
        let listIndex = 0;
        let weights; //this variable will be used to get the array of weights respectively from each array team on teams.
        for (let i = 0; i < this.members.length; i++) {
            weights = this.teams.map((y) => y.getWeight());
            listIndex = weights.indexOf(Math.min(...weights)); // Obtaining the index value by it's mod operator, indicating the position
            this.teams[listIndex].addMember(this.members[i]); // adding the value of the position of the team list for every team.
        }
    };

    getTeams = () => this.teams;
    getTeam = (index) => this.teams[index];
    showTeams = () => console.log(this.teams);

    getMembers = () => this.members;

    addMember = (person) => {
        if (this.members.map(e => e.alias).indexOf(person.alias) == -1)
        {
            this.members.push(person);
        }
    };

    addMembers = (persons) => {
        this.members.push(...persons);
    };
}
module.exports = Sorter;
