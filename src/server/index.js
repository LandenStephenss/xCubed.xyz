process.env.NODE_ENV = process.argv.includes('--dev') ? 'development' : 'production';
const express = require("express");
const config = require("../../config.json")
const Routers = require("./routers")
const bodyParser = require("body-parser")
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const app = express();
app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`)
    if(process.env.NODE_ENV === "development") {
        require("./webpack")
    }
});
app.use(bodyParser.json())
// Static Pages
app.use("/", express.static(__dirname + "/build"));
app.use("/static", express.static(__dirname + "/../app/assets"))
// Redirects
app.use("/support", (req, res) => res.redirect("https://discord.gg/kQUpSgw"));
app.use("/donate", (req, res) => res.redirect("https://patreon.com/olykir"))
// i need to setup the database connection here i guess


app.set('trust proxy', 1);
app.use(session({
  secret: 'tjos os a test',
  name: 'xCubedIsCool',
  resave: false,
  saveUninitialized: true,

  cookie: {
    secure: process.env.NODE_ENV === 'production'
  }
}))



app.use("/oauth", Routers.OAuth)
app.get('*', (request, response) => {
    response.sendFile(`${__dirname}/build/index.html`);
  });