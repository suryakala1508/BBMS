const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true }, // match frontend
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Receiver", receiverSchema);
