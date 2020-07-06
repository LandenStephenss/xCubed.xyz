const usersV1 = require("./v1/users");
const Webhook = require("./v1/webhook");
module.exports = {
  v1: (app, base) => {
    app.get(`${base}/users/topLevels`, usersV1.topLevels);
    app.get(`${base}/users/fetchLevels`, usersV1.fetchLevels);
    app.post(`${base}/webhook/github`, Webhook.github);

  },
};
