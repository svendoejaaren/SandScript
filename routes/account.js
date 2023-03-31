const express = require("express")
const router = express.Router()

const accountController = require("../controllers/account.js")

router.post("/uitloggen", accountController.uitloggen)

router.get("/inloggen", accountController.inloggen)

router.post("/inloggen", accountController.inloggen1)

router.post("/update", accountController.update)

router.get("/account", accountController.account)

module.exports = router