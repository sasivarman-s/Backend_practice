const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("this is express.js server")
})
const PORT = 5000
app.listen(PORT, () => {
    console.log("Api is listening");
})