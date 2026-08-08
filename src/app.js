const express = require("express")
const app = express()
const authRoute = require("./routes/auth.route")
const journalRoute = require("./routes/journal.route")
const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.use(express.json())




app.use("/auth" , authRoute)
app.use("/journals", journalRoute )


















module.exports = app
