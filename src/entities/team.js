class Team {
    constructor(members) {
        this.members = members;
    }

    addMember(member) {
        if (
            !member.alias &&
            !member.level &&
            this.members.indexOf(member) != -1
        ) {
            throw new Error("This isn't a team!");
        }

        this.members.push(member);
    }

    getMembers = () => {
        return this.members;
    };

    removeMember = (alias) => {
        this.members = this.members.filter((member) => member.alias != alias);
    };

    getWeight = () => {
        let sum = 0;

        this.members.forEach((member) => {
            sum += member.level;
        });

        return sum;
    };
}

module.exports = Team;
