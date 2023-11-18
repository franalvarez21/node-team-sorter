class Team {
    constructor(members) {
        this.members = members;
    }

    addMember(members) {
        this.members.push(members);
    }

    removeMember(alias) {
        const index = this.members.indexOf(alias);
        this.members.splice(index, 1);
    }

    getWeight() {
        let sum = 0;

        this.members.forEach(member => {
            sum += member.level;
        });

        return sum;
    }
}

module.exports = Team;
