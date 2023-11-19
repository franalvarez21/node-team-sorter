const fs = require("fs-extra");

function createMember(alias, level) {
    const aliasType = typeof alias;
    const levelType = typeof level;

    if (aliasType == "string" && levelType == "number") {
        return {
            alias,
            level,
        };
    } else {
        throw new Error(
            "Ha habido un error - No se han insertado correctamente los campos"
        );
    }

    return {
        alias,
        level,
    };
}

module.exports = createMember;
