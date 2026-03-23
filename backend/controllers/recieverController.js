const Receiver = require("../models/Reciever");

exports.addReceiver = async (req, res) => {
  try {
    const receiver = await Receiver.create(req.body);
    res.status(201).json(receiver);
  } catch (err) {
    res.status(500).json({ message: "Failed to add receiver" });
  }
};

exports.searchReceivers = async (req, res) => {
  const query = req.query.q?.toLowerCase();
  try {
    const receivers = await Receiver.find({
      bloodType: { $regex: new RegExp(query, "i") },
    });
    res.json(receivers);
  } catch (err) {
    res.status(500).json({ message: "Search error" });
  }
};
