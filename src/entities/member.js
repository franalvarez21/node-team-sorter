export function createMember(id, alias, level) {
    const member = {
        id,
        alias,
        level,
    };
    return member;
}

export function deleteMember(id) {
    //TODO
}

module.exports = createMember;
