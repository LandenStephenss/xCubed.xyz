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
    fetchSettings: async (req, res) => {
        var guildID = req.query.id;
        res.json("settings")
    },

}