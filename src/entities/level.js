export function getNameLevel(level) {
    switch (level) {
        case 0:
            level = "Junior";
            break;
        case 1:
            level = "Mid";
            break;
        case 2:
            level = "Senior";
            break;
        default:
            console.log(
                "El usuario no cumple el criterio, se asignará nivel Junior"
            );
            level = "Junior";
    }
    return level;
}

module.exports = getNameLevel;
