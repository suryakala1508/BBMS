const Donor = require("../models/Donor");

exports.addDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    res.status(201).json(donor);
  } catch (err) {
    res.status(500).json({ message: "Failed to add donor" });
  }
};

exports.searchDonors = async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: "Query parameter 'q' is required" });
  }
  try {
    const donors = await Donor.find({
      bloodType: { $regex: new RegExp(query, "i") },
    });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ message: "Search error" });
  }
};
