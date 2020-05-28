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


var redirect = "https://discord.com/api/oauth2/authorize?client_id=626630111004852224&redirect_uri=https%3A%2F%2Fxcubed.xyz%2Fapi%2Fv1%2Fcallback&response_type=code&scope=identify%20email%20guilds"

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


    var user = await fetch("https://discordapp.com/api/users/@me", {
        headers: {
            Authorization: `${req.token_type} ${req.access_token}`
        }
    }).then((res) => res.json())
    res.cookie("access_token", req.access_token)
    res.cookie("refresh_token", req.refresh_token)
    res.redirect("/")
})

router.get('/state', async (req, res) => {
    var user = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${req.cookies.access_token}`
        }
    }).then(res => res.json())
    var guilds = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
            Authorization: `Bearer ${req.cookies.access_token}`
        }
    }).then(res => res.json())
    if(user.message === undefined) {
        return res.json({user: {...user, guilds}, loggedIn: true});
    } else {
        return res.json({message: user.message, loggedIn: false})
    }
});

router.get("/logout", (req, res) => {
    res.cookie("access_token", null)
    res.cookie("refresh_token", null)
    res.redirect("/")
})

module.exports = router;
