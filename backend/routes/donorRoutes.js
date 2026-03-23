const express = require("express");
const router = express.Router();
const { addDonor, searchDonors } = require("../controllers/donorController");

router.post("/add", addDonor);
router.get("/search", searchDonors);

module.exports = router;
