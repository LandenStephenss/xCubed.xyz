const {
    MongoClient
} = require("mongodb");
const {
    MongoURL
} = require("../../../../config.json");
var userDatabase;
var guildDatabase;

MongoClient.connect(MongoURL, (err, data) => {
    if (err) {
        console.log(err)
    }
    userDatabase = data.db("xCubed").collection("users");
    guildDatabase = data.db("xCubed").collection("guilds")
})
module.exports = {
    topLevels: async (req, res) => {
        var arrayOfDb = await userDatabase.find().toArray()
        var SortedLB = arrayOfDb.sort((a, b) => b.levels.xp - a.levels.xp).slice(0, 100)
        res.json({
            users: SortedLB
        })
    },
    fetchLevels: async (req, res) => {
        const Levels = new Array().concat({
            level: 0,
            xp: 1000
        });
        for (var i = 0; i < 100; i++) {
            Levels.push({
                level: i + 1,
                xp: Math.floor(Levels[i].xp * 1.35)
            });
        }
        res.json(Levels)
    }
}