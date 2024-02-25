const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/eventing_db";

mongoose.connect(URI);

const eventingSchema = new mongoose.Schema({
  title: { type: String, required: true },

  date: { type: Date, required: true },
  venue: { type: String, required: true },
});

const EventingList = mongoose.model("eventingList", eventingSchema);

module.exports = { EventingList };
