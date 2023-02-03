const axios = require("axios");
require("dotenv").config();

const apicall = (req, res) => {
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=43.60&longitude=1.44&hourly=temperature_2m`
    )
    .then((response) => res.status(200).send(response.data))

    .catch((error) => {
      console.error(error.message);
      res.sendStatus(500);
    });
};

module.exports = { apicall };
