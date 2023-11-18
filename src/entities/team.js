class Team {
    constructor(members) {
        this.members = members;
    }

    addMember(members) {
        this.members.push(members);
    }

    removeMember(alias) {
        this.members = this.members.filter(member => member.alias != alias);
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
