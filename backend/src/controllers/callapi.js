const axios = require("axios");

const browse = async () => {
  try {
    const response = await axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=43.60&longitude=1.44&hourly=temperature_2m`
      )
      .then((res) => res.status(200).send(response.data));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = browse;
