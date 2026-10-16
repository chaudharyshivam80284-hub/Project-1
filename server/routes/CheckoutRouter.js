const CheckoutRouter = require("express").Router()
const { authAdmin, authSuperAdmin, authBuyer } = require("../middleware/auth")
const {
    createRecord,
    getRecord,
    getUserRecord,
    getSingleRecord,
    updateRecord,
    deleteRecord
} = require("../controllers/CheckoutController")

CheckoutRouter.post("", authBuyer, createRecord)
CheckoutRouter.get("", authAdmin, getRecord)
CheckoutRouter.get("/user/:_id", authBuyer, getUserRecord)
CheckoutRouter.get("/:_id", authBuyer, getSingleRecord)
CheckoutRouter.put("/:_id", authAdmin, updateRecord)
CheckoutRouter.delete("/:_id", authSuperAdmin, deleteRecord)

module.exports = CheckoutRouter

