function createMember(alias, level) {
    const aliasType = typeof alias;
    const levelType = typeof level;

    if (aliasType == "string" && levelType == "number") {
        console.log("HEllo");
        return {
            alias,
            level,
        };
    } else {
        console.log("Error");
    }

    return {
        alias,
        level,
    };
}

module.exports = createMember;
