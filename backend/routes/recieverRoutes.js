const express = require("express");
const router = express.Router();
const { addReceiver, searchReceivers } = require("../controllers/recieverController");

router.post("/add", addReceiver);
router.get("/search", searchReceivers);

module.exports = router;
