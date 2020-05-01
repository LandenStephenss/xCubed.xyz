const {
    encode,
    stringify
} = require("querystring");
const {
    Router
} = require("express");
const fetch = require("node-fetch")
const config = require("../../../config.json");
const router = Router();
const btoa = require("btoa")


var redirect = "https://discordapp.com/api/oauth2/authorize?client_id=626630111004852224&redirect_uri=https%3A%2F%2Flocalhost%2Foauth%2Fcallback&response_type=code&scope=identify%20email%20guilds"

router.get("/login", (req, res) => {
    res.redirect(redirect);
})

router.get("/callback", async (req, res) => {
    if (!req.query.code) {
        return res.status(400).send('Missing code querystring')
    }
    const creds = btoa(`626630111004852224:${config.clientSecret}`)
    var req = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${req.query.code}&redirect_uri=${redirect}`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${creds}`
        }
    }).then((res) => res.json())
    console.log(req)


    var user = await fetch("https://discordapp.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${req.access_token}`
        }
    }).then((res) => res.json())
    req.session.user = {
        ...user,
        isAdmin: config.admins.includes(user.id),
    }
    res.redirect("/")
})

router.get('/state', (req, res) => {
    return res.json(req.session.user || null);
});

module.exports = router;