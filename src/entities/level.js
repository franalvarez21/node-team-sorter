function getNameLevel(level) {
    switch (level) {
        case 3:
            level = "senior";
            break;
        case 2:
            level = "mid";
            break;
        default:
            level = "junior";
    }
    return level;
}

module.exports = 
{
    getNameLevel
};
