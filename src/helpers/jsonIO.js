const createMember = require("../entities/member") 

function readJSONData(data){

    const parsedData = JSON.parse(data)

    parsedData.forEach(member => {
        member = createMember(member.alias,member.level)
    });
    return parsedData
}

module.exports = readJSONData