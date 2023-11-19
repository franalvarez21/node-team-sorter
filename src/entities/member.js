
function createMember(alias, level) {
  
    if ( typeof alias === "string" && typeof level === "number") {
        return {
            alias,
            level,
        };
    } else {
        throw new Error(
            ""
        );
    }

    return {
        alias,
        level,
    };
}

module.exports = createMember;
