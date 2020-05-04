const usersV1 = require("./v1/users")
module.exports = {
    v1: (app, base) => {
        app.get(`${base}/users/topLevels`, usersV1.topLevels)
    }
}