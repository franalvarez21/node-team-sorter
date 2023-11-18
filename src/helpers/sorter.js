/* Class that defines a sorter object. This sorter object 
will perform a variety of operations on the registered teams data.*/
export default class Sorter{
    constructor(size, members){
        this.teamSize = size
        this.members = members
        this.teamsArray = []
    }

    /*this function sets the custom size that teams might have,
    although this value can change on certain teams depending
    on the demand.*/
    setTeamSize = (size) => teamSize=size

    
    executeSorting = ()=>{

    }
    getTeamsArray = () => this.teamsArray
    getTeamAt = (index) => this.teamsArray[index]
    showTeams = () => console.log(this.teamsArray)
    addPersonToSorter = (person) => this.members.push(person)
    
}