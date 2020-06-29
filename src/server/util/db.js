const { MongoClient } = require("mongodb");
const { MongoURL } = require("../../../config.json");

module.exports = async () => (
    module.exports = await MongoClient
    .connect(MongoURL, {useNewUrlParser: true})
    .then((conn) => conn.db("website"))
    .catch((e) => {
        console.log("Failed to connect to MongoDB", e.message)
    })
)