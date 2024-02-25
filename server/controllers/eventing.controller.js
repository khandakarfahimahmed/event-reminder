const models = require("../models/eventing.query");

exports.getEventInfo = async (req, res) => {
  try {
    const EventInfo = await models.getEventingList();
    res.status(200).json(EventInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.postEventInfo = async (req, res) => {
  try {
    const { title, date, venue } = req.body;
    const postedInfo = await models.postOne({
      title,
      date,
      venue,
    });
    res.status(200).json(postedInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
