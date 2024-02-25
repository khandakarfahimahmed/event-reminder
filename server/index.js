const express = require("express");
const BodyParser = require("body-parser");
const Router = require("./router");
const connectDb = require("./models/eventing.model");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(BodyParser.json());
app.use(cors());
app.use(Router);

(async function () {
  try {
    await connectDb;
    console.log("Connected to DB!");
    app.listen(PORT, () => {
      console.log(`[server]: Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
