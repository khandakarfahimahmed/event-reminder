const express = require("express");
const router = express.Router();
const eventingController = require("./controllers/eventing.controller");

router.get("/", eventingController.getEventInfo);
router.post("/", eventingController.postEventInfo);

module.exports = router;
