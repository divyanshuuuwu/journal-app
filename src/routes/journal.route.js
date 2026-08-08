const express = require("express")
const router = express.Router()
const journalController = require("../controllers/journal.controller")
const {authMiddleware} = require("../middlewares/auth.middleware")



router.post("/create",authMiddleware,journalController.createJournal)
router.get("/showall", authMiddleware,journalController.showJournal)
router.get("/showbyid/:id", authMiddleware,journalController.showById)
router.put("/update/:id", authMiddleware, journalController.updateJournal)
router.delete("/delete/:id", authMiddleware,journalController.deleteJournal)






module.exports = router