function createMember(alias, level) {
    class member {
        alias;
        level;
    }
    return member;
}

module.exports = {
    createMember,
};
