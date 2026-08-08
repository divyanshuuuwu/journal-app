const express = require("express")
const router = express.Router()
const journalController = require("../controllers/journal.controller")
const {authMiddleware} = require("../middlewares/auth.middleware")



router.post("/create",authMiddleware,journalController.createJournal)







module.exports = router