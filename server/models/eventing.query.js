const models = require("./eventing.model");

const Eventing = models.EventingList;

exports.getEventingList = async () => {
  try {
    const eventinglist = await Eventing.find({});
    return eventinglist;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting EventingList from DB.");
  }
};

exports.postOne = async (info) => {
  try {
    const data = {
      title: info.title,
      date: info.date,
      venue: info.venue,
    };

    const newEventList = await Eventing.create(data);
    return newEventList;
  } catch (err) {
    console.log(err);
    throw new Error("Error adding new Event details to DB.");
  }
};
