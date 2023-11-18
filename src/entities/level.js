function getNameLevel(level) {
    switch (level) {
        case 0:
            level = "junior";
            break;
        case 1:
            level = "mid";
            break;
        case 2:
            level = "senior";
            break;
        default:
            console.log(
                "El usuario no cumple el criterio, se asignará nivel Junior"
            );
            level = "junior";
    }
    return level;
}

module.exports = 
{
    getNameLevel
};
