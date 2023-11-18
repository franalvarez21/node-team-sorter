const jsonIO = require("../../src/helpers/jsonIO")
const jsonData = JSON.stringify(
    [
    {alias:"Alfa",level:0},
    {alias:"Beta",level:5},
    {alias:"Omega",level:10}
    ]
)
console.log("datos creados en JSON: "+jsonData)

expect(jsonIO(jsonData)[0].alias).toBe("Alfa")



