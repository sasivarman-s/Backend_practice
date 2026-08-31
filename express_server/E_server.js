const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("sasivarman's server by express.js")
})
app.get("/home", (req, res) => {
    res.send(" this sasivarman's home page")
})
app.get("/plan", (req, res) => {
    res.send("sasivarman's weekly/monthly plans are availible!")
})
app.get("/admin", (req, res) => {
    res.send("this is admin page \n enter you details:...")
})
const PORT = 2008
app.listen(PORT, () => {
    console.log("Api is listening");
})