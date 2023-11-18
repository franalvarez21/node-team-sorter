export function createMember(alias, level) {
    const member = {
        alias,
        level,
    };
    return member;
}

const user = createMember("juan", "junior");
