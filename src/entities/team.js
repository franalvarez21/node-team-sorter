class Team {
    constructor(members) {
        this.members = members;
    }

    addMember(member) {
        members.push(member);
    }

    removeMember(alias) {
        const index = array.indexOf(alias);
        this.members.splice(index, 1);
    }

    getWeight() {
        return this.members.reduce((a, b) => {
            a + b, 0;
        });
    }
}

module.exports = Team;
