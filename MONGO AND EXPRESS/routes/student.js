const express = require("express")
const router = express.Router()
const {getReqHandler,patchReqHandler,
    deleteReqHandler,putReqHandler,
    postReqHandler}= require("../controllers/students.js")

router.get("/",getReqHandler)
router.post("/",postReqHandler)

router.route("/:id")
.patch(patchReqHandler)
.delete(deleteReqHandler)
.put(putReqHandler)

module.exports= router
