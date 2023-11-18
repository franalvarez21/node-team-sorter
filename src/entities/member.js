export function createMember(id, alias, level) {
    class member {
        id;
        alias;
        level;
    }
    return member;
}

module.exports = createMember;
